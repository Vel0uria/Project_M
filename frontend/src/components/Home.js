import React, { useEffect, useState } from "react";
import { Button, Layout, List, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "animate.css/animate.css";
import Animate from "animate.css-react";
import axios from "axios";
function Home() {
  const { Content, Header, Footer } = Layout;
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
    <Layout style={{ backgroundColor: "black" }}>
      <Header
        className="header"
        style={{ backgroundColor: "black", height: "50vh" }}
      >
        <div id="logo">
          <img alt="logo" src="../prueba_web.png" />
          <h1 className="animated fadeIn delay-1s">
            <b>ENTELEQUIAS</b>
          </h1>
          <img className="logo" alt="logo" src="../prueba_web2.png" />
        </div>
      </Header>
      <Content className="home" style={{ height: "50vh" }}>
        {/* <p>
            "Magia en el escenario mientras cae la lluvia. Un público que no
            distingue entre magia e ilusión y al que le daría igual que todas
            las ilusiones fueran reales."
            <br />
            N. G.
          </p>
          */}
        <Link to="/stories">
          <Button
            style={{
              backgroundColor: "#262626",
              marginTop: "6vh",
              color: "black"
            }}
          >
            <strong>IR A LA COLECCIÓN</strong>
          </Button>
        </Link>
        <div id="collage">
        {stories.map(story => {
          return (
            <div key={story._id} >
              <List
                className="collage"
                grid={{
                  column: 4,
                  row:8
                }}
              >
                <Row>
                  <Col>
                  <List.Item>
                  <div style={{ backgroundImage: `url(${story.image})` }} />
                </List.Item>
                  </Col>
                </Row>
              
              </List>
            </div>
          );
        })}
        </div>
      </Content>
      <Footer className="footer" style={{ backgroundColor: "#262626" }} />
    </Layout>
  );
}
export default Home;
