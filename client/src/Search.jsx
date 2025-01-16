import React from "react";
function Search({ pc, search }) {
  const filteredPc = pc.filter((element) =>
    element.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="search-container">
      {filteredPc.map((element) => (
        <div key={element.id}>
          <h1>{element.name}</h1>
          <img
            src={element.imageUrl}
            alt={element.name}
            style={{ width: "100px" }}
          />
          <p>Price: ${element.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
