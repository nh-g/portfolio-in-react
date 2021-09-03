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
            <img src={Email} alt="" />
            <a href="mailto:giangngohong@gmail.com">giangngohong@gmail.com</a>
          </li>
          <li>
            <img src={Mobile} alt="" />
            <a href="tel:0763497580">+46 76 337 2268</a>
          </li>
          <li>
            <img src={Location} alt="" />
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Stockholm"
            >
              Stockholm, Sweden
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
