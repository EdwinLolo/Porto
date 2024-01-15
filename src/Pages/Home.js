import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Project from "../components/project/project";
import Contact from "../components/contact/contact";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
