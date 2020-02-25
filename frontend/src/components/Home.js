import React from "react";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
import Animate from "animate.css-react";
function Home() {
  console.log(Animate);
  
  const { Content, Header, Footer } = Layout;
  return (
    <div>
      <Layout style={{ backgroundColor: "black" }}>
        <Header
          className="header"
          style={{ backgroundColor: "black", height: "50vh" }}
        >
          <div id="logo">
            <Animate
              // enter="fadeInRight"
              // appear="fadeInRight"
              durationAppear={5000}
              durationEnter={1000}
            >
              <img className="logo" alt="logo" src="../prueba_web.png" />
            </Animate>

            <img className="logo" alt="logo" src="../prueba_web2.png" />
          </div>
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
