import React, { Fragment, useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardList from "./CardList";
import Slider from "./Slider";
import "../static/style.css";
import IndexHeader from "./IndexHeader";
import { useParams } from "react-router-dom";
import axios from 'axios'
import ErrorScreen from "../screens/ErrorScreen";
import LoadingScreen from "../screens/LoadingScreen";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Orientation from "./Orientation";



function Index({ }) {
  const { idpessoa, idpedidoVenda } = useParams();
  const [rangeValue, setRangeValue] = useState(2);
  const [data, setObj] = useState('')
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const [url, setUrl] = useState('')
  const [timeout, setTimeout] = useState(false)
  const notify = () => toast("Wow so easy!")
  const errToast = () => toast.error("Ops, erro ao carregar o conteúdo.")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)
  const [landscape, setLandscape] = useState(false)
  const [showSlider, setShowSlider] = useState(true)
  const [device, setDevice] = useState('')




  /* var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight; */
  var urlTest = 'https://sistemaagely.com.br/ajax?tela=GetVersaoMobileTeste&linkCompleto=true';
  var ulrReal = 'https://sistemaagely.com.br/ajax?tela=GetVersaoMobile&linkCompleto=true';

  const onChangeSlider = (e) => {
    setRangeValue(parseInt(e.target.value));
  };

  useEffect(() => {
    /* document.body.style.backgroundColor = "gray" */
    //icone e nome da pagina são mudados no index.html -- no src/public
    var titleList = document.getElementsByTagName('title')
    var title = titleList[0]
    var icon = document.getElementById('icon-tag')

    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setDevice("tablet");
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) { 
      if(screenHeight < screenWidth){
        setShowSlider(false)
        setLandscape(true)
      } else {
        setShowSlider(true)
        setLandscape(false)
      }
      setDevice("mobile");
    } else {
      setLandscape(false)
      setShowSlider(false)
      setDevice("desktop");
    }

    
    //Mudar nome da empresa
    title.textContent = "Agely"
    
    axios({
      method: 'get',
      url: ulrReal, //mudar essa variavel para teste/nao teste -- urlTest ou urlReal
    })
      .then(function (response) {
        axios({
          method: 'post',
          url: /* 'http://127.0.0.1:8888/serverIntimaPassion?service=getListaLink' */  'http://127.0.0.1:8888/serverIntimaPassion?service=getDetalhesPedido'  /* response.data + '/serverBaseAgely?service=getListaLink' */,
          data: {
            /*hash: hashParam*/
            idpessoa: idpessoa,
            idpedidoVenda: idpedidoVenda
          },
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 400000,
        })
          .then(function (response) {
            var itens = response.data.obj.itens
            
            
            setObj(itens)
            /* document.body.style.backgroundColor = "white" */
            setLoading(false)

            /* window.screen.orientation.lock("portrait-primary") */
          })
          .catch(function (error) {
            console.log(error);
            /* document.body.style.backgroundColor = "white" */
            errToast()
            setErr(true)
          });
      })
      .catch(function (error) {
        console.log(error);
        setErr(true)
      });
  }, []);

  /* useEffect(() => {
    console.log(window.innerHeight)
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)
  }) */

  /* console.log()
  window.addEventListener('orientationchange', function(){
    console.log('aqui')
  }) */

  const test = () =>{
    var x = rangeValue
    setLandscape(true)
    setRangeValue(0)
    /* setRangeValue(x) */
  }

  const test2 = () =>{
    var x = rangeValue
    setLandscape(!landscape)
    setShowSlider(true)
    setRangeValue(0)
    /* setRangeValue(x) */
  }

  window.addEventListener('orientationchange', function () {
    switch (window.orientation) { case -90: case 90: {test()}; break; default: test2(); break; }
    /*     setScreenHeight(window.innerHeight)
        setScreenWidth(window.innerWidth)   */
  });

  return (
    <Fragment>
      
       {loading ? <LoadingScreen></LoadingScreen>
        : !landscape ? <Container fluid className="pb-2 pr-2 pl-2 " >
          <Row className='pb-5' style={{ backgroundColor: 'white' }}>
            <IndexHeader></IndexHeader>
          </Row>
          <Row className='pt-3'>
            {
              !showSlider ? "" : <Slider
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
                xs={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 :4}
                sm={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
                md={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 6}
                lg={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 6}
                xl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
                xxl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
                key={index * 11}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardList data={data} key={index} value={rangeValue} idpessoa={idpessoa} idpedidoVenda={idpedidoVenda}  ></CardList>
              </Col>
            ))}
          </Row>
        </Container> : <Orientation />}
    </Fragment>
  );
}

export default Index;

