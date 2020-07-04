import {
  OBTENER_ERROR,
  OBTENER_EXITO,
  OBTENER_PRODUCTOS,
  GUARDAR_PRODUCTO,
  GUARDAR_EXITO,
  GUARDAR_ERROR,
  ELIMINAR_ERROR,
  ELIMINAR_EXITO,
  ELIMINAR_PRODUCTO,
  OBTENER_EDITAR,
  EDITAR_EXITO,
  EDITAR_ERROR,
  COMENZAR_EDITAR,
} from "../types";

const initialState = {
  productos: [],
  error: false,
  loading: false,
  productoeditar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GUARDAR_PRODUCTO:
    case OBTENER_PRODUCTOS:
    case ELIMINAR_PRODUCTO:
    case COMENZAR_EDITAR:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case OBTENER_EXITO:
      return {
        ...state,
        productos: action.payload,
        loading: false,
        error: false,
      };
    case GUARDAR_ERROR:
    case OBTENER_ERROR:
    case ELIMINAR_ERROR:
    case EDITAR_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GUARDAR_EXITO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
        loading: false,
        error: false,
      };
    case ELIMINAR_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: state.productos.filter(
          (producto) => producto._id !== action.payload
        ),
      };
    case OBTENER_EDITAR:
      return {
        ...state,
        productoeditar: action.payload,
      };
    case EDITAR_EXITO:
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto._id === action.payload._id
            ? (producto = action.payload)
            : producto
        ),
      };
    default:
      return state;
  }
}
