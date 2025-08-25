export interface TeamMember {
  name: string;
  image?: string;
  position: string;
  description: string;
}

export interface AboutTeamProps {
  team: TeamMember[];
}
