import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, List, Row, Col, Layout } from "antd";
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
    <Layout style={{ backgroundColor: "#e6e6e6" }}>
      <div className="cards" style={{ margin: "5%" }}>
        {stories.map(story => {
          return (
            <div key={story._id}>
              {!story ? (
                <p>Loading</p>
              ) : (
                <List
                  display="flex"
                  justify="space-evenly"
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
                          // hoverable
                          style={{
                            //backgroundColor: "#d9e6f2",
                            // borderColor: "#185e90",
                            //fontSize: "0.9rem"
                          }}
                        >
                          <p>{story.title}</p>
                          <div className="cardImg" style={{ backgroundImage: `url(${story.image})`}}/>
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
