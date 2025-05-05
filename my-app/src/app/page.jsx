import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <span className='intro'>
      Hi! I&apos;m Dionne. <br />
      A problem solver with a passion for creating beautiful and functional applications. 

      Take a look around to learn more about me and check out some of the work I have managed and developed!
      </span>
      
      <div className='highlightsTitle'>
        <Link href="/projects">Project Highlights</Link>
      </div>

      <div className="iframeContainer">
        <iframe className="quizFrame" src="https://quiz-game-nine-vert.vercel.app/" height="500" width="320" title="QuizAcademy"></iframe>
        <iframe src="https://fireplace-palace-six.vercel.app/" height="500" width="320" title="FireplacePalace"></iframe>
        <iframe src="https://typescript-tutorial-self.vercel.app/" height="500" width="320" title="TypeScriptTut"></iframe>
      </div>

      {/* <div className="projectContainer">
        <span>
          SATellite PREP
          <div className='imageContainer'>
            <Image src="/images/Satellite-romans.png" alt="image of website" width={300} height={400} />
          </div>
        </span>
      </div> */}
    </div>
  )
}