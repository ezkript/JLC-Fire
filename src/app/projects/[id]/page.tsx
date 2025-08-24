import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects-data';
import ProjectDetail from '@/components/projects/ProjectDetail/ProjectDetail';
import { ProjectPageProps as Props } from '@/types';

export default async function ProjectPage(props: Props) {
  const { id } = await props.params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
