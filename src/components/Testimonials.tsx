"use client";

const testimonials = [
  {
    name: "Karim",
    role: "Réparateur indépendant",
    initial: "K",
    quote: "J'ai commencé sans aucune expérience. En 2 mois, j'ai pu ouvrir mon activité et j'ai déjà une clientèle régulière.",
  },
  {
    name: "Sophie",
    role: "Reconversion professionnelle",
    initial: "S",
    quote: "Les vidéos sont super claires et le support répond vraiment vite. J'ai pu poser toutes mes questions sans stress.",
  },
  {
    name: "Maxime",
    role: "Technicien en boutique",
    initial: "M",
    quote: "La partie micro-soudure m'a permis de passer au niveau supérieur. Je peux maintenant réparer des pannes que je refusais avant.",
  },
];

const stats = [
  { value: "500+", label: "élèves formés" },
  { value: "98%", label: "taux de satisfaction" },
  { value: "50h", label: "de contenu vidéo" },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-12 sm:py-20 px-4 sm:px-6 md:px-8 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ils ont fait{" "}
            <span className="text-[var(--bobophone-primary)]">confiance</span> à BOBOPHONE
          </h2>
          <p className="text-[var(--foreground)]/70 text-lg max-w-2xl mx-auto">
            Découvrez ce que nos élèves pensent de la formation
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`scroll-animate-scale scroll-animate-delay-${index + 1} bg-[var(--background)] p-6 rounded-2xl border border-[var(--foreground)]/10 card-lift`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bobophone-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--foreground)]/60">{testimonial.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`scroll-animate-fade scroll-animate-delay-${index + 1} text-center`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--bobophone-primary)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[var(--foreground)]/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
