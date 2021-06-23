import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import NoticiaFisicoRender from "./Components/dashboard/NoticiaFisico/NoticiaFisicoRener";
import NoticiaBasketRender from "./Components/dashboard/NoticiasBasket/NoticiaBasketRender";
import NoticiaFutbolRender from "./Components/dashboard/NoticiasFutbol/NoticiaFutbolRender";
import NoticiaRender from "./Components/dashboard/NoticiasGeneral/NoticiaRender";
import NoticiaHandballRender from "./Components/dashboard/NoticiasHandball/NoticiaHandballRender";
import NoticiaVoleyRender from "./Components/dashboard/Noticiasvoley/NoticiaVoleyRender";
import PartidoBasketRender from "./Components/dashboard/PartidosBasket/PartidoBasketRender";
import PartidoFutbolRender from "./Components/dashboard/PartidosFutbol/PartidoFutbolRender";
import PartidoHandballRender from "./Components/dashboard/PartidosHandball/PartidoHandballRender";
import PartidoVoleyRender from "./Components/dashboard/PartidosVoley/PartidoVoleyRender";
import Noticia from "./Components/Views/Noticia";
import Noticias from "./Components/Views/Noticias";
import NoticiasBasket from "./Components/Views/NoticiasBasket";
import NoticiasFisico from "./Components/Views/NoticiasFisico";
import NoticiasFutbol from "./Components/Views/NoticiasFutbol";
import NoticiasHandball from "./Components/Views/NoticiasHandball";
import NoticiasVoley from "./Components/Views/NoticiasVoley";
import PartidoBasket from "./Components/Views/PartidoBasket";
import PartidoFutbol from "./Components/Views/PartidoFutbol";
import PartidoHandball from "./Components/Views/PartidoHandball";
import PartidoVoley from "./Components/Views/PartidoVoley";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Router>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/noticiasgeneral" component={Noticias} />
          <Route path="/noticiasfutbol" component={NoticiasFutbol} />
          <Route path="/noticiasvoley" component={NoticiasVoley} />
          <Route path="/noticiashandball" component={NoticiasHandball} />
          <Route path="/dashboard/noticiasgeneral" component={NoticiaRender} />
          <Route
            path="/dashboard/noticiasfutbol"
            component={NoticiaFutbolRender}
          />
          <Route
            path="/dashboard/noticiasvoley"
            component={NoticiaVoleyRender}
          />
          <Route
            path="/dashboard/noticiashandball"
            component={NoticiaHandballRender}
          />
          <Route
            path="/dashboard/noticiasfisico"
            component={NoticiaFisicoRender}
          />
          <Route path="/noticiasfisico" component={NoticiasFisico} />
          <Route
            path="/dashboard/noticiasbasket"
            component={NoticiaBasketRender}
          />
          <Route path="/noticiasbasket" component={NoticiasBasket} />
          <Route
            path="/dashboard/partidosvoley"
            component={PartidoVoleyRender}
          />
          <Route path="/partidosvoley" component={PartidoVoley} />
        <Route
          path="/dashboard/partidosfutbol"
          component={PartidoFutbolRender}
        />
        <Route
          path="/partidosfutbol"
          component={PartidoFutbol}
        />
        <Route
        path="/dashboard/partidoshandball"
        component={PartidoHandballRender}
        />
        <Route 
        path="/partidoshandball"
        component={PartidoHandball}
        />
         <Route path="/partidosbasket" component={PartidoBasket}/>
        <Route 
          path="/dashboard/partidosbasket"
          component={PartidoBasketRender}
          />
        <Route path="/noticia/:id" component={Noticia}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
