import { useEffect, useState } from 'react';
import CV from '../assets/curriculo/Rodrigo_daHora_Back-end.pdf';
import facebook from '../assets/redes/facebook.png';
import instagram from '../assets/redes/instagram.png';
import linkedin from '../assets/redes/linkedin.png';
import telefone from '../assets/telefone.png';
import top from '../assets/up-arrow.png';
import gitHub from '../assets/redes/github.png';
import User from '../assets/user.png';
import Work1 from '../assets/works/work-1.png';
import Work2 from '../assets/works/work-2.jpg';
import Work3 from '../assets/works/work-3.jpg';
import './styles.css';
import api from '../services/api';

// import PhoneBKG from '../assets/logo.png';

export default function Main() {
  const [showSkill, setShowSkill] = useState(false);
  const [showExperience, setshowExperience] = useState(false);
  const [showEducation, setshowEducation] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [alert, setAlert] = useState('');
  const [sucess, setSucess] = useState('');
  
  let btnSkill;
  let btnExp;
  let btnEdc;
 
  useEffect(() => {
     btnSkill = document.querySelector('#skill');
     btnExp = document.querySelector('#exp');
     btnEdc = document.querySelector('#edc');
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!nome){
      setAlert('Preencha seu nome');
      return;
    }

    if(!assunto){
      setAlert('Preencha o assunto');
      return;
    }

    if(!email){
      setAlert('Preencha seu email');
      return;
    }
    if(!mensagem){
      setAlert('Preencha a mensagem');
      return;
    }


    const usuario = {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
      }

      try {
        const response = await api.post('/email', usuario);
      
        if(response.status === 200){
          setSucess(response.data.mensagem);
          setAlert(null);
          
      }
      setTimeout(() => {
        window.location.reload()
      },1300);
      
      } catch (error) {
        console.error(error);
      }
    
  }

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
    btnSkill.classList.remove('active-link');
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
              <li><a href="#about">Sobre</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
            <i class="fas fa-bars"></i>
          </nav>
          <div class="header-text">
            <p>FullStack Developer</p>
            <h1>Olá, meu nome é <span className='span-header'>Rodrigo </span></h1>
          </div>
        </div>
      </header>
      <div id="about">
        <div class="container">
          <div class="row">
            <div class="about-col-1">
              <img className='img-user' src={User} alt='User' />
            </div>
            <div class="about-col-2">

              <h1 class="sub-title">Sobre Me</h1>
              <p>Baiano, nascido e criado no azeite de dendê. Apaixonado por tecnologia desde guri. Curioso, obstinado e ambicioso em viver o que o mundo tem a oferecer.</p><br />
              <p>Desenvolvedor full stack em formação pela Cubos Academy. Técnico em informática pelo Instituto Federal da Bahia. Bagagem em Java e SQL.</p><br />
              <p>Tenho interesse em atuar como Desenvolvedor back-end ou analista de dados. Em busca de conhecimento e novas oportunidades de aprendizado, ambientes
                onde eu possa evoluir na programação em geral e ao mesmo tempo contribuir com os meus conhecimentos.</p><br />

              <div class="tab-titles">
                <p id="skill" className="tab-links " onClick={handleShowSkill}>Skills</p>
                <p id="exp" className="tab-links " onClick={handleShowExperience}>Experience</p>
                <p id="edc" className="tab-links " onClick={handleShowEducation}>Education</p>
              </div>
              {showSkill ? <SkillDiv /> : null}
              {showExperience ? <ExperienceDiv /> : null}
              {showEducation ? <EducationDiv /> : null}

            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div class="container">
          <h1 class="sub-title">Meus Trabalhos</h1>
          <div class="work-list">
            <div class="work">
              <img src={Work1} alt="Primeiro Projeto" />
              <div class="layer">
                <h2>Dindin-Bank</h2>
                <p>Projeto estruturado pela Cubos Academy para desafio de módulo em dupla. É um website
                  onde os usuários podem fazer listagens de aquisições e ou vendas e terem um resumo de ganhos ou perdas.
                </p>
                <a href="https://github.com/rodrigodahora/Dindin-Bank" target='_blank'><img src={gitHub} class="fas fa-external-link-alt"/></a>
              </div>
            </div>
            <div class="work">
              <img src={Work2} alt="" />
              <div class="layer">
                <h2>Projetos em Construção</h2>
                <p></p>
                <a href="#"><img src={gitHub} class="fas fa-external-link-alt"/></a>
              </div>
            </div>
            
            <div class="work">
              <img src={Work3} alt="" />
              <div class="layer">
                <h2>Projetos em Construção</h2>
                <p></p>
                <a href="#"><img src={gitHub} class="fas fa-external-link-alt"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h2 className="sub-title">Contato</h2>
              <p classNameName='p-telefone'><img src={telefone} className="fas fa-phone-square-alt img-icons"></img> (75) 9 9894-1934</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/rodrigo.natan.9/" target='_blank'><img className='fab fa-facebook img-icons' src={facebook} alt="Facebook" /></a>
                <a href="https://www.instagram.com/natandh/" target='_blank'><img className='fab fa-instagram img-icons' src={instagram} alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/natandh/" target='_blank'><img className='fab fa-linkedin img-icons' src={linkedin} alt="Instagram" /></a>
              </div>
              <a href={CV} download class="btn btn2">Download Currículo</a>
            </div>
            <div class="contact-right">
              <form>
                <input type="text" name="Name" placeholder="Your Name" onChange={(event) => setNome(event.target.value)} required />
                <input type="text" name="Assunto" placeholder="Subject" onChange={(event) => setAssunto(event.target.value)} required />
                <input type="email" name="Email" placeholder="Your Email" onChange={(event) => setEmail(event.target.value)} required />
                <textarea name="Message" rows="8" placeholder="Your Message" onChange={(event) => setMensagem(event.target.value)}></textarea>
                <strong className="strong-alert">{alert}</strong>
                <strong className="strong-sucess">{sucess}</strong>
                <button onClick={handleSubmit} className="btn btn3">Enviar</button>
              </form>
            </div>
          </div>
        </div>
        <a href="#" ><img id='btn-top' src={top} alt="Back to the top"/></a>
        <footer class="copyright">
          <p>copyright @ Dev Alphaspace. Made with <i class="fas fa-heart"></i> by Dev Alphaspace</p>
        </footer>
      </div >

    </>

  );
}


