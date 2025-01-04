import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { config } from "../config";

export default function IndexPage({ navigateToProject, navigateToAbout }) {
  return (
    <>
      <Basics />

      <div className="mt-12 text-2xl font-mono tracking-tight text-black">
        Read more{" "}
        <button
          className="font-bold underline hover:text-white hover:bg-black duration-100"
          onClick={() => navigateToAbout()}
        >
          about me
        </button>{" "}
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
  navigateToAbout: PropTypes.func.isRequired,
};

function Basics() {
  return (
    <>
      <div className="mt-12 text-2xl font-mono tracking-tight text-black">
        Hello! My name is{" "}
        <span className={"font-bold " + config.nameColor}>{config.name}</span>{" "}
        and this is my
        <span className={"font-bold " + config.titleColor}> portfolio</span>.
      </div>

      <div className="mt-12 text-2xl font-mono tracking-tight text-black">
        <p>{config.description}</p>
        <p className="text-xl mt-2 text-gray-600">{config.subdescription}</p>
      </div>
    </>
  );
}
