import { ContactInfoCardsProps as Props } from './ContactInfoCards.types';
import { contactCards } from './ContactInfoCards.helper';

export default function ContactInfoCards(props: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {contactCards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
              <IconComponent className="w-6 h-6 text-primary-400" />
            </div>
            <h4 className="font-semibold text-white mb-2 text-sm">
              {card.title}
            </h4>
            <p className="text-neutral-300 text-xs">{card.value}</p>
          </div>
        );
      })}
    </div>
  );
}
