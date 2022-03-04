import React from "react";
// import './styles.css'

const Header = (onAdd, showAdd) => {
  return (
    <header className="header">
      <h1>Task tracker</h1>
      <button className="btn" onClick={onAdd}>Add</button>
    </header>
  );
};

export default Header;
