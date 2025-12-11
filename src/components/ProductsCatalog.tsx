import { MessageCircle } from "lucide-react";
import buqueRomantico from "@/assets/buque-romantico.jpg";
import produtoRosasBrancas from "@/assets/produto-rosas-brancas.jpg";
import produtoGirassol from "@/assets/produto-girassol.jpg";
import produtoTulipas from "@/assets/produto-tulipas.jpg";
import produtoLavanda from "@/assets/produto-lavanda.jpg";
import produtoRosasMix from "@/assets/produto-rosas-mix.jpg";
import produtoOrquidea from "@/assets/produto-orquidea.jpg";
import arranjoPresente from "@/assets/arranjo-presente.jpg";
import cestaFlores from "@/assets/cesta-flores.jpg";

const WHATSAPP_CATALOG_LINK = "https://wa.me/c/553193726771";

const products = [
  {
    id: 1,
    name: "Buquê de Rosas Vermelhas",
    description: "Clássico e romântico, perfeito para declarações de amor",
    price: "R$ 119,90",
    image: "/images/catalogue/buqueRosas.jpeg",
  },
  {
    id: 2,
    name: "Buquê de Rosas Brancas",
    description: "Elegância e pureza em cada pétala",
    price: "R$ 145,90",
    image: "/images/catalogue/RosasBrancas.jpg",
  },
  {
    id: 3,
    name: "Arranjo de Girassóis",
    description: "Alegria e energia positiva para iluminar o dia",
    price: "R$ 59,90",
    image: "/images/catalogue/arranjoGira.jpg",
  },
  /*{
    id: 4,
    name: "Buquê de Tulipas Rosa",
    description: "Delicadeza e sofisticação holandesa",
    price: "R$ 119,90",
    image: produtoTulipas,
  },
  {
    id: 5,
    name: "Arranjo Lavanda & Rosas",
    description: "Combinação aromática e encantadora",
    price: "R$ 99,90",
    image: produtoLavanda,
  },*/
  {
    id: 6,
    name: "Mix de Rosas Coloridas",
    description: "Variedade de cores para alegrar qualquer ambiente",
    price: "R$ 144,90",
    image: "/images/catalogue/RosasMix.jpg",
  },
  {
    id: 7,
    name: "Orquídea Branca Premium",
    description: "Sofisticação e durabilidade em um vaso elegante",
    price: "R$ 99,90",
    image: "/images/catalogue/orquideaBranca.jpg",
  },
  {
    id: 8,
    name: "Buquê de Lírios",
    description: "Perfeito para presentear com carinho",
    price: "R$ 109,90",
    image: "/images/catalogue/buqueLirio.jpg",
  },
 /* {
    id: 9,
    name: "Cesta de Rosas Premium",
    description: "Luxuosa cesta com rosas selecionadas",
    price: "R$ 189,90",
    image: cestaFlores,
  },*/
];

const ProductsCatalog = () => {
  return (
    <section className="section-padding bg-background" id="catalogo">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm uppercase tracking-widest">
            Nosso Catálogo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Produtos em Destaque
          </h2>
          <div className="divider-floral mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Cada arranjo é feito com flores frescas selecionadas e muito carinho
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card-floral group rounded-2xl overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 75}ms`, animationFillMode: "forwards" }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-soft">
                  <span className="font-body text-sm font-semibold text-secondary">
                    A partir de {product.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <a
                  href={WHATSAPP_CATALOG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-body text-sm font-semibold py-3 px-4 rounded-full transition-all duration-300 hover:bg-secondary/90 hover:shadow-soft"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ver Catálogo no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCatalog;
