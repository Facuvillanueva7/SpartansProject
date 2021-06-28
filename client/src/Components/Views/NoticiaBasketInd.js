import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {db} from '../../config/firebase'
const NoticiaBasketInd = () => {
    const  {id}    = useParams()
   const [Title, setTitle] = useState('')
   const [Body, setBody] = useState('')
   const [Copete, setCopete] = useState('')
   const [Fecha, setFecha] = useState('')
   const [NoticiaBasketImg, setNoticiaBasketImg] = useState('')
   const [Fuente, setFuente] = useState('')
    const getNoticiaBasket = async()=>{
            await db 
           .collection("Noticias-Basket").doc(id)
           .get()
           .then((doc=>{
               if (doc.exists){
               setTitle(doc.data().Title)
               setBody(doc.data().Body)
               setCopete(doc.data().Copete)
               setFecha(doc.data().Fecha)
               setNoticiaBasketImg(doc.data().NoticiaBasketImg)
               setFuente(doc.data().Fuente)
                   console.log("Document data:", Title);
               } else {
                   console.log("No matchs");
               }
           })).catch((error)=>{
               console.log("Error getting document:", error);
           })
    }
    useEffect(()=>{
        getNoticiaBasket()
    })
    return (
        <>
        <div>
             {<>
                <h2>{Title}</h2>
                <h5>{Copete}</h5>
                 <p>{Body}</p>
                 <div className="card-body">
                    <img src={NoticiaBasketImg} alt="sample" />
                 </div>
                 <p>{Fecha}</p>
                 <p>{Fuente}</p>
                 </>
             }
        </div>
        </>
    )
}

export default NoticiaBasketInd
