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
    <Layout style={{ backgroundColor: "#f7e8bb" }}>
      <div className="cards" style={{ margin: "5%" }}>
        {stories.map(story => {
          return (
            <div display="flex" justify="space-between" key={story._id}>
              {!story ? (
                <p>Loading</p>
              ) : (
                <List
                  display="flex"
                  justify="space-between"
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
                  style={{}}
                >
                  <Col
                  // display="flex"
                  // justify="space-between"
                  >
                    <List.Item>
                      <Link to={`/stories/${story._id}`}>
                        <Card
                          title={story.title}
                          className="card"
                          size="small"
                          // hoverable
                          style={{
                            width: 310,
                            height: 310,
                            backgroundColor: "#d9e6f2",
                            borderColor: "#185e90"
                          }}
                        >
                          <img alt="example" src={story.image} />
                          {/* <h2>{story.title}</h2> */}
                        </Card>
                      </Link>
                    </List.Item>
                  </Col>
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
