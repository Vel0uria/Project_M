import React from "react";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
function Home() {
  const { Content, Header, Footer } = Layout;
  return (
    <div>
      <Layout style={{ backgroundColor: "#dbd8d8" }}>
        <Header
          className="header"
          style={{ backgroundColor: "#dbd8d8", height: "50vh" }}
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
                backgroundColor: "#b93730",
                fontFamily: "Julius Sans One",
                fontSize: "0.9rem",
                color: "#daaa0026",
                marginTop: "6vh"
           
              }}
            >
              <strong>IR A LA COLECCIÓN</strong>
            </Button>
          </Link>
        </Content>
        <Footer className="footer" style={{ backgroundColor: "#262626" }} />
      </Layout>
    </div>
  );
}
export default Home;
