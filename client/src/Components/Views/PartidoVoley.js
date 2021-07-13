import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import BarraNavegacion from "../Views/BarraNavegacion";
import Footer from "../Views/Footer";
const PartidoVoley = () => {
  const [partidosVoley, setPartidosVoley] = useState([]);
  const [CurrentId, setCurrentId] = useState("");
  const getPartidosVoley = async () => {
    await db
      .collection("Partidos-Voley")
      .orderBy("Date", "desc")
      .limit(4)
      .onSnapshot((querysnapshot) => {
        const docs = [];
        querysnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setPartidosVoley(docs);
      });
  };
  useEffect(() => {
    getPartidosVoley();
  });
  const getPartidoVoleyIndividual = async () => {
    try {
      if (CurrentId) {
        const data = await db.collection("Partidos-Voley").doc(CurrentId).get();
        console.log(data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <BarraNavegacion />
      <header style={{ marginLeft: "-11px" }}>
        <div
          className="jumbotron jumbotron-fluid"
          style={{
            marginRight: "-22px",
            backgroundColor: "rgba(26,26,26)",
          }}
        >
          <div>
            <h2
              className="text-light"
              style={{
                paddingTop: "18px",
                position: "absolute",
                zIndex: "2",
                marginLeft: "30px",
              }}
            >
              Titulo Noticia
            </h2>
            <p
              className="text-white"
              style={{
                marginTop: "50px",
                marginLeft: "30px",
                position: "absolute",
                zIndex: "3",
              }}
            >
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam.
            </p>
            <img
              className="img-fluid"
              style={{ position: "relative", zIndex: "1", width: "100%" }}
              alt="Partidos Basket"
            />
          </div>
        </div>
      </header>
      <div>
        <div className="col-md-4 p-2">
          {partidosVoley.map((partido) => (
            <div className="card-mb-1" key={partido.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  {partido.imgA && (
                    <img
                      src={partido?.imgA}
                      style={{ width: "50%" }}
                      alt="sample"
                    />
                  )}
                  {partido.imgB && (
                    <img
                      src={partido?.imgB}
                      alt="sample"
                      style={{ width: "50%" }}
                    />
                  )}
                  <h6 onClick={getPartidoVoleyIndividual}>Ir al evento</h6>
                  <Link to={"./partidovoley/" + partido.id}>
                    <h4 onClick={() => setCurrentId}>{partido.Title}</h4>
                    <div className="container">
                      <p>{partido.Equipo_1}</p>
                      <p>{partido.Equipo_2}</p>
                      <p>{partido.Fecha_Partido}</p>
                      <p>{partido.Ultimo_Partido}</p>
                      <p>{partido.MVP_1}</p>
                      <p>{partido.MVP_2}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PartidoVoley;
