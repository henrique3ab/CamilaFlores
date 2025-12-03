import { Paintbrush, Truck, CreditCard, Sparkles, Leaf } from "lucide-react";

const differentials = [
  {
    id: 1,
    icon: Paintbrush,
    title: "Arranjos Artesanais",
    description: "Cada peça é única, criada com dedicação por nossos floristas",
  },
  {
    id: 2,
    icon: Truck,
    title: "Entrega Rápida",
    description: "Motoboy, carro ou retirada no local. Pedidos com até 3h de antecedência",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Pagamento Facilitado",
    description: "Cartão Mastercard (débito/crédito), Pix ou dinheiro no local",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Personalização Completa",
    description: "Criamos arranjos exclusivos sob encomenda",
  },
  {
    id: 5,
    icon: Leaf,
    title: "Flores Sempre Frescas",
    description: "Selecionadas diariamente com rigor de qualidade",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-background" id="diferenciais">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Nossos Diferenciais
          </h2>
          <div className="divider-floral" />
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <div
              key={item.id}
              className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-primary/20 transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/50 mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
