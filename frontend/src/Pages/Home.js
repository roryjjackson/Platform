import GetCurrentUserDetails from "../Authentication/GetCurrentUserDetails/GetCurrentUserDetails";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <>
    <div className="home-page">
      <img className="image map" src="https://res.cloudinary.com/dfipoufmj/image/upload/v1684244486/Pngtree_world_map_1970382_jh9kie.png" alt=""></img>
      <section className="section one">
          <div className="main-page-content top">
            <div className="left">
              <h1>Mapped out</h1>
              <h2>The app that helps you explore lifes opportunites, through the eyes of others</h2>
              <p>Find experienced professionals willing to help...</p>
              <div className="button-container">
                <button className="button lets-go">Lets go</button>
                <button className="button lets-go">Discover</button>
              </div>
            </div>
        </div>
      </section>


      <h2 className="subheader">How it works</h2>
      <section className="section two">
        {/* <div> */}
          <div className="method-container">
            <div className="method-card">
              <div>
                <h3>Step one:</h3>
                <p>Answer our questions instinctively, and let our algorithm present you with opportunities you may not have thought of.</p>
              </div>
              <button className="button test">Take our test</button>
            </div>
          </div>
          <div className="method-container">
            <div className="method-card">
              <div>
                <h3>Step two:</h3>
                <p>Discover our portfolio of professionals willing to help, and become inspired by their journeys!</p>
              </div>
              <Link to="/users/dashboard/index">
                <button className="button test">Discover</button>
              </Link>
            </div>
          </div>
          <div className="method-container">
            <div className="method-card">
              <div>
                <h3>Step three:</h3>
                <p>Connect to established professials and begin making the right turns towards your potential new start!</p>
              </div>
              <button className="button test">Connect</button>
            </div>
          </div>
        {/* </div> */}
      </section>


      <section className="section three">
        <h2 className="subheader">Our Mission</h2>
        <div className="mission-content-container">
          <h3>Who has ever heard the question "What do you want to be when you grow up?"</h3>
          <p>Likelihood is you have, but its one of the trickiest things to answer for most of us. People now regularly have career changes throughout their lives, and what typically inspires that change?</p>
          <h3>People!</h3>
          <p>At least from our humble experince in life so far, you drive towards something based on someone you've either seen hard at work or from an inspireing conversation. Our aim is to connect those willing to help others, with those looking for help!</p>
        </div>
      </section>

      <section className="section four">
        <div>
          <h2 className="subheader">How to get started</h2>
          <p>If you believe you have something to share, and would like to buddy up with someone, sign up below!</p>
          <div>
            <button className="button test">Let's begin</button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
