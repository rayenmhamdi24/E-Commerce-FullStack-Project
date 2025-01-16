import React from 'react';

function ListPc({ pc, handelDelete, changeview, getId }) {
  return (
    <div className="pc-list-container">
      {pc.map((element) => {
        const handleUpdate = () => {
          getId(element.id);
          changeview("update");
        };

        return (
          <div className="card" style={{ width: "18rem" }} key={element.id}>
            <img className="card-img-top" src={element.imageUrl} alt={element.name} />
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              <p className="card-text">Price: ${element.price}</p>
              <p className="card-text">Quantity: {element.quantity}</p>
              <button className="btn btn-danger" onClick={() => handelDelete(element.id)}>Delete</button>
             
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListPc;