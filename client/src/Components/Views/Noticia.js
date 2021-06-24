import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {db} from '../../config/firebase'
const Noticia = () => {
    const  {id}    = useParams()
   /*  const [noticia,setNoticia]= useState([]); */
   const [Title, setTitle] = useState('')
   const [Body, setBody] = useState('')
   const [Copete, setCopete] = useState('')
   const [Fecha, setFecha] = useState('')
   const [NoticiaImg, setNoticiaImg] = useState('')
   const [Fuente, setFuente] = useState('')
    const getNoticia = async()=>{
            await db 
           .collection("Noticias-general").doc(id)
           .get()
           .then((doc=>{
               if (doc.exists){
               /*     setNoticia(doc) */
               setTitle(doc.data().Title)
               setBody(doc.data().Body)
               setCopete(doc.data().Copete)
               setFecha(doc.data().Fecha)
               setNoticiaImg(doc.data().NoticiaImg)
               setFuente(doc.data().Fuente)
                   console.log("Document data:", Body, NoticiaImg);
               } else {
                   console.log("No matchs");
               }
           })).catch((error)=>{
               console.log("Error getting document:", error);
           })
           /* .onSnapshot((querysnapshot)=>{
            const docs = [];
            querysnapshot.forEach((doc)=>{
                docs.push({...doc.data(),id:doc.id})
            });
            setNoticia(docs)
           }) */
                 
         /* console.log(noticia.data());  */
    }
    useEffect(()=>{
        getNoticia()
    })
    return (
        <>
        <div>
             {<>
                <h2>{Title}</h2>
                <h5>{Copete}</h5>
                 <p>{Body}</p>
                 <div className="card-body">
                    <img src={NoticiaImg} alt="sample" />
                 </div>
                 <p>{Fecha}</p>
                 <p>{Fuente}</p>
                 </>
             }
        </div>
        </>
    )
}

export default Noticia
