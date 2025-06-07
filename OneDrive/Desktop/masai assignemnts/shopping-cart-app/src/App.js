import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: 'Item ' + (items.length + 1),
      price: 100,
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Shopping Cart</h2>
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Total Price: ₹{total}</h3>
    </div>
  );
}

export default App;

