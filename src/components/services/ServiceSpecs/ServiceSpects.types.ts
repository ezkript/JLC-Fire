interface SpecItem {
  label: string;
  value: string;
  unit?: string;
}

export interface ServiceSpecsProps {
  title: string;
  subtitle: string;
  specifications: SpecItem[];
  gradientFrom: string;
  gradientTo: string;
}
