import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [paginatedCharacters, setPaginatedCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const charactersPerPage = 10;
  const currentPageRef = useRef(1);

  
  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters = [];
      let nextUrl = "https://rickandmortyapi.com/api/character";

      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        nextUrl = data.info.next;
      }

      setCharacters(allCharacters);
      setTotalPages(Math.ceil(allCharacters.length / charactersPerPage));
    };

    fetchCharacters();
  }, []);


  useEffect(() => {
    const start = (currentPageRef.current - 1) * charactersPerPage;
    const end = start + charactersPerPage;
    setPaginatedCharacters(characters.slice(start, end));
  }, [characters]);

  const handlePageClick = (pageNum) => {
    currentPageRef.current = pageNum;
    const start = (pageNum - 1) * charactersPerPage;
    const end = start + charactersPerPage;
    setPaginatedCharacters(characters.slice(start, end));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Rick and Morty Characters</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {paginatedCharacters.map((char) => (
          <div
            key={char.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "150px",
              textAlign: "center",
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{char.name}</p>
          </div>
        ))}
      </div>

  
      <div style={{ marginTop: "2rem" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            style={{
              margin: "0.25rem",
              padding: "0.5rem 1rem",
              backgroundColor:
                currentPageRef.current === page ? "#007bff" : "#eee",
              color: currentPageRef.current === page ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;