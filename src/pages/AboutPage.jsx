import { ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Footer from "../components/Footer";
import { config } from "../config";

export default function AboutPage({ onBack }) {
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
        About me
      </div>

      <article className="prose mt-5 lg:prose-xl font-mono tracking-tight text-black">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {config.about || "No description provided."}
        </ReactMarkdown>
      </article>

      <Footer />
    </>
  );
}

AboutPage.propTypes = {
  onBack: PropTypes.func.isRequired,
};
