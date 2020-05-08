import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect,useCallback } from 'react';
//import './Footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { getColoresCreator as getColores } from '../../store/modules/colores/colores.action';
import { getColoresSeleccionadosCreator as getColoresSeleccionados } from '../../store/modules/colores/colorescopiado.action';
//import CollapseTogle from '../collapse/CollapseTogle';
import {  Spinner } from 'reactstrap';
//import Pag  from '../../components/pagination/Pagination';

const PaletaColores = (props) => {
    
    const dispatch = useDispatch();
    const [ nResulPag, setNresulPag ] = useState(10);
    const {data, error, errorMessage, loading,page,per_page,total,total_pages } = useSelector((store) =>{ return  store.colores.getAllServices});
    useEffect(() => {
        dispatch(getColores(""));  
    }, []);
    const seleccionarColor = (objColor,quitar = false) => {
        
        dispatch(getColoresSeleccionados(objColor,quitar));   
    }
    const paginarColores = (pagina) => {
        if(pagina == 1)
            pagina = "";
            dispatch(getColores(pagina));  
    }  
    return (
      
        <div className="card-body">
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
                                        </div>
                                        <div className="card-body" >
                                            <a style={{cursor:"pointer"}} onClick={() => seleccionarColor(r)}><li className="list-group-item d-flex justify-content-between align-items-center">
                                                {r.name}
                                                <span className="badge badge-primary badge-pill" style={{background:r.color}}>{r.color}</span>
                                            </li></a>
                                        </div>
                                        <div className="card-footer text-muted text-right">
                                            {r.pantone_value}
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                            <ul className="pagination justify-content-center" style={{margin:"0 auto"}}>
                            {
                            [...Array(total_pages)].map((r, i) => {
                                let paginaL = (i+1);
                                let active = "";
                                if(paginaL == page)
                                    active = "active";
                                return <a onClick={() => paginarColores(paginaL)} ><li className={"page-item "+active} aria-current="page">
                                        <span className="page-link">{paginaL}</span>
                                        </li></a>
                            })
                            }

                            </ul>
                            
                        </div>
                        
                    )
                    }
        
        </div>

            
        

    );
};

export default PaletaColores;