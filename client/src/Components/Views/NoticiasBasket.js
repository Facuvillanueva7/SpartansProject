import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import {Link } from 'react-router-dom'
const NoticiasBasket = () => {
  const [noticiasBasket, setNoticiasBasket] = useState([]);
  const [ currentId , setCurrentId] = useState("")
  const getNoticiasBasket = async () => {
    await db
      .collection("Noticias-Basket")
      .orderBy("Date", "desc")
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
        .collection ("Noticias-Basket")
        .doc(currentId)
        .get();
        console.log(data.id);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <div className="col-md-4 p-2">
          {noticiasBasket.map((noticia) => (
            <div className="card-mb-1" key={noticia.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  {noticia.NoticiaBasketImg && (
                    <img
                      src={noticia?.NoticiaBasketImg}
                      style={{ width: "50%" }}
                      alt="sample"
                      onClick={getNoticiaBasketIndividual}
                    />
                  )}
                  <Link to={"./noticiabasket/"+noticia.id}>
                  <h4 onClick={()=>setCurrentId(noticia.id)}>{noticia.Title}</h4>
                  <p>{noticia.Body.substring(0,100)}</p>
                    <p>{noticia.Copete}</p>
                    <p>{noticia.Description}</p>
                    <p>{noticia.Fuente}</p>
                    <p>{noticia.Fecha}</p>
                   </Link>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoticiasBasket;
