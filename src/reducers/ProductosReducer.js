import {
  OBTENER_ERROR,
  OBTENER_EXITO,
  OBTENER_PRODUCTOS,
  GUARDAR_PRODUCTO,
  GUARDAR_EXITO,
  GUARDAR_ERROR,
} from "../types";

const initialState = {
  productos: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GUARDAR_PRODUCTO:  
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        loading: true,
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
      return {
        ...state,
        loading: false,
        error: true,
      };
      case GUARDAR_EXITO:
        return{
          ...state,
          productos: [action.payload, ...state],
          loading: false,
          error: false,
        }
    default:
      return state;
  }
}
