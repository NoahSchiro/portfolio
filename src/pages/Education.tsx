import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
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
  coursework: string[]
}

const education: EducationEntry[] = [
  {
    school: 'Harvard University',
    degree: 'M.S. in Data Science',
    period: 'Sep. 2026 - May 2028',
    details: [
      'First semester currently underway.'
    ],
    coursework: [
      'Robotic Manipulation @ MIT',
      'Intro to Data Science',
      'Advanced Practical Data Science',
    ]
  },
  {
    school: 'Penn State University',
    degree: 'B.S. in Computer Science; Minor in Mathematics',
    period: 'Aug. 2020 - Dec. 2023',
    details: [
      'GPA: 3.72/4.0; Honors Student, Dean\'s List, President\'s Freshman Award (2021), member of IEEE.',
      'Wrote Python electromagnetism simulations for an honors physics course, later used to teach the material in class.',
      'Elected Student Government Association Senator (54th Congress), serving as Chair of Sustainable Development and later Vice President.',
      'Authored legislation expanding campus recycling capacity, launching the Living Green Wall project, and increasing campus investment in solar power.',
      'Represented students as University Park Faculty Senate Student Representative and as a voting member of the Commonwealth Fee Board, allocating a $10M annual student fee pool; served on the Student Trustee selection committee.',
    ],
    coursework: [
      'Machine Learning and AI',
      'Intro Neural Nets',
      'Data Structures and Algorithms',
      'Discrete Math for Computer Science',
      'Operating Systems',
      'Intro System Programming',
      'Computer Organization and Design',
      'Programming Language Concepts',
      'Intro Theory of Computation',
      'Intro Probability Theory',
      'Intro Mathematical Statistics',
      'Math Theory of Games',
    ]
  },
]

function EducationItem({ entry }: { entry: EducationEntry }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" component="h2">
        {entry.school}
      </Typography>
      <Typography variant="h6" component="h2">
        {entry.degree}
      </Typography>
      <Typography color="text.secondary">
        {entry.period}
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        {entry.details.map((item) => (
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
          Coursework:
        </Typography>
        {entry.coursework.map((course) => (
          <Chip key={course} label={course} size="small" />
        ))}
      </Box>
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
