import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <span className='intro'>
      I&apos;m Dionne. A problem solver with a passion for Tech       
       </span>
      
      <div className='highlightsTitle'>
      <Link href="/projects" >Project Highlights</Link>
      </div>

      <div className="projectContainer">
        <span>
          SATellite PREP
          <div className='imageContainer'>
            <Image src="/images/Satellite-romans.png" alt="image of website" width={300} height={400} />
          </div>
        </span> 
        <span>
          Fireplace Palace
          <div className='imageContainer'>
            <Image src="/images/fireplace-palace.png" alt="image of website" width={300} height={400} />
          </div>
        </span>
        <span>
          TypeScript Tutorial
          <div className='imageContainer'>
            <Image src="/images/typescript-tut.png" alt="image of website" width={300} height={400} />
          </div>
        </span>
      </div>
    </div>
  )
}