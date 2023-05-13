const App = () => (
  <html>
    <div id="site-wrapper">
      <head>
        <title>Emilyn Sim</title>
      </head>
      <body>
        <header id="header" data-current-styles="navCenter">
          <h1>Emilyn Sim</h1>
          <nav>
            <ul>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Technical Experience</a></li>
              <li><a href="#">Communications Experience</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <div className="gallery">
              <img src="/resources/headshot.jpg" alt="current headshot" style={{ width: '225px', height: '300px' }} />
            </div>
            <article>
              <h2> About Me </h2>
              <p> I am currently a Bachelor of Computer Science student at the University of British Columbia.
                I transitioned to computer science from communications, so I have a background in organizational communication.
                Check out my LinkedIn for an overview of my experience.</p>
            </article>
            <article>
              <h2> Contact </h2>
              <p> Vancouver BC | emmysim16@gmail.com | (250) 463 3294 </p>
            </article>
          </section>
        </main>
      </body>
    </div>
  </html>
);

export default App;
