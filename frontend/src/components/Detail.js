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
    <div className="content" style={{ backgroundColor: "#e6e6e6" }}>
      <h2>
        <b style={{ color: "#1f191f" }}>{story.title}</b>
      </h2>
      <br/>
      <div className='textImg'>
      <img alt="img" src={story.image} />
      <p>{story.description}</p>
      </div>
      
    </div>
  );
}

export default Detail;
