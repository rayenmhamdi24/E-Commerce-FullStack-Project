import React, { useEffect, useState } from "react";
import axios from "axios";
import PcList from "./ListPc.jsx";
import AddPc from "./AddPc.jsx";
import Search from "./Search.jsx";
const App = () => {
  const [pc, setPc] = useState([]);
  const [view, setView] = useState("home");
  const [id, setId] = useState(null);
  const [search, setSearch] = useState("");

  const fetch = () => {
    axios
      .get("http://localhost:5000/api/pc/getAll")
      .then((res) => setPc(res.data))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch();
  }, []);

  const handelAdd = (body) => {
    axios
      .post("http://localhost:5000/api/pc/add", body)
      .then((res) => {
        console.log("added successfully");
        fetch();
      })
      .catch((error) => console.log("error", error));
  };

  const handelDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/pc/delete/${id}`)
      .then((res) => {
        console.log("deleted successfully");
        fetch();
      })
      .catch((error) => console.log("error", error));
  };

  const changeview = (variable) => {
    setView(variable);
  };

  const getId = (id) => {
    setId(id);
  };

  const filteredPc = pc.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            PC Shop
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setView("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setView("add")}>
                  Add PC
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setView("search")}
                >
                  Search
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {view === "add" ? (
        <AddPc changeview={changeview} handelAdd={handelAdd} />
      ) : view === "home" ? (
        <PcList
          getId={getId}
          changeview={changeview}
          pc={pc}
          handelDelete={handelDelete}
        />
      ) : (
        <Search search={search} pc={filteredPc} />
      )}
    </div>
  );
};

export default App;
