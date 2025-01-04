import { useEffect, useRef, useState } from "react";
import { config } from "./config.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import typewriter from "./utils/typewriter.js";

function App() {
  document.title = config.title + " @ " + config.name;

  let [page, setPage] = useState("index");
  let [projectId, setProjectId] = useState(null);

  let [dir, setDir] = useState("");
  let [text, setText] = useState("");

  const indexRef = useRef(null);
  const projectRef = useRef(null);
  const textRef = useRef(null);
  const aboutRef = useRef(null);

  const navigateToProject = (id) => {
    setPage("project");
    window.location.hash = "#" + id;
    setProjectId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    indexRef.current.style.opacity = 0;
    projectRef.current.style.opacity = 0;
    projectRef.current.style.marginTop = "2rem";
    typewriter(`cd ${id}`, 400, setText);
    setTimeout(() => {
      indexRef.current.style.display = "none";
      projectRef.current.style.display = "block";
      requestAnimationFrame(() => {
        projectRef.current.style.opacity = 1;
        projectRef.current.style.marginTop = 0;
      });
    }, 300);
    setTimeout(() => {
      setText("");
      setDir(`/${id}`);
    }, 550);
  };

  const navigateToAbout = () => {
    setPage("about");
    window.location.hash = "#about";
    window.scrollTo({ top: 0, behavior: "smooth" });
    indexRef.current.style.opacity = 0;
    aboutRef.current.style.opacity = 0;
    aboutRef.current.style.marginTop = "2rem";
    typewriter(`cd about`, 400, setText);
    setTimeout(() => {
      indexRef.current.style.display = "none";
      aboutRef.current.style.display = "block";
      requestAnimationFrame(() => {
        aboutRef.current.style.opacity = 1;
        aboutRef.current.style.marginTop = 0;
      });
    }, 300);
    setTimeout(() => {
      setText("");
      setDir(`/about`);
    }, 550);
  };

  const navigateToIndex = () => {
    setPage("index");
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
    indexRef.current.style.opacity = 0;
    let ref = page === "about" ? aboutRef : projectRef;
    ref.current.style.opacity = 0;
    ref.current.style.marginTop = "2rem";
    textRef.current.style.fontSize = null;
    typewriter(`cd ..`, 250, setText);
    setTimeout(() => {
      indexRef.current.style.display = "block";
      ref.current.style.display = "none";
      requestAnimationFrame(() => {
        indexRef.current.style.opacity = 1;
        ref.current.style.marginTop = 0;
        setProjectId(null);
      });
    }, 300);
    setTimeout(() => {
      setText("");
      setDir("");
    }, 500);
  };

  useEffect(() => {
    // Navigate to the project if the hash contains a project ID or the about page
    let id = window.location.hash.slice(1);
    if (id === "about") {
      navigateToAbout();
    } else if (config.projects.some((project) => project.id === id)) {
      navigateToProject(id);
    }
  }, []);

  return (
    <div className="min-h-screen h-full flex flex-col bg-gray-200 selection:bg-black selection:text-white">
      <div className="container mx-auto px-5 flex flex-col">
        <div
          ref={textRef}
          className={
            (page !== "index" ? "!text-xl md:!text-3_5xl" : "") +
            " mt-40 sm:mt-52 md:mt-60 lg:mt-72 text-2xl flex flex-wrap md:text-3xl lg:text-5xl font-mono font-medium text-black duration-300"
          }
        >
          <span className={config.titleColor}>{config.title}</span>
          <span className="text-gray-600">@</span>
          <span className={config.nameColor}>{config.name.toLowerCase()}</span>
          <span className="text-gray-600">:~{dir} </span>
          &gt;
          <span className="text-black">{text}</span>
          <span className="cursor">_</span>
        </div>

        <div ref={indexRef} className="transition-opacity duration-300">
          <IndexPage
            navigateToProject={navigateToProject}
            navigateToAbout={navigateToAbout}
          />
        </div>

        <div
          ref={aboutRef}
          style={{ display: "none" }}
          className="duration-300"
        >
          <AboutPage onBack={navigateToIndex} />
        </div>

        <div
          ref={projectRef}
          style={{ display: "none" }}
          className="duration-300"
        >
          <ProjectPage projectId={projectId} onBack={navigateToIndex} />
        </div>
      </div>
    </div>
  );
}

export default App;
