import React from "react";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
function Home() {
  const { Content, Header, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Header className="header" style={{ backgroundColor: "#f3dbb7" }}>
          ¿¿¿Título???
        </Header>
        <Content className="home" style={{ padding: "120px" }}>
          <img
            alt="gif"
            src="https://media.giphy.com/media/hX0wSyZuL1pTzfc0Pz/giphy.gif"
          />
          <br />
          <p>
            Esta es una colección de testimonios. Se trata de relatos que fueron
            desacreditados como falsos por narrar apariciones y coincidencias
            extraordinarias. Sin embargo, las fotografías que acompañan los
            testimnios de esta colección, dan prueba de su absoluta veracidad.
          </p>

          <Link to="/stories">
            <Button
              style={{
                backgroundColor: "#b7c5e2",
                fontFamily: "Julius Sans One"
              }}
            >
              Ir a la colección
            </Button>
          </Link>
        </Content>
        <Footer
          className="footer"
          style={{ width: "100%", height: 120, backgroundColor: "#d1c1a9" }}
        />
      </Layout>
    </div>
  );
}
export default Home;
