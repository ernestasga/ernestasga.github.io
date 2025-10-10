import Hero from '@/sections/Hero'
import Skills from '@/sections/Skills'
import Journey from '@/sections/Journey'
import Projects from '@/sections/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 items-center justify-between p-2 md:p-12">
      <Hero />
      <Skills />
      <Journey />
      <Projects />
    </main>
  )
}
