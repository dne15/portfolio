export default function Skills() {
    const skills = ['JavaScript', 'React', 'Next.js', 'CSS', 'HTML']
    return (
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    )
  }