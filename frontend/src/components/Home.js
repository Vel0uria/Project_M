import React from "react";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
function Home() {
  const { Content, Header, Footer } = Layout;
  return (
    <div>
      <Layout style={{ backgroundColor: "#daaa0026" }}>
        <Header
          className="header"
          style={{ backgroundColor: "#9b2b1f00", borderColor: "red" }}
        >
          <h1>ENTELEQUIAS</h1>
        </Header>
        <Content className="home" style={{ padding: "120px" }}>
          <img
            alt="gif"
            src="https://media2.giphy.com/media/Pn63eMJSiTgsg/giphy.gif"
            //https://benjaminlouche.files.wordpress.com/2014/11/mulholland-drive.gif
            //https://media.giphy.com/media/hX0wSyZuL1pTzfc0Pz/giphy.gif
          />

          <p>
            "Magia en el escenario mientras cae la lluvia. Un público que no
            distingue entre magia e ilusión y al que le daría igual que todas
            las ilusiones fueran reales."
            <br />
            N. G.
          </p>

          <Link to="/stories">
            <Button
              className="button"
              style={{
                backgroundColor: "#185e90",
                fontFamily: "Lexend Deca",

                // color: "#775867"

                fontColor: "#442429"
              }}
            >
              IR A LA COLECCIÓN
            </Button>
          </Link>
        </Content>
        <Footer
          className="footer"
          style={{ width: "100%", height: 120, backgroundColor: "#cadce2" }}
        />
      </Layout>
    </div>
  );
}
export default Home;
