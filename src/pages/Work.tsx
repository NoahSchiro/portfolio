import Box from '@mui/material/Box'
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
}

const jobs: Job[] = [
  {
    company: 'Company Name',
    role: 'Software Engineer',
    period: '2024 – Present',
    summary: [
      'What you worked on.',
      'What impact you made.'
    ],
  },
  {
    company: 'Company Name',
    role: 'Intern',
    period: '2023 – 2024',
    summary: [
      'What you worked on.',
      'What impact you made.'
    ],
  },
]

function WorkItem({ job }: { job: Job }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2">
        {job.role}
      </Typography>
      <Typography color="text.secondary">
        {job.company} · {job.period}
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4}}>
        {job.summary.map((item) => (
          <ListItem key={item} sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
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
