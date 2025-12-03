import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Carolina",
    avatar: "AC",
    rating: 5,
    text: "Flores lindíssimas! Minha mãe amou o arranjo de aniversário. Entrega super rápida e atendimento impecável.",
  },
  {
    id: 2,
    name: "Roberto Silva",
    avatar: "RS",
    rating: 5,
    text: "Surpreendi minha esposa no nosso aniversário. O buquê estava perfeito e fresquíssimo. Recomendo demais!",
  },
  {
    id: 3,
    name: "Mariana Costa",
    avatar: "MC",
    rating: 5,
    text: "Sempre compro aqui! A qualidade das flores é incomparável e o atendimento pelo WhatsApp é muito prático.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/50" id="depoimentos">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm uppercase tracking-widest">
            O que dizem nossos clientes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            Depoimentos
          </h2>
          <div className="divider-floral" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-floral rounded-2xl p-6 lg:p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              {/* Avatar and Stars */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-display text-lg font-semibold text-secondary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground">
                    {testimonial.name}
                  </h4>
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-body text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
