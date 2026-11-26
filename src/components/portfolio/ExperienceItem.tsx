import { Calendar, Building2, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import type { ExperienceData } from "@/data/portfolio"

export function ExperienceItem({ experience }: { experience: ExperienceData }) {
  return (
    <Card className="border border-border/80 hover:border-foreground/20 transition-all duration-200">
      <CardHeader className="gap-2">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
          <div>
            <CardTitle className="text-base font-semibold text-foreground">
              {experience.role}
            </CardTitle>
            <div className="flex items-center gap-1.5 text-sm font-medium text-primary mt-0.5">
              <Building2 className="size-3.5" />
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:underline underline-offset-4"
                >
                  {experience.company}
                </a>
              ) : (
                <span>{experience.company}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="size-3.5" />
            <span>{experience.period}</span>
          </div>
        </div>

        <CardDescription className="text-sm text-muted-foreground/90 leading-relaxed mt-1">
          {experience.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        {experience.achievements.length > 0 && (
          <ul className="space-y-2 text-xs sm:text-sm text-foreground/80">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-primary/70 shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}

        {experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-[11px] font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
