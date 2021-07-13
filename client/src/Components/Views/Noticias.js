import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import BarraNavegacion from "../Views/BarraNavegacion";
import Footer from "../Views/Footer";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [currentId, setCurrentId] = useState("");
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
  const getNoticiaIndividual = async (noticiaObject) => {
    try {
      if (currentId) {
        const data = await db
          .collection("Noticias-general")
          .doc(currentId)
          .get();
        console.log(data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <BarraNavegacion />
      <div
        className="article-list"
        style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
      >
        <div className="container">
          <div className="row article">
            {noticias.map((noticia) => (
              <div className="col-sm-6 col-md-3 item" key={noticia.id}>
                {noticia.NoticiaImg && (
                  <img
                    className="img-fluid"
                    src={noticia?.NoticiaImg}
                    alt="sample"
                    onClick={getNoticiaIndividual}
                  />
                )}
                <h3
                  className="text-white name"
                  onClick={() => setCurrentId(noticia.id)}
                >
                  {noticia.Title}
                </h3>
                <p>{noticia.Body.substring(0, 100)}</p>
                <Link to={"./noticia/" + noticia.id}>
                  <p>Leer Mas</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Noticias;
