import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import type { SkillCategoryData } from "@/data/portfolio"

export function SkillGroupCard({ category }: { category: SkillCategoryData }) {
  return (
    <Card className="border border-border/80 bg-card hover:border-foreground/20 transition-all duration-200">
      <CardHeader className="gap-1 pb-3">
        <CardTitle className="text-base font-semibold text-foreground">
          {category.category}
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          {category.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-xs font-normal py-1 px-2.5 bg-muted/40 hover:bg-muted transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
