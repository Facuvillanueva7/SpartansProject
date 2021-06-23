import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'; 
import { db } from "../../config/firebase";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  /* const [noticia,setNoticia]= useState() */
  const [currentId,setCurrentId]= useState("")
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
    if( currentId ) {
  const data =   await db.collection("Noticias-general").doc(currentId).get()
      console.log(data.id);
    }
} catch (error) {
  console.error(error);
}
  } 
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
                      onClick={getNoticiaIndividual}
                    />
                  )}
       
              <h4 onClick={()=>setCurrentId(noticia.id)}>{noticia.Title}</h4>
              <Link to={"./noticia/" + currentId}>
                  <p>{noticia.Body}</p>
                  </Link>

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
