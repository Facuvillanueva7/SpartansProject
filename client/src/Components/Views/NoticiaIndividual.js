import React from "react";
import Noticias from "./Noticias";
import {db} from '../../config/firebase'
const NoticiaIndividual = (props) => {
  const getNoticia =async (noticiaObject) => {
    if (props.currentId) {
        await db
        .collection("Noticias-general")
        .doc(props.currentId)
        .get(noticiaObject)
    }
  }
  
    return 
    <div>

    </div>;
};

export default NoticiaIndividual;
