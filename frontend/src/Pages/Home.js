import GetCurrentUserDetails from "../Authentication/GetCurrentUserDetails/GetCurrentUserDetails";
import './Home.css';

const Home = () => {
  return(
    <div className="home-page">
      <section className="section one">
        <div>
          <div className="main-page-content top">
            <div className="left">
              <h2>Explore lifes opportunites, through the eyes of others</h2>
              <p>Our community of inspiring people are here to help! There's no greater feeling than inspiring others to follow in your footsteps</p>
            </div>
            <div className="right">
              <ul>
                <li>01: Path one</li>
                <li>02: Path two</li>
                <li>03: Path three</li>
              </ul>
            </div>
          </div>
          <div className="main-page-content bottom">
            <div>
              <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1683735572/pexels-singkham-1108572_x7d2fq.jpg" alt=""></img>
              <div>
                <p>some text here about what we do</p>
                <button>OUR DASHBOARD</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section two">
        <div>
          <h2>Become a member of our community, and see how you could connect with others</h2>
          <p>Everybody has some aluable information and knowledge to share, whether it be experiences of lessons learnt from failures, its all valuable.</p>
        </div>
      </section>
      <section>
        <div>
          <h2>We are dedicated to staying a free to use platform</h2>
          <p>Life comes at everyone at a different pace, we all have points at which we struggle. So lets share our information around and make life for everyone better!</p>
        </div>
      </section>
      <footer>
        <p>Copyright access to MappedOut</p>
      </footer>
      < GetCurrentUserDetails />
    </div>
  );
};

export default Home;
