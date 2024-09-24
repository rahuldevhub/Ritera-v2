import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './serviceswiper.css';
import { Navigation } from 'swiper/modules';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import prooficon from '../../Assets/study.png'
import { useMediaQuery } from 'react-responsive';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Serviceswiper = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' })
    const isTaborMobile = useMediaQuery({ query: '(max-width: 992px)' })
    return (
        <div>
            {isDesktopOrLaptop && <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>

                    <Row xs={1} md={2} lg={3} className="g-4  services-card">

                        <Card className='servicecard' >
                            <Card.Body >
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Proof Reading </h3>
                                    <p className='service-card-description'>Having a well-polished manuscript is crucial. Our team of expert proofreaders is dedicated to enhancing your work by meticulously correcting grammatical, spelling, and punctuation errors. Additionally, we ensure that your document maintains consistent formatting and style. </p>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className='servicecard' >
                            <Card.Body>
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Marketing </h3>
                                    <p className='service-card-description'>We excel in both traditional and digital marketing strategies, conducting thorough marketing analysis that considers your book’s genre and theme. A dedicated marketing consultant will be assigned to ensure your book receives the attention it deserves to shine.

                                    </p>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className='servicecard' >
                            <Card.Body>
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Free Articles </h3>
                                    <p className='service-card-description'>Ritera presents an exclusive opportunity: If you have the talent to write articles, you can publish them on the Ritera website for free. This special service is available to all skilled writers looking to share their work with a wider audience.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>

                </SwiperSlide>

                <SwiperSlide>
                    <Row xs={1} md={2} lg={3} className="g-4  services-card">

                        <Card className='servicecard' >
                            <Card.Body >
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Proof Reading </h3>
                                    <p className='service-card-description'>Having a well-polished manuscript is crucial. Our team of expert proofreaders is dedicated to enhancing your work by meticulously correcting grammatical, spelling, and punctuation errors. Additionally, we ensure that your document maintains consistent formatting and style. </p>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className='servicecard' >
                            <Card.Body>
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Marketing </h3>
                                    <p className='service-card-description'>We excel in both traditional and digital marketing strategies, conducting thorough marketing analysis that considers your book’s genre and theme. A dedicated marketing consultant will be assigned to ensure your book receives the attention it deserves to shine.

                                    </p>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className='servicecard' >
                            <Card.Body>
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Free Articles </h3>
                                    <p className='service-card-description'>Ritera presents an exclusive opportunity: If you have the talent to write articles, you can publish them on the Ritera website for free. This special service is available to all skilled writers looking to share their work with a wider audience.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>

                </SwiperSlide>
            </Swiper>
            }


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
                            <Card className='servicecard' >
                                <Card.Body >
                                    <div className='card-content'>
                                        <img src={prooficon} className='service-card-icon'></img>
                                        <h3 className='service-card-title'>Proof Reading </h3>
                                        <p className='service-card-description'>Having a well-polished manuscript is crucial. Our team of expert proofreaders is dedicated to enhancing your work by meticulously correcting grammatical, spelling, and punctuation errors. Additionally, we ensure that your document maintains consistent formatting and style. </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                        <Card className='servicecard' >
                            <Card.Body>
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Marketing </h3>
                                    <p className='service-card-description'>We excel in both traditional and digital marketing strategies, conducting thorough marketing analysis that considers your book’s genre and theme. A dedicated marketing consultant will be assigned to ensure your book receives the attention it deserves to shine.

                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                        <Card className='servicecard' >
                            <Card.Body>
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Free Articles </h3>
                                    <p className='service-card-description'>Ritera presents an exclusive opportunity: If you have the talent to write articles, you can publish them on the Ritera website for free. This special service is available to all skilled writers looking to share their work with a wider audience.</p>
                                </div>
                            </Card.Body>
                        </Card>
                        </SwiperSlide>



                        <SwiperSlide>
                        <Card className='servicecard' >
                            <Card.Body >
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Proof Reading </h3>
                                    <p className='service-card-description'>Having a well-polished manuscript is crucial. Our team of expert proofreaders is dedicated to enhancing your work by meticulously correcting grammatical, spelling, and punctuation errors. Additionally, we ensure that your document maintains consistent formatting and style. </p>
                                </div>
                            </Card.Body>
                        </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                        <Card className='servicecard' >
                            <Card.Body>
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Marketing </h3>
                                    <p className='service-card-description'>We excel in both traditional and digital marketing strategies, conducting thorough marketing analysis that considers your book’s genre and theme. A dedicated marketing consultant will be assigned to ensure your book receives the attention it deserves to shine.

                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                        <Card className='servicecard' >
                            <Card.Body>
                                <div className='card-content'>
                                    <img src={prooficon} className='service-card-icon'></img>
                                    <h3 className='service-card-title'>Free Articles </h3>
                                    <p className='service-card-description'>Ritera presents an exclusive opportunity: If you have the talent to write articles, you can publish them on the Ritera website for free. This special service is available to all skilled writers looking to share their work with a wider audience.</p>
                                </div>
                            </Card.Body>
                        </Card>
                        </SwiperSlide>


                    </Row>
                </div>
            </Swiper>

            }

        </div>
    )
}

export default Serviceswiper