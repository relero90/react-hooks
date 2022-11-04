import React, { useState, useEffect } from "react";
import "./dogs.css";

function Dogs() {
  let [image, setImage] = useState("");

  const fetchDogs = async () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    try {
      // call to random dog photo api
      let res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.status);
      }
      // parsing response --> {message: <imgUrl>, ...}
      let data = await res.json();
      setImage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchDogs, []);

  return (
    <div className="dogGallery">
      <button onClick={fetchDogs} className="galleryBtn">
        <span role="img" aria-label="back emoji">
          👈
        </span>
      </button>
      <img className="dogImg" src={image} alt="A random dog"></img>
      <button onClick={fetchDogs} className="galleryBtn">
        <span role="img" aria-label="next emoji">
          👉
        </span>
      </button>
    </div>
  );
}

export default Dogs;
