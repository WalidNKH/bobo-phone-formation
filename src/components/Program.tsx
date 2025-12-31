const modules = [
  {
    number: "01",
    title: "Les fondamentaux",
    lessons: [
      "Introduction aux composants d'un smartphone",
      "Les outils indispensables du réparateur",
      "Règles de sécurité et bonnes pratiques",
      "Comprendre les schémas et documentations",
    ],
  },
  {
    number: "02",
    title: "Réparations courantes",
    lessons: [
      "Remplacement d'écran (LCD & OLED)",
      "Changement de batterie",
      "Réparation connecteur de charge",
      "Remplacement caméra et haut-parleur",
    ],
  },
  {
    number: "03",
    title: "Réparations avancées",
    lessons: [
      "Diagnostic de carte mère",
      "Introduction à la micro-soudure",
      "Réparation Face ID / Touch ID",
      "Récupération de données",
    ],
  },
  {
    number: "04",
    title: "Spécificités par marque",
    lessons: [
      "iPhone : toutes générations",
      "Samsung Galaxy : série S et A",
      "Huawei et Xiaomi",
      "Autres marques Android",
    ],
  },
  {
    number: "05",
    title: "Lancer son activité",
    lessons: [
      "Créer sa micro-entreprise",
      "Trouver ses premiers clients",
      "Fixer ses tarifs",
      "Gérer son stock de pièces",
    ],
  },
];

export default function Program() {
  return (
    <section id="programme" className="py-12 sm:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Programme de la{" "}
            <span className="text-[var(--bobophone-primary)]">formation</span>
          </h2>
          <p className="text-[var(--foreground)]/70 text-lg max-w-2xl mx-auto">
            Un parcours progressif de débutant à expert, avec des modules pratiques et concrets.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--bobophone-primary)]/20 md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`scroll-animate scroll-animate-delay-${(index % 4) + 1} relative flex items-start gap-6 md:gap-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[var(--bobophone-primary)] rounded-full md:-translate-x-1/2 mt-6 z-10"></div>

                {/* Content - alternating sides on desktop */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                  <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--foreground)]/10 shadow-sm">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-3xl font-bold text-[var(--bobophone-primary)]/30">
                        {module.number}
                      </span>
                      <h3 className="text-xl font-semibold">{module.title}</h3>
                    </div>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lessonIndex}
                          className={`flex items-center gap-2 text-sm text-[var(--foreground)]/70 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <svg
                            className="w-4 h-4 text-[var(--bobophone-primary)] flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
