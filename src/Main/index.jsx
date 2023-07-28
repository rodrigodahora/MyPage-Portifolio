import './styles.css';
import Logo from '../assets/logo.png';
import User from '../assets/user.png';
import Work1 from '../assets/work-1.png';
import Work2 from '../assets/work-2.png';
import Work3 from '../assets/work-3.png';
// import PhoneBKG from '../assets/logo.png';

function Main() {

  return (
    <>
      <div id="header">
        <div class="container">
          <nav>
            <img src={Logo} class="logo" />
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
              <i class="fas fa-times"></i>
            </ul>
            <i class="fas fa-bars"></i>
          </nav>
          <div class="header-text">
            <p>FullStack Developer</p>
            <h1>Hi, I'm <span>Rodrigo </span>I'm from Brazil</h1>
          </div>
        </div>
      </div>
      <div id="about">
        <div class="container">
          <div class="row">
            <div class="about-col-1">
              <img src={User} />
            </div>
            <div class="about-col-2">
              <h1 class="sub-title">About Me</h1>
              <p>Baiano, nascido e criado no azeite de dendê. Apaixonado por tecnologia desde guri. Curioso, obstinado e ambicioso em viver o que o mundo tem a oferecer.</p><br />
              <p>Desenvolvedor full stack em formação pela Cubos Academy. Técnico em informática pelo Instituto Federal da Bahia. Bagagem em Java e SQL.</p><br />
              <p>Tenho interesse em atuar como Desenvolvedor back-end ou analista de dados. Em busca de conhecimento e novas oportunidades de aprendizado, ambientes
                onde eu possa evoluir na programação em geral e ao mesmo tempo contribuir com os meus conhecimentos.</p><br />
              <div class="tab-titles">
                <p class="tab-links active-link" onclick="openTab('skills')">Skills</p>
                <p class="tab-links" onclick="openTab('experience')">Experience</p>
                <p class="tab-links" onclick="openTab('education')">Education</p>
              </div>
              <div class="tab-contents active-tab" id="skills">
                <ul>
                  <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
                  <li><span>Web Development</span><br />Web app Development</li>
                  <li><span>App Development</span><br />Building Android/iOS apps</li>
                </ul>
              </div>
              <div class="tab-contents" id="experience">
                <ul>
                  <li><span>2021 - Current</span><br />UI/UX Design training at ET Institute</li>
                  <li><span>2019-2021</span><br />Web app Development</li>
                  <li><span>2017-2019</span><br />UI/UX Design Executive at Coin Digital Ltd.</li>
                  <li><span>2017-2019</span><br />Internship at eKart ecommerce.</li>
                </ul>
              </div>
              <div class="tab-contents" id="education">
                <ul>
                  <li><span>2016</span><br />UI/UX Design training at ET Institute</li>
                  <li><span>2016 Development</span><br />MBA from MIT Bangalore</li>
                  <li><span>2014</span><br />BBA from ISM Bangalore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <div class="container">
          <h1 class="sub-title">My Services</h1>
          <div class="services-list">
            <div>
              <i class="fa-brands fa-android"></i>
              <h2>App Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit. Soluta quasi
                officia, alias vitae fugiat fuga exercitationem.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i class="fa-solid fa-code"></i>
              <h2>Web Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit. Soluta quasi
                officia, alias vitae fugiat fuga exercitationem.</p>
              <a href="#">Learn more</a>

            </div>
            <div>

              <i class="fa-solid fa-crop-simple"></i>
              <h2>UI/UX Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit. Soluta quasi
                officia, alias vitae fugiat fuga exercitationem.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div class="container">
          <h1 class="sub-title">My Works</h1>
          <div class="work-list">
            <div class="work">
              <img src={Work1} alt="" />
              <div class="layer">
                <h2>Social Media App</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam
                  deserunt dolore vero. Incidunt ea nihil sint. Velit.</p>
                <a href="#"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div class="work">
              <img src={Work2} alt="" />
              <div class="layer">
                <h2>Music App</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam
                  deserunt dolore vero. Incidunt ea nihil sint. Velit.</p>
                <a href="#"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div class="work">
              <img src={Work3} alt="" />
              <div class="layer">
                <h2>Online Shopping App</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam facere quibusdam
                  deserunt dolore vero. Incidunt ea nihil sint. Velit.</p>
                <a href="#"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
          <a href="" class="btn">See more</a>
        </div>
      </div>

      <div id="contact">
        <div class="container">
          <div class="row">
            <div class="contact-left">
              <h1 class="sub-title">Contact Me</h1>
              <p><i class="fas fa-paper-plane"></i> example@gmail.com</p>
              <p><i class="fas fa-phone-square-alt"></i> 1234567890</p>
              <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
              <a href="images/my-cv.pdf" download class="btn btn2">Download CV</a>
            </div>
            <div class="contact-right">
              <form>
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                <button type="submit" class="btn btn3">submit</button>
              </form>
            </div>
          </div>
        </div>
        <div class="copyright">
          {/* <p>copyright @ Dev Alphaspace. Made with <i class="fas fa-heart"></i> by Dev Alphaspace</p> */}
        </div>
      </div>

    </>

  );
}

export default Main;
