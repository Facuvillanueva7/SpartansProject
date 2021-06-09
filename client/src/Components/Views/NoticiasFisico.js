import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
const NoticiasFisico = () => {
  const [noticiasFisico, setNoticiasFisico] = useState([]);
  const getNoticiasFisico = async () => {
    await db
      .collection("Noticias-Fisico")
      .orderBy("Date", "desc")
      .onSnapshot((querysnapshot) => {
        const docs = [];
        querysnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setNoticiasFisico(docs);
      });
  };
  useEffect(() => {
    getNoticiasFisico();
  });
  return (
    <>
      <div>
        <div className="col-md-4 p-2">
          {noticiasFisico.map((noticia) => (
            <div className="card-mb-1" key={noticia.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  {noticia.NoticiaFisicoImg && (
                    <img
                      src={noticia?.NoticiaFisicoImg}
                      style={{ width: "50%" }}
                      alt="sample"
                    />
                  )}
                  <h4>{noticia.Title}</h4>
                  <div className="container-">
                    <p>{noticia.Body}</p>
                    <p>{noticia.Copete}</p>
                    <p>{noticia.Description}</p>
                    <p>{noticia.Fuente}</p>
                    <p>{noticia.Fecha}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoticiasFisico;
