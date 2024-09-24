import React,{useEffect} from 'react'
import '../css/landingpage.css'
import Header from '../Components/header/Header'
import Serviceswiper from '../Components/swiper/Serviceswiper'
import { Row, Col } from 'react-bootstrap'
import whywebg from '../Assets/landingpagewhywe.jpg'
import Package from '../Components/landingpagepackage/Package'
import customizedbg from '../Assets/customizedbg.jpg'
import Getintouch from '../Components/Getintouch'
import { Link } from 'react-router-dom';

const Landingpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Landingpage'>

      <div className='landingpage-bgimg'>
        <div className='landingpage-blackdrop' >
          {/* <Header /> */}
          <div className='landing-content'>
            <p className='landing-title'>Empower your story <br /> Self Publish with confidence</p>
            <p className='landing-subtitle'>At Ritera, We're passionate about transforming ideas <br /> into stories and visions into masterpiece</p>
           <a href='#landingpage-package'><button className='landing-button'> Get Start</button></a>
          </div>
        </div>

      </div>

      <div className='landingpage-whywe'>
        <div className='landingpage-whywe-content'>
          <Row>
            <Col lg="6" md="6" sm="1" className='landingpage-col-centering'>
         
                <img  src={whywebg} className='landingpage-whywe-leftimg'></img>
              
            </Col>

            <Col lg="6" md="6" sm="1" className='landingpage-col-centering'>
              <div >
                <h2>Why us ?</h2>
                <p><b>Confused about choosing the best publishing house for your book?</b> Look no further! At Ritera Publishing, we offer an unparalleled publishing experience with exclusive services you won’t find anywhere else. Our complete motto is to make the publishing process smoother and comfortable for you. With the shared love we both have for literature,
                  Ritera decided to offer some special services exclusively!</p>
                <Link to={'/aboutus'}>
                <button className='Whywe-button'> Learn more</button>
                </Link> 
              </div>

            </Col >
          </Row>
        </div>
      </div>

      <div className='landingpage-service'>
        <div className='landingpage-service-content'>
          <h2>Services</h2>
          <Serviceswiper />
        </div>

      </div>

      <div className='landingpage-package' id='landingpage-package'>
        <div className='landingpage-package-content'>
          <h2>Packages</h2>
          <Package />
        </div>
      </div>

      <div className='landingpage-customizedroyalty'>
        <div className='landingpage-customizedroyalty-content'>
          {/* <Row> */}
            {/* <Col lg="12" md="6" sm="1" className='landingpage-col-centering'> */}
<div className='landingpage-col-centering'>
              <div className='landingpage-customizedroyalty-blackdrop'>
                <div className='landingpage-customizedroyalty-insidecontent'>
                  <h2>Customized Package</h2>
                  <p> As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. </p>
                  <Link to={'/customize-package'}><button className='landingpage-customizedroyalty-button'> Learn more</button></Link>
                </div>
              </div>
              </div>
            {/* </Col> */}

            {/* <Col lg="12" md="6" sm="1" className='landingpage-col-centering'> */}
              {/* <div className='landingpage-customizedroyalty-blackdrop'>
                <img src={customizedbg} className='landingpage-customizedroyalty-img'></img>
                <div className='landingpage-customizedroyalty-insidecontent'>
                  
                  <h2>Customized Package</h2>
                  <p> As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. </p>
                  <button className='Whywe-button'> Learn more</button>
                
                </div>

              </div> */}
            {/* </Col > */}
          {/* </Row> */}
        </div>
      </div>

      {/* <div className='landingpage-article'>
        <div className='landingpage-article-content'>
          <h2>Article</h2>
          <div >
            <Row>
              <Col>
                <div className='landingpage-article-container'>
                  <Row>
                    <Col lg='3'>

                      <img src={whywebg} className='landingpage-article-img'></img>
                    </Col>
                    <Col lg='9' className='landingpage-article-col'>
                      <p className='landingpage-article-description'>As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. While we hold respect for other publishers in the field.....see more</p>
                      <button className='landingpage-article-button'> See more</button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <div className='landingpage-article-container'>
                  <Row>
                    <Col lg='3'>

                      <img src={whywebg} className='landingpage-article-img'></img>
                    </Col>
                    <Col lg='9' className='landingpage-article-col'>
                      <p className='landingpage-article-description'>As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. While we hold respect for other publishers in the field.....see more</p>
                      <button className='landingpage-article-button'> See more</button>
                    </Col>
                  </Row>
                </div>
              </Col>

            </Row>
            <button className='landingpage-article-button2'> See all Article</button>
          </div>
        </div>

      </div> */}

      <div className='landingpage-hookredirect'>
        <Row className='landingpage-hookredirect-content'>
          <Col lg="12" md='6' sm="4" >
            <p>The People Behind Ritera Publishing</p>
          </Col>

          <Col lg="12" md='6' sm="4" className=' landingpage-hookredirect-buttoncol'>
            <Link to={'/people-behind-ritera'}>
              <button>Explore</button>
            </Link>
          </Col  >
        </Row>
      </div>

      <div className='landingpage-getintouch'>
        <Getintouch />
      </div>





    </div>
  )
}

export default Landingpage