type Contato = {
  label: string;
  href: string;
  img: string;
  alt: string;
};

const contato: Contato[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/luminymstudio",
    img: "Instagram.png",
    alt: "Instagram Lum",
  },
  {
    label: "WhatsApp",
    href: "#",
    img: "WhatsApp.png",
    alt: "WhatsApp Lum",
  },
  {
    label: "LinkedIn",
    href: "#",
    img: "LinkedIn.png",
    alt: "LinkedIn Lum",
  },
  {
    label: "Gmail",
    href: "#",
    img: "Gmail.png",
    alt: "Gmail Lum",
  },
];

function Contato() {
  return (
    <section id="Contato" className="scroll-mt-24 pt-2 pb-12 md:pt-4 md:pb-16">
      <div
        className="flex flex-nowrap justify-center items-center gap-4 sm:gap-8 md:gap-12
                   px-4 w-full bg-[#f0e6df]"
      >
        {contato.map((c) => {
          const externo = c.href.startsWith("http");

          return (
            <a
              key={c.label}
              href={c.href}
              aria-label={c.label}
              {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <img
                src={c.img}
                alt={c.alt}
                className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contato;