import Education from '@/sections/Education'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 items-center justify-between p-2 md:p-12">
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </main>
  )
}
