import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import Education from '@/components/sections/education'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </main>
    )
}
