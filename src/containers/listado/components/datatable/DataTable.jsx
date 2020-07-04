import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { eliminarProductoAction,  obtenerEditarAction } from "../../../../actions/ProductosAction"
const DataTable = ({producto}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {imageURL, nombre, estatus, stock, precio, _id} = producto;
    console.log(imageURL)
    const eliminarProducto = (_id) => {
        dispatch(eliminarProductoAction(_id))
    }
    const editarProducto = (producto) => {
        dispatch(obtenerEditarAction(producto))
        history.push(`/edit-product/${producto._id}`)
    }
    return (
        <tr>
                  <td>
                    <img
                      src={imageURL}
                      alt="i"
                      style={{ width: "50px", height: "50px" }}
                    ></img>
                  </td>
                  <td>{nombre}</td>
                  <td>{estatus}</td>
                  <td>{stock}</td>
                  <td>
                    <span>$</span>
                    {precio}
                  </td>
                  <td>
                    <button onClick={() => editarProducto(producto)} className="btn btn-primary rounded-circle mx-1" title="Editar">
                      <FontAwesomeIcon icon="edit" />
                    </button>
                    <button onClick={() => eliminarProducto(_id)} className="btn btn-danger rounded-circle mx-1" title="Eliminar">
                      <FontAwesomeIcon style={{color: "white"}} icon="trash-alt" />
                    </button>
                  </td>
                </tr>
    )
}

export default DataTable
