"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Faut-il des connaissances préalables ?",
    answer:
      "Non, la formation est conçue pour les débutants complets. Nous partons de zéro et progressons étape par étape jusqu'aux techniques avancées.",
  },
  {
    question: "Combien de temps pour suivre la formation ?",
    answer:
      "La formation contient plus de 50 heures de contenu. À raison de 2h par jour, comptez environ 1 mois pour tout suivre. Mais vous avez accès à vie, donc allez à votre rythme.",
  },
  {
    question: "Quel matériel est nécessaire ?",
    answer:
      "Un kit d'outils de base (environ 50€) suffit pour commencer. Nous vous donnons la liste exacte dans le premier module avec des liens pour commander.",
  },
  {
    question: "La formation est-elle mise à jour ?",
    answer:
      "Oui, nous ajoutons régulièrement du contenu pour couvrir les nouveaux modèles de smartphones. Toutes les mises à jour sont incluses gratuitement.",
  },
  {
    question: "Puis-je poser des questions ?",
    answer:
      "Bien sûr ! Vous avez accès à la communauté privée où vous pouvez poser toutes vos questions et échanger avec d'autres apprenants.",
  },
  {
    question: "Y a-t-il une garantie ?",
    answer:
      "Oui, vous bénéficiez d'une garantie satisfait ou remboursé de 14 jours. Si la formation ne vous convient pas, nous vous remboursons intégralement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 md:px-8 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Questions{" "}
            <span className="text-[var(--bobophone-primary)]">fréquentes</span>
          </h2>
          <p className="text-[var(--foreground)]/70 text-lg">
            Tout ce que vous devez savoir avant de rejoindre la formation.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`scroll-animate scroll-animate-delay-${(index % 3) + 1} bg-[var(--background)] rounded-xl border border-[var(--foreground)]/10 overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--foreground)]/[0.02] transition-colors"
              >
                <span className="font-medium text-base">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[var(--bobophone-primary)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-[var(--foreground)]/70 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
