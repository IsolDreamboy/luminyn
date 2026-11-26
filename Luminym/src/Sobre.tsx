import { useEffect, useRef, useState } from "react";

type Side = "left" | "right" | null;

type Balao = {
  lado: Exclude<Side, null>;
  etiqueta: string;
  icone: string;
  titulo: string;
  subtitulo: string;
  paragrafos: string[];
  setaMobile: string;
  setaDesktop: string;
};

type Gato = {
  img: string;
  alt: string;
  nome: string;
  aciona: Exclude<Side, null>;
  imgClasse: string;
  giro: string;
  giroHover: string;
};

const baloes: Balao[] = [
  {
    lado: "left",
    etiqueta: "Design",
    icone: "pincel.png",
    titulo: "Design Web",
    subtitulo: "A arte em cada pixel.",
    paragrafos: [
      "Criamos identidades visuais autorais, alinhadas ao posicionamento de cada marca e construídas a partir de escolhas visuais que expressam sua personalidade.",
      "De logotipos a materiais digitais e impressos, cada detalhe compõe uma linguagem própria, consistente e reconhecível.",
    ],
    setaMobile: "top-full left-1/2 -mt-px h-4 w-8 -translate-x-1/2 [clip-path:polygon(0_0,100%_0,50%_100%)]",
    setaDesktop: "left-full top-1/2 -ml-px h-8 w-4 -translate-y-1/2 [clip-path:polygon(0_0,100%_50%,0_100%)]",
  },
  {
    lado: "right",
    etiqueta: "Código",
    icone: "",
    titulo: "Desenvolvedor Web",
    subtitulo: "Sites que realmente se destacam.",
    paragrafos: [
      "Transforme sua presença online com um site personalizado, pensado para as necessidades específicas do seu negócio.",
      "Design responsivo e moderno, otimização para SEO, integração com redes sociais e suporte técnico contínuo.",
    ],
    setaMobile: "bottom-full left-1/2 -mb-px h-4 w-8 -translate-x-1/2 [clip-path:polygon(50%_0,100%_100%,0_100%)]",
    setaDesktop: "right-full top-1/2 -mr-px h-8 w-4 -translate-y-1/2 [clip-path:polygon(100%_0,100%_100%,0_50%)]",
  },
];

const gatos: Gato[] = [
  {
    img: "WhiteCat.png",
    alt: "Gato branco da Luminyn Studio",
    nome: "Código",
    aciona: "right",
    imgClasse: "scale-[1.07]",
    giro: "rotate-3",
    giroHover: "group-hover:rotate-3",
  },
  {
    img: "white2.png",
    alt: "Gato preto da Luminyn Studio",
    nome: "Design",
    aciona: "left",
    imgClasse: "",
    giro: "-rotate-3",
    giroHover: "group-hover:-rotate-3",
  },
];

function Brilho({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M50 0 C51.5 38 55 46 76 50 C55 54 51.5 62 50 100 C48.5 62 45 54 24 50 C45 46 48.5 38 50 0Z" />
    </svg>
  );
}

