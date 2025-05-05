import Link from 'next/link'
import './header.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
        <h1>DIONNE MEMIE</h1>
        <h3>Full Stack Developer</h3>
        <Image className="cartoon" src="/images/Designer.jpeg" alt="Cartoon image of Girl at a Computer" width={100} height={100} />
      <nav>
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  )
}