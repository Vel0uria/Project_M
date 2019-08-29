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
    <div>
      <h2>{story.title}</h2>
    </div>
  );
}

export default Detail;
