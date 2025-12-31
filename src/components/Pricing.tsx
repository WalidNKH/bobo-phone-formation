"use client";

interface Plan {
  name: string;
  originalPrice: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  stripeLink: string;
}

const plans: Plan[] = [
  {
    name: "Essentiel",
    originalPrice: "199€",
    price: "99€",
    description: "Pour découvrir les bases de la réparation mobile",
    features: [
      "Module 1 : Les fondamentaux",
      "Module 2 : Réparations courantes",
      "Accès à la communauté",
      "Support par email",
    ],
    stripeLink: "https://buy.stripe.com/ESSENTIEL",
  },
  {
    name: "Complet",
    originalPrice: "499€",
    price: "299€",
    description: "La formation complète pour devenir pro",
    features: [
      "Tous les modules (1 à 5)",
      "50+ heures de vidéos HD",
      "Accès à la communauté privée",
      "Support prioritaire",
      "Mises à jour gratuites",
      "Certificat de formation",
    ],
    popular: true,
    stripeLink: "https://buy.stripe.com/COMPLET",
  },
  {
    name: "Premium",
    originalPrice: "999€",
    price: "599€",
    description: "Formation + accompagnement personnalisé",
    features: [
      "Tout le forfait Complet",
      "3 appels de coaching (1h)",
      "Audit de votre activité",
      "Accès aux masterclass live",
      "Groupe VIP privé",
      "Support WhatsApp direct",
    ],
    stripeLink: "https://buy.stripe.com/PREMIUM",
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-12 sm:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Choisissez votre{" "}
            <span className="text-[var(--bobophone-primary)]">formation</span>
          </h2>
          <p className="text-[var(--foreground)]/70 text-lg max-w-2xl mx-auto">
            Investissez dans votre avenir avec une compétence qui vous rapportera toute votre vie.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z" clipRule="evenodd" />
            </svg>
            <span>Offre de lancement - Prix barrés limités</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`scroll-animate-scale scroll-animate-delay-${index + 1} relative rounded-2xl p-6 lg:p-8 ${
                plan.popular
                  ? "pricing-popular bg-[var(--background)]"
                  : "bg-[var(--background)] border border-[var(--foreground)]/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--bobophone-primary)] text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Le plus populaire
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--foreground)]/60 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl text-[var(--foreground)]/40 line-through">
                    {plan.originalPrice}
                  </span>
                  <span className="text-4xl lg:text-5xl font-bold text-[var(--bobophone-primary)]">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--foreground)]/60 mt-2">Paiement unique</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--bobophone-primary)] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-full font-semibold text-center transition-all btn-bobophone ${
                  plan.popular
                    ? "bg-[var(--bobophone-primary)] text-black hover:bg-[var(--bobophone-primary-dark)]"
                    : "bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 border border-[var(--foreground)]/10"
                }`}
              >
                Choisir {plan.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center scroll-animate-fade">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--foreground)]/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Satisfait ou remboursé 14j</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Accès immédiat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
