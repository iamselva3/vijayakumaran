import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "cicd-platform",
    title: "Multi-Environment Enterprise CI/CD Platform",
    tagline: "Automated Build, Test, Security & Deployment Pipeline for 10+ Microservices",
    description:
      "A resilient, automated continuous delivery engine powering 10+ microservices (Spring Boot, Laravel, Node.js) across UAT, Pre-prod, and Production AWS environments with strict quality gates.",
    featured: true,
    category: "cicd",
    stack: ["Jenkins", "GitHub", "Maven", "SonarQube", "Docker", "AWS ECR", "Amazon EKS", "Amazon ECS"],
    highlights: [
      "Automated build-test-deploy cycles across 3 segregated AWS environment tiers (UAT, Pre-prod, Prod)",
      "Integrated SonarQube automated code quality gates preventing merge of vulnerabilities & technical debt",
      "Cut average release deployment duration from 45 minutes of manual overhead to under 6 minutes",
      "Zero failed production pushes due to automated container smoke tests and automated rollbacks",
    ],
    caseStudy: {
      problem:
        "The engineering teams were manually packaging artifacts, running ad-hoc shell scripts, and deploying microservices separately across environments. This caused configuration drift, delayed releases to 45+ minutes, and increased risk of downtime during deployments.",
      approach:
        "Engineered a standardized Jenkins pipeline using master/agent architecture. Designed pipeline-as-code stages: git checkout -> SonarQube static analysis -> Maven/Node build -> multi-stage Docker image packaging -> ECR push -> parameterized deployment to ECS/EKS with automated health checks.",
      stack: ["Jenkins Pipeline", "SonarQube", "AWS ECR", "Amazon ECS / EKS", "Docker", "Slack Webhooks"],
      result:
        "Standardized continuous deployment for 10+ applications, reduced deployment cycle time by 85%, achieved consistent environment parity across UAT/Pre-prod/Prod, and eradicated deployment-induced downtime.",
    },
    architectureType: "cicd",
    diagramTitle: "Jenkins Master/Agent -> SonarQube -> ECR -> ECS/EKS Deployment Flow",
    githubUrl: "https://github.com/vijayakumaran-ar",
  },
  {
    id: "production-eks",
    title: "High-Availability Production EKS Platform",
    tagline: "Enterprise Kubernetes with Karpenter Dynamic Autoscaling & Zero-Downtime Upgrades",
    description:
      "Production-grade Amazon EKS cluster architecture supporting containerized workloads with Karpenter node auto-provisioning, horizontal pod autoscaling, and seamless version lifecycle maintenance.",
    featured: false,
    category: "k8s",
    stack: ["AWS EKS", "Kubernetes", "Karpenter", "HPA", "Terraform", "AWS IAM Roles for Service Accounts (IRSA)"],
    highlights: [
      "Zero-downtime EKS cluster version upgrades across control planes and managed node groups",
      "Karpenter dynamic node provisioning slashing node startup latency and reducing compute costs by 28%",
      "Implemented Kubernetes RBAC and AWS IRSA for fine-grained principle of least privilege access",
      "Automated PodDisruptionBudgets and topology spread constraints ensuring high availability during AZ outages",
    ],
    caseStudy: {
      problem:
        "Legacy compute infrastructure struggled with variable traffic spikes, slow Cluster Autoscaler provisioning times (5+ minutes to spin up nodes), and high operational risk when performing required Kubernetes version upgrades.",
      approach:
        "Provisioned a new multi-AZ Amazon EKS cluster via Terraform. Deployed Karpenter for sub-minute node provisioning and bin-packing. Configured Horizontal Pod Autoscaler (HPA) using custom metrics, implemented Pod Disruption Budgets, and established a phased rolling upgrade runbook.",
      stack: ["Kubernetes", "Amazon EKS", "Karpenter", "AWS ALB Controller", "Terraform"],
      result:
        "Achieved 99.99% workload availability, decreased scaling latency from 5 minutes to 45 seconds, and successfully upgraded production clusters across minor versions with zero user-facing downtime.",
    },
    architectureType: "eks",
    diagramTitle: "EKS Multi-AZ Karpenter Auto-provisioning Architecture",
    githubUrl: "https://github.com/vijayakumaran-ar",
  },
  {
    id: "ecs-zero-downtime",
    title: "Zero-Downtime ECS Deployment Strategy",
    tagline: "Graceful Container Rolling Deployments with Dynamic ALB Health Checks",
    description:
      "Engineered an automated deployment workflow on Amazon ECS with Application Load Balancer target group deregistration delays and blue/green rolling update semantics.",
    featured: false,
    category: "cloud",
    stack: ["Amazon ECS (Fargate & EC2)", "Application Load Balancer", "AWS ECR", "CloudWatch Alarms"],
    highlights: [
      "Zero dropped HTTP requests during rolling updates via connection draining and tuned deregistration delay",
      "Automated task definition revisioning with instant rollback triggers upon elevated error rates",
      "Fine-tuned memory and CPU container reservations optimizing resource utilization",
    ],
    caseStudy: {
      problem:
        "Deploying new releases on ECS previously resulted in brief intermittent 502/504 errors as old tasks were terminated before new tasks had fully initialized their application connections.",
      approach:
        "Tuned ALB health check thresholds (interval, timeout, healthy threshold) and deregistration delay parameters. Configured task definition stop timeouts for graceful SIGTERM processing, ensuring database connections close cleanly before process termination.",
      stack: ["AWS ECS", "AWS ALB", "ECR", "CloudWatch Metrics"],
      result:
        "Achieved 100% uninterrupted user sessions during deployments, maintaining zero dropped requests across continuous daily releases.",
    },
    architectureType: "ecs",
    diagramTitle: "ECS Rolling Update & Connection Draining Flow",
    githubUrl: "https://github.com/vijayakumaran-ar",
  },
  {
    id: "zero-trust-warpgate",
    title: "Zero Trust Access Gateway with Warpgate",
    tagline: "Secure SSH & Database Access with Strict RBAC and Complete Session Recording",
    description:
      "Modernized infrastructure remote access by replacing legacy SSH bastion hosts with Warpgate Zero Trust gateway, enforcing granular RBAC, short-lived tokens, and audit recording.",
    featured: false,
    category: "security",
    stack: ["Warpgate", "AWS EC2", "IAM", "PostgreSQL", "Audit Logging", "Zero Trust"],
    highlights: [
      "Eliminated open SSH ports on private instances, eliminating internet-facing attack surface",
      "Centralized role-based access control (RBAC) across developers, ops, and data analysts",
      "Automated end-to-end session recording and audit logs for compliance requirements",
    ],
    caseStudy: {
      problem:
        "Managing individual SSH keys across dozens of developers on shared bastion hosts was error-prone, provided no granular database query auditing, and exposed SSH ports to port scans.",
      approach:
        "Deployed and hardened Warpgate in a dedicated VPC tier behind an internal load balancer. Configured SSO authentication with role-based policies for SSH and PostgreSQL access, with automatic session recording forwarded to encrypted S3 storage.",
      stack: ["Warpgate", "AWS Security Groups", "S3 Encrypted Logs", "Linux PAM"],
      result:
        "Hardened remote access compliance, eradicated static bastion credentials, and provided single-pane-of-glass auditable access logs for every database and server command.",
    },
    architectureType: "warpgate",
    diagramTitle: "Zero Trust Identity-Aware Warpgate Gateway Topology",
    githubUrl: "https://github.com/vijayakumaran-ar",
  },
  {
    id: "observability-stack",
    title: "Enterprise Observability & Distributed Tracing",
    tagline: "End-to-End Tracing & Telemetry with Elastic APM, ELK Stack & SigNoz",
    description:
      "Implemented a comprehensive observability architecture aggregating logs, metrics, and distributed APM traces across multi-language microservices with real-time alerting.",
    featured: false,
    category: "observability",
    stack: ["Elastic APM", "Elasticsearch", "Logstash", "Kibana", "SigNoz", "Zabbix", "Filebeat"],
    highlights: [
      "Distributed transaction tracing across Java, Node.js, and PHP microservices",
      "Centralized log ingestion handling millions of daily log events with structured parsing",
      "Automated alerting for p99 latency spikes and error rate threshold breaches via Slack",
    ],
    caseStudy: {
      problem:
        "Diagnosing cross-service microservice failures took hours due to fragmented server logs and lack of transaction correlation IDs across the distributed architecture.",
      approach:
        "Installed Elastic APM agents across applications, deployed Filebeat and Logstash forwarders with index lifecycle management (ILM) in Elasticsearch, and designed Kibana dashboards alongside SigNoz for OpenTelemetry traces.",
      stack: ["Elastic APM", "ELK", "OpenTelemetry", "SigNoz", "Kibana"],
      result:
        "Reduced Mean Time To Detect (MTTD) by 70% and Mean Time To Resolve (MTTR) from hours to minutes, giving development teams real-time visibility into database bottlenecks and external API latency.",
    },
    architectureType: "apm",
    diagramTitle: "Multi-service APM & Centralized ELK Ingestion Pipeline",
    githubUrl: "https://github.com/vijayakumaran-ar",
  },
  {
    id: "rds-migration",
    title: "Cross-Account RDS PostgreSQL Migration",
    tagline: "Encrypted Snapshot Sharing & Version Upgrades with Zero Data Loss",
    description:
      "Executed complex relational database migrations between segregated AWS accounts using automated KMS-encrypted snapshots, cross-account sharing policies, and schema validation.",
    featured: false,
    category: "database",
    stack: ["AWS RDS PostgreSQL", "AWS KMS", "IAM Policies", "AWS CLI", "Bash Automation"],
    highlights: [
      "Zero data loss migration of multi-gigabyte production PostgreSQL databases across AWS accounts",
      "KMS custom key re-encryption facilitating compliant cross-account snapshot restoration",
      "Automated pre-flight verification scripts ensuring table parity and sequence alignment",
    ],
    caseStudy: {
      problem:
        "Corporate restructuring required separating production database workloads into a newly provisioned, dedicated AWS organization account with minimal maintenance window downtime.",
      approach:
        "Developed an automated migration runbook: provisioned KMS customer-managed keys (CMKs) with cross-account access, automated point-in-time snapshot creation, re-encrypted snapshots under target KMS keys, shared across accounts, and restored with parameter group tuning.",
      stack: ["AWS RDS", "AWS KMS", "Bash Scripts", "pg_dump / pg_restore"],
      result:
        "Executed seamless database cutover within the scheduled maintenance window with zero data corruption or loss, followed by a successful minor engine version upgrade.",
    },
    architectureType: "rds",
    diagramTitle: "Cross-Account KMS Encrypted Snapshot Migration Flow",
    githubUrl: "https://github.com/vijayakumaran-ar",
  },
];
