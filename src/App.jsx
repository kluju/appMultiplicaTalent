import React, { useState, useEffect,useCallback,useRef  } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PaletaColores from './components/paletacolores/PaletaColores';
import ModalCom from './components/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { getColoresCreator as getColores } from './store/modules/colores/colores.action';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const App = (props) => {
    var a = store;
    function anterior (){
        store.dispatch(getColores(""));  
    }
    function siguiente (){
        store.dispatch(getColores(2));  
    }
    return (
        <Provider store={store}>
            <div className="App" style={{minHeight:"500px"}}>
                <main role="main">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                PALETA DE COLORES, puede seleccionar 1 o más colores, y elimindarlos del porta papel
                            </div>
                            <PaletaColores/>
                            <div className="card-footer text-muted">
                                <a onClick={() => anterior()} className="btn btn-primary pull-left" style={{float:"left"}} href="#" role="button">Anterior</a>
                                <a onClick={() => siguiente()}className="btn btn-primary pull-right" style={{float:"right"}} href="#" role="button">Siguiente</a>
                            </div>
                        </div>
                        
                    </div> 
                </main>
        </div>

        <ModalCom/>

        </Provider>
    );
    
  }
  
  export default App;
