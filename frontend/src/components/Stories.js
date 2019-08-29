import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, List, Row, Col } from "antd";
import axios from "axios";

function Stories() {
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
    <div>
      <h1>Title</h1>
      {stories.map(story => {
        return (
          <div key={story._id}>
            {!story ? (
              <p>Loading</p>
            ) : (
              <div>
                <List
                  grid={{
                    column: 4,
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 4
                  }}
                  style={{ marginLeft: "5%" }}
                >
                  <Col display="flex" justify="space-between">
                    <List.Item>
                      <Link to={`/stories/${story._id}`}>
                        <Card
                          title={story.title}
                          className="card"
                          size="small"
                          hoverable
                          style={{
                            width: 310,
                            height: 310
                            // backgroundColor: "#b7c5e2"
                          }}
                        >
                          <img alt="example" src={story.image} />
                          {/* <h2>{story.title}</h2> */}
                        </Card>
                      </Link>
                    </List.Item>
                  </Col>
                </List>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
