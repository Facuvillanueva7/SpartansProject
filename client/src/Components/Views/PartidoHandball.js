import React,{useEffect,useState} from 'react'
import {db} from '../../config/firebase'
const PartidoHandball = () => {
    const [partidosHandball,setPartidosHandball]=useState([]);
    const getPartidosHandball =async()=>{
        await db.collection("Partidos-Handball")
        .orderBy("Date","desc")
        .onSnapshot((querysnapshot)=>{
            const docs =[]
            querysnapshot.forEach((doc)=>{
                docs.push({...doc.data(),id:doc.id})
            });
            setPartidosHandball(docs)
        })
    }
    useEffect(()=>{
        getPartidosHandball();
    })
    return (
        <>
        <div>
          <div className="col-md-4 p-2">
            {partidosHandball.map((partido) => (
              <div className="card-mb-1" key={partido.id}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    {partido.imgA &&  (
                      <img
                        src={partido?.imgA}
                        style={{ width: "50%" }}
                        alt="sample"
                      />
                    )}
                    {partido.imgB && (
                        <img src={partido?.imgB} alt="sample" style={{width:"50%"}} />
                    )}
                    <h4>{partido.Title}</h4>
                    <div className="container-">
                    <p>{partido.Equipo_1}</p>
                    <p>{partido.Equipo_2}</p>
                    <p>{partido.Fecha_Partido}</p>
                    <p>{partido.Ultimo_Partido}</p>
                    <p>{partido.MVP_1}</p>
                    <p>{partido.MVP_2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
}

export default PartidoHandball
