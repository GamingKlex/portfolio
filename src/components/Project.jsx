import { ArrowRight, ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

export default function Project({ onClick, id, title, description, img }) {
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
