import React, { useEffect, useState } from "react";
import axios from "axios";
function Newstory() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pics")
      .then(({ data }) => {
        setPics(prevState => {
          return [...prevState, ...data.pics];
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {pics.map(pic => {
        return <img src={pic.ruta} />;
      })}
    </div>
  );
}

export default Newstory;
