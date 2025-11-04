import { BarChart3, Database, Server, TrendingUp } from "lucide-react";

const skillsData = [
  {
    icon: BarChart3,
    title: "Visualização & Análise de Dados com Power BI",
    description: "Criação de dashboards interativos e relatórios automatizados para tomada de decisão estratégica."
  },
  {
    icon: Database,
    title: "SQL voltado para Dados",
    description: "Extração e manipulação de grandes volumes de dados com queries otimizadas e eficientes."
  },
  {
    icon: Server,
    title: "Entendimento e Uso de Sistemas ERP",
    description: "Integração e análise de dados provenientes de sistemas corporativos para gestão empresarial."
  },
  {
    icon: TrendingUp,
    title: "Finanças/RH",
    description: "Expertise em indicadores financeiros e de recursos humanos para otimização de processos."
  }
];

const Skills = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">|</span>
          <span>Principais Habilidades</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
