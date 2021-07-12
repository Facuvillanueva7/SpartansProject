import React from 'react'
import Background from "../../assets/img/Basquebolista-mujer.jpg";

const Header = () => {
    return (
<header style={{ marginLeft: "-11px", fontSize: "35px" }}>
        <div
          className="jumbotron jumbotron-fluid"
          style={{
            // backgroundImage: `(${Background})`,
            // backgroundPosition: "center",
            //minWidth: "360px",
            marginRight: "-22px",
            // paddingBottom: "1px",
            backgroundColor: "rgba(26,26,26)",
            // overflow: "hidden",
            //height: "80%"
          }}
        >
          <div>
            <h1
              className="text-light"
              style={{
                paddingTop: "40px",
                position: "absolute",
                zIndex: "2",
                marginLeft: "30px",
                fontSize: "60px"
              }}
            >
              Titulo Noticia
            </h1>
            <p
              className="text-white"
              style={{
                marginTop: "120px",
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
              src={Background}
              style={{ position: "relative", zIndex: "1", width: "100%" }}
              alt="Partidos Basket"
            />
          </div>
        </div>
      </header>
    )
}

export default Header
