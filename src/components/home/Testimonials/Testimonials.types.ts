export interface ClientsProps {
  // No props needed for now, but can be extended in the future
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
  url?: string;
}
