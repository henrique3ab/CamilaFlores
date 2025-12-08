import { MessageCircle } from "lucide-react";
import buqueRomantico from "@/assets/buque-romantico.jpg";
import arranjoPresente from "@/assets/arranjo-presente.jpg";
import floresEspeciais from "@/assets/flores-especiais.jpg";
import cestaFlores from "@/assets/cesta-flores.jpg";
import suculentas from "@/assets/suculentas.jpg";
import arranjosPresenteNovo from "@/assets/arranjo-presente-novo.jpg";

const WHATSAPP_CATALOG_LINK = "https://wa.me/c/553193726771";

const categories = [
  {
    id: 1,
    title: "Mais Vendidos",
    description: "Os favoritos dos nossos clientes",
    image: maisvendido.jpeg,
    message: "Olá! Quero ver os produtos mais vendidos.",
  },
  {
    id: 2,
    title: "Flores abaixo de R$89,90",
    description: "Beleza que cabe no seu bolso",
    image: abaixoDe.jpeg,
    message: "Olá! Quero ver flores abaixo de R$89,90.",
  },
  {
    id: 3,
    title: "Buquês de Rosas",
    description: "Clássicos e elegantes",
    image: buqueRosas.jpeg,
    message: "Olá! Quero ver buquês de rosas.",
  },
  {
    id: 4,
    title: "Arranjos para Presente",
    description: "Surpreenda quem você ama",
    image: gérbera.jpeg,
    message: "Olá! Quero ver arranjos para presente.",
  },
  {
    id: 5,
    title: "Girassóis",
    description: "Alegria e energia em forma de flor",
    image: vanGogh.jpeg,
    message: "Olá! Quero ver girassóis.",
  },
  {
    id: 6,
    title: "Cestas de Café da Manhã",
    description: "Presente completo e especial",
    image: cestaFlores,
    message: "Olá! Quero ver cestas de café da manhã.",
  },
];

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-muted/50" id="categorias">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm uppercase tracking-widest">
            Nossas Categorias
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Encontre o Arranjo Perfeito
          </h2>
          <div className="divider-floral mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção cuidadosamente selecionada de flores e arranjos para todas as ocasiões
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`card-floral group rounded-2xl overflow-hidden opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <a
                  href={WHATSAPP_CATALOG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ver no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
