import { MapPin, Phone, MessageCircle, Instagram, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl text-background mb-4">
              Floricultura
            </h3>
            <p className="font-body text-background/70 leading-relaxed mb-6 max-w-md">
              Transformamos flores em arte e momentos em memórias. Com dedicação artesanal, criamos arranjos únicos que expressam seus sentimentos mais especiais.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/floricultura"
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
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-background/70 hover:text-background transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="tel:+551199999999"
                  className="flex items-center gap-3 font-body text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  (11) 9999-9999
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/floricultura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-background/70 hover:text-background transition-colors"
                >
                  <Instagram className="w-5 h-5 text-secondary" />
                  @floricultura
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
                  Rua das Flores, 123<br />
                  Centro - São Paulo/SP<br />
                  CEP 01234-567
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
