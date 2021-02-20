import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Works from "../components/Works";
import ContactMe from "../components/ContactMe";

export default function MainContents() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Works />
      <ContactMe />
    </main>
  );
}
