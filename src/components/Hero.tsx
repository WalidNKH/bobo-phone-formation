"use client";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] sm:min-h-screen flex items-center px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="scroll-animate inline-flex items-center gap-2 bg-[var(--bobophone-primary)] text-black px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Formation Professionnelle</span>
            </div>

            {/* Title */}
            <h1 className="scroll-animate scroll-animate-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Devenez expert en{" "}
              <span className="text-[var(--bobophone-primary)]">réparation mobile</span>
            </h1>

            {/* Subtitle */}
            <p className="scroll-animate scroll-animate-delay-2 text-base sm:text-lg text-[var(--foreground)]/70 font-medium max-w-xl mx-auto lg:mx-0">
              Apprenez les techniques professionnelles de réparation de smartphones et lancez votre activité dans un secteur en pleine croissance.
            </p>

            {/* Benefits */}
            <div className="scroll-animate scroll-animate-delay-2 space-y-3">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <svg className="w-5 h-5 flex-shrink-0 text-[var(--bobophone-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-sm sm:text-base">
                  Maîtrisez toutes les marques : iPhone, Samsung, Huawei...
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <svg className="w-5 h-5 flex-shrink-0 text-[var(--bobophone-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-sm sm:text-base">
                  De débutant à expert, à votre rythme
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <svg className="w-5 h-5 flex-shrink-0 text-[var(--bobophone-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-sm sm:text-base">
                  Lancez votre activité rentable rapidement
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="scroll-animate scroll-animate-delay-3 pt-4">
              <a
                href="#tarifs"
                className="inline-flex items-center gap-2 bg-[var(--bobophone-primary)] hover:bg-[var(--bobophone-primary-dark)] text-black font-bold px-8 py-4 rounded-full text-lg transition-all btn-bobophone"
              >
                <span>Voir les formations</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 text-sm text-[var(--foreground)]/60">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% en ligne</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accès à vie</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support inclus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual - Desktop only */}
          <div className="hidden lg:flex lg:w-2/5 justify-center items-center scroll-animate-scale scroll-animate-delay-4">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-[var(--bobophone-primary)]/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-[var(--foreground)]/5 rounded-3xl p-8 border border-[var(--foreground)]/10">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-[var(--bobophone-primary)]/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-[var(--bobophone-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[var(--bobophone-primary)]">50+</p>
                    <p className="text-sm text-[var(--foreground)]/60">heures de formation</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--foreground)]/10">
                    <p className="text-3xl font-bold">5</p>
                    <p className="text-sm text-[var(--foreground)]/60">modules complets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
