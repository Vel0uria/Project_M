import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, List, Layout } from "antd";
import axios from "axios";

function Stories() {
  const { Content } = Layout;
  const [stories, setStory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/stories")
      .then(({ data }) => {
        setStory(prevState => {
          return [...prevState, ...data.stories];
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <div style={{ margin: "5%" }}>
        {stories.reverse().map(story => {
          return (
            <div key={story._id}>
              {!story ? (
                <p>Loading</p>
              ) : (
                <List
                id="collection"
                  grid={{
                    column: 4,
                  
                  }}
                >
                    <List.Item>
                      <Link to={`/stories/${story._id}`}>
                        <Card
                          // title={story.title}
                          className="card"
                          size="small"
                           hoverable
                        >
                          <div className="cardImg" style={{ backgroundImage: `url(${story.image})`}}/>
                          <p>{story.title}</p>
                        </Card>
                      </Link>
                    </List.Item>
                </List>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Stories;
