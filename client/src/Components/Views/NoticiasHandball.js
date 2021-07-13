import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {db} from '../../config/firebase';
import BarraNavegacion from '../Views/BarraNavegacion';
import Footer from '../Views/Footer';

const NoticiasHandball = () => {
    const [noticiasHandball,setNoticiasHandball] = useState([]);
    const [currentId, setCurrentId] = useState("");
    const getNoticiasHandball = async ()=>{
        await db
        .collection("Noticias-Handball")
        .orderBy("Date","desc")
        .limit(4)
        .onSnapshot((querysnapshot)=>{
            const docs = []
            querysnapshot.forEach((doc)=>{
                docs.push({...doc.data(),id:doc.id})
            });
            setNoticiasHandball(docs)
        });
    };
    useEffect(()=>{
        getNoticiasHandball()
    })
    const getNoticiaHandballIndividual = async (noticiaObject) => {
      try {
        if (currentId) {
          const data = await db
            .collection("Noticias-Handball")
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
            {noticiasHandball.map((noticia) => (
              <div className="col-sm-6 col-md-3 item" key={noticia.id}>
                {noticia.NoticiaHandballImg && (
                  <img
                    className="img-fluid"
                    src={noticia?.NoticiaHandballImg}
                    alt="sample"
                    onClick={getNoticiaHandballIndividual}
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
                <Link to={"./noticiahandball/" + noticia.id}>
                  <p>Leer mas</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
        <Footer/>
      </>
    )
}

export default NoticiasHandball
