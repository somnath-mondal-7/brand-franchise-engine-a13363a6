export interface AgentProfile {
  name: string;
  role: string;
  avatar: string;
}

export const agentProfiles: AgentProfile[] = [
  {
    name: "Sarah Chen",
    role: "Digital Marketing Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Michael Rodriguez",
    role: "SEO Strategist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Emily Thompson",
    role: "Franchise Growth Consultant",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "David Martinez",
    role: "Performance Marketing Lead",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
  }
];

export const getRandomAgent = (): AgentProfile => {
  return agentProfiles[Math.floor(Math.random() * agentProfiles.length)];
};
