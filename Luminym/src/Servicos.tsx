import { useEffect, useState } from "react";

type Imagem = {
  src: string;
  alt: string;
  className: string;
  recortar?: boolean;
};

type Servico = {
  imagens: Imagem[];
  titulo: string;
  subtitulo: string;
  texto: string;
};

const servicos: Servico[] = [
  {
    imagens: [
      {
        src: "cardblue.jpeg",
        alt: "",
        className: "left-[92cqw] top-[30cqw] w-[55cqw] -rotate-[15deg]",
        recortar: true,
      },
      {
        src: "cardwhite.jpeg",
        alt: "Cartões de visita da Luminyn Studio",
        className: "left-[80cqw] top-[14cqw] w-[67cqw] -rotate-[25deg]",
        recortar: true,
      },
    ],
    titulo: "Identidade visual e design",
    subtitulo: "Sua marca merece ser reconhecida.",
    texto:
      "Criamos logotipos, cores e elementos visuais que traduzem a personalidade do seu negócio, com aplicações para redes sociais, papelaria e materiais de divulgação.",
  },
  {
    imagens: [
      {
        src: "Escrita.png",
        alt: "Caderno da Luminyn Studio com a inscrição Escrita criativa",
        className: "left-[73cqw] top-[26cqw] w-[150cqw] max-w-none",
        recortar: true,
      },
    ],
    titulo: "Conteúdo e comunicação",
    subtitulo: "Seu trabalho merece ser bem comunicado.",
    texto:
      "Desenvolvemos textos para marcas que precisam apresentar seus serviços com clareza, fortalecer sua presença digital e se comunicar de forma mais profissional.",
  },
  {
    imagens: [
      {
        src: "notev2.png",
        alt: "Notebook exibindo o logo da Luminyn Studio",
        className: "left-[70cqw] top-[24cqw] w-[170cqw] max-w-none",
      },
    ],
    titulo: "Site e soluções digitais",
    subtitulo: "Seu negócio merece um espaço próprio na internet.",
    texto:
      "Criamos sites e soluções digitais para apresentar seus serviços, facilitar o contato com clientes e tornar a experiência com sua marca simples e intuitiva.",
  },
];

const classeImagem =
  "absolute h-auto -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]";

function Imagens({ lista }: { lista: Imagem[] }) {
  return (
    <>
      {lista.map((img) => (
        <img
          key={img.src}
          className={`${classeImagem} ${img.className}`}
          src={img.src}
          alt={img.alt}
          decoding="async"
          draggable={false}
        />
      ))}
    </>
  );
}

const n = servicos.length;
const POSICOES = [-2, -1, 0, 1, 2] as const;

function Brilho({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M50 0 C51.5 38 55 46 76 50 C55 54 51.5 62 50 100 C48.5 62 45 54 24 50 C45 46 48.5 38 50 0Z" />
    </svg>
  );
}

function Servicos() {
  const [pos, setPos] = useState<number>(0);
  const [pausado, setPausado] = useState<boolean>(false);

  useEffect(() => {
    const id = "fonte-poppins";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (pausado) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setTimeout(() => setPos((p) => p + 1), 2500);
    return () => window.clearTimeout(id);
  }, [pos, pausado]);

  return (
    <section id="Servicos" className="py-10 md:py-20">
      <div className="flex flex-col items-center justify-center text-center px-6 bg-[inherit]">
        <h1 className="mb-0.8 p-1 font-['Open_Sans'] text-[1.75rem] leading-none font-semibold text-[#938e8b]">
          Nossos Serviços
        </h1>

        <h2 className="font-['Open_Sans'] text-5xl font-bold text-[#232323] leading-[1.2]">
          Soluções completas
          <br />
          para a sua{" "}
          <span className="inline-grid items-baseline align-baseline leading-none text-white select-none">
            {/* caixa MARCA */}
            <span aria-hidden="true" className="relative z-0 col-start-1 row-start-1 -mt-[0.1em] top-[0.2em] h-[0.95em] right-[0.10em] rounded-[0.15em] bg-[#040514]" />

            <span style={{ fontSize: "1.1em" }} className="relative z-10 col-start-1 row-start-1 px-[0.3em] leading-[0] text-left font-sans -translate-y-[0.0em] opacity-0 animate-crossfade-1">marca.</span>
            <span className="relative z-10 col-start-1 row-start-1 px-[0.3em] leading-[0] text-left font-serif italic translate-y-[0] opacity-0 animate-crossfade-2">marca.</span>
            <span className="relative z-10 col-start-1 row-start-1 px-[0.3em] leading-[0] text-left font-mono text-[1.11em] -translate-y-[0.0em] opacity-0 animate-crossfade-3">marca.</span>
          </span>
        </h2>

        <h3 className="mt-3 font-['Open_Sans'] text-[1.0625rem] font-bold leading-[1.6] text-[#938e8b]">
          <span className="block">Da identidade visual ao desenvolvimento, oferecemos</span>
          <span className="block">soluções personalizadas para cada etapa da sua</span>
          <span className="block">empresa digital</span>
        </h3>
      </div>

      <div
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        className="relative overflow-hidden
                   h-[28rem] sm:h-[31rem] md:h-[35rem] lg:h-[39rem]
                   [--w:15rem] [--g:1rem]
                   sm:[--w:17rem]
                   md:[--w:19rem] md:[--g:1.5rem]
                   lg:[--w:21rem]"
      >
        {POSICOES.map((k) => {
          const v = pos + k;
          const s = servicos[((v % n) + n) % n];
          const ativo = k === 0;
          const visivel = Math.abs(k) <= 1;

          return (
            <article
              key={v}
              onClick={() => !ativo && visivel && setPos(v)}
              aria-hidden={!visivel}
              style={{
                width: "var(--w)",
                containerType: "inline-size",
                transform: `translate(-50%, -50%) translateX(calc(${k} * (var(--w) + var(--g)))) scale(${
                  ativo ? 1 : 0.85
                })`,
              }}
              className={`absolute top-1/2 left-1/2 aspect-[593/1000]
                          flex flex-col text-left
                          transition-[transform,opacity] duration-700 ease-in-out
                          ${
                            ativo
                              ? "opacity-100 z-10"
                              : visivel
                              ? "opacity-100 cursor-pointer"
                              : "opacity-0 pointer-events-none"
                          }`}
            >
              <div className={`absolute inset-0 overflow-hidden rounded-[10cqw] bg-[#232440] ${ativo ? "shadow-xl" : ""}`}>
                <Brilho className="absolute -bottom-[1%] -right-[8%] w-[34%] rotate-[22deg] text-[#f6e5de]" />
                <Imagens lista={s.imagens.filter((i) => i.recortar)} />
              </div>

              <div className="pointer-events-none absolute inset-0 z-10">
                <Imagens lista={s.imagens.filter((i) => !i.recortar)} />
              </div>

              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 z-30 rounded-[10cqw] bg-[#0b0b1a] transition-opacity duration-700 ${
                  ativo ? "opacity-0" : "opacity-40"
                }`}
              />

              <div className="relative z-20 pt-[57cqw] pl-[7cqw] pr-[10cqw] font-['Poppins','Open_Sans',sans-serif] text-[#f6e5de]">
                <h3 className="text-[9.8cqw] font-bold leading-[10.3cqw] tracking-[-0.01em]">
                  {s.titulo}
                </h3>
                <p className="mt-[2cqw] text-[6.2cqw] font-medium leading-[7.7cqw]">
                  {s.subtitulo}
                </p>
                <p className="mt-[1cqw] text-[5.4cqw] leading-[7.3cqw]">
                  {s.texto}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Servicos;