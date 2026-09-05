import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface Job {
  company: string
  role: string
  period: string
  summary: string[]
  skills: string[]
}

const jobs: Job[] = [
  {
    company: 'MITRE',
    role: 'Intermediate AI Engineer',
    period: 'Nov. 2024 – Present',
    summary: [
      'RF foundation model: serving as scrum master and training optimization lead on a foundation model for RF data trained on 1.2+ petabytes; introduced CI, PR, and code review workflows that grew merge velocity from ~1 PR/month to 4–5 PRs/week, and found an optimization delivering a 3.3x fine-tuning speedup across multi-node H100 clusters.',
      'NIST Cyber AI Profile: co-authoring an AI-focused profile of the NIST Cybersecurity Framework 2.0, serving as AI subject matter expert on both offensive and defensive implications; presented at community workshops and manage community feedback intake.',
      'LLM-assisted robotic planning: used LLMs as orchestrators to plan actions for large, heterogeneous drone swarms, working across Docker, multiple LLM providers, ROS, and networking stacks; validated on a real-world multi-drone search and rescue task.',
      'AI platform: built and maintained internal ML infrastructure on a Kubernetes cluster and NVIDIA SuperPOD, including a multi-node mini-GPT training demo, an MLFlow instance serving hundreds of users across ~50 projects, a vector database, and custom fine-tuned LLMs; authored documentation and gave talks to drive adoption across the company.',
    ],
    skills: ['Python', 'PyTorch', 'HPCs', 'Kubernetes', 'Docker', 'MLFlow', 'Vector DBs (Qdrant, pgvector)'],
  },
  {
    company: 'Applied Research Laboratory at Penn State',
    role: 'Machine Learning Research Engineer',
    period: 'Dec. 2023 – Nov. 2024',
    summary: [
      'Deployed computer vision stacks to edge devices such as drones, balancing model accuracy against the performance constraints of edge hardware.',
      'Served as Co-Principal Investigator on a research project benchmarking Microsoft-developed LLMs and RAG systems for specialized applications, earning the Co-PI role after six months.',
      'Rapidly developed and deployed LLM and RAG applications for lab-wide use, delivering the project using only 10% of its allocated budget.',
      'Communicated engineering results to technical and non-technical audiences, including how to interpret ML inference results and their limitations.',
    ],
    skills: ['JupyterLab', 'Kubernetes', 'Docker', 'Python', 'PyTorch', 'ViT', 'C', 'Raspberry Pi'],
  },
  {
    company: 'Applied Research Laboratory at Penn State',
    role: 'Machine Learning Research Engineer Intern',
    period: 'Jan. 2023 – Dec. 2023',
    summary: [
      'Built end-to-end computer vision projects spanning data labeling, training pipelines, testing, evaluation, and production deployment.',
      'Built data labeling tools adopted by several other engineers, and became a go-to ML subject matter expert for colleagues across projects.',
      'Constructed model training pipelines for supervised learning tasks; worked 20h/week during the semester and 40h/week during summer and winter breaks.',
    ],
    skills: ['JupyterLab', 'Kubernetes', 'Docker', 'Python', 'PyTorch', 'ViT', 'C', 'Raspberry Pi'],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Software Engineer II (Internship)',
    period: 'Jun. 2023 – Aug. 2023',
    summary: [
      'Migrated all employee data, including payroll and PII for over 2 million employees, from a legacy mainframe to GCP, cutting storage costs by about 74%.',
      'Built an Apache Airflow pipeline to clean and prepare the migrated data for downstream ML use, handling a bursty ~2 million rows/day load concentrated around the biweekly payroll cycle.',
      'Centralized previously siloed employee data, making it more accessible to other teams; delivered as a pair-programming effort with a member of the employee data team.',
    ],
    skills: ['Scala', 'Apache Airflow', 'Python', 'GCP (primarily BigQuery)'],
  },
]

function WorkItem({ job }: { job: Job }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2">
        {job.role} | {job.company}
      </Typography>
      <Typography color="text.secondary">
        {job.period}
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4}}>
        {job.summary.map((item) => (
          <ListItem key={item} sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Worked with:
        </Typography>
        {job.skills.map((skill) => (
          <Chip key={skill} label={skill} size="small" />
        ))}
      </Box>
    </Paper>
  );
}

function Work() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Work
      </Typography>
      <Box sx={{ display: 'grid', gap: 3 }}>
        {jobs.map((job) => (
          <WorkItem key={job.role} job={job} />
        ))}
      </Box>
    </Box>
  )
}

export default Work
