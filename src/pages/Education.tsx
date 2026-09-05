import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface EducationEntry {
  school: string
  degree: string
  period: string
  details: string[]
}

const education: EducationEntry[] = [
  {
    school: 'University Name',
    degree: 'B.S. in Computer Science',
    period: '2020 – 2024',
    details: [
      'Relevant coursework.',
      'GPA, honors, and activities.',
    ],
  },
  {
    school: 'High School Name',
    degree: 'High School Diploma',
    period: '2016 – 2020',
    details: [
      'Graduated with honors.',
    ],
  },
]

function EducationItem({ entry }: { entry: EducationEntry }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" component="h2">
        {entry.degree}
      </Typography>
      <Typography color="text.secondary">
        {entry.school} · {entry.period}
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        {entry.details.map((item) => (
          <ListItem key={item} sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

function Education() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Education
      </Typography>
      <Box sx={{ display: 'grid', gap: 3 }}>
        {education.map((entry) => (
          <EducationItem key={entry.school} entry={entry} />
        ))}
      </Box>
    </Box>
  )
}

export default Education
