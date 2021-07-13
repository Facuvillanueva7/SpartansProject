import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import BarraNavegacion from '../Views/BarraNavegacion';
import Footer from '../Views/Footer';
//CSS
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/fonts/font-awesome.min.css";
import "../../assets/fonts/ionicons.min.css";
import "../../assets/css/Article-Clean.css";
import "../../assets/css/Article-Dual-Column.css";
import "../../assets/css/Article-List.css";
import "../../assets/css/Footer-Dark.css";
import "../../assets/css/Social-Icons.css";



const NoticiasFutbol = () => {
  const [noticiasFutbol, setNoticiasFutbol] = useState([]);
  const [CurrentId, setCurrentId] = useState();
  const getNoticiasFutbol = async () => {
    await db
      .collection("Noticias-Futbol")
      .orderBy("Date", "desc")
      .limit(4)
      .onSnapshot((querysnapshot) => {
        const docs = [];
        querysnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setNoticiasFutbol(docs);
      });
  };
  useEffect(() => {
    getNoticiasFutbol();
  });
  const getNoticiaFutbolIndividual = async () => {
    try {
      if (CurrentId) {
        const data = await db
          .collection("Noticias-futbol")
          .doc(CurrentId)
          .get();
          console.log(data.id)
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <BarraNavegacion/>
      <div
        className="article-list"
        style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
      >
        <div className="container">
          <div className="row article">
            {noticiasFutbol.map((noticia) => (
              <div className="col-sm-6 col-md-3 item" key={noticia.id}>
                {noticia.NoticiaFutbolImg && (
                  <img
                    className="img-fluid"
                    src={noticia?.NoticiaFutbolImg}
                    alt="sample"
                    onClick={getNoticiaFutbolIndividual}
                  />
                )}
                <h3 className="text-white name" onClick={() => setCurrentId}>
                  {noticia.Title}
                </h3>
                <p className="text-white-50 description">
                  {noticia.Body.substring(0, 100)}
                </p>
                <Link to={"./noticiafutbol/" + noticia.id}>
                  <p>Leer Mas</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default NoticiasFutbol;
