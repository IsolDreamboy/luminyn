import { useEffect, useState } from "react";

const FONTES = [
  { className: "font-sans" },
  { className: "font-serif italic" },
  { className: "font-mono" },
];

function Brilho({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M50 0 C51.5 38 55 46 76 50 C55 54 51.5 62 50 100 C48.5 62 45 54 24 50 C45 46 48.5 38 50 0Z" />
    </svg>
  );
}

function PalavraAnimada({ palavra }: { palavra: string }) {
  const [atual, setAtual] = useState<number>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setAtual((p) => (p + 1) % FONTES.length), 1300);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-grid items-baseline align-baseline text-left text-[#6a6971] select-none">
      {FONTES.map((f, i) => (
        <span
          key={f.className}
          aria-hidden={i !== atual}
          className={`col-start-1 row-start-1 whitespace-nowrap leading-[1.15] transition-opacity duration-300 ${f.className} ${
            i === atual ? "opacity-100" : "opacity-0"
          }`}
        >
          {palavra}
        </span>
      ))}
    </span>
  );
}

function Banner() {
  useEffect(() => {
    const id = "fonte-poppins";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      id="Home"
      className="relative flex min-h-[88svh] md:min-h-[calc(100svh-5rem)] scroll-mt-24 flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-12 md:pt-32 md:pb-16 text-center font-['Poppins','Open_Sans',sans-serif]"
    >
      <Brilho className="pointer-events-none absolute left-[7%] top-[14%] md:top-[18%] w-8 md:w-16 -rotate-[22deg] text-[#232440]/80 animate-pulse" />
      <Brilho className="pointer-events-none absolute right-[8%] top-[22%] md:top-[28%] w-5 md:w-9 rotate-[22deg] text-[#232440]/40" />
      <Brilho className="pointer-events-none absolute right-[10%] bottom-[6%] md:right-[14%] md:bottom-[14%] w-9 md:w-20 rotate-[22deg] text-[#232440]/70" />
      <Brilho className="pointer-events-none absolute hidden md:block left-[16%] bottom-[22%] w-5 md:w-7 -rotate-[22deg] text-[#232440]/30" />

      <p className="mb-3 md:mb-4 font-sans text-3xl md:text-5xl font-light text-[#040514]/80">
        Luminyn Studio
      </p>

      <h1 className="max-w-5xl text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.02em] text-[#232440]">
        <span className="block">Ideias que</span>
        <span className="mt-2 block text-[0.8em]">
          ganham <PalavraAnimada palavra="forma." />
        </span>
      </h1>

      <p className="mt-6 max-w-[22rem] md:max-w-xl text-base md:text-xl font-medium leading-relaxed text-[#7d7874] text-balance">
        Design, conteúdo e desenvolvimento para marcas que querem ser lembradas.
      </p>

      <div className="mt-8 md:mt-9 flex w-full max-w-[19rem] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
        <a
          href="#Contato"
          className="group inline-flex w-full sm:w-auto items-center justify-between sm:justify-center gap-4 rounded-full bg-[#232440] py-2 pl-7 pr-2 text-base md:text-lg font-bold text-[#f6e5de]
                     shadow-[0_10px_24px_rgba(35,36,64,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(35,36,64,0.32)]
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#232440]"
        >
          Fale com a Luminyn
          <span
            aria-hidden="true"
            className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full bg-[#f6e5de] text-[#232440] transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-90"
          >
            →
          </span>
        </a>
        <a
          href="#Servicos"
          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-[#232440]/20 px-7 py-[0.8rem] md:py-[0.9rem] text-base md:text-lg font-bold text-[#232440]
                     transition duration-300 hover:-translate-y-0.5 hover:border-[#232440] hover:bg-[#232440] hover:text-[#f6e5de]
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#232440]"
        >
          <Brilho className="w-[1.15rem] -rotate-[22deg] transition-transform duration-500 group-hover:rotate-[158deg]" />
          Ver serviços
        </a>
      </div>
    </section>
  );
}

export default Banner;