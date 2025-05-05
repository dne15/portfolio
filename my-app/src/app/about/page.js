import Skills from '../../components/Skills';
import Link from 'next/link';
import './about.css';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>

      <span className="aboutMe">
        I&apos;m Dionne.<br /><br />

        I&apos;m a Quality Assurance Engineer with a passion for front-end development.<br /><br />

        After completing the School of Code bootcamp, I gained experience in fullstack development with React, JavaScript, Node.js, SQL, as well as Project Management, UX/UI, and QA. I&apos;m passionate about building clean, responsive interfaces and creating real-world solutions focusing on the user experience.<br /><br />

        With a strong eye for detail and a structured approach to collaboration, I bring both technical ability and a QA mindset to front-end development. I&apos;m currently expanding my skills in modern front-end tools as I work toward my next role.<br /><br />

        When I&apos;m not coding or planning my next project, you can find me arranging my next trip ☀.<br /><br />

        I&apos;m always open to new challenges, so feel free to <Link href="/contact">contact me</Link> if you&apos;d like to collaborate!<br /><br />
      </span>

      <div className="skillsList">
        <h3>Skills List</h3>
        <br />
        <Skills />
      </div>
    </div>
  );
}