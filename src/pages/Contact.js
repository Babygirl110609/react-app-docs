import {Row,Col,Container,Card} from 'react-bootstrap';

function Contact() {
  return (
    <div id="contact"  className='container maincontainer'>
        <Container fluid className="p-5 mb-0">
            <Container className="text-center">
                <div className="p-md-5">
                    <h1>Get in Touch</h1>
                </div>
            </Container>
        </Container>

        <Container fluid className="shadow bg-light mb-5">
            <Container className="p-4">
                <Row>
                    <Col>
                        <Container>
                            <h4 style={{color: "#F06543"}}>Contact Info</h4>
                            <p>
                                    <span className="pr-3">
                                       Email: 
                                    </span>
                                <a href="mailto:mrslagos1592@yahoo.com">
                                    mrslagos1592@yahoo.com
                                </a>
                            </p>
                            
                            <p>
                                    <span className="pr-3">
                                      Github : 
                                    </span>
                                <a href="https://github.com/Babygirl110609" target='_blank'>
                                    Babygirl110609
                                </a>
                            </p>
                
                        </Container>
                    </Col>

                    <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                        <Container>
                            <h4 style={{color: "#F06543"}}>Send a Message</h4>
                          
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default Contact;