import React, { useEffect, useState } from "react";
import axios from "axios";
function Detail(props) {
  const [story, setStory] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/stories/${props.match.params.id}`)
      .then(({ data }) => {
        console.log(data);
        setStory(prevState => {
          return { ...prevState, ...data.story };
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.match.params.id]);
  return (
    <div className="content" style={{ backgroundColor: "#dbd8d8" }}>
      <h2>
        <b style={{ color: "#b93730" }}>{story.title}</b>
      </h2>
      <p>{story.description}</p>
      <img alt="img" src={story.image} />
    </div>
  );
}

export default Detail;
