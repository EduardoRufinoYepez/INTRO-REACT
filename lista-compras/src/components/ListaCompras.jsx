import { useState } from "react";

function ListaCompras() {
  // Estado para la lista y el producto nuevo
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // Agregar un nuevo producto
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Eliminar un producto por índice
  const eliminarProducto = (index) => {
    const nuevaLista = productos.filter((_, i) => i !== index);
    setProductos(nuevaLista);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        placeholder="Escribe un producto"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
        style={{ padding: "5px", width: "70%" }}
      />
      <button
        onClick={agregarProducto}
        style={{ marginLeft: "10px", padding: "5px 10px" }}
      >
        Agregar
      </button>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {productos.map((producto, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 0",
              borderBottom: "1px solid #ccc"
            }}
          >
            {producto}
            <button
              onClick={() => eliminarProducto(index)}
              style={{ padding: "3px 6px", background: "red", color: "white", border: "none", borderRadius: "4px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;