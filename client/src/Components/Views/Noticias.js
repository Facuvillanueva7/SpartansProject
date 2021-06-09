import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const getNoticias = async () => {
    await db
      .collection("Noticias-general")
      .orderBy("Date", "desc")
      .onSnapshot((querysnapshot) => {
        const docs = [];
        querysnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setNoticias(docs);
      });
  };
  useEffect(() => {
    getNoticias();
  });
  return (
    <>
      <div>
        <div className="col-md-4 p-2">
          {noticias.map((noticia) => (
            <div className="card-mb-1" key={noticia.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  {noticia.NoticiaImg && (
                    <img
                      src={noticia?.NoticiaImg}
                      style={{ width: "50%" }}
                      alt="sample"
                    />
                  )}
                  <h4>{noticia.Title}</h4>
                  <p>{noticia.Body}</p>
                  <p>{noticia.Copete}</p>
                  <p>{noticia.Description}</p>
                  <p>{noticia.Fuente}</p>
                  <p>{noticia.Fecha}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Noticias;
