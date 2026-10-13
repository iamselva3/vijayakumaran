import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "Vijayakumaran A",
  title: "Senior Technical Operations Engineer (AWS / DevOps)",
  roleBadge: "CLOUD & DEVOPS ENGINEER",
  experience: "5+ years",
  company: "Pranion Technology Ventures Private Limited",
  companyPeriod: "Sept 2021 – Present",
  location: "Srivilliputhur, Tamil Nadu, India",
  phone: "+91 97883 72454",
  email: "vijayakumaran.ar@gmail.com",
  linkedin: "https://linkedin.com/in/vijayakumaran-ar",
  github: "https://github.com/vijayakumaran-ar",
  education: {
    degree: "B.E. Electronics & Communication Engineering",
    institution: "Kalasalingam Institute of Technology",
    location: "Krishnankovil, Tamil Nadu",
    period: "2016 – 2020",
  },
  summary:
    "Technical Operations Engineer with 5+ years of experience designing, automating, and managing scalable AWS cloud infrastructure. Hands-on expertise in CI/CD pipelines, containerization, and Infrastructure as Code using Terraform. Experienced in ECS, EKS, Jenkins, and Docker for secure, high-availability deployments, with additional depth in observability (Elastic APM, ELK) and Zero Trust access control across multi-environment production systems.",
  headline: {
    prefix: "Automating ",
    highlight1: "cloud infrastructure",
    middle: " & shipping ",
    highlight2: "reliable deployments",
    suffix: ".",
  },
  subtext:
    "I'm Vijayakumaran, a Senior Technical Operations Engineer with 5+ years building secure, scalable AWS platforms using Terraform, Kubernetes, Jenkins, and Docker.",
  stats: [
    {
      label: "Experience",
      value: "5+",
      numeric: 5,
      suffix: "+ Yrs",
      sublabel: "Cloud & DevOps Ops",
    },
    {
      label: "CI/CD Pipelines",
      value: "10+",
      numeric: 10,
      suffix: "+",
      sublabel: "Java, Node, Laravel",
    },
    {
      label: "Environments",
      value: "3",
      numeric: 3,
      suffix: " Tiers",
      sublabel: "UAT / Pre-prod / Prod",
    },
    {
      label: "Deployment",
      value: "0-Downtime",
      suffix: "",
      sublabel: "Rolling & Blue/Green",
    },
  ],
  quickFacts: [
    {
      icon: "ShieldCheck",
      label: "Security Posture",
      value: "Zero Trust (Warpgate) & AWS WAF",
    },
    {
      icon: "Cloud",
      label: "Cloud Architecture",
      value: "Multi-AZ AWS EKS & ECS Clusters",
    },
    {
      icon: "Activity",
      label: "Observability",
      value: "Elastic APM, ELK, Zabbix & SigNoz",
    },
    {
      icon: "Terminal",
      label: "Automation & IaC",
      value: "Terraform & Ansible Infrastructure",
    },
    {
      icon: "Award",
      label: "Uptime Focus",
      value: "99.99% Availability Architecture",
    },
  ],
};
