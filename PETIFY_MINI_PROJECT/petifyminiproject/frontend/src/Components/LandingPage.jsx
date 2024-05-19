import React from 'react'
import { Link } from 'react-router-dom';
import "../Cssfiles/Home.css"

function LandingPage() {
  return (
    <div>
      <div className="banner-card">
        <img id="images" className="col col-lg-12" src="https://dm6g3jbka53hp.cloudfront.net/static-images/pet-adoption-14022021.jpg" alt="Banner" />
        <div className="banner-text">
          <h1>Welcome to Pet Adoption Center!</h1>
          <h3>We help pets find loving homes.</h3>
        </div>
      </div>
      <section>
        <div data-background="">
          <div className="jumbotron text-center">
            <div className="border border-success">
              <h1 className="display-4">What We Do!</h1>
              <p className="lead">"Our platform is dedicated to assisting pet lovers in making informed decisions about adopting pets based on their unique needs and preferences. With our comprehensive pet analysis tools and expert recommendations, pet lovers can confidently choose the most suitable pets that align with their specific lifestyle, ensuring a harmonious bond and happy companionship."
              </p>
            </div>
            <hr className="my-4" />
            <p>Experience the joy of adopting a pet with our innovative tools! Discover the perfect furry friend for your home by exploring our comprehensive pet assessment and adoption features. Gain insights into pet behavior, personality, and other crucial factors to make informed decisions that lead to a fulfilling pet ownership experience. Try our tools today and revolutionize your pet adoption journey!</p>
            <Link className="btn btn-success btn-lg" to="/dashboard">Adopt Now</Link>
          </div>
        </div>
      </section>
      <section className="m-3">
        <div className="row col-lg-12">
          <div className='col col-lg-4' >
            <div className="banner-card1">
              <img id="images" className="" src="https://rukminim2.flixcart.com/image/850/1000/kw2fki80/poster/d/u/7/medium-hd-golden-retriever-puppy-running-labrador-cute-dog-pets-original-imag8ttnkw7jmgzp.jpeg?q=90&crop=false" alt="Banner" />
              <div className="banner-text1">
                <h1>We Will Match You with the Perfect Pet!</h1>
              </div>
            </div>
          </div>
          <div className='col col-lg-4' >
            <div className="banner-card1 ">
              <img id="images" className="" src="https://rukminim2.flixcart.com/image/850/1000/kw2fki80/poster/d/u/7/medium-hd-golden-retriever-puppy-running-labrador-cute-dog-pets-original-imag8ttnkw7jmgzp.jpeg?q=90&crop=false" alt="Banner" />
              <div className="banner-text1">
                <h1>Pet Adoption Center</h1>
                <h1>Saved My Heart!</h1>
              </div>
            </div>
          </div>
          <div className='col col-lg-4'>
            <div className="banner-card1 col col-lg-4">
              <img id="images" className="" src="https://rukminim2.flixcart.com/image/850/1000/kw2fki80/poster/d/u/7/medium-hd-golden-retriever-puppy-running-labrador-cute-dog-pets-original-imag8ttnkw7jmgzp.jpeg?q=90&crop=false" alt="Banner" />
              <div className="banner-text1">
                <h1>We will help you Find Happiness!</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jumbotron text-center">
        <div>
          <div className="border border-success">
            <h1 className="display-4">How it is Done!</h1>
            <p className="lead">"To utilize our platform effectively, pet lovers are required to have knowledge of the pet's behavior, personality, and care requirements. This information is essential for our tools to provide accurate recommendations and insights tailored to your specific lifestyle and preferences. By inputting these key parameters, you'll unlock the full potential of our adoption platform, enabling you to make informed decisions and find the perfect pet companion for your home."
            </p>
          </div>
          <hr className="my-4" />
        </div>
      </section>
    </div>
  )
}

export default LandingPage