import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

interface Project {
  title: string
  description: string[]
  tags: string[]
  link: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: [
      'What this project does.',
      'Why it matters.',
    ],
    tags: ['React', 'TypeScript'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: [
      'What this project does.',
      'Why it matters.',
    ],
    tags: ['Python', 'FastAPI'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: [
      'What this project does.',
      'Why it matters.',
    ],
    tags: ['Go', 'Docker'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: [
      'What this project does.',
      'Why it matters.',
    ],
    tags: ['Go', 'Docker'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: [
      'What this project does.',
      'Why it matters.',
    ],
    tags: ['Go', 'Docker'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: [
      'What this project does.',
      'Why it matters.',
    ],
    tags: ['Go', 'Docker'],
    link: '#',
  },
]

function ProjectItem({ project }: { project: Project }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h2">
          {project.title}
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4, mt: 1 }}>
          {project.description.map((item) => (
            <ListItem key={item} sx={{ display: 'list-item', py: 0.5 }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href={project.link}>
          View Project
        </Button>
      </CardActions>
    </Card>
  )
}

function Projects() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Projects
      </Typography>
      <Box sx={{ display: 'grid', gap: 3 }}>
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  )
}

export default Projects
