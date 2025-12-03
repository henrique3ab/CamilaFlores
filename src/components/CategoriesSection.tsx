import { MessageCircle } from "lucide-react";
import buqueRomantico from "@/assets/buque-romantico.jpg";
import arranjoPresente from "@/assets/arranjo-presente.jpg";
import floresEspeciais from "@/assets/flores-especiais.jpg";
import cestaFlores from "@/assets/cesta-flores.jpg";
import suculentas from "@/assets/suculentas.jpg";
import arranjoEspecial from "@/assets/arranjo-especial.jpg";

const WHATSAPP_NUMBER = "5511999999999";

const categories = [
  {
    id: 1,
    title: "Buquês Românticos",
    description: "Perfeitos para declarar seu amor",
    image: buqueRomantico,
    message: "Olá! Quero ver buquês românticos.",
  },
  {
    id: 2,
    title: "Arranjos para Presente",
    description: "Surpreenda quem você ama",
    image: arranjoPresente,
    message: "Olá! Quero ver arranjos para presente.",
  },
  {
    id: 3,
    title: "Flores para Datas Especiais",
    description: "Aniversários, formaturas e mais",
    image: floresEspeciais,
    message: "Olá! Quero ver flores para datas especiais.",
  },
  {
    id: 4,
    title: "Cestas com Flores",
    description: "Combinações encantadoras",
    image: cestaFlores,
    message: "Olá! Quero ver cestas com flores.",
  },
  {
    id: 5,
    title: "Suculentas e Plantas",
    description: "Para quem ama verde",
    image: suculentas,
    message: "Olá! Quero ver suculentas e plantas.",
  },
  {
    id: 6,
    title: "Arranjos Especiais",
    description: "Criações exclusivas e sofisticadas",
    image: arranjoEspecial,
    message: "Olá! Quero ver arranjos especiais.",
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
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(category.message)}`}
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
