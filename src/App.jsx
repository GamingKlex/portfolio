import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { config } from "./config.jsx";

function App() {
  document.title = config.title + " @ " + config.name;

  let [page, setPage] = useState("index");
  let [projectId, setProjectId] = useState(null);

  let [dir, setDir] = useState("");
  let [text, setText] = useState("");

  const indexRef = useRef(null);
  const projectRef = useRef(null);
  const textRef = useRef(null);

  const navigateToProject = (id) => {
    setPage("project");
    setProjectId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    indexRef.current.style.opacity = 0;
    projectRef.current.style.opacity = 0;
    projectRef.current.style.marginTop = "2rem";
    textRef.current.style.fontSize = "2rem";
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

  const navigateToIndex = () => {
    setPage("index");
    window.scrollTo({ top: 0, behavior: "smooth" });
    indexRef.current.style.opacity = 0;
    projectRef.current.style.opacity = 0;
    projectRef.current.style.marginTop = "2rem";
    textRef.current.style.fontSize = null;
    typewriter(`cd ..`, 250, setText);
    setTimeout(() => {
      indexRef.current.style.display = "block";
      projectRef.current.style.display = "none";
      requestAnimationFrame(() => {
        indexRef.current.style.opacity = 1;
        projectRef.current.style.marginTop = 0;
        setProjectId(null);
      });
    }, 300);
    setTimeout(() => {
      setText("");
      setDir("");
    }, 500);
  };

  return (
    <div className="min-h-screen h-full flex flex-col bg-gray-200 selection:bg-black selection:text-white">
      <div className="container mx-auto px-5 flex flex-col">
        <div
          ref={textRef}
          className="mt-72 text-5xl font-mono font-medium text-black duration-300"
        >
          <span className="text-yellow-500">{config.title}</span>
          <span className="text-gray-600">@</span>
          <span className="text-green-500">{config.name.toLowerCase()}</span>
          <span className="text-gray-600">:~{dir} </span>
          &gt;
          <span className="text-black">{text}</span>
          <span className="cursor">_</span>
        </div>

        <div ref={indexRef} className="transition-opacity duration-300">
          <IndexPage navigateToProject={navigateToProject} />
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

function IndexPage({ navigateToProject }) {
  return (
    <>
      <Basics />

      <div className="mt-12 text-2xl font-mono tracking-tight text-black">
        Read more{" "}
        <a
          className="font-bold underline hover:text-white hover:bg-black duration-100"
          href="#"
        >
          about me
        </a>{" "}
        or check out my <span className="font-bold">projects</span>:
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {config.projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.summary}
            onClick={() => navigateToProject(project.id)}
            img={project.img}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

IndexPage.propTypes = {
  navigateToProject: PropTypes.func.isRequired,
};

function ProjectPage({ projectId, onBack }) {
  const project = config.projects.find((project) => project.id === projectId);

  return (
    <>
      <button
        className="mt-12 w-fit flex items-center gap-2 font-bold underline hover:text-white hover:bg-black duration-100"
        onClick={onBack}
      >
        <ArrowLeft size={24} />
        Go back
      </button>

      <div className="mt-12 text-3xl font-mono font-bold tracking-tight text-black">
        {project?.title || "Unnamed project"}
      </div>

      <article className="prose mt-5 lg:prose-xl font-mono tracking-tight text-black">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {project?.body || "No description provided."}
        </ReactMarkdown>
      </article>

      <Footer />
    </>
  );
}

ProjectPage.propTypes = {
  projectId: PropTypes.string,
  onBack: PropTypes.func.isRequired,
};

function Basics() {
  return (
    <>
      <div className="mt-12 text-2xl font-mono tracking-tight text-black">
        Hello! My name is{" "}
        <span className="text-green-500 font-bold">{config.name}</span> and this
        is my
        <span className="text-yellow-500 font-bold"> portfolio</span>.
      </div>

      <div className="mt-12 text-2xl font-mono tracking-tight text-black">
        <p>{config.description}</p>
        <p className="text-xl mt-2 text-gray-600">{config.subdescription}</p>
      </div>
    </>
  );
}

function Project({ onClick, id, title, description, img }) {
  return (
    <button
      onClick={onClick}
      className="text-left flex gap-4 items-center group outline-none"
    >
      <div className="border-2 border-black bg-transparent w-full max-w-xs relative">
        <div className="p-5">
          <img className="w-full h-40 object-cover" src={img} alt={title} />
          <div className="mt-4 text-black text-lg font-mono font-bold flex items-center justify-between">
            <p>{title}</p>
            <ArrowRight size={24} />
          </div>
        </div>
        <div className="absolute flex items-center justify-center inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p className="text-white text-lg font-mono font-bold flex items-center">
            cd {id}
            <ArrowUpRight size={24} className="ml-2" />
          </p>
        </div>
      </div>
      <div>
        <div className="text-black text-lg font-mono tracking-tight text-balance">
          {description}
        </div>
      </div>
    </button>
  );
}

Project.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

function Footer() {
  return (
    <>
      {config.socials.length > 0 && (
        <div className="mt-16 -mb-8 flex items-center justify-center gap-3">
          {config.socials.map((social, index) => (
            <a
              key={index}
              className="group relative text-black flex items-center justify-center border border-black rounded-full p-3 hover:text-white hover:bg-black duration-100"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
              {social.tooltip && (
                <span className="absolute selection:bg-white selection:text-black -top-2 -translate-y-full bg-black text-white text-xs font-mono px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 duration-200">
                  {social.tooltip}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
      <div className="pb-12 mt-16 gap-2.5 flex justify-center text-lg font-mono tracking-tight text-black">
        <a
          className="font-bold underline hover:text-white hover:bg-black duration-100"
          href={config.githubUrl}
        >
          View on GitHub
        </a>
        —
        <a
          className="font-bold underline hover:text-white hover:bg-black duration-100"
          href="https://github.com/GamingKlex/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Create your own portfolio
        </a>
      </div>
    </>
  );
}

function typewriter(text, duration, onChange) {
  let i = 0;
  let interval = setInterval(() => {
    onChange(text.slice(0, i));
    i++;
    if (i === text.length + 1) clearInterval(interval);
  }, duration / text.length);
}

export default App;
