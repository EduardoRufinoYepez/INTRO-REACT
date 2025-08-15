import { useReducer, useRef, useCallback } from "react";

const initialState = { products: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        products: [
          ...state.products,
          { id: Date.now(), name: action.name, quantity: 1 }
        ]
      };
    case "increment":
      return {
        products: state.products.map((p) =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      };
    case "decrement":
      return {
        products: state.products.map((p) =>
          p.id === action.id && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
      };
    case "remove":
      return {
        products: state.products.filter((p) => p.id !== action.id)
      };
    default:
      return state;
  }
}

function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  const handleAddProduct = useCallback(() => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = "";
    }
  }, []);

  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch({ type: "remove", id });
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>🛒 Gestor de Inventario</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre del producto"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleAddProduct}>Agregar Producto</button>

      <ul style={{ marginTop: "20px" }}>
        {state.products.map((product) => (
          <li key={product.id} style={{ marginBottom: "8px" }}>
            {product.name} - Cantidad: {product.quantity}
            <button onClick={() => handleIncrement(product.id)}>+</button>
            <button onClick={() => handleDecrement(product.id)}>-</button>
            <button onClick={() => handleRemove(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryManager;
