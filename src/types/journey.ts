import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconDefinition;
  side: 'left' | 'right';
  achievements: string[];
  techStack?: string[];
  badge?: string;
  color?: string;
}

export interface JourneyContent {
  title: string;
  subtitle: string;
  icon: IconDefinition;
}
