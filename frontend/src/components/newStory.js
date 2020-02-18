import React, { useEffect, useState,} from "react";
import axios from "axios";
import { Card, Layout, List, Col, Row, Form, Input, Button, Pagination } from "antd";
import useForm from "../hooks/useForm";
import Swal from "sweetalert2";

function Newstory(props) {
  const [pics, setPics] = useState([]);
  const [pic, setPic] = useState({});
  const [show, showForm] = useState(false);
  const [alert, showAlert] = useState(false);
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

  console.log(alert);
  

  const createStory = () => {
    axios
      .post("http://localhost:3000/newstory", { ...form, image })
      .then(({ data }) => {
        console.log(data);
        return data.title;
        
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteImage = id => {
    Swal.fire({
      title: "¿Guardar historia?",
      text: "No podrás hacer cambios después",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí", 
      backdrop:`
      rgba(0,0,123,0.4)
      `,
      showClass: {
        popup: 'fadeInLeftBig'
      },
    }).then(res => {
      console.log(res.value);
      if (res.value) {
    axios
      .delete(`http://localhost:3000/pics/${id}`)
      .then(({ data }) => {
        createStory();
        Swal.fire("¡Tu historia ha sido agregada a la colección!", data.msg, "success");
        props.history.push("/stories")
      })
      .catch(err => {
        console.log(err);
      });
    } else if (
      res.dismiss === Swal.DismissReason.cancel
    ) {
      showForm(form)
    } 
    else {
      return 
    }
  })
  };

const required = () => {
  if (form.title === undefined || form.description === undefined){
      showAlert(!alert)
  }
}

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
              <img src={pic.ruta} alt="db_image" />
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
           {  alert &&
            <p>Este campo es obligatorio</p>}
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
              { alert &&
                <p>Este campo es obligatorio</p>
              }
            </Form.Item>
            <Form.Item>
              <Button onClick={() => showForm(!show)}>Elegir otra foto</Button>
            </Form.Item>
            <Button
              onClick={() => {
               if(form.title || form.description === undefined){
                 showForm(form)
                 showAlert(!alert)
               }
                else{showForm(!show)}
                // createStory();

                deleteImage(pic._id);
              }}
            className="saveBtn">
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
                  // pagination={{
                  //   onChange: page => {
                  //     console.log(page);
                  //   },
                  //   pageSize: 3,
                  // }}
                >
                  <List.Item   >
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



