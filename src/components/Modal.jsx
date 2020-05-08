/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseModalCreator as openCloseModal } from '../store/modules/colores/colorescopiado.action';
import { getColoresSeleccionadosCreator as getColoresSeleccionados } from '../store/modules/colores/colorescopiado.action';
import { Spinner, Modal, ModalHeader, ModalBody } from 'reactstrap';


/**
 * 
 * @param {*} props 
 * @param {string} props.buttonLabel
 * @param {string} props.className
 * @param {*} props.user
 * @param {Function} props.updateAction
 */
const ModalCom = (props) => {

  const dispatch = useDispatch();
  const { data,error, success, errorMessage, loading } = useSelector((store) =>{ return  store.colores.getCopyColorReducer});
  
  const [modal, setModal] = useState(success);
  
  useEffect(() => {
    setModal(success);
  });

  

  const toggle = () =>{ 
    
    dispatch(openCloseModal(false));  
    
  } ;
  const seleccionarColor = (objColor,quitar = true) => {
        
    dispatch(getColoresSeleccionados(objColor,quitar));   
} 
  
    return (
      <div className="modalInter">
        <Modal isOpen={modal} toggle={toggle} className={"modal-lg modalInter"}>
                <ModalHeader className="modal-header-n text-center" toggle={toggle}>Colores seleccionados</ModalHeader>
                <ModalBody className="d-flex justify-content-center h-100 modal-body-n">
                    <div className="modal-body">
                      <div className="container-fluid">
                      {loading  ?
                            (<Spinner size="sm"  animation="border" role="status"></Spinner>)
                        : 
                        (   
                            <div className="row">
                                {
                                data.map((r, i) => {
                                    return <div key={r.id} className="col-sm-6 col-md-4 mb-3">
                                        <div className="card card-buttom cardBottom">
                                            <div className="card-header text-left">
                                                {r.year}
                                                <a style={{float:"right"}} onClick={() => seleccionarColor(r)}>Eliminar</a>
                                            </div>
                                            <div className="card-body" style={{background:r.color}} >
                                                {r.name}<br/>
                                                !Copiado¡
                                            </div>
                                            <div className="card-footer text-muted text-right">
                                                {r.pantone_value}
                                            </div>
                                        </div>
                                    </div>
                                })
                                }
                                
                                
                            </div>
                            
                        )
                        }

                      </div>
                    </div>
                    
                </ModalBody>
                
            </Modal>
      </div>
    );

}

export default ModalCom;