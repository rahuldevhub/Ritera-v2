import React, {useEffect} from 'react'
import Header from '../Components/header/Header'
import '../css/customizedpage.css'
import { Row, Col } from 'react-bootstrap'
import Getintouch from '../Components/Getintouch'

const Customized = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Customized' id='Customized'>
          <Header />

      <div className='customized-bgimg'>
        <div className='customized-blackdrop'>
          <div className='customized-title'>Customize your package</div>

        </div>
      </div>

      <div className='customized-content-bg'>
        <div className='customized-content'>
          <div className='whywe-subcontent-description'>At Ritera, our passion for literature drives everything we do. As an aspiring publishing house, we're dedicated to provide premium services and deliverables, ensuring that every author's work receives the attention and care it deserves. We  wholeheartedly believe in the power of literature to enrich lives and make the world a better place. With our unwavering commitment to excellence and the recent partnership with Ratix, we are thrilled to expand our offerings and access a wealth of talented designers and professionals. Together, we're excited to continue our journey of fostering creativity, getting authors under the spotlight ,connecting readers with captivating stories, and making a meaningful impact in the world of  literature</div>

          <Row>
            <Col lg="6" md="6" sm="1" className='customized-col'>
              <h3>Pre - Publishing</h3>

              <form class="form-inline">

                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" className='customized-option-name'>Cover Design</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  {/* <option selected>Standard</option> */}
                  <option value="1">Standard</option>
                  <option value="2">Premium</option>
                </select><br />


                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" className='customized-option-name'>Interior Design</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  {/* <option selected>Standard</option> */}
                  <option value="1">Standard</option>
                  <option value="2">Premium</option>
                </select><br />

                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" className='customized-option-name'>Beta Reading</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  {/* <option selected>Standard</option> */}
                  <option value="1">No Needed</option>
                  <option value="2">Need</option>
                </select><br />

                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" className='customized-option-name'>Proof Reading</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  {/* <option selected>Standard</option> */}
                  <option value="1">No Needed</option>
                  <option value="2">Need</option>
                </select><br />

                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" className='customized-option-name'>Copy Writing</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  {/* <option selected>Standard</option> */}
                  <option value="1">No Needed</option>
                  <option value="2">Need</option>
                </select><br />



              </form>

            </Col>
            <Col lg="6" md="6" sm="1" className='customized-col '>
              <h3>Placements</h3>

              <form class="form-inline">

                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" className='customized-option-name'>Paper back</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  {/* <option selected>Standard</option> */}
                  <option value="1">India</option>
                  <option value="2">Premium</option>
                </select><br />


                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" className='customized-option-name'>E- Book</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  {/* <option selected>Standard</option> */}
                  <option value="1">Standard</option>
                  <option value="2">Premium</option>
                </select><br />

                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" className='customized-option-name'>Audio Book</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  {/* <option selected>Standard</option> */}
                  <option value="1">No Needed</option>
                  <option value="2">Need</option>
                </select><br />
              </form>
            </Col>
          </Row>

        </div>
      </div>

      <div className='customized-content-bg2'>
      <div className='customized-content'>
        <h3>Post - Publishing</h3>
        <Row >
          <Col lg="6" md="6" sm="1" >

            <div class="custom-control custom-checkbox" className='customized-col3' >
              <input type="checkbox" class="custom-control-input" id="customCheck1" className='customized-input-box'></input>
              <label class="custom-control-label" for="customCheck1" className='customized-option-name3'>Amazon Prime</label>
            </div>
            <div class="custom-control custom-checkbox" className='customized-col3' >
              <input type="checkbox" class="custom-control-input" id="customCheck1" className='customized-input-box'></input>
              <label class="custom-control-label" for="customCheck1" className='customized-option-name3'>Amazon A+ Listing</label>
            </div>
            <div class="custom-control custom-checkbox" className='customized-col3' >
              <input type="checkbox" class="custom-control-input" id="customCheck1" className='customized-input-box'></input>
              <label class="custom-control-label" for="customCheck1" className='customized-option-name3'>Book Reviews</label>
            </div>
            <div class="custom-control custom-checkbox" className='customized-col3' >
              <input type="checkbox" class="custom-control-input" id="customCheck1" className='customized-input-box'></input>
              <label class="custom-control-label" for="customCheck1" className='customized-option-name3'>Social Media Promotions</label>
            </div>
          </Col>
          <Col lg="6" md="6" sm="1" >
            <div class="custom-control custom-checkbox" className='customized-col4' >
              <input type="checkbox" class="custom-control-input" id="customCheck1" className='customized-input-box'></input>
              <label class="custom-control-label" for="customCheck1" className='customized-option-name3'>Amazon Prime</label>
            </div>
            <div class="custom-control custom-checkbox" className='customized-col4' >
              <input type="checkbox" class="custom-control-input" id="customCheck1" className='customized-input-box'></input>
              <label class="custom-control-label" for="customCheck1" className='customized-option-name3'>Amazon A+ Listing</label>
            </div>
            <div class="custom-control custom-checkbox" className='customized-col4' >
              <input type="checkbox" class="custom-control-input" id="customCheck1" className='customized-input-box'></input>
              <label class="custom-control-label" for="customCheck1" className='customized-option-name3'>Book Reviews</label>
            </div>
            <div class="custom-control custom-checkbox" className='customized-col4' >
              <input type="checkbox" class="custom-control-input" id="customCheck1" className='customized-input-box'></input>
              <label class="custom-control-label" for="customCheck1" className='customized-option-name3'>Social Media Promotions</label>
            </div>
          </Col>
        </Row>
        <button className='customized-submit-button'> Submit</button>

      </div>
      </div>

      {/* <div className='customized-getintouch'>
        <Getintouch/>
      </div> */}

    </div>
  )
}

export default Customized