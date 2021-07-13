import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import BarraNavegacion from '../Views/BarraNavegacion';
import Footer from '../Views/Footer'
//CSS
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/fonts/font-awesome.min.css";
import "../../assets/fonts/ionicons.min.css";
import "../../assets/css/Article-Clean.css";
import "../../assets/css/Article-Dual-Column.css";
import "../../assets/css/Article-List.css";
import "../../assets/css/Footer-Dark.css";
import "../../assets/css/Projects-Clean.css";
import "../../assets/css/Social-Icons.css";
import "../../assets/css/styles.css";

const NoticiasBasket = () => {
  const [noticiasBasket, setNoticiasBasket] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const getNoticiasBasket = async () => {
    await db
      .collection("Noticias-Basket")
      .orderBy("Date", "desc")
      .limit(4)
      .onSnapshot((querysnapshot) => {
        const docs = [];
        querysnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setNoticiasBasket(docs);
      });
  };
  useEffect(() => {
    getNoticiasBasket();
  });
  const getNoticiaBasketIndividual = async (noticiaObject) => {
    try {
      if (currentId) {
        const data = await db
          .collection("Noticias-Basket")
          .doc(currentId)
          .get();
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
            {noticiasBasket.map((noticia) => (
              <div className="col-sm-6 col-md-3 item" key={noticia.id}>
                {noticia.NoticiaBasketImg && (
                  <img
                    className="img-fluid"
                    src={noticia?.NoticiaBasketImg}
                    alt="sample"
                    onClick={getNoticiaBasketIndividual}
                  />
                )}
                <Link to={"./noticiabasket/" + noticia.id}>
                  <h3
                    className="text-white name"
                    onClick={() => setCurrentId(noticia.id)}
                  >
                    {noticia.Title}
                  </h3>
                  <p className="text-white-50 description">
                    {noticia.Body.substring(0, 100)}
                  </p>
                  <i className="fa fa-arrow-circle-right"></i>
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

export default NoticiasBasket;
