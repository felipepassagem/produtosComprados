import React, { Fragment, useState, useEffect } from "react";
import { Container, Card, Col, Row, Form, Input, Nav } from "react-bootstrap";
import CardList from "./CardList";
import Slider from "./Slider";
import "../static/style.css";
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from 'axios'
import LoadingSpinner from "./LoadingSpinner";
import ErrorScreen from "../screens/ErrorScreen";


function Index({ }) {
  const { hashParam } = useParams();
  const [rangeValue, setRangeValue] = useState(2);
  const [data, setObj] = useState('')
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const [url, setUrl] = useState('')
  const [timeout, setTimeout] = useState(false)

  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var urlTest = 'https://sistemaagely.com.br/ajax?tela=GetVersaoMobileTeste&linkCompleto=true';
  var ulrReal = 'https://sistemaagely.com.br/ajax?tela=GetVersaoMobile&linkCompleto=true';

  const onChangeSlider = (e) => {
    setRangeValue(parseInt(e.target.value));

  };

  useEffect(() => {
    document.body.style.backgroundColor = "gray"
    try {
      var localData = JSON.parse(localStorage.getItem('localData'))
      setObj(localData)
      document.body.style.backgroundColor = "white"
      setLoading(false)
      console.log("ASDASDADS")
    } catch(er) {
      /* console.log(er) */
    }



    //icone e nome da pagina são mudados no index.html -- no src/public
    //var titleList = document.getElementsByTagName('title')
    //var title = titleList[0]
    //Mudar nome da empresa
    //title.textContent = "Nome da empresa"    
    var test = 'הي4l89KXtX4sXKtXL9K?4ي<_X!#9שي4l89KXtX4d9K4lIl9t4ي<_X!#9שي4l89KXtX4dXA4lIl9t4ي<_X!#9שي4l89KXtX4p9!9iXKtAXي<_X!#9שي_A!?l4Il9t4dXRي<01yozשي_A!?l4Il9t4dAKي<|Vozשي_A!?l4N4KX!A8X89#ي<يny1يשي_A!?l4NXLXK74#ي<يy*V|שnV0Jשy*0Vيשي)4K?9Al4ي<1שيA8NXO9!XIl9t4ي<0nJשيA8FA?lAK9GX?9H4lAXي<c|Jב'
    var test2 = '??)4K?9Al4?\u003c?V???A8NXO9!XIl9t4?\u003c?V???A8FA?lAK9GX?9H4lAX?\u003c?V??'
    /* if (hashParam) {
      console.log('aqui')
    } */
    axios({
      method: 'get',
      url: urlTest, //mudar essa variavel para teste/nao teste -- urlTest ou urlReal
    })
      .then(function (response) {
        axios({
          method: 'post',
          url: /* response.data + '/serverIntimaPassion?service=getListaLink' */ /* 'https://teste.sistemaagely.com.br:8145/agely190722/serverIntimaPassion?service=getListaLink' */    'http://127.0.0.1:8888/serverIntimaPassion?service=getListaLink'    /* response.data + '/serverIntimaPassion?service=getListaLink' */,
          data: {
            hash: test,
          },

          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000
          
        })
          .then(function (response) {
            console.log(response)
            var temp = response.data.arrayObj
            if (temp == undefined) {
              setErr(true)
            }
            setObj(response.data.arrayObj)
            localStorage.setItem('localData', JSON.stringify(temp))
            document.body.style.backgroundColor = "white"
            setLoading(false)
          })
          .catch(function (error) {
            console.log(error);
            setErr(true)
            
          });
      })
      .catch(function (error) {
        console.log(error);
        setErr(true)
      });






    /* axios({
      method: 'post',
      url: 'https://teste.sistemaagely.com.br:8145/agely18072022upc/serverIntimaPassion?service=getListaLink',
      data: {
        hash: test,
      },

    })
      .then(function (response) {
        console.log(response)
        var temp = response.data.arrayObj
        setObj(response.data.arrayObj)
        localStorage.setItem('localData', JSON.stringify(temp))
        document.body.style.backgroundColor = "white"
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      }); */
  }, []);



  return (
    <Fragment>
      {loading && err == false && timeout == false ? <Col style={{ width: screenWidth }} className="justify-content-center spinner-col"><LoadingSpinner className='loadin-spinner pt-5'></LoadingSpinner></Col>
        : !loading && err == false && timeout == false ? <Container fluid className="pb-2 pr-2 pl-2 " >
          <Row className='pb-5' style={{ backgroundColor: 'white' }}>
            <Header></Header>
          </Row>
          <Row className='pt-1'>
            {
              screenWidth > screenHeight ? "" : <Slider
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }

                }
                min={0}
                max={2}
                step={1}
                defaultLength={rangeValue}
                value={rangeValue}
                onChangeValue={onChangeSlider}
                linearGradientcolor="black"
                rangeBackgrondColor="red"
                sliderThumbColor="red"
              ></Slider>

            }
          </Row>

          <br></br>
          <Row xs={1} md={2} className="g-4 pt-3">
            {data.map((data, index) => (
              <Col className={screenHeight > screenWidth && rangeValue == 1 ? 'justify-content-center d-flex p-3' : 'justify-content-center d-flex p-1'}
                xs={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
                sm={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
                md={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
                lg={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
                xl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
                xxl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}

                key={index * 11}
                style={{

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardList data={data} key={index} value={rangeValue}></CardList>
              </Col>
            ))}
          </Row>
        </Container> : <ErrorScreen></ErrorScreen>}
    </Fragment>


  );
}

export default Index;





{/* <Fragment>
      <Container fluid className="pb-2 pr-2 pl-2 " >
        <Row className='pb-5' style={{backgroundColor: 'white'}}>
          <Header></Header>
        </Row>
          <Row className='pt-1'>
          {
            screenWidth > screenHeight ? "" : <Slider
            style={{
              alignItems: "center",
              justifyContent: "center",
            }

            }
            min={0}
            max={2}
            step={1}
            defaultLength={rangeValue}
            value={rangeValue}
            onChangeValue={onChangeSlider}
            linearGradientcolor="black"
            rangeBackgrondColor="red"
            sliderThumbColor="red"
          ></Slider>

          }
          </Row>
        
        <br></br>
        <Row xs={1} md={2} className="g-4 pt-3">
          {data.map((data, index) => (
            <Col className={screenHeight > screenWidth && rangeValue == 1 ? 'justify-content-center d-flex p-3' : 'justify-content-center d-flex p-1'}
              xs={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              sm={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              md={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              lg={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              xl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              xxl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}

              key={index * 11}
              style={{

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardList data={data} key={index} value={rangeValue}></CardList>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment> */}
