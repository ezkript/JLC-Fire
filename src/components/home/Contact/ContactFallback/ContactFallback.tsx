import { ContactFallbackProps as Props } from './ContactFallback.types';
import { fallbackText } from './ContactFallback.helper';

export default function ContactFallback(props: Props) {
  const { title = fallbackText.title, message = fallbackText.message } = props;
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
          <p className="text-sm text-neutral-300">{message}</p>
        </div>
      </div>
    </section>
  );
}
