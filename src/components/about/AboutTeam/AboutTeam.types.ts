export interface TeamMember {
  name: string;
  position: string;
  description: string;
}

export interface AboutTeamProps {
  team: TeamMember[];
}
