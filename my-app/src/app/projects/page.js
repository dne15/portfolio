import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of project 1' },
    { id: 2, title: 'Project 2', description: 'Description of project 2' },
    // Add more projects as needed 
  ]

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}