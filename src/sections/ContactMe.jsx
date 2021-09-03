import { getContactIntro } from "../data/aboutMe";
import Email from "../assets/images/icons/email.png";
import Mobile from "../assets/images/icons/mobile.png";
import Location from "../assets/images/icons/location.png";


export default function Projects() {
  return (
    <section id="contact" className="reverse">
      {/* Tittle */}
      <h1 className="section-name">Contact</h1>

      <div className="grid">
        {/* Introduction Paragraph */}
        <div>{getContactIntro()}</div>

        {/* Main Content */}
        <ul>
          <li>
            <a href="mailto:giangngohong@gmail.com">
              <img src={Email} alt="" />
              giangngohong@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:0763497580">
              <img src={Mobile} alt="" /> +46 76 337 2268
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Stockholm"
            >
              <img src={Location} alt="" /> Stockholm, Sweden
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
