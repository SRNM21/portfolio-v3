import { Globe, Smartphone, Monitor } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import type { ProjectData } from "@/data/portfolio"

function ProjectTypeIcon({ type }: { type: ProjectData["type"] }) {
  if (type === "Mobile") {
    return <Smartphone className="size-3 text-muted-foreground" />
  }
  if (type === "Desktop App") {
    return <Monitor className="size-3 text-muted-foreground" />
  }
  return <Globe className="size-3 text-muted-foreground" />
}

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <Card className="flex flex-col border border-border/80 bg-card hover:border-foreground/20 transition-all duration-200 gap-0">
      <CardHeader className="gap-2 pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <CardTitle className="text-base font-semibold text-foreground">
            {project.title}
          </CardTitle>

          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            <Badge variant="secondary" className="font-normal py-0.5">
              <ProjectTypeIcon data-icon="inline-start" type={project.type} />
              {project.type}
            </Badge>

            <Badge variant="outline" className="font-normal py-0.5">
              {project.scope}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3 pt-0">
        {project.highlights.length > 0 && (
          <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
            {project.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/40">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
