import React from 'react'
import "../Cssfiles/Footer.css"
function Footer() {
  return (
    <div>
      <div className="">
        <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
          <section className="d-flex justify-content-between p-3 text-white" style={{ backgroundColor: '#008080' }}>
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
          </section>

          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Petify</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p>Facilitating loving connections between pets and adopters, promoting responsible pet ownership, and reducing shelter overpopulation through online adoption services.</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Facilities</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><a href="#!" className="text-dark">Adoption</a></p>
                  <p><a href="#!" className="text-dark">Chat with us</a></p>
                  <p><a href="#!" className="text-dark">Users can interact</a></p>
                  {/* <p><a href="#!" className="text-dark">Bootstrap Angular</a></p> */}
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><a href="#!" className="text-dark">Home</a></p>
                  <p><a href="#!" className="text-dark">My Posts</a></p>
                  <p><a href="#!" className="text-dark">DashBoard</a></p>
                  <p><a href="#!" className="text-dark">Help</a></p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3"></i> petcareadoption@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  {/* <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">Petify.com</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer