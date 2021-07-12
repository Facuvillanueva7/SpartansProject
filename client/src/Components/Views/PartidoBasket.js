import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Header from '../Views/Header'

//CSS
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/fonts/font-awesome.min.css";
import "../../assets/fonts/ionicons.min.css";
import "../../assets/css/Article-Clean.css";
import "../../assets/css/Article-Dual-Column.css";
import "../../assets/css/Article-List.css";
import "../../assets/css/Footer-Dark.css";
import "../../assets/css/Navigation-with-Button.css";
import "../../assets/css/Projects-Clean.css";
import "../../assets/css/Social-Icons.css";
import "../../assets/css/styles.css";


const PartidoBasket = () => {
  const [partidosBasket, setPartidosBasket] = useState([]);
  const [CurrentId,setCurrentId] = useState("");
  const getPartidosBasket = async () => {
    await db
      .collection("Partidos-Basket")
      .orderBy("Date", "desc")
      .onSnapshot((querysnapshot) => {
        const docs = [];
        querysnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setPartidosBasket(docs);
      });
  };
  useEffect(() => {
    getPartidosBasket();
  });
  const getPartidoBasketIndividual = async () => {
    try {
      if(CurrentId) {
        const data = await db
        .collection("Partidos-Basket")
        .doc(CurrentId)
        .get()
        console.log(data.id);
      }
    } catch(error) {
      console.error(error)
    }
  }
  return (
    <>
      <Navbar
        className="fixed-top float-right"
        collapseOnSelect
        expand="md"
        variant="dark"
        style={{ backgroundColor: "rgb(26, 26, 26)" }}
      >
        <Navbar.Brand as={NavLink} to="/">
          Spartans
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/noticiasgeneral">
              Noticias
            </Nav.Link>
            <Nav.Link as={NavLink} to="/deportistadelmes">
              Ranking
            </Nav.Link>
            <NavDropdown title="Deportes">
              <NavDropdown.Item as={NavLink} to="/noticiasfutbol">
                Football
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/noticiasbasket">
                Basket
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/noticiasvoley">
                Voley
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/noticiasfisico">
                Fisicoculturismo
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/noticiashandball">
                Handball
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Header/>
      <div className="container" style={{}}>
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-light">Proximos Partidos</h2>
          </div>
        </div>
        <div className="row no-gutters row-cols-3">
          {partidosBasket.map((partido) => (
            <div
              className="col-auto col-sm-3 col-md-3 col-lg-3 col-xl-3 order-1 p-5"
              key={partido.id}
            >
              <div>
                {partido.imgA && (
                  <img
                    className="img-fluid d-inline-block"
                    src={partido?.imgA}
                    alt="Partido Basket"
                  />
                )}
              </div>
              <h4 onClick={getPartidoBasketIndividual} className="text-break text-center text-light">
               
                {partido.Equipo_1} vs {partido.Equipo_2}
              </h4>
              <p className="text-center text-white">{partido.Fecha_Partido}</p>
                  <Link to={"./partidobasket/" +partido.id}>
                    <h4 onClick={()=>setCurrentId}> ir al evento</h4>
                  </Link>
              </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="/">Web design</Link>
                  </li>
                  <li>
                    <Link to="/">Development</Link>
                  </li>
                  <li>
                    <Link to="/">Hosting</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link to="/">Company</Link>
                  </li>
                  <li>
                    <Link to="/">Team</Link>
                  </li>
                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div className="col item social">
                <Link to="/">
                  <i className="icon ion-social-facebook"></i>
                </Link>
                <Link to="/">
                  <i className="icon ion-social-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="icon ion-social-snapchat"></i>
                </Link>
                <Link to="/">
                  <i className="icon ion-social-instagram"></i>
                </Link>
              </div>
            </div>
            <p className="copyright">Company Name © 2017</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PartidoBasket;
