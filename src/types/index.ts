export interface ProfileData {
  name: string;
  title: string;
  roleBadge: string;
  experience: string;
  company: string;
  companyPeriod: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  };
  summary: string;
  headline: {
    prefix: string;
    highlight1: string;
    middle: string;
    highlight2: string;
    suffix: string;
  };
  subtext: string;
  stats: Array<{
    label: string;
    value: string;
    numeric?: number;
    prefix?: string;
    suffix?: string;
    sublabel: string;
  }>;
  quickFacts: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
}

export interface SkillItem {
  name: string;
  iconName?: string;
  level?: string;
  popular?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceRole {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectArchitectureStep {
  id: string;
  label: string;
  sublabel: string;
  type: 'source' | 'ci' | 'security' | 'registry' | 'cluster' | 'monitor';
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  featured?: boolean;
  category: 'cloud' | 'k8s' | 'cicd' | 'security' | 'observability' | 'database';
  stack: string[];
  highlights: string[];
  caseStudy: {
    problem: string;
    approach: string;
    stack: string[];
    result: string;
  };
  architectureType?: 'cicd' | 'eks' | 'ecs' | 'warpgate' | 'apm' | 'rds';
  diagramTitle?: string;
  githubUrl?: string;
  liveUrl?: string;
}
