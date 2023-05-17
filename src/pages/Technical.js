import Cursor from "../Events/cursorEvent";


const Technical = () => (
  <siteWrapper>
    <Cursor />
    <header>
      <h1>Technical</h1>
      <nav>
        <a class="btn">Technical Experience</a>
        <a class="btn">Communications Experience</a>
      </nav>
    </header>

    <div class="parent">

      <div class="div1">
        <p class="name">Technical</p>
        <p class="cs">UBC Computer Science</p>
      </div>

      <div class="div2">
      <div class="headshot-container"><img src={require('./resources/headshot.jpeg')} class="headshot" alt="Headshot" scale="0.5" /></div>    
      </div>

      <div class="div3">
        <ul class="accordion-items-container">
          <li class="accordion-item">
            <div class="accordian-divider" />
            <b class="accordian">
              <a class="accordian" href="resources/SimEmilyn_Resume.pdf" alt="Resume">Resume</a>
            </b>
          </li>
          <li class="accordion-item">
            <div class="accordian-divider" />
            <b class="accordian">
              <a class="accordian" href="www.facebook.com" alt="LinkedIn">LinkedIn</a>
            </b>
          </li>
          <li class="accordion-item">
            <div class="accordian-divider" />
            <b class="accordian">
              <a class="accordian" href="www.facebook.com" alt="LinkedIn">GitHub</a>
            </b>
            <div class="accordian-divider" />
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <contactBox>
        <p class="contact">Contact</p>
        <p class="info">esim01@student.ubc.ca 250 463 3294</p>
      </contactBox>
    </footer>
  </siteWrapper>
);

export default Technical;
