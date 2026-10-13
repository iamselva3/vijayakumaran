import React from 'react';
import {
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiJenkins,
  SiElasticsearch,
  SiPostgresql,
  SiLinux,
  SiAnsible,
  SiSonar,
  SiGithub,
  SiApache,
  SiUbuntu,
  SiMysql,
  SiPython,
  SiPhp,
  SiNodedotjs,
  SiGrafana,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import {
  Cloud,
  Server,
  Layers,
  Database,
  Shield,
  Activity,
  Terminal,
  Cpu,
  GitBranch,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 18 }) => {
  const normalized = name.toLowerCase();

  if (normalized.includes('aws') || normalized.includes('amazon') || normalized.includes('ec2') || normalized.includes('vpc') || normalized.includes('s3') || normalized.includes('alb') || normalized.includes('cloudfront')) {
    return <FaAws className={`text-[#FF9900] ${className}`} size={size} />;
  }
  if (normalized.includes('k8s') || normalized.includes('kubernetes') || normalized.includes('eks') || normalized.includes('karpenter') || normalized.includes('hpa')) {
    return <SiKubernetes className={`text-[#326CE5] ${className}`} size={size} />;
  }
  if (normalized.includes('docker') || normalized.includes('container') || normalized.includes('ecr')) {
    return <SiDocker className={`text-[#2496ED] ${className}`} size={size} />;
  }
  if (normalized.includes('terraform')) {
    return <SiTerraform className={`text-[#844FBA] ${className}`} size={size} />;
  }
  if (normalized.includes('jenkins')) {
    return <SiJenkins className={`text-[#D24939] ${className}`} size={size} />;
  }
  if (normalized.includes('elastic') || normalized.includes('elk') || normalized.includes('kibana') || normalized.includes('apm')) {
    return <SiElasticsearch className={`text-[#005571] ${className}`} size={size} />;
  }
  if (normalized.includes('postgres') || normalized.includes('rds')) {
    return <SiPostgresql className={`text-[#4169E1] ${className}`} size={size} />;
  }
  if (normalized.includes('linux')) {
    return <SiLinux className={`text-[#FCC624] ${className}`} size={size} />;
  }
  if (normalized.includes('ansible')) {
    return <SiAnsible className={`text-[#EE0000] ${className}`} size={size} />;
  }
  if (normalized.includes('sonar') || normalized.includes('sonarqube')) {
    return <SiSonar className={`text-[#4E9BCD] ${className}`} size={size} />;
  }
  if (normalized.includes('github') || normalized.includes('git')) {
    return <SiGithub className={`text-slate-300 ${className}`} size={size} />;
  }
  if (normalized.includes('apache') || normalized.includes('tomcat')) {
    return <SiApache className={`text-[#D22128] ${className}`} size={size} />;
  }
  if (normalized.includes('ubuntu')) {
    return <SiUbuntu className={`text-[#E95420] ${className}`} size={size} />;
  }
  if (normalized.includes('mysql')) {
    return <SiMysql className={`text-[#4479A1] ${className}`} size={size} />;
  }
  if (normalized.includes('python')) {
    return <SiPython className={`text-[#3776AB] ${className}`} size={size} />;
  }
  if (normalized.includes('php') || normalized.includes('laravel')) {
    return <SiPhp className={`text-[#777BB4] ${className}`} size={size} />;
  }
  if (normalized.includes('node')) {
    return <SiNodedotjs className={`text-[#5FA04E] ${className}`} size={size} />;
  }
  if (normalized.includes('grafana') || normalized.includes('signoz') || normalized.includes('zabbix')) {
    return <SiGrafana className={`text-[#F46800] ${className}`} size={size} />;
  }
  if (normalized.includes('security') || normalized.includes('waf') || normalized.includes('warpgate') || normalized.includes('zero trust')) {
    return <Shield className={`text-purple-400 ${className}`} size={size} />;
  }
  if (normalized.includes('observability') || normalized.includes('monitor')) {
    return <Activity className={`text-emerald-400 ${className}`} size={size} />;
  }

  return <Layers className={`text-blue-400 ${className}`} size={size} />;
};
