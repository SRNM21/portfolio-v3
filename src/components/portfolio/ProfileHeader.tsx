import { MapPin } from "lucide-react"
import { SocialLinkButton } from "./SocialLinkButton"
import { ThemeToggle } from "./ThemeToggle"
import { EasterEggDialog } from "./EasterEggDialog"
import type { ProfileData } from "@/data/portfolio"

export function ProfileHeader({ profile }: { profile: ProfileData }) {
  return (
    <header className="flex flex-col gap-6 border-b border-border/60 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-heading">
                {profile.name}
              </h1>
            </div>
            <p className="text-sm font-medium text-muted-foreground mt-0.5">
              {profile.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:self-start">
          {profile.location && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mr-1">
              <MapPin className="size-3.5" />
              <span>{profile.location}</span>
            </div>
          )}
          <ThemeToggle />
          <EasterEggDialog />
        </div>
      </div>

      <p className="text-base text-foreground/85 leading-relaxed max-w-2xl">
        {profile.bio}
      </p>

      <div className="flex flex-wrap items-center gap-2 pt-1">
        {profile.socials.map((social) => (
          <SocialLinkButton key={social.platform} social={social} />
        ))}
      </div>
    </header>
  )
}
