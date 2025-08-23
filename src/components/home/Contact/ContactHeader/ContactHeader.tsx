import { ContactHeaderProps as Props } from './ContactHeader.types';
import { defaultHeaderText } from './ContactHeader.helper';

export default function ContactHeader(props: Props) {
  const {
    title = defaultHeaderText.title,
    subtitle = defaultHeaderText.subtitle,
  } = props;
  return (
    <div className="text-center mb-12">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <p className="text-sm text-neutral-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
