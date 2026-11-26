import { useEffect, useState } from "react"

function getRandomVisitorCount(): number {
  const rand = Math.random() * 100
  if (rand < 90) {
    return 1
  } else if (rand < 98) {
    return 2
  } else {
    return 3
  }
}

function getRandomInterval(): number {
  return Math.floor(Math.random() * (3000 - 1000 + 1)) + 500
}

export function Footer({ name }: { name: string }) {
  const currentYear = new Date().getFullYear()
  const [visitorCount, setVisitorCount] = useState<number>(getRandomVisitorCount)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const scheduleUpdate = () => {
      const delay = getRandomInterval()
      timeoutId = setTimeout(() => {
        setVisitorCount(getRandomVisitorCount())
        scheduleUpdate()
      }, delay)
    }

    scheduleUpdate()

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <footer className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <p>© {currentYear} {name}. All rights reserved.</p>

      <div className="flex gap-1">
        <span className="font-semibold text-foreground tabular-nums">
          {visitorCount}
        </span>
        <span className="text-muted-foreground">People/Crawlers viewing now</span>
      </div>
    </footer>
  )
}
