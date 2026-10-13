import { ExperienceRole } from '../types';

export const experienceData: ExperienceRole[] = [
  {
    role: "Senior Technical Operations Engineer",
    company: "Pranion Technology Ventures Private Limited",
    period: "Sept 2021 – Present",
    location: "Srivilliputhur, Tamil Nadu, India",
    description:
      "Leading cloud infrastructure operations, container orchestration, CI/CD automation, and site reliability engineering across multi-environment AWS production ecosystems.",
    highlights: [
      "Architected and managed production AWS infrastructure (EC2, VPC, ECS, ECR, IAM, ALB, CloudFront, WAF) sustaining multi-tier applications with high availability and fault tolerance.",
      "Administered production Amazon EKS clusters: implemented HPA and Karpenter autoscaling, secrets management, and executed control plane & worker node group version upgrades with zero downtime.",
      "Engineered automated CI/CD pipelines for 10+ applications across Laravel, Spring Boot, and Node.js using GitHub, Jenkins Master/Agent, Maven, and SonarQube with automated deployment to ECR, ECS, and EKS across UAT, Pre-prod, and Production tiers.",
      "Authored optimized multi-stage Dockerfiles for Java, Node.js, and PHP microservices, minimizing image attack surface and slashing build/pull times by up to 60%.",
      "Implemented zero-downtime ECS deployment strategies utilizing Application Load Balancer target group health checks, deregistration delays, and rolling container updates.",
      "Executed secure cross-account RDS PostgreSQL migrations utilizing encrypted snapshot sharing and automated verification, achieving zero data loss during tenant separation.",
      "Deployed and fine-tuned AWS WAF rulesets integrated with ALB and CloudFront distributions, mitigating automated scraping, credential abuse, and OWASP Top 10 threats.",
      "Integrated Elastic APM and ELK Stack for distributed tracing and centralized logging across distributed services, reducing mean-time-to-resolution (MTTR) for latency bottlenecks.",
      "Configured Warpgate Zero Trust access gateway for engineers to connect securely to private SSH servers and RDS databases with RBAC and audit logging, phasing out legacy bastion hosts.",
      "Proactively monitored bare-metal/cloud Linux servers, containers, and database clusters using Zabbix and custom alert triggers to uphold a 99.9%+ availability SLA.",
    ],
    technologies: [
      "AWS (EKS, ECS, VPC, ALB, WAF, RDS)",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Jenkins",
      "SonarQube",
      "Warpgate Zero Trust",
      "Elastic APM / ELK",
      "PostgreSQL",
      "Zabbix",
    ],
  },
];
