import React, { useState } from "react";
import "./NewProduct.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { guardarProductoAction } from "../../actions/ProductosAction"

const NewProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [producto, setProducto] = useState({
    nombre: "",
    stock: 0,
    precio: 0,
  });
  const [image, setImage] = useState({ imageURL: null, name: "" });

  const [error, setError] = useState({
    nombre: false,
    stock: false,
    precio: false,
  });
  const [valid, setValid] = useState({
    nombre: false,
    stock: false,
    precio: false,
  });
  const { nombre, stock, precio } = producto;

  //onchanges
  const onchange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
    if (nombre !== "") {
      setError({ ...error, nombre: false });
      setValid({ ...valid, nombre: true });
    }
  };
  const onChangeStock = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
    if (stock > 0) {
      setError({ ...error, stock: false });
      setValid({ ...valid, stock: true });
    }
  };

  const onChangePrecio = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
    if (precio > 0) {
      setError({ ...error, precio: false });
      setValid({ ...valid, precio: true });
    }
  };

  const fileChange = (event) => {
    setImage({
      imageURL: URL.createObjectURL(event.target.files[0]),
      name: event.target.value,
    });
  };

  //onBlur
  const blurNombre = () => {
    if (nombre === "") {
      setError({ ...error, nombre: true });
    }
  };
  const blurStock = () => {
    if (stock <= 0) {
      setError({ ...error, stock: true });
      return;
    }
  };
  const blurPrecio = () => {
    if (precio <= 0) {
      setError({ ...error, precio: true });
      return;
    }
  };

  const submitProducto = (e) => {
    e.preventDefault();
    //validar
    if (nombre === "" || precio <= 0 || stock <= 0 || image.file === null) {
      console.log("campos invalidos");
      return;
    }
    console.log("campos validos");
    //save
    const { imageURL } = image;
    dispatch(guardarProductoAction({
      nombre,
      stock,
      precio,
      imageURL,
    }))
    history.push("/")

  };

  return (
    <div className="container  ">
      <div className="row justify-content-center mt-5">
        <div className="col-md-10 col-sm-12 mx-4 text-center  border">
          <h2 className="text-center py-2">Nuevo Producto</h2>
          <form onSubmit={submitProducto}>
            <div className="form-row pt-4">
              <div className="col-md-4 mb-3">
                <label htmlFor="input-name">Nombre</label>
                <input
                  name="nombre"
                  type="text"
                  className={
                    error.nombre
                      ? "form-control is-invalid"
                      : valid.nombre
                      ? "form-control is-valid"
                      : "form-control"
                  }
                  id="input-name"
                  onBlur={blurNombre}
                  onChange={onchange}
                ></input>
                {error.nombre ? (
                  <div className="invalid-feedback">
                    El nombre no puede estar vacio
                  </div>
                ) : null}
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="input-stock">Stock</label>
                <input
                  name="stock"
                  className={
                    error.stock
                      ? "form-control is-invalid"
                      : valid.stock
                      ? "form-control is-valid"
                      : "form-control"
                  }
                  id="input-stock"
                  type="number"
                  defaultValue={stock}
                  onBlur={blurStock}
                  onChange={onChangeStock}
                ></input>
                {error.stock ? (
                  <div className="invalid-feedback">
                    Stock debe ser mayor a 0
                  </div>
                ) : null}
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="input-precio">Precio</label>
                <input
                  name="precio"
                  className={
                    error.precio
                      ? "form-control is-invalid"
                      : valid.precio
                      ? "form-control is-valid"
                      : "form-control"
                  }
                  onBlur={blurPrecio}
                  id="input-precio"
                  defaultValue={precio}
                  type="number"
                  onChange={onChangePrecio}
                ></input>
                {error.precio ? (
                  <div className="invalid-feedback">
                    Precio debe ser mayor a 0
                  </div>
                ) : null}
              </div>
              <div className="col-md-4">
                {image.imageURL ? (
                  <img
                    className="img-producto img-thumbnail rounded float-left"
                    alt="producto"
                    src={image.imageURL}
                  ></img>
                ) : null}
              </div>
              <div className="custom-file mb-3 col-md-8">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFileLangHTML"
                  onChange={fileChange}
                />
                <label
                  className="custom-file-label"
                  htmlFor="customFileLangHTML"
                  data-browse="Elegir"
                >
                  {image.name === ""
                    ? "Seleccionar archivo"
                    : image.name.substring(12)}
                </label>
              </div>
            </div>
            <button className="btn btn-primary my-4 align-center" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
