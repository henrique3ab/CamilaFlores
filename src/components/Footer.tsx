import { MapPin, Phone, Instagram, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_CATALOG_LINK = "https://wa.me/c/553193726771";
const INSTAGRAM_LINK = "https://www.instagram.com/camilaflores.pe?igsh=MTd6cjlqNjNzOHhtYQ==";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-background mb-4">
              Floricultura
            </h3>
            <p className="font-body text-background/70 leading-relaxed mb-6 max-w-md">
              Transformamos flores em arte e momentos em memórias. Com dedicação artesanal, criamos arranjos únicos que expressam seus sentimentos mais especiais.
            </p>
            {/* WhatsApp Catalog Button */}
            <a
              href={WHATSAPP_CATALOG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-body text-sm font-semibold py-3 px-5 rounded-full hover:bg-secondary/90 transition-all mb-6"
            >
              <MessageCircle className="w-5 h-5" />
              Ver Catálogo no WhatsApp
            </a>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-background mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5531993726771"
                  className="flex items-center gap-3 font-body text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  (31) 99372-6771
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-background/70 hover:text-background transition-colors"
                >
                  <Instagram className="w-5 h-5 text-secondary" />
                  @camilaflores.pe
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-display text-xl text-background mb-6">
              Localização
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 font-body text-background/70">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  Rua Padre Eustáquio, 2718<br />
                  BH/MG<br />
                  CEP 30720100
                </span>
              </li>
              <li className="flex items-start gap-3 font-body text-background/70">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  Seg a Sex: 8h às 19h<br />
                  Sáb: 8h às 17h<br />
                  Dom: 9h às 14h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-background/50">
              © 2024 Floricultura. Todos os direitos reservados.
            </p>
            <p className="font-body text-sm text-background/50">
              Feito com 🤍 para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
