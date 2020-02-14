import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Layout, List, Col, Row, Form, Input, Button } from "antd";
import useForm from "../hooks/useForm";


function Newstory() {
  const [pics, setPics] = useState([]);
  const [pic, setPic] = useState({});
  // const [img, deleteImg] = useState({});
  const [show, showForm] = useState(false);
  const [form, handleInputs] = useForm();
  const image = pic.ruta;

  useEffect(() => {
    axios
      .get("http://localhost:3000/pics")
      .then(({ data }) => {
        setPics(prevState => {
          return [...prevState, ...data.pics];
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getOnePic = id => {
    axios
      .get(`http://localhost:3000/pics/${id}`)
      .then(({ data }) => {
        const pic = data.picture;
        setPic(pic);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const createStory = () => {
    axios
      .post("http://localhost:3000/newstory", { ...form, image })
      .then(({ data }) => {
        return data.title;
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteImage = id => {
    id.preventDefault()
    axios
      .delete(`http://localhost:3000/pics/${id}`)
      .then(({ data }) => {
        console.log(data);
        // const img = data.picture
        // deleteImg(img)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div>
        {show &&
          <Form className="form">
            <Form.Item>
              <Button onClick={() => showForm(!show)} className="close">
                X
              </Button>
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="title"
                placeholder="Ciudad, País, Año"
                onChange={e => handleInputs(e)}
              />
            </Form.Item>
            <Form.Item>
              <Input
                className="description"
                name="description"
                type="text"
                placeholder="Descripción"
                onChange={e => handleInputs(e)}
              />
            </Form.Item>
            <Form.Item>
              <img src={pic.ruta} alt="db_image" />
              <Input type="text" name="image" placeholder={pic.ruta} />
            </Form.Item>
            <Form.Item>
              <Button>Elegir otra foto</Button>
            </Form.Item>
            <Button
              onClick={() => {
                createStory();
                deleteImage(pic._id);
              }}
            >
              Guardar
            </Button>
          </Form>}
        {pics.map(pic => {
          return (
            <div key={pic._id}>
              <div className="cards">
                <List
                  className="list"
                  grid={{
                    column: 4,
                    gutter: 16
                  }}
                >
                  <List.Item>
                    <Card className="dbImages">
                      <img src={pic.ruta} alt="db_images" />
                      <Button
                        onClick={() => {
                          showForm(!show);
                          getOnePic(pic._id);
                        }}
                      >
                        Elegir
                      </Button>
                    </Card>
                  </List.Item>
                </List>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Newstory;
