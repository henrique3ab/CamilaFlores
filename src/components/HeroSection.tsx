import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-flowers.jpg";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_CATALOG_MESSAGE = "Olá! Quero ver o catálogo de flores.";

const HeroSection = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_CATALOG_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arranjo floral elegante com rosas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl animate-fade-in-up">
          {/* Decorative Element */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-body text-sm uppercase tracking-widest">
              Floricultura Artesanal
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Flores que encantam.{" "}
            <span className="italic text-secondary">Momentos</span> que ficam na memória.
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Arranjos exclusivos para todas as ocasiões. Feitos com amor e dedicação para transformar momentos em lembranças eternas.
          </p>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero group"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Ver Catálogo no WhatsApp
          </a>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center">
                <span className="text-secondary font-display text-lg">✿</span>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Flores Frescas</p>
                <p className="font-body text-xs text-muted-foreground">Sempre do dia</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center">
                <span className="text-secondary font-display text-lg">♡</span>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Feito com Amor</p>
                <p className="font-body text-xs text-muted-foreground">Artesanal</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center">
                <span className="text-secondary font-display text-lg">✓</span>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Entrega Rápida</p>
                <p className="font-body text-xs text-muted-foreground">No mesmo dia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-secondary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-secondary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
