import {
  OBTENER_PRODUCTOS,
  OBTENER_EXITO,
  OBTENER_ERROR,
  GUARDAR_ERROR,
  GUARDAR_PRODUCTO,
  GUARDAR_EXITO,
} from "../types";
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

export function guardarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(guardarProducto());
    try {
      const result = Axios.post("/api/productos", producto);
      console.log(result);
      console.log("producto guardado")
    } catch (error) {
      console.log(error);
      dispatch(guardarError());
    }
  };
}

const guardarError = () => ({
  type: GUARDAR_ERROR,
});

const guardarProducto = () => ({
  type: GUARDAR_PRODUCTO,
});
