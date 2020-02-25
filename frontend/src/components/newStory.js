import React, { useEffect, useState,} from "react";
import axios from "axios";
import { Card, Layout, List, Col, Row, Form, Input, Button, Pagination } from "antd";
import useForm from "../hooks/useForm";
import Swal from "sweetalert2";



function Newstory(props) {
  const [pics, setPics] = useState([]);
  const [pic, setPic] = useState({});
  const [info, saveInfo] = useState([]);
  const [show, showForm] = useState(false);
  const [alert, showAlert] = useState(false);
  const [form, handleInputs] = useForm();
  const image = pic.ruta;
  const baseURL = "http://localhost:3000"
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
  }, [baseURL]);

  const getOnePic = id => {
    axios
      .get(`http://localhost:3000/pics/${id}`)
      .then(({ data }) => {
        console.log(data);
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
        localStorage.setItem("title", JSON.stringify(data.story.title))
        localStorage.setItem("description", JSON.stringify(data.story.description))  
        saveInfo(prevState=>{
          return [...prevState, ...data.story]
        })
        console.log(localStorage);
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
        popup: 'animated fadeInLeft'
      },
      hideClass: {
        popup: 'animated fadeOutUp'
      }
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


  return (
    <Layout>     
      <h2 id="newStoryHeader">Elige la imagen que más se asimile <br/> a los personajes o lugares de tu historia</h2>
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
               if(form.title === undefined || form.description === undefined){
                  showForm(form)
                 showAlert(!alert)
               }
                else{showForm(!show)
                  deleteImage(pic._id);
                }
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
                    <div style={{ backgroundImage: `url(${pic.ruta})`}}/>
                      <Button
                      className="chooseBtn"
                        onClick={() => {
                          showForm(!show);
                          getOnePic(pic._id);
                        }}
                      >
                        <p>+</p>
                      
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



