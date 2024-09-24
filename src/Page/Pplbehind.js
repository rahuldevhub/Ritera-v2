import React, { useEffect } from 'react'
import '../css/pplbehind.css'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import prooficon from '../Assets/study.png'
import { Link } from 'react-router-dom';
import Header from '../Components/header/Header'
import sideimg from '../Assets/landingpagewhywe.jpg'
import Getintouch from '../Components/Getintouch';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import './serviceswiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Pplbehind = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' })
  const isTaborMobile = useMediaQuery({ query: '(max-width: 992px)' })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Pplbehind' id='Pplbehind'>
          <Header />

      <div className='Pplbehind-bgimg'>
        <div className='Pplbehind-blackdrop'>

          <div className='Pplbehind-title'>People Behind Ritera</div>
        </div>
      </div>


      <div className='Pplbehind-contents'>

        <div className='Pplbehind-indivualcontent1'>
          <Row className='Pplbehind-subcontent-row'>
            <Col lg="6" md="6" sm="1" className='Pplbehind-subcontent-col1'>
              <img src={sideimg} className='Pplbehind-subcontent-img'></img>

            </Col>
            <Col lg="6" md="6" sm="1" >
              <p className='Pplbehind-subcontent-title'>Rahul</p>
              <p className='Pplbehind-subcontent-subtitle'>Co-Founder & CTO</p>
              <p className='Pplbehind-subcontent-description'>
                As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. While we hold respect for other publishers in the field, we embrace different ideologies and possess a talented crew with a distinct working style. At Ritera, we promise that you'll never be left with doubts or dissatisfaction.
              </p>
            </Col>
          </Row>
        </div>

        <div className='Pplbehind-indivualcontent2'>

          <Row className='Pplbehind-subcontent-row'>
            <Col lg="6" md="6" sm="1" className='Pplbehind-subcontent-col1'>
              <img src={sideimg} className='Pplbehind-subcontent-img'></img>

            </Col>
            <Col lg="6" md="6" sm="1" >
              <p className='Pplbehind-subcontent-title'>RJ Ananthi</p>
              <p className='Pplbehind-subcontent-subtitle'>Founder of The Book Show</p>
              <p className='Pplbehind-subcontent-description'>
                As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. While we hold respect for other publishers in the field, we embrace different ideologies and possess a talented crew with a distinct working style. At Ritera, we promise that you'll never be left with doubts or dissatisfaction.
              </p>
            </Col>
          </Row>

        </div>

        <div className='Pplbehind-indivualcontent'>
          <Row className='Pplbehind-subcontent-row'>
            <Col lg="6" md="6" sm="1" className='Pplbehind-subcontent-col1'>
              <img src={sideimg} className='Pplbehind-subcontent-img'></img>

            </Col>
            <Col lg="6" md="6" sm="1" >
              <p className='Pplbehind-subcontent-title'>Shahitha Fareen M</p>
              <p className='Pplbehind-subcontent-subtitle'>Reviewer & Writer</p>
              <p className='Pplbehind-subcontent-description'>
                Meet Ms. Shahitha, the seasoned reviewer at our publishing house, whose expertise and dedication have elevated over 300 books to greatness. With her discerning eye and insightful critiques, she guides authors to shine in the literary world. Shahitha's profound understanding of storytelling makes her a trusted ally for authors seeking excellence. Shahitha an unvaluable asset to our publishing house, will review your literary work with passion and expertise.
              </p>
            </Col>
          </Row>
        </div>


        <div className='Pplbehind-indivualcontent'>
          <Row className='Pplbehind-subcontent-row'>
            <Col lg="6" md="6" sm="1" className='Pplbehind-subcontent-col1'>
              <img src={sideimg} className='Pplbehind-subcontent-img'></img>

            </Col>
            <Col lg="6" md="6" sm="1" >
              <p className='Pplbehind-subcontent-title'>Saran Raj</p>
              <p className='Pplbehind-subcontent-subtitle'>Author </p>
              <p className='Pplbehind-subcontent-description'>
                Saran Raj, an accomplished author, weaves tales that resonate with readers. His passion for storytelling shines through in every word he pens. Partnering with Ritera, he offers author sessions, nurturing budding talents and engaging with avid readers. Join us today and get a free author session!
              </p>
            </Col>
          </Row>
        </div>


        <div className='Pplbehind-indivualcontent'>
          <Row className='Pplbehind-subcontent-row'>
            <Col lg="6" md="6" sm="1" className='Pplbehind-subcontent-col1'>
              <img src={sideimg} className='Pplbehind-subcontent-img'></img>

            </Col>
            <Col lg="6" md="6" sm="1" >
              <p className='Pplbehind-subcontent-title'>Gobika</p>
              <p className='Pplbehind-subcontent-subtitle'>Senior Designer</p>
              <p className='Pplbehind-subcontent-description'>
                Gobika, our esteemed Senior Designer, whose talent and experience have graced numerous authors and franchises with captivating visuals. With her artistic sense and dedication, she transforms concepts into visual masterpieces that shine on shelves worldwide. Her dedication to her craft and meticulous attention to detail ensure that each cover reflects the essence of the story within, enticing readers to dive into the worlds created by our authors.
              </p>
            </Col>
          </Row>
        </div>

      </div>


      {isDesktopOrLaptop && <div className='Pplbehind-teams'>
        <div className='Pplbehind-content'>
          <Row xs={1} md={2} lg={3} className="g-4  team-card">

            <Card className='teamcard' >
              <Card.Body >
                <div className='card-content'>
                  <img src={prooficon} className='team-card-icon'></img>
                  <p className='team-card-title'>Marketing Team </p>
                  <p className='team-card-description'>Essential services with standard cover and interior designs,and eBook formatting for budding authors /Online distribution in India stores.</p>
                </div>
              </Card.Body>
            </Card>

            <Card className='teamcard' >
              <Card.Body>
                <div className='card-content'>
                  <img src={prooficon} className='team-card-icon'></img>
                  <p className='team-card-title'>Support Team </p>
                  <p className='team-card-description'>Essential services with standard cover and interior designs,and eBook formatting for budding authors /Online distribution in India stores.</p>
                </div>
              </Card.Body>
            </Card>

            <Card className='teamcard' >
              <Card.Body>
                <div className='card-content'>
                  <img src={prooficon} className='team-card-icon'></img>
                  <p className='team-card-title'>Writing Team </p>
                  <p className='team-card-description'>Essential services with standard cover and interior designs,and eBook formatting for budding authors /Online distribution in India stores.</p>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </div> }

      {isTaborMobile && <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                <div className='Package1'>
                    <Row xs={1} md={2} lg={3} className="g-4 packageall">

                        <SwiperSlide>
                        <Card className='teamcard' >
              <Card.Body >
                <div className='card-content'>
                  <img src={prooficon} className='team-card-icon'></img>
                  <p className='team-card-title'>Marketing Team </p>
                  <p className='team-card-description'>Essential services with standard cover and interior designs,and eBook formatting for budding authors /Online distribution in India stores.</p>
                </div>
              </Card.Body>
            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                        <Card className='teamcard' >
              <Card.Body>
                <div className='card-content'>
                  <img src={prooficon} className='team-card-icon'></img>
                  <p className='team-card-title'>Support Team </p>
                  <p className='team-card-description'>Essential services with standard cover and interior designs,and eBook formatting for budding authors /Online distribution in India stores.</p>
                </div>
              </Card.Body>
            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                        <Card className='teamcard' >
              <Card.Body>
                <div className='card-content'>
                  <img src={prooficon} className='team-card-icon'></img>
                  <p className='team-card-title'>Writing Team </p>
                  <p className='team-card-description'>Essential services with standard cover and interior designs,and eBook formatting for budding authors /Online distribution in India stores.</p>
                </div>
              </Card.Body>
            </Card>
                        </SwiperSlide>


                    </Row>
                </div>
            </Swiper>
            }

      <div className='Pplbehind-hookredirect'>
        <Row className='Pplbehind-hookredirect-content'>
          <Col lg="12" md='6' sm="4" >
            <p>Why We?</p>
          </Col>

          <Col lg="12" md='6' sm="4" className=' Pplbehind-hookredirect-button'>
            <Link to={'/aboutus'}>
            <button>Explore</button>
            </Link>
          </Col  >
        </Row>
      </div>


    </div>
  )
}

export default Pplbehind