import { projectsData } from '@/lib/projects-data';
import ProjectsList from '@/components/projects/ProjectsList/ProjectsList';

export default function ProjectsPage() {
  return <ProjectsList projects={projectsData} />;
}
