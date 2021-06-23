import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import {db} from '../../config/firebase'
const Noticia = () => {
    const  {id} = useParams()
    const [noticia,setNoticia]= useState([]);
    const getNoticia = async()=>{
            await db 
           .collection("Noticias-general")
           
           .onSnapshot((querysnapshot)=>{
            const docs = [];
            querysnapshot.forEach((doc)=>{
                docs.push({...doc.data(),id:doc.id})
            });
            setNoticia(docs)
           })
                 
         /* console.log(noticia.data());  */
    }
   /*  useEffect(()=>{
        getNoticia()
    }) */
    return (
        <>
        <div>
           
            <h2 onMouseOver={getNoticia}>Lorem ipsum dolor sit amet consectetur.</h2>
            <h2>{id}</h2>
             {noticia.map((noticia)=>(
                 <div className="card-body" key={noticia.id}>
                     <div className="card-header">
                         <h2>{noticia.Title}</h2>
                     </div>
                     <img src={noticia?.NoticiaImg}  style ={{width:"50%"}}alt="sample" />
                 </div>
             ))}
        </div>
        </>
    )
}

export default Noticia
