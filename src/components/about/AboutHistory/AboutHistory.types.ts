interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface AboutHistoryProps {
  milestones: Milestone[];
}
