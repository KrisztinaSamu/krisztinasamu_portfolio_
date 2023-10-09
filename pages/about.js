
import Layout from "../components/Layout.js";
import aboutStyles from "../styles/about.module.css";
import Image from "next/image";

export default function AboutPost() {
  return (
    <Layout>
      <div className={aboutStyles.sectionBox}>
        <div className={aboutStyles.aboutBox}>
          <div className={aboutStyles.aboutHeader}>
            <h1 class={aboutStyles.greetingText}>Szia, Kriszti vagyok!</h1>
            <h2 class="profession-text">Junior frontend fejlesztő Szegedről</h2>
          </div>
          <p class="about-text">
            Kereskedelemből érkező, elszánt szakmaváltó vagyok. Hosszú távon az
            IT és a webfejlesztés világa biztosítja számomra a lehetőséget arra,
            hogy értéket és hasznot teremtő munkát végezzek mások számára is,
            miközben folyamatosan fejlődöm és kilépek a komfortzónámból.
          </p>
          <p class="about-text">
            Eddig a HTML, CSS, SCSS, JavaScript, Bootstrap, React, SQL alapjait
            sajátítottam el. Fejlesztés közben jól alkalmazom az önálló
            problémamegoldó, a hibákat gyorsan felismerő, és javító
            képességeimet.
          </p>
          <p class="about-text">
            Ismereteimet folyamatosan bővítem, ezért
            <span class="small-textSize">
              <i class="fab fa-google fa-1x"></i>oogle
            </span>
            és
            <span class="small-textSize">
              <i class="fab fa-stack-overflow fa-1x"></i>stack
              <b>overflow</b>
            </span>
            a legjobb barátom :)
          </p>
          <div class="cta">
            <a href="#portfolio" class="btn btn-cta">
              Portfólió megtekintése <span class="arrow"></span>
            </a>

            <a href="resume.html" class="btn btn-cta" target="_blank">
              Önéletrajz megtekintése <span class="arrow"></span>
            </a>
          </div>
        </div>

        <div class={aboutStyles.aboutBox}>
          <Image
            src="/samu_krisztina.png"
            alt="my-photo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </Layout>
  );
}
