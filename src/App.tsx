import { ProfileHeader } from "@/components/portfolio/ProfileHeader"
import { PortfolioTabs } from "@/components/portfolio/PortfolioTabs"
import { Footer } from "@/components/portfolio/Footer"
import { ScrollToTop } from "@/components/portfolio/ScrollToTop"
import { portfolioData } from "@/data/portfolio"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/10">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 md:py-16 flex flex-col gap-8">
        <ProfileHeader profile={portfolioData.profile} />
        <main className="w-full">
          <PortfolioTabs
            experiences={portfolioData.experiences}
            skillCategories={portfolioData.skillCategories}
            projects={portfolioData.projects}
          />
        </main>
        <Footer name={portfolioData.profile.name} />
      </div>

      <ScrollToTop />
    </div>
  )
}

export default App
