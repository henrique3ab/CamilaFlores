import { MessageCircle, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Quero ver o catálogo completo.";

const FinalCTA = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative section-padding overflow-hidden" id="contato">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/30 to-secondary/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/50 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/30 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background shadow-card mb-8 animate-float">
            <Heart className="w-10 h-10 text-secondary fill-secondary/20" />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Pronto para surpreender{" "}
            <span className="italic text-secondary">alguém</span> hoje?
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Fale conosco e receba o catálogo completo no WhatsApp. Estamos prontos para ajudar você a criar momentos inesquecíveis.
          </p>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex text-lg group"
          >
            <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
            Abrir WhatsApp
          </a>

          {/* Trust Text */}
          <p className="font-body text-sm text-muted-foreground mt-8">
            Atendimento rápido • Sem compromisso • Personalização disponível
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
