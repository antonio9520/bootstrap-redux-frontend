import React, { useEffect } from "react";
import { obtenerProductosAction } from "../../actions/ProductosAction";
import { useDispatch, useSelector } from "react-redux";
const Listado = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos.productos);
  console.log(productos);
  useEffect(() => {
    dispatch(obtenerProductosAction());
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-10 col-sm-12 ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto._id}>
                  <td>
                    <img
                      src={producto.imageURL}
                      alt="i"
                      style={{ width: "50px", height: "50px" }}
                    ></img>
                  </td>
                  <td>{producto.nombre}</td>
                  <td>{producto.estatus}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <span>$</span>
                    {producto.precio}
                  </td>
                  <td>Item</td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
      </div>
    </div>
  );
};

export default Listado;
