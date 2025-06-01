import React, { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#f0fff4"; 
    setFocused(true);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Focus Input using useRef</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus"
        style={{ padding: "0.5rem", fontSize: "1rem", marginRight: "1rem" }}
      />
      <button onClick={handleFocus}>Focus Input</button>
      {focused && <p style={{ marginTop: "1rem", color: "green" }}>Focused!</p>}
    </div>
  );
}

export default App;
