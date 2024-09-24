import React from 'react'
import '../css/packagepage.css'
import Header from '../Components/header/Header'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Getintouch from '../Components/Getintouch';

const Packages = () => {
  return (
    <div className='Packages' id='Packages'>

      <div className='Packages-bgimg'>
        <div className='Packages-blackdrop'>
          <Header />
          <div className='Packages-title'>Packages</div>
        </div>
      </div>
      <div className='packages-content-bg '>
        <div className='packages-content'>
          <div className='whywe-subcontent-title'>Tailored Solutions for Every Author’s Journey.</div>
          <p className='whywe-subcontent-description'>As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. While we hold respect for other publishers in the field, we embrace different ideologies and possess a talented crew with a distinct working style. At Ritera, we promise that you'll never be left with doubts or dissatisfaction.</p>

          <h3>Basic Level</h3>
          <p className='whywe-subcontent-description'>As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. While we hold respect for other publishers in the field, we embrace different ideologies and possess a talented crew with a distinct working style. At Ritera, we promise that you'll never be left with doubts or dissatisfaction.</p>

          <div className='Package1'>
            <Row xs={1} md={2} lg={3} className="g-4 packageall">
              <Card className='level1-card' >
                <Card.Body >
                  <div className='card-content'>
                    <p className='level1-title'>Essential </p>
                    <p className='level1-Price'>₹8,999</p>
                    <p className='packagepage-subtitle'>Essential services with standard cover and interior designs,
                      and eBook formatting for budding authors /Online
                      distribution in India stores.</p>
                  </div>
                  <ul className='package-features'>
                    <li>Personal Publishing Manager</li>
                    <li>Standard Cover Design</li>
                    <li>Standard Interior Design</li>
                    <li>Online PaperBack Distribution (India)</li>
                    <li>E-Book Placement (Google) </li>
                    <li>Copy Rights </li>
                    <li>ISBN + Barcode </li>
                    <li>Author Dashboard </li>
                    <li>Post Publishing Support </li>
                    <li>60% Royalty for Author</li>
                  </ul>
                  <button className='seeallpackages'>See all Features</button>
                </Card.Body>
              </Card>

              <Card className='level1-card' >
                <Card.Body>
                  <div className='card-content'>
                    <p className='level1-title'>Standard </p>
                    <p className='level1-Price'>₹12,999</p>
                    <p className='packagepage-subtitle'>Comprehensive support for aspiring authors with free
                      Author copies, certificate, and and eBook placement on
                      Google and Kobo /Online distribution in India</p>
                 
                  <ul className='package-features'>
                    <li>All service in previous</li>
                    <li>80% Royalty for Author</li>
                    <li>Author Copies & Certificate</li>
                    <li>E-Book (Google, Kindle)</li>
                    <li>Standard cover design</li>
                    <li>Interior Design</li>
                    <li>Online Paperback distribution (India)</li>
                    <li>Publishing Plan</li>
                    <li>Digital Proof</li>
                  </ul>
                  <button className='seeallpackages'>See all Features</button>

                </div>
              </Card.Body>
            </Card>

            <Card className='level1-card' >
              <Card.Body>
                <div className='card-content'>
                  <p className='level1-title'>Advanced</p>
                  <p className='level1-Price'>₹29,999</p>
                  <p className='packagepage-subtitle'>All-inclusive package with International Distribution
                                            premium cover and interior design, Prime placement,
                                            promotions, and free author session for ambitious authors</p>
                  <ul className='package-features'>
                    <li>All service in previous</li>
                    <li>100% Royalty for Author</li>
                    <li>Premium Cover Design</li>
                    <li>Premium Interior Design</li>
                    <li>International PaperBack Distribution</li>
                    <li>E-Book ( google, kindle, kobo)</li>
                    <li>Author copies (10)</li>
                    <li>Amazon Prime placement (3mon)</li>
                    <li>Kindle Promotion</li>
                    <li>Book Reviews</li>
                    <li>Free Author Session</li>
                    <li>Beta Reading</li>
                  </ul>
                  <button className='seeallpackages'>See all Features</button>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </div>


        <h3>Top - Tier</h3>
          <p className='whywe-subcontent-description'>As an aspiring publishing house, Ritera stands apart with our unique approach and unwavering commitment to authors' satisfaction. While we hold respect for other publishers in the field, we embrace different ideologies and possess a talented crew with a distinct working style. At Ritera, we promise that you'll never be left with doubts or dissatisfaction.</p>

          <div className='Package1'>
            <Row xs={1} md={2} lg={3} className="g-4 packageall">
              <Card className='level1-card' >
                <Card.Body >
                  <div className='card-content'>
                    <p className='level1-title'>Essential </p>
                    <p className='level1-Price'>₹8,999</p>
                    <p className='packagepage-subtitle'>Essential services with standard cover and interior designs,
                      and eBook formatting for budding authors /Online
                      distribution in India stores.</p>
                  </div>
                  <ul className='package-features'>
                    <li>Personal Publishing Manager</li>
                    <li>Standard Cover Design</li>
                    <li>Standard Interior Design</li>
                    <li>Online PaperBack Distribution (India)</li>
                    <li>E-Book Placement (Google) </li>
                    <li>Copy Rights </li>
                    <li>ISBN + Barcode </li>
                    <li>Author Dashboard </li>
                    <li>Post Publishing Support </li>
                    <li>60% Royalty for Author</li>
                  </ul>
                  <button className='seeallpackages'>See all Features</button>
                </Card.Body>
              </Card>

              <Card className='level1-card' >
                <Card.Body>
                  <div className='card-content'>
                    <p className='level1-title'>Standard </p>
                    <p className='level1-Price'>₹12,999</p>
                    <p className='packagepage-subtitle'>Comprehensive support for aspiring authors with free
                      Author copies, certificate, and and eBook placement on
                      Google and Kobo /Online distribution in India</p>
                 
                  <ul className='package-features'>
                    <li>All service in previous</li>
                    <li>80% Royalty for Author</li>
                    <li>Author Copies & Certificate</li>
                    <li>E-Book (Google, Kindle)</li>
                    <li>Standard cover design</li>
                    <li>Interior Design</li>
                    <li>Online Paperback distribution (India)</li>
                    <li>Publishing Plan</li>
                    <li>Digital Proof</li>
                  </ul>
                  <button className='seeallpackages'>See all Features</button>

                </div>
              </Card.Body>
            </Card>

            <Card className='level1-card' >
              <Card.Body>
                <div className='card-content'>
                  <p className='level1-title'>Advanced</p>
                  <p className='level1-Price'>₹29,999</p>
                  <p className='packagepage-subtitle'>All-inclusive package with International Distribution
                                            premium cover and interior design, Prime placement,
                                            promotions, and free author session for ambitious authors</p>
                  <ul className='package-features'>
                    <li>All service in previous</li>
                    <li>100% Royalty for Author</li>
                    <li>Premium Cover Design</li>
                    <li>Premium Interior Design</li>
                    <li>International PaperBack Distribution</li>
                    <li>E-Book ( google, kindle, kobo)</li>
                    <li>Author copies (10)</li>
                    <li>Amazon Prime placement (3mon)</li>
                    <li>Kindle Promotion</li>
                    <li>Book Reviews</li>
                    <li>Free Author Session</li>
                    <li>Beta Reading</li>
                  </ul>
                  <button className='seeallpackages'>See all Features</button>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </div>

      </div>



    </div>
    <div className='packages-getintouch'>
  <Getintouch/>
</div>
    </div >
  )
}

export default Packages