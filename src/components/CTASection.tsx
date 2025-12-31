export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-animate relative bg-[var(--bobophone-primary)]/10 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-40 h-40 bg-[var(--bobophone-primary)]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[var(--bobophone-primary)]/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Prêt à lancer votre carrière dans la{" "}
              <span className="text-[var(--bobophone-primary)]">réparation mobile</span> ?
            </h2>
            <p className="text-[var(--foreground)]/70 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez plus de 500 élèves qui ont déjà transformé leur passion en activité rentable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tarifs"
                className="inline-flex items-center justify-center gap-2 bg-[var(--bobophone-primary)] hover:bg-[var(--bobophone-primary-dark)] text-black font-bold px-8 py-4 rounded-full text-lg transition-all btn-bobophone"
              >
                <span>Voir les formations</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#programme"
                className="inline-flex items-center justify-center gap-2 bg-[var(--background)] border border-[var(--foreground)]/20 hover:border-[var(--bobophone-primary)] font-semibold px-8 py-4 rounded-full text-lg transition-all"
              >
                <span>Voir le programme</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
