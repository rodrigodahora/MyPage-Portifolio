import { useState } from 'react';
import CV from '../assets/CV.pdf';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import telefone from '../assets/telefone.png';
import User from '../assets/user.png';
import Work1 from '../assets/work-1.png';
import Work2 from '../assets/work-2.png';
import Work3 from '../assets/work-3.png';
import './styles.css';

// import PhoneBKG from '../assets/logo.png';

function Main() {
  const [showSkill, setShowSkill] = useState(false);
  const [showExperience, setshowExperience] = useState(false);
  const [showEducation, setshowEducation] = useState(false);
  const btnSkill = document.querySelector('#skill');
  const btnExp = document.querySelector('#exp');
  const btnEdc = document.querySelector('#edc');


  const handleShowSkill = () => {
    btnSkill.classList.add('active-link');
    btnExp.classList.remove('active-link');
    btnEdc.classList.remove('active-link');
    setShowSkill(true);
    setshowEducation(false);
    setshowExperience(false);
  }
  const handleShowExperience = () => {
    btnSkill.classList.remove('active-link');
    btnEdc.classList.remove('active-link');
    btnExp.classList.add('active-link');
    setShowSkill(false);
    setshowEducation(false);
    setshowExperience(true);

  }
  const handleShowEducation = () => {
    btnExp.classList.remove('active-link');
    btnEdc.classList.add('active-link');
    setShowSkill(false);
    setshowExperience(false);
    setshowEducation(true);
  }

  const SkillDiv = () => {

    return (
      <div class="tab-contents active-tab" id="skills">
        <ul>
          <li><span>Front End</span><br /> HTML | CSS | JavaScript | React | Material UI | </li>
          <li><span>Back End</span><br /> Node.js | JavaScript | API REST | Java | SQL</li>
          <li><span>Técnico</span><br />Manutenção de Micro | Redes, Protocolo TCP/IP</li>
        </ul>
      </div>
    )
  }

  const ExperienceDiv = () => {

    return (
      <div class="tab-contents active-tab" id="experience">
        <ul>
          <li><span>2020 - 2022</span><br />Datamétrica - Atendente de Telemarketing</li>
        </ul>
      </div>
    )

  }

  const EducationDiv = () => {

    return (
      <div class="tab-contents active-tab" id="education">
        <ul>
          <li><span>2018</span><br />IFBA - Instituto Federal de Educação Ciências e Tecnologia da Bahia</li>
          <li><span>2023</span><br />Cubos Academy - Desenvolvimento de Software</li>
        </ul>
      </div>
    )

  }

  return (
    <>
      <header id="header">
        <div class="container">
          <nav>
            <h1 className='logo'><span className='span-logo'>R</span>odrigo</h1>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <i class="fas fa-times"></i>
            </ul>
            <i class="fas fa-bars"></i>
          </nav>
          <div class="header-text">
            <p>FullStack Developer</p>
            <h1>Hi, my name is <span className='span-header'>Rodrigo </span></h1>
          </div>
        </div>
      </header>
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
                <p id="skill" class="tab-links " onClick={handleShowSkill}>Skills</p>
                <p id="exp" class="tab-links " onClick={handleShowExperience}>Experience</p>
                <p id="edc" class="tab-links " onClick={handleShowEducation}>Education</p>
              </div>
              {showSkill ? <SkillDiv /> : null}
              {showExperience ? <ExperienceDiv /> : null}
              {showEducation ? <EducationDiv /> : null}

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
        </div>
      </div>

      <div id="contact">
        <div class="container">
          <div class="row">
            <div class="contact-left">
              <h1 class="sub-title">Contact Me</h1>
              <p><i class="fas fa-paper-plane"></i> rnattan82@gmail.com</p>
              <p className='p-telefone'><img src={telefone} class="fas fa-phone-square-alt img-icons"></img> (75) 9 9894-1934</p>
              <div class="social-icons">
                <a href="https://www.facebook.com/rodrigo.natan.9/" target="_blank"><img className='fab fa-facebook img-icons' src={facebook} alt="Facebook" /></a>
                <a href="https://www.instagram.com/natandh/"><img className='fab fa-instagram img-icons' src={instagram} alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/natandh/"><img className='fab fa-linkedin img-icons' src={linkedin} alt="Instagram" /></a>
              </div>
              <a href={CV} download class="btn btn2">Download Currículo</a>
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
        <a href="#header" class="btn">Back to the Top</a>
        <div class="copyright">
          {/* <p>copyright @ Dev Alphaspace. Made with <i class="fas fa-heart"></i> by Dev Alphaspace</p> */}
        </div>
      </div >

    </>

  );
}

export default Main;
