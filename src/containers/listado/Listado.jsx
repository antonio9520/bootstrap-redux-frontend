import React, { useEffect } from "react";
import { obtenerProductosAction } from "../../actions/ProductosAction";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "./components/datatable/DataTable"

const Listado = () => {
  const dispatch = useDispatch();
  
  const productos = useSelector((state) => state.productos.productos);


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
                <th scope="col" style={{ width: "15%" }}>
                  Foto
                </th>
                <th scope="col" style={{ width: "40%" }}>
                  Nombre
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  Estado
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  Stock
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  Precio
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                  <DataTable key={producto._id} producto={producto} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listado;
