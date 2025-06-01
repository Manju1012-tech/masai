import React, { useEffect, useState } from "react";

const TodoPagination = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  const totalPages = Math.ceil(todos.length / todosPerPage);

  const startIndex = (currentPage - 1) * todosPerPage;
  const currentTodos = todos.slice(startIndex, startIndex + todosPerPage);
 
  const goToPrevious = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Todos Pagination</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "0.5rem",
              borderBottom: "1px solid #ccc",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button onClick={goToPrevious} disabled={currentPage === 1}>
          Previous
        </button>

      
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            style={{
              padding: "0.4rem 0.8rem",
              backgroundColor: currentPage === pageNum ? "#007bff" : "#eee",
              color: currentPage === pageNum ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {pageNum}
          </button>
        ))}

        <button onClick={goToNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TodoPagination;
