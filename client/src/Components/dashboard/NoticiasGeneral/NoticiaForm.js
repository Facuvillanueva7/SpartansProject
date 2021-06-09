import React, { useEffect, useState } from "react";
import { db, storage, timestamp } from "../../../config/firebase";
const NoticiaForm = (props) => {
  const initialStateValues = {
    Title: "",
    Body: "",
    Copete: "",
    Fuente: "",
    Date: Date.now(timestamp),
    Fecha: "",
  };
  const [values, setValues] = useState(initialStateValues);
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const types = ["image/png", "image/jpeg"];
  const noticiaImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setFile(null);
      throw new Error("incorrect_file_type");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const obj = values;
    obj[name] = value;
  };
  const addOrEditNoticia = async (noticiaObject) => {
    try {
      if (props.currentId)
        return await db
          .collection("Noticias-general")
          .doc(props.currentId)
          .update(noticiaObject);
      await db
        .collection("Noticias-general")
        .doc()
        .set(noticiaObject)
        .then(() => {
          console.log("Document successfuly written");
        });
    } catch (error) {
      console.error("Error writing document:", error);
    }
    setIsLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const NoticiaImg = storage
    .ref(`Noticias-general-images/${file.name}`)
    .put(file);
    NoticiaImg.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setIsLoading(progress !== 100);
      },
      () => {},
      async () => {
        const url = await storage
          .ref("Noticias-general-images")
          .child(file.name)
          .getDownloadURL();
        addOrEditNoticia({ ...values, NoticiaImg: url });
      }
    );
  };
  const getNoticiaById = async (id) => {
    if (!id) return;
    const doc = await db.collection("Noticias-general").doc(id.toString()).get();
    setValues({ ...doc.data() });
  };
  useEffect(() => {
    if (props.currentId !== "") {
      getNoticiaById(props.currentId);
    }
  }, [props.currentId]);
  return (
    <div>
      <form onSubmit={handleSubmit} className="card card-body border-primary">
        <div className="form-group input-group">
          <input
            type="text"
            className="form-control"
            placeholder="titulo de la noticia"
            value={values.Title}
            name="Title"
            onChange={handleInputChange}
          />
          <div className="form-group input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Copete de la noticia"
              value={values.Copete}
              name="Copete"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group input-group">
          <textarea
            type="text"
            value={values.Body}
            name="Body"
            placeholder="Cuerpo de la noticia"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            rows="3"
            className="form-control"
            placeholder="Fuente de la noticia"
            name="Fuente"
            value={values.Fuente}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="fecha de publicacion"
            name="Fecha"
            value={values.Fecha}
            onChange={handleInputChange}
          />
        </div>

        <input
          type="file"
          placeholder="Sube una imagen"
          onChange={noticiaImgHandler}
        />

        <button className="btn btn-primary btn-block" disabled={isLoading}>
          {props.currentId === "" ? "Save" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default NoticiaForm;
