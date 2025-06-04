import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import logo from "./assets/logo/transparent-logo.png"
import taskManager from "./assets/TaskManager.png"
import musicWorld from "./assets/MusicWorld.png"

function App() {

  useEffect(() => {

    const navButtons = document.querySelectorAll('.nav-item');
    const tabs =  document.querySelectorAll('.tab')

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="top-logo">
        <img src={logo} alt="" />
      </div>

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
                  <a href="#about">About</a>
                </div>
              </div>
              <div className="nav-item" id='projects-button' data-target="projects">
                <div className="line"></div>
                <div className="linkName">
                  <a href="#projects">Projects</a>
                </div>
              </div>
              <div className="nav-item" id='contact-button' data-target="contact">
                <div className="line"></div>
                <div className="linkName">
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </div>

            <div className="socials">
              <ul>
                <li className='logos'>
                  <a href="">
                    <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier"> 
                        <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path> 
                      </g>
                    </svg>
                  </a>
                </li>
                <li className='logos'>
                  <a href="">
                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier"> 
                        <title>github [#142]</title> 
                        <desc>Created with Sketch.</desc> 
                        <defs> </defs> 
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                          <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> 
                            <g id="icons" transform="translate(56.000000, 160.000000)"> 
                              <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> 
                            </g> 
                          </g> 
                        </g> 
                      </g>
                    </svg>
                  </a>
                </li>
                <li className='logos'>
                  <a href="">
                    <svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier"> 
                        <title>Codepen-color</title> 
                        <desc>Created with Sketch.</desc> 
                        <defs> </defs> 
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                          <g id="Color-" transform="translate(-800.000000, -160.000000)" fill="#0B0B0A"> 
                            <path d="M847.982,176.419 C847.9775,176.3875 847.97,176.359 847.9655,176.329 C847.955,176.2705 847.9445,176.212 847.9295,176.1565 C847.9205,176.122 847.907,176.089 847.8965,176.056 C847.88,176.005 847.8635,175.9555 847.844,175.906 C847.8305,175.8715 847.814,175.837 847.7975,175.8055 C847.7765,175.7575 847.754,175.7125 847.727,175.669 C847.709,175.636 847.688,175.6045 847.6685,175.573 C847.6415,175.5295 847.613,175.4875 847.5815,175.447 C847.559,175.417 847.535,175.387 847.511,175.3585 C847.478,175.3195 847.4435,175.282 847.4075,175.246 C847.3805,175.219 847.355,175.1905 847.3265,175.1665 C847.2875,175.132 847.2485,175.099 847.2095,175.0675 C847.178,175.0435 847.148,175.0195 847.1165,174.997 C847.1045,174.9895 847.094,174.979 847.082,174.9715 L825.1445,160.3465 C824.4515,159.8845 823.55,159.8845 822.8555,160.3465 L800.9195,174.9715 C800.9075,174.979 800.897,174.9895 800.885,174.997 C800.852,175.0195 800.822,175.0435 800.792,175.0675 C800.7515,175.099 800.7125,175.132 800.675,175.1665 C800.6465,175.1905 800.6195,175.219 800.5925,175.246 C800.5565,175.282 800.522,175.3195 800.4905,175.3585 C800.465,175.387 800.441,175.417 800.4185,175.447 C800.3885,175.4875 800.36,175.5295 800.333,175.573 C800.312,175.6045 800.2925,175.636 800.273,175.669 C800.2475,175.7125 800.225,175.7575 800.2025,175.8055 C800.1875,175.837 800.171,175.8715 800.1575,175.906 C800.1365,175.9555 800.12,176.005 800.1035,176.056 C800.093,176.089 800.081,176.122 800.072,176.1565 C800.057,176.212 800.0465,176.2705 800.036,176.329 C800.03,176.359 800.0225,176.3875 800.0195,176.419 C800.0075,176.506 800,176.596 800,176.6875 L800,191.3125 C800,191.4025 800.0075,191.4925 800.0195,191.5825 C800.0225,191.611 800.03,191.641 800.036,191.671 C800.0465,191.7295 800.057,191.7865 800.072,191.8435 C800.081,191.878 800.093,191.911 800.1035,191.944 C800.12,191.9935 800.1365,192.0445 800.1575,192.0955 C800.171,192.1285 800.1875,192.1615 800.2025,192.1945 C800.225,192.241 800.2475,192.286 800.273,192.3325 C800.2925,192.364 800.312,192.3955 800.333,192.427 C800.36,192.4705 800.3885,192.511 800.4185,192.5515 C800.441,192.583 800.465,192.613 800.4905,192.6415 C800.522,192.679 800.5565,192.718 800.5925,192.7525 C800.6195,192.781 800.6465,192.808 800.675,192.8335 C800.7125,192.868 800.7515,192.901 800.792,192.9325 C800.822,192.9565 800.852,192.9805 800.885,193.003 C800.897,193.0105 800.9075,193.021 800.9195,193.0285 L822.8555,207.6535 C823.202,207.8845 823.601,208 824,208 C824.399,208 824.798,207.8845 825.1445,207.6535 L847.082,193.0285 C847.094,193.021 847.1045,193.0105 847.1165,193.003 C847.148,192.9805 847.178,192.9565 847.2095,192.9325 C847.2485,192.901 847.2875,192.868 847.3265,192.8335 C847.355,192.808 847.3805,192.781 847.4075,192.7525 C847.4435,192.718 847.478,192.679 847.511,192.6415 C847.535,192.613 847.559,192.583 847.5815,192.5515 C847.613,192.511 847.6415,192.4705 847.6685,192.427 C847.688,192.3955 847.709,192.364 847.727,192.3325 C847.754,192.286 847.7765,192.241 847.7975,192.1945 C847.814,192.1615 847.8305,192.1285 847.844,192.0955 C847.8635,192.0445 847.88,191.9935 847.8965,191.944 C847.907,191.911 847.9205,191.878 847.9295,191.8435 C847.9445,191.7865 847.955,191.7295 847.9655,191.671 C847.97,191.641 847.9775,191.611 847.982,191.5825 C847.994,191.4925 848,191.4025 848,191.3125 L848,176.6875 C848,176.596 847.994,176.506 847.982,176.419 L847.982,176.419 L847.982,176.419 Z M826.0625,165.9175 L842.2235,176.6905 L835.0055,181.519 L826.0625,175.537 L826.0625,165.9175 L826.0625,165.9175 Z M821.9375,165.9175 L821.9375,175.537 L812.996,181.519 L805.7765,176.6905 L821.9375,165.9175 L821.9375,165.9175 Z M804.125,180.5485 L809.2865,184 L804.125,187.4515 L804.125,180.5485 L804.125,180.5485 Z M821.9375,202.0825 L805.7765,191.3095 L812.996,186.4825 L821.9375,192.463 L821.9375,202.0825 L821.9375,202.0825 Z M824,188.8795 L816.7055,184 L824,179.1205 L831.296,184 L824,188.8795 L824,188.8795 Z M826.0625,202.0825 L826.0625,192.463 L835.0055,186.4825 L842.2235,191.3095 L826.0625,202.0825 L826.0625,202.0825 Z M843.875,187.4515 L838.715,184 L843.875,180.5485 L843.875,187.4515 L843.875,187.4515 Z" id="Codepen"> </path> 
                          </g> 
                        </g>
                      </g>
                    </svg>
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
