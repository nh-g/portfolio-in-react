
export function getAboutMe() {
  return (
    <>
      <p>
        I have 5 year experience working in Japan in business development,
        consulting, project management, for major players in HR and IT.
        Currently, I am brushing up my skill at Novare Frontend Camp. <br />
        {/* <br />
      Moving to Stockholm in late of 2018, I took a challenge starting a family
      in a new continent. And with a beautiful chaos since the born of my child and what-called new mom
      crisis, I find programming as a meditation to connect to my own sanity.
      <br /> */}
        <br />
        My field of expertise which maybe of use to you, dear visitor, lies in
        the following: <br />
        <br />❖ UI/UX design <br />❖ Responsive and interactive design
        <br />❖ Web development
      </p>
      {/* <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/10X6BnynfWezYfWR-CkU4qXS04izgziXA/view"
      >
        <button className="button black">Check Resume</button>
      </a> */}
      <div className="spacer"></div>
      <a
        target="_blank"
        className="cta"
        rel="noopener noreferrer"
        href="https://drive.google.com/drive/u/0/folders/1rdb0F_73W79ExNcBBk1UftiRCVNHbPOp"
      >
        <span>Check Resume</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
      <div className="spacer"></div>
    </>
  );
}
export function getHero() {
  return (
    <div>
      <h1> ’Hi.! </h1>
      <h3>I am Giang, a frontend developer who </h3>
      <p>... grew up in Vietnam, living with two Japanese, in Stockholm.</p>
      <p>
        I like cycling, wandering in nature, playing with kids, and learning new
        things.
      </p>
    </div>
  );
}


