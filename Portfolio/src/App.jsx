import { useState, useEffect } from 'react'

import logo from "./assets/logo/transparent-logo.png"
import taskManager from "./assets/TaskManager.png"
import musicWorld from "./assets/MusicWorld.png"

import { FaGithub, FaLinkedin, FaCodepen} from 'react-icons/fa6'

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      // console.log(mousePosition);
    }

    const navButtons = document.querySelectorAll('.nav-item');
    const tabs =  document.querySelectorAll('.tab')

    navButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          console.log(`Scrolling to ${targetId}`);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }else{
          console.error(`Element with ID ${targetId} not found.`);
        }
      });
    });

    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tabID = entry.target.id;
            navButtons.forEach((button) => {
              button.classList.remove('active');
              if (button.id.includes(tabID)) {
                button.classList.add('active');
              }
            });
          }
        });
      },
      { threshold: 0.5 } // Adjusted threshold for better visibility detection
    );

    tabs.forEach((tab) => newObserver.observe(tab)); 



    const rtlContainers = document.querySelectorAll('.rtl-skills');
    const ltrContainers = document.querySelectorAll('.ltr-skills');

    const handleScroll = () => {
      rtlContainers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(-parseInt(rect.width), Math.min(1, (windowHeight - rect.top) / windowHeight));

        container.style.transform = `translateX(-${scrollProgress * 100}px)`;
      });
      ltrContainers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        container.style.transform = `translateX(${scrollProgress * 100}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      navButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="top-logo">
        <img src={logo} alt="" />
      </div>

      <div className='dot' style={{top: mousePosition.y + window.scrollY - 2.5  + 'px', left: mousePosition.x -2.5 + 'px'}}></div>
      <div className="ring" style={{top: mousePosition.y + window.scrollY - 15 +'px', left: mousePosition.x - 15 + 'px'}}></div>

      <div id="main-container">
        <div id="left-side">
          <div id="top">
            <div className="name">
              <h1>Fortune Obioha</h1>
            </div>
            <div className="role">
              <p>
                <strong>
                  Front End Developer
                </strong>
              </p>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit obcaecati id qui iure ipsa odit vel in illum rem eum.
              </p>
            </div>

            <div className="nav">
              <div className="nav-item" id='about-button' data-target="about">
                <div className="line"></div>
                <div className="linkName">
                  <p>About</p>
                </div>
              </div>
              <div className="nav-item" id='projects-button' data-target="projects">
                <div className="line"></div>
                <div className="linkName">
                  <p>Projects</p>
                </div>
              </div>
              <div className="nav-item" id='contact-button' data-target="contact">
                <div className="line"></div>
                <div className="linkName">
                  <p>Contact</p>
                </div>
              </div>
            </div>

            <div className="socials">
              <ul>
                <li className='logos'>
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li>
                <li className='logos'>
                  <a href="">
                    <FaGithub />
                  </a>
                </li>
                <li className='logos'>
                  <a href="">
                    <FaCodepen />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="right-side">

          <div id="about" className='tab'>

            <h2>About</h2>
            <p>
              I'm a passionate frontend developer with a strong eye for design and a deep love for building beautiful, responsive websites. I specialize in turning ideas into intuitive digital experiences using HTML, CSS, JavaScript, and modern frameworks. Whether it's crafting smooth user interfaces or ensuring pixel-perfect layouts, I take pride in creating products that are not just functional but feel good to use.
            </p>
            <p>
              With a background in both design and code, I thrive at the intersection of creativity and logic. I believe great frontend development is about more than just clean code, it's about understanding how people interact with technology and building experiences that make them feel confident, curious, and engaged. Over the past few years, I've worked on a variety of projects, from personal websites to collaborative apps, always focusing on clarity, performance, and accessibility.
            </p>
            <p>
              My journey as a developer has been fueled by curiosity and a desire to create. I love exploring new technologies, experimenting with CSS animations, and finding innovative solutions to design challenges. Whether I'm debugging a tricky layout issue or optimizing a site's performance, I approach each task with enthusiasm and a commitment to excellence.
            </p>

          </div>

          <div id="projects" className='tab'>
            <h2>Projects</h2>
            <div className="project">
              <div className="left">
                <div className="projectName">MusicWorld</div>
                <div className="projectDesc">
                  <p>
                    A music app that utilizes <span><a>Spotify Web Api</a></span> to find other music apis to provides a 30 second snippet of songs and additional information about the song and artist
                  </p>
                  <div className="tags">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Spotify API</span>
                    <span className="tag">MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="projectImage">
                  <img src={musicWorld} alt="" />
                </div>
              </div>
            </div>

            <div className="project">
              <div className="left">
                <div className="projectName">Task Manager</div>
                <div className="projectDesc">
                  <p>
                    A music app that utilizes <span><a>Spotify Web Api</a></span> to find other music apis to provides a 30 second snippet of songs and additional information about the song and artist
                  </p>
                  <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">Tailwind</span>
                    <span className="tag">TypeScript</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="projectImage">
                  <img src={taskManager} alt="" />
                </div>
              </div>
            </div>

            <div className="project">
              <div className="left">
                <div className="projectName">MusicWorld</div>
                <div className="projectDesc">
                  <p>
                    A music app that utilizes <span><a>Spotify Web Api</a></span> to find other music apis to provides a 30 second snippet of songs and additional information about the song and artist
                  </p>
                  <div className="tags">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Spotify API</span>
                    <span className="tag">MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="projectImage">
                  <img src={musicWorld} alt="" />
                </div>
              </div>
            </div>

          </div>

          <div id="skills">
            <div className="empty-lines"></div>

            <div className="skills-container">
              <div className="rtl-skills">
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
                <span className="skill">JavaScript</span>
                <span className="skill">React</span>
                <span className="skill">Tailwind CSS</span>
                <span className="skill">TypeScript</span>
                <span className="skill">Node.js</span>
                <span className="skill">Express.js</span>
                <span className="skill">MongoDB</span>
                <span className="skill">Git & GitHub</span>
              </div>  
            </div>

            <div className="empty-lines"></div>

            <div className="skills-container">
              <div className="ltr-skills">
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
                <span className="skill">JavaScript</span>
                <span className="skill">React</span>
                <span className="skill">Tailwind CSS</span>
                <span className="skill">TypeScript</span>
                <span className="skill">Node.js</span>
                <span className="skill">Express.js</span>
                <span className="skill">MongoDB</span>
                <span className="skill">Git & GitHub</span>
              </div>
            </div>
            <div className="empty-lines"></div>
          </div>

          <div id="contact" className='tab'>
            <h2>Contact</h2>
            <div className="form">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Micheal Scott" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="example@gmail.com" required />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </div>
          </div> 

        </div>
      </div>

    </>
  )
} 

export default App
