import { OBTENER_PRODUCTOS, OBTENER_EXITO, OBTENER_ERROR } from "../types";
import Axios from "../axios/axios";

export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(obtenerProductos());
    try {
      const result = await Axios.get("/api/productos");
      dispatch(obtenerExito(result.data.producto));
    } catch (error) {
      console.log(error);
      dispatch(obtenerError());
    }
  };
}

const obtenerProductos = () => ({
  type: OBTENER_PRODUCTOS,
});

const obtenerExito = (data) => ({
  type: OBTENER_EXITO,
  payload: data,
});

const obtenerError = () => ({
  type: OBTENER_ERROR,
});
