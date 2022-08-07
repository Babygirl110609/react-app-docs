
import React from 'react';



const About = () => {
  return (
      <React.Fragment>
          <div id="aboutme" className='container text-center maincontainer'>
              <div className='row'>
                  <div className='col'>
                      <div className='card'>

                          <div className='card-body'>
                              <div className="row abstract-back ">
                                  <img className='avatar' alt="hero" src={process.env.PUBLIC_URL + "/assets/hero.jpg"} />
                              </div>
                          </div>

                          <div className='card-body'>
                              <div className="row">
                                  <p className='p-about'>
                                  Motivated software engineering graduate from UT full stack developer bootcamp. With a deep
                                      understanding and technical expertise in Computer Science fundamentals, Javascript, ReactJS, Redux, VueJS, Vuex, NodeJS, MongoDB, CSS,
                                      HTML and other technologies. Seeking a full-time software development position to deliver solutions to business needs.
                                      
                                  </p>
                              </div>
                          </div>

                          <div className="modal-footer" />

                          <div className='card-body'>
                              <h2 className='edu'>Education</h2>
                              <br />

                              <div className='grid-container-profile'>
                                  <div className='grid-item'>
                                      <div className='title-uni'>American Intercontinental University</div>
                                      <div className='title-concentration'>Forensic Science</div>
                                  </div>

                                  <div className='grid-item'>
                                      <a href='https://www.aiuniv.edu' rel="noreferrer noopener" target='_blank'><img alt="university" className='university-logo' src={process.env.PUBLIC_URL + "/assets/AIU logo.png"} /></a>
                                  </div>

                                  <div className="grid-item">
                                      <div className='title-uni'>Strayer University</div>
                                      <div className='title-concentration'>MBA of Healthcare Administration</div>
                                  </div>

                                  <div className="grid-item">
                                      <a href='https://www.strayer.edu'  rel="noreferrer noopener" target='_blank'><img alt="strayer logo"className='university-logo' src={process.env.PUBLIC_URL + "/assets/strayer logo.png"} /></a>
                                  </div>

                                  <div className="grid-item">
                                      <div className='title-uni'>University of Texas</div>
                                      <div className='title-concentration'>Austin Web Developer</div>
                                  </div>

                                  <div className="grid-item">
                                      <a href='https://techbootcamps.utexas.edu/coding/'  rel="noreferrer noopener" target='_blank'><imgn alt="ut bootcamp" className='university-logo' src={process.env.PUBLIC_URL + "/assets/ut logo.png"} /></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};


export default About;