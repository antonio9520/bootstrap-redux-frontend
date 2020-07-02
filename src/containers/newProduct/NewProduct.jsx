import React, { useState } from "react";
import "./NewProduct.css";
const NewProduct = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    stock: 0,
    precio: 0,
  });
  const [image, setImage] = useState({ file: null, name: "" });

  const onchange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const fileChange = (event) => {
    setImage({
      file: URL.createObjectURL(event.target.files[0]),
      name: event.target.value,
    });
  };
  return (
    <div className="container  ">
      <div className="row justify-content-center mt-5">
        <div className="col-md-10 col-sm-12 mx-4 text-center  border">
          <h2 className="text-center py-2">Nuevo Producto</h2>
          <form>
            <div className="form-row pt-4">
              <div className="col-md-4 mb-3">
                <label htmlFor="input-name">Nombre</label>
                <input
                  name="nombre"
                  type="text"
                  className="form-control"
                  id="input-name"
                  onChange={onchange}
                  required
                ></input>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="input-stock">Stock</label>
                <input
                  name="stock"
                  className="form-control"
                  id="input-stock"
                  type="text"
                  onChange={onchange}
                  required
                ></input>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="input-precio">Precio</label>
                <input
                  name="precio"
                  className="form-control"
                  id="input-precio"
                  type="text"
                  onChange={onchange}
                  required
                ></input>
              </div>
              <div className="col-md-4">
                {image.file ? (
                  <img
                    className="img-producto img-thumbnail rounded float-left"
                    alt="producto"
                    src={image.file}
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
          </form>
          <button className="btn btn-primary my-4 align-center" type="submit">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
