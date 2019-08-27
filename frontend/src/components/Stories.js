import React, { useEffect, useState } from "react";
import { Card, Layout, List, Row, Col } from "antd";
import axios from "axios";

function Stories() {
  const [stories, setStory] = useState([]);
  const { Header, Footer, Sider, Content } = Layout;
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
              <div className="content">
                <List
                  grid={{
                    column: 4,
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3
                  }}
                >
                  <Col display="flex" justify="space-between">
                    <List.Item>
                      <Card
                        className="card"
                        hoverable
                        style={{
                          width: 310,
                          height: 310,
                          backgroundColor: "#EFEEEE"
                        }}
                        // cover={}
                      >
                        <img alt="example" src={story.image} />
                        <h2>{story.title}</h2>
                      </Card>
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
