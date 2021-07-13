import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
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
import "../../assets/css/Navigation-with-Button.css";
import "../../assets/css/Projects-Clean.css";
import "../../assets/css/Social-Icons.css";
import "../../assets/css/styles.css";

const Noticia = () => {
  const { id } = useParams();
  /*  const [noticia,setNoticia]= useState([]); */
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [Copete, setCopete] = useState("");
  const [Fecha, setFecha] = useState("");
  const [NoticiaImg, setNoticiaImg] = useState("");
  const [NoticiaImg2,setNoticiaImg2]= useState("");
  const [Fuente, setFuente] = useState("");
  const getNoticia = async () => {
    await db
      .collection("Noticias-general")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          /*     setNoticia(doc) */
          setTitle(doc.data().Title);
          setBody(doc.data().Body);
          setCopete(doc.data().Copete);
          setFecha(doc.data().Fecha);
          setNoticiaImg(doc.data().imgA);
          setNoticiaImg2(doc.data().imgB);
          setFuente(doc.data().Fuente);
          console.log("Document data:", Body, NoticiaImg);
        } else {
          console.log("No matchs");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

  };
  useEffect(() => {
    getNoticia();
  });
  return (
    <>
    <BarraNavegacion/>
      {
        <div
          className="article-clean"
          style={{ backgroundColor: "rgb(26, 26, 26)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                <div className="text-light intro">
                  <h1
                    className="text-center"
                    style={{ letterSpacing: "0px", fontSize: "42px" }}
                  >
                    {Title}
                  </h1>
                  <p className="text-light">{Copete}</p>
                  <img
                    className="img-fluid"
                    src={NoticiaImg}
                    alt="Imagen Basquetbolista"
                  />
                  <img src={NoticiaImg2} alt="sample"  />
                </div>
                <div className="text">
                  <p
                    className="text-light flex-grow-1"
                    style={{ fontSize: "21px" }}
                  >
                    {Body}
                  </p>
                  <figure>
                    <img
                      className="figure-img"
                      src="/assets/img/beach.jpg"
                      alt="Beach"
                    />
                  </figure>
                  <p className="text-center" style={{ fontSize: "15px" }}>
                    <span className="text-light date">{Fecha}</span>
                    <span className="text-light by">&nbsp;by {Fuente}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer/>
    </>
  );
};

export default Noticia;
