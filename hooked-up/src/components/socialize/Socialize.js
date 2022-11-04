import React, { useState, useEffect } from "react";
import "./socialize.css";

function Socialize() {
  let [dataType, setDataType] = useState("Posts");
  let [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        console.log(items);
      });
  }, [dataType]);

  return (
    <>
      <div className="btnDiv">
        <button onClick={() => setDataType("Posts")} className="galleryBtn">
          Posts
        </button>
        <button onClick={() => setDataType("Comments")} className="galleryBtn">
          Comments
        </button>
        <button onClick={() => setDataType("Users")} className="galleryBtn">
          Users
        </button>
      </div>
      <div className="listDiv">
        <h1>{dataType}</h1>
        {items.map((item) => (
          <pre className="listItem" key={item.id}>
            {JSON.stringify(item)}
          </pre>
        ))}
      </div>
    </>
  );
}

export default Socialize;
