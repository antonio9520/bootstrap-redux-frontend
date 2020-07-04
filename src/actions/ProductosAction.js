import {
  OBTENER_PRODUCTOS,
  OBTENER_EXITO,
  OBTENER_ERROR,
  GUARDAR_ERROR,
  GUARDAR_PRODUCTO,
  GUARDAR_EXITO,
  ELIMINAR_ERROR,
  ELIMINAR_EXITO,
  ELIMINAR_PRODUCTO,
  EDITAR_ERROR,
  EDITAR_EXITO,
  COMENZAR_EDITAR,
  OBTENER_EDITAR,
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
      const fd = new FormData();
      fd.append("imageURL", producto.imageURL, producto.imageURL.name);
      fd.append("nombre", producto.nombre);
      fd.append("stock", producto.stock);
      fd.append("precio", producto.precio);

      await Axios.post("/api/productos/", fd);
      dispatch(guardarExito(producto));
      console.log("producto guardado");
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

const guardarExito = (data) => ({
  type: GUARDAR_EXITO,
  payload: data,
});

export function eliminarProductoAction(id) {
  return async (dispatch) => {
    dispatch(eliminarProducto());
    try {
      await Axios.delete(`/api/productos/${id}`);
      dispatch(eliminarProductoExito(id));
    } catch (error) {
      console.log(error);
      dispatch(eliminarError());
    }
  };
}

const eliminarError = () => ({
  type: ELIMINAR_ERROR,
});

const eliminarProducto = () => ({
  type: ELIMINAR_PRODUCTO,
});
const eliminarProductoExito = (id) => ({
  type: ELIMINAR_EXITO,
  payload: id,
});

export function obtenerEditarAction(producto) {
  return (dispatch) => {
    dispatch(obtenerEditar(producto));
  };
}

const obtenerEditar = (producto) => ({
  type: OBTENER_EDITAR,
  payload: producto,
});

export function editarProductoAction(producto) {
  return async (dispatch) => {
   
    dispatch(comenzarEditar());
    try {
      const fd = new FormData();
      fd.append("imageURL", producto.imageURL, producto.imageURL.name)
      fd.append("nombre", producto.nombre)
      fd.append("stock", producto.stock)
      fd.append("precio", producto.precio)
      await Axios.put(`/api/productos/${producto._id}`, fd).then((res) => producto.imageURL = res.data.producto.imageURL);
      dispatch(editarExito(producto));
     
    } catch (error) {
      console.log(error);
      dispatch(editarError());
    }
  };
}

const editarError = () => ({
  type: EDITAR_ERROR,
});

const comenzarEditar = () => ({
  type: COMENZAR_EDITAR,
});

const editarExito = (producto) => ({
  type: EDITAR_EXITO,
  payload: producto,
});
