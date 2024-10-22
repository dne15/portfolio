export default function ProjectCard({ project }) {
    return (
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* Add more details, images, links, etc. */}
      </div>
    )
  }