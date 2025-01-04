import { config } from "../config";

export default function Footer() {
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
        {config.githubUrl && (
          <>
            <a
              className="font-bold underline hover:text-white hover:bg-black duration-100"
              href={config.githubUrl}
            >
              View on GitHub
            </a>
            —
          </>
        )}
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
