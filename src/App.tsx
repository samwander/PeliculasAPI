import React from 'react';
import { Route, Switch } from "react-router";
import "./App.css";
import Menu from "./utils/Menu";
import IndiceGeneros from "./generos/IndiceGeneros";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import rutas from './route-config';
import configurarValidaciones from './Validaciones'

configurarValidaciones();

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Menu />

        <div className="container">
          <Switch>
            {rutas.map(ruta=>
              <Route key={ruta.path} path={ruta.path} exact={ruta.exact}>
                  <ruta.componente/>
              </Route>)}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
