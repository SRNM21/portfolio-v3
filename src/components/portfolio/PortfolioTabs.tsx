import { Briefcase, Wrench, FolderGit2 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ExperienceItem } from "./ExperienceItem"
import { SkillGroupCard } from "./SkillGroupCard"
import { ProjectCard } from "./ProjectCard"
import type { ExperienceData, SkillCategoryData, ProjectData } from "@/data/portfolio"

interface PortfolioTabsProps {
  experiences: ExperienceData[]
  skillCategories: SkillCategoryData[]
  projects: ProjectData[]
}

export function PortfolioTabs({
  experiences,
  skillCategories,
  projects,
}: PortfolioTabsProps) {
  return (
    <Tabs defaultValue="experience" className="w-full gap-6">
      <TabsList className="grid w-full grid-cols-3 bg-muted/60 border border-border/60">
        <TabsTrigger
          value="experience"
          className="text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs transition-all"
        >
          <Briefcase/>
          Experience
        </TabsTrigger>

        <TabsTrigger
          value="skills"
          className="text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs transition-all"
        >
          <Wrench/>
          Skills
        </TabsTrigger>

        <TabsTrigger
          value="projects"
          className="text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs transition-all"
        >
          <FolderGit2/>
          Projects
        </TabsTrigger>
      </TabsList>

      {/* Experience Tab Content */}
      <TabsContent value="experience" className="flex flex-col gap-4 mt-2 focus-visible:outline-none">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </TabsContent>

      {/* Skills Tab Content */}
      <TabsContent value="skills" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 focus-visible:outline-none">
        {skillCategories.map((group) => (
          <SkillGroupCard key={group.category} category={group} />
        ))}
      </TabsContent>

      {/* Projects Tab Content */}
      <TabsContent value="projects" className="grid grid-cols-1 gap-4 mt-2 focus-visible:outline-none">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </TabsContent>
    </Tabs>
  )
}
