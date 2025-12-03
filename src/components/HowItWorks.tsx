import { Flower2, MessageCircle, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Flower2,
    title: "Escolha o Arranjo",
    description: "Navegue pelo nosso catálogo e encontre o arranjo perfeito para sua ocasião especial.",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Fale pelo WhatsApp",
    description: "Tiramos todas as suas dúvidas e personalizamos o arranjo do seu jeito.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Entrega Rápida",
    description: "Entregamos no mesmo dia na região com todo o cuidado que suas flores merecem.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-primary/30" id="como-funciona">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm uppercase tracking-widest">
            Simples e Prático
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Como Funciona
          </h2>
          <div className="divider-floral" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
              )}

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-background shadow-card mb-6 group">
                <step.icon className="w-10 h-10 text-secondary transition-transform duration-300 group-hover:scale-110" />
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display text-lg font-bold shadow-gold">
                  {step.id}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