function ConteudoBalao({ balao, cheio }: { balao: Balao; cheio: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-[#232440] shadow-xl ${cheio ? "h-full w-full" : "w-full"}`}
    >
      <Brilho className="absolute -bottom-6 -right-6 w-24 md:w-36 rotate-[22deg] text-[#f6e5de]" />
      <Brilho className="absolute top-6 right-7 w-5 md:w-8 rotate-[22deg] text-[#f6e5de]/40" />

      <div
        className={`relative flex flex-col gap-3 md:gap-4 p-6 pr-10 md:p-10 lg:p-12 md:pr-16 text-left font-['Poppins','Open_Sans',sans-serif] text-[#f6e5de] ${
          cheio ? "h-full justify-center" : "pb-8"
        }`}
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f6e5de]/10 px-3 py-1 text-xs md:text-sm font-medium">
          {balao.icone ? (
            <img src={balao.icone} alt="" className="h-4 w-4 object-contain invert" />
          ) : (
            <span className="font-mono text-[0.95em]">{"</>"}</span>
          )}
          {balao.etiqueta}
        </span>

        <h3 className="text-[1.9rem] md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.01em]">
          {balao.titulo}
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl font-medium leading-snug">{balao.subtitulo}</p>

        {balao.paragrafos.map((p) => (
          <p key={p} className="text-[0.95rem] md:text-base lg:text-lg leading-relaxed text-[#f6e5de]/85">
            {p}
          </p>
        ))}

        <a
          href="#Contato"
          className="mt-1 md:mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#f6e5de] px-5 py-2.5 text-sm md:text-base font-bold text-[#232440] transition-transform duration-300 hover:scale-105"
        >
          Vamos conversar
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

function Sobre() {
  const [hoveredSide, setHoveredSide] = useState<Side>(null);

  useEffect(() => {
    const id = "fonte-poppins";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);

  const timer = useRef<number | undefined>(undefined);

  const interaction = (side: Exclude<Side, null>, balaoDaCelula: Exclude<Side, null>) => ({
    onPointerEnter: (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      window.clearTimeout(timer.current);
      setHoveredSide((prev) => (prev === balaoDaCelula ? prev : side));
    },
    onPointerLeave: (e: React.PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      timer.current = window.setTimeout(() => setHoveredSide(null), 200);
    },
    onPointerUp: (e: React.PointerEvent) => {
      if (e.pointerType !== "touch") return;
      setHoveredSide((prev) => (prev === balaoDaCelula || prev === side ? null : side));
    },
  });

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <section id="Sobre" className="scroll-mt-24 pt-20 pb-4 md:pt-28 md:pb-6">
      <div className="flex flex-col items-center text-center px-6">
        <h1 className="mb-1 p-1 font-['Open_Sans'] text-[1.35rem] md:text-[1.75rem] leading-none font-semibold text-[#938e8b]">
          Sobre nós
        </h1>
        <h2 className="font-['Open_Sans'] text-[2.4rem] sm:text-5xl font-bold text-[#232323] leading-[1.15] sm:leading-[1.2]">
          Dois gatos,
          <br />
          um só estúdio.
        </h2>
        <p className="mt-4 max-w-[21rem] md:max-w-none font-['Open_Sans'] text-[0.95rem] md:text-[1.0625rem] font-bold leading-[1.6] text-[#938e8b] text-balance">
          <span className="hidden md:inline">Passe o mouse</span>
          <span className="md:hidden">Toque</span> em um dos gatos para conhecer cada lado da Luminyn
        </p>
      </div>

      <div className="mx-auto mt-8 md:mt-12 grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 px-4 md:px-10">
        {gatos.map((g, i) => {
          const balao = baloes[i];
          const balaoAberto = hoveredSide === balao.lado;
          const meuBalaoAberto = hoveredSide === g.aciona;

          return (
            <div
              key={g.img}
              className="group relative grid md:h-[30rem] lg:h-[34rem] cursor-pointer select-none"
              {...interaction(g.aciona, balao.lado)}
            >
              <div
                className={`col-start-1 row-start-1 flex min-h-[17rem] sm:min-h-[20rem] flex-col items-center justify-center transition duration-500 ease-out ${
                  balaoAberto ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <img
                  className={`max-h-[16rem] sm:max-h-[19rem] md:max-h-[80%] w-full object-contain transition-transform duration-500 ease-out
                              drop-shadow-[0_18px_24px_rgba(35,36,64,0.25)]
                              ${g.imgClasse}
                              ${meuBalaoAberto ? `-translate-y-3 ${g.giro}` : `group-hover:-translate-y-3 ${g.giroHover}`}`}
                  src={g.img}
                  alt={g.alt}
                  draggable={false}
                />
                <span
                  className={`mt-4 rounded-full px-4 py-1.5 font-['Poppins','Open_Sans',sans-serif] text-sm font-medium transition-colors duration-300
                              ${meuBalaoAberto ? "bg-[#232440] text-[#f6e5de]" : "bg-[#232440]/10 text-[#232440]"}`}
                >
                  {g.nome}
                </span>
              </div>

              <div
                aria-hidden={!balaoAberto}
                onPointerUp={(e) => e.stopPropagation()}
                className={`relative z-10 col-start-1 row-start-1 transition duration-500 ease-out ${
                  balaoAberto
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-y-3 scale-[0.97] pointer-events-none"
                }`}
              >
                <div className={`absolute bg-[#232440] md:hidden ${balao.setaMobile}`} />
                <div className={`absolute hidden bg-[#232440] md:block ${balao.setaDesktop}`} />
                <ConteudoBalao balao={balao} cheio />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sobre;