import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { db } from "../../config/firebase";

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

const Noticia = () => {
<<<<<<< HEAD
    const  {id}    = useParams()
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
               setTitle(doc.data().Title)
               setBody(doc.data().Body)
               setCopete(doc.data().Copete)
               setFecha(doc.data().Fecha)
               setNoticiaImg(doc.data().NoticiaImg)
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
=======
  const { id } = useParams();
  /*  const [noticia,setNoticia]= useState([]); */
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [Copete, setCopete] = useState("");
  const [Fecha, setFecha] = useState("");
  const [NoticiaImg, setNoticiaImg] = useState("");
  const [Fuente, setFuente] = useState("");
  const getNoticia = async () => {
    await db
      .collection("Noticias-general")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          /*     setNoticia(doc) */
          setTitle(doc.data().Title);
          setBody(doc.data().Body);
          setCopete(doc.data().Copete);
          setFecha(doc.data().Fecha);
          setNoticiaImg(doc.data().NoticiaImg);
          setFuente(doc.data().Fuente);
          console.log("Document data:", Body, NoticiaImg);
        } else {
          console.log("No matchs");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    /* .onSnapshot((querysnapshot)=>{
            const docs = [];
            querysnapshot.forEach((doc)=>{
                docs.push({...doc.data(),id:doc.id})
            });
            setNoticia(docs)
           }) */

    /* console.log(noticia.data());  */
  };
  useEffect(() => {
    getNoticia();
  });
  return (
    <>
      {/*       <div className="container">
        <div className="row">
          <div className="col-12">
            <nav
              className="navbar navbar-dark navbar-expand-md fixed-top float-right"
              style={{width: '100%', backgroundColor:'rgba(0, 0, 0, 0)'}}
            >
              <div className="container-fluid">
                <Link className="navbar-brand" to="#" style={{color: '#fcfeff'}}>
                  Spartans
                </Link>
                <button
                  data-toggle="collapse"
                  className="navbar-toggler"
                  data-target="#navcol-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse text-left"
                  id="navcol-1"
                >
                  <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link active"
                        to="/Noticias.html"
                        style={{color: '#fcfeff'}}
                      >
                        Noticias
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link  className="nav-link" to="#" style={{color: '#fcfeff'}}>
                        Ranking
                      </Link>
                    </li>
                    <li
                      className="nav-item d-flex align-items-md-center"
                      role="presentation"
                    >
                      <div className="nav-item dropdown">
                        <Link
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          to="#"
                          style={{
                            color: '#fcfeff',
                            marginTop: '0px',
                            marginBottom: '0px',
                            padding: '0px',
                            paddingTop: '0px',
                            paddingBottom: '0px'
                          }}
                        >
                          Deportes
                        </Link>
                        <div
                          className="dropdown-menu dropdown-menu-left"
                          role="menu"
                        >
                          <Link
                            className="dropdown-item"
                            role="presentation"
                            to="#"
                          >
                            Futbol
                          </Link>
                          <Link
                            className="dropdown-item"
                            role="presentation"
                            to="/Seccion%20basquet.html"
                          >
                            Basquet
                          </Link>
                          <Link
                            className="dropdown-item"
                            role="presentation"
                            to="#"
                          >
                            Voley
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div> */}

      <Navbar
        className="fixed-top float-right"
        collapseOnSelect
        expand="md"
        variant="dark"
        style={{ backgroundColor: "rgb(26, 26, 26)" }}
      >
        <Navbar.Brand as={NavLink} to="/">Spartans</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/noticiasgeneral">Noticias</Nav.Link>
            <Nav.Link as={NavLink} to="/deportistadelmes">Ranking</Nav.Link>
            <NavDropdown title="Deportes">
              <NavDropdown.Item as={NavLink} to="/noticiasfutbol">Football</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/noticiasbasket">Basket</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/noticiasvoley">Voley</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/noticiasfisico">Fisicoculturismo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/noticiashandball">Handball</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {
        <div
          className="article-clean"
          style={{ backgroundColor: "rgb(26, 26, 26)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                <div className="text-light intro">
                  <h1
                    className="text-center"
                    style={{ letterSpacing: "0px", fontSize: "42px" }}
                  >
                    {Title}
                  </h1>
                  <p className="text-light">{Copete}</p>
                  <img
                    className="img-fluid"
                    src={NoticiaImg}
                    alt="Imagen Basquetbolista"
                  />
                </div>
                <div className="text">
                  <p
                    className="text-light flex-grow-1"
                    style={{ fontSize: "21px" }}
                  >
                    {Body}
                  </p>
                  <figure>
                    <img
                      className="figure-img"
                      src="/assets/img/beach.jpg"
                      alt="Beach"
                    />
                  </figure>
                  <p className="text-light" style={{ fontSize: "21px" }}>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae. Suspendisse vel placerat
                    ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum.
                    Etiam quis tristique lectus. Aliquam in arcu eget velit
                    pulvinar dictum vel in justo.
                  </p>
                  <p className="text-center" style={{ fontSize: "15px" }}>
                    <span className="text-light date">{Fecha}</span>
                    <span className="text-light by">&nbsp;by {Fuente}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
>>>>>>> 6a267ea56aa561222429cb7e5c6e9f66472717f6
        </div>
      }
    </>
  );
};

export default Noticia;
