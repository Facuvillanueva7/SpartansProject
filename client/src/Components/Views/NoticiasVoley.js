import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import BarraNavegacion from '../Views/BarraNavegacion';
import Footer from '../Views/Footer'
//CSS
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/css/Article-Clean.css";
import "../../assets/css/Article-Dual-Column.css";
import "../../assets/css/Article-List.css";
import "../../assets/css/styles.css";

const NoticiasVoley = () => {
  const [noticiasVoley, setNoticiasVoley] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const getNoticiasVoley = async () => {
    await db
      .collection("Noticias-Voley")
      .orderBy("Date", "desc")
      .limit(4)
      .onSnapshot((querysnapshot) => {
        const docs = [];
        querysnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setNoticiasVoley(docs);
      });
  };
  useEffect(() => {
    getNoticiasVoley();
  });
  const getNoticiaVoleyIndividual = async (noticiaObject) => {
    try {
      if (currentId) {
        const data = await db.collection("Noticias-Voley").doc(currentId).get();
        console.log(data.id);
      }
    } catch (error) {
      console.log(error);
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
            {noticiasVoley.map((noticia) => (
              <div className="col-sm-6 col-md-3 item" key={noticia.id}>
                {noticia.NoticiaVoleyImg && (
                  <img
                    className="img-fluid"
                    src={noticia?.NoticiaVoleyImg}
                    alt="sample"
                    onClick={getNoticiaVoleyIndividual}
                  />
                )}
                <h3
                  className="text-white name"
                  onClick={() => setCurrentId(noticia.id)}
                >
                  {noticia.Title}
                </h3>
                <p className="text-white-50 description">
                  {noticia.Body.substring(0, 100)}
                </p>
                <Link to={"./noticiavoley/" + noticia.id}>
                  <p>Leer mas</p>
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

export default NoticiasVoley;
