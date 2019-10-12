import React from "react";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
function Home() {
  const { Content, Header, Footer } = Layout;
  return (
    <div>
      <Layout style={{ backgroundColor: "#f8f8f8" }}>
        <Header
          className="header"
          style={{ backgroundColor: "#f8f8f8", height: "50vh" }}
        >
          <img
            className="backImg"
            alt="gif"
            src="https://thumbs.gfycat.com/WeeklyScornfulKillifish-size_restricted.gif"
            //https://media.giphy.com/media/YnjxvrvonPCcDtdppt/giphy.gif
            //https://benjaminlouche.files.wordpress.com/2014/11/mulholland-drive.gif
            //https://media.giphy.com/media/ANkISQyedbDG0/giphy.gif
          />
          <img className="frontImg" alt="logo" src="../Logo.png" />
          <h1>
            <b>ENTELEQUIAS</b>
          </h1>
        </Header>
        <Content className="home" style={{ height: "40vh" }}>
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
                fontFamily: "Lexend Deca",
                fontSize: "0.9rem",
                color: "#daaa0026"
                // color: "#775867"

                // fontColor: "#442429"
              }}
            >
              IR A LA COLECCIÓN
            </Button>
          </Link>
        </Content>
        <Footer className="footer" style={{ backgroundColor: "#262626" }} />
      </Layout>
    </div>
  );
}
export default Home;
