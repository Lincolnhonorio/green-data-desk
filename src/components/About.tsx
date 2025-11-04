const About = () => {
  return (
    <section id="sobre-mim" className="py-20 md:py-32 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">|</span>
          <span>Sobre mim:</span>
        </h2>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 text-center">
              <div className="text-8xl md:text-9xl font-bold text-primary leading-none">
                8
              </div>
              <div className="text-sm text-muted-foreground mt-2">anos</div>
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Seja muito bem-vindo(a) ao meu portfólio.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conheça a minha trajetória: <span className="text-foreground font-medium">8 anos de experiência profissional</span>, 
                atualmente como <span className="text-primary font-semibold">Supervisor Financeiro/RH</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
