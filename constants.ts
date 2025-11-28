import { ExamDefinition } from './types';

export const AWS_EXAMS: ExamDefinition[] = [
  {
    id: 'clf-c02',
    code: 'CLF-C02',
    name: 'Cloud Practitioner',
    level: 'Foundational',
    description: 'Overall understanding of the AWS Cloud platform.'
  },
  {
    id: 'saa-c03',
    code: 'SAA-C03',
    name: 'Solutions Architect - Associate',
    level: 'Associate',
    description: 'Designing distributed systems on AWS.'
  },
  {
    id: 'dva-c02',
    code: 'DVA-C02',
    name: 'Developer - Associate',
    level: 'Associate',
    description: 'Developing and maintaining applications on AWS.'
  },
  {
    id: 'soa-c02',
    code: 'SOA-C02',
    name: 'SysOps Administrator - Associate',
    level: 'Associate',
    description: 'Deployment, management, and operations on AWS.'
  },
  {
    id: 'sap-c02',
    code: 'SAP-C02',
    name: 'Solutions Architect - Professional',
    level: 'Professional',
    description: 'Designing complex and hybrid solutions.'
  },
  {
    id: 'dop-c02',
    code: 'DOP-C02',
    name: 'DevOps Engineer - Professional',
    level: 'Professional',
    description: 'Provisioning, operating, and managing distributed application systems.'
  }
];
