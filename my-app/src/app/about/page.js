import Skills from '../../components/Skills'
import Link from 'next/link'
import './about.css'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>

      <span className='aboutMe'>

      I&apos;m Dionne, a beginner a full-stack developer and project manager with a passion for building web applications and leading projects from start to finish. I began my journey in web development because I love innovation, creativity and puzzles and want to create solutions to real world problems. <br /><br />

      I have just graduated from the School of Code bootcamp where I have spent 16 weeks learning the fundamentals of programming and how to work within a high-performance tech team. Through this I have gained experience with Front-end and Back-end Development, Database Management, QA, Product Mnagement, DevOps, Cybersecurity, and AI.

      With experience in both front-end and back-end, I&apos;m skilled in technologies like HTML, CSS, JavaScript, React, Node.js, and SQL to help build responsive, user-friendly websites.

      My project management experience ensures that each project I work on is organised, delivered on time, and meets the criteria. I enjoy collaborating with teams and stakeholders, setting clear milestones, and keeping projects on track.

      My goal is to continue learning and improving, diving deeper into JavaScript frameworks and backend development as I grow.<br /><br />

      When I&apos;m not coding or planning my next project, you can find me planning my next trip or binging a new kdrama/anime series. <br /><br />

      I&apos;m always open to new challenges, so feel free to <Link href="/contact">contact me</Link> if you&apos;d like to collaborate!
      <br /><br />

      </span>
      <h3>Skills List</h3>
      <Skills />
    </div>
  )
}