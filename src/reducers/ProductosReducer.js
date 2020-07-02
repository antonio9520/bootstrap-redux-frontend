import { OBTENER_ERROR, OBTENER_EXITO, OBTENER_PRODUCTOS } from "../types";

const initialState = {
  productos: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
    case OBTENER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
