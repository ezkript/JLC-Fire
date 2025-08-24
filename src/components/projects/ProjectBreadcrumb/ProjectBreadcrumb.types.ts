export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ProjectBreadcrumbProps {
  items: BreadcrumbItem[];
}
