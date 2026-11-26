import { useState, useCallback } from "react"
import {
  Fingerprint,
  Cpu,
  Wifi,
  MapPin,
  Monitor,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

interface VisitorData {
  ip: string
  city: string
  region: string
  country: string
  latitude: number | string
  longitude: number | string
  isp: string
  timezone: string
  localTime: string
  browser: string
  referrer: string
  os: string
  deviceType: string
  screenResolution: string
  networkType: string
  downlink: string
  rtt: string
  isOnline: boolean
}

export function EasterEggDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<VisitorData | null>(null)

  const parseBrowserAndOs = (nav: Navigator) => {
    
    const navWithData = nav as unknown as { userAgentData?: { brands?: { brand: string }[]; platform?: string } }
    const browser = navWithData.userAgentData?.brands?.[2]?.brand ?? navWithData.userAgentData?.brands?.[0]?.brand ?? "Unknown Browser"
    const os = navWithData.userAgentData?.platform ?? "Unknown OS"

    let deviceType = "Desktop"
    if (/Mobi|Android|iPhone|iPad/i.test(nav.userAgent)) {
      deviceType = /iPad|Tablet/i.test(nav.userAgent) ? "Tablet" : "Mobile"
    }

    return { browser, os, deviceType }
  }

  const fetchTelemetry = useCallback(async () => {
    setLoading(true)

    const { browser, os, deviceType } = parseBrowserAndOs(navigator)
    const screenResolution = `${window.screen.width} x ${window.screen.height} (${window.devicePixelRatio}x)`

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText("THANK YOU FOR VISITING GREGORIO's PORTFOLIO!")
      }
    } catch {
      // Safely ignore if clipboard permissions are restricted by browser policy
    }
    
    const navAny = navigator as unknown as { deviceMemory?: number; connection?: { effectiveType?: string; downlink?: number; rtt?: number } }
    const referrer = document.referrer || "direct"

    // Network API
    const conn = navAny.connection
    const networkType = conn?.effectiveType ? conn.effectiveType.toUpperCase() : "Standard"
    const downlink = conn?.downlink ? `${conn.downlink} Mbps` : "Unknown"
    const rtt = conn?.rtt ? `${conn.rtt} ms` : "Unknown"
    const isOnline = navigator.onLine

    // Timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const now = new Date()
    const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })

    // Fetch IP and Geo Coordinates
    let ip: string
    let city = "Unknown"
    let region = "Unknown"
    let country = "Unknown"
    let latitude: number | string = "N/A"
    let longitude: number | string = "N/A"
    let isp = "Unknown"

    try {
      const res = await fetch("https://ipwho.is/")
      const json = await res.json()
      if (json && json.success) {
        ip = json.ip || "Unknown"
        city = json.city || "Unknown"
        region = json.region || "Unknown"
        country = json.country || "Unknown"
        latitude = json.latitude ?? "N/A"
        longitude = json.longitude ?? "N/A"
        isp = json.connection?.isp || "Unknown"
      } else {
        const fbRes = await fetch("https://api.ipify.org?format=json")
        const fbJson = await fbRes.json()
        ip = fbJson.ip || "Unknown"
      }
    } catch {
      ip = "Hidden by client"
    }

    setData({
      ip,
      city,
      region,
      country,
      latitude,
      longitude,
      isp,
      timezone,
      localTime,
      browser,
      referrer,
      os,
      deviceType,
      screenResolution,
      networkType,
      downlink,
      rtt,
      isOnline,
    })
    setLoading(false)
  }, [])

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (isOpen && !data) {
      fetchTelemetry()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Your Data"
          title="Your Data"
        >
          <Fingerprint />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto">
        <DialogHeader className="gap-1">
          <DialogTitle className="text-base font-semibold">
            Your Data
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            The info shown here, like your IP address, browser, device details, and approximate location, is publicly available to any website you visit. No permission is needed to see it. So be careful when clicking links or visiting unfamiliar sites, because any of them can see the same thing.
          </DialogDescription>
        </DialogHeader>

        {loading || !data ? (
          <div className="py-8 flex flex-col items-center justify-center gap-3 text-muted-foreground text-xs">
            <RefreshCw className="size-5 animate-spin text-primary" />
            <span>Probing browser telemetry & network endpoints...</span>
          </div>
        ) : (
          <div className="space-y-3 pt-2 text-xs">
            {/* Network & IP Section */}
            <div className="p-3 rounded-lg border border-border/70 bg-muted/30 space-y-2">
              <div className="flex items-center justify-between font-medium text-foreground pb-1 border-b border-border/40">
                <span className="flex items-center gap-1.5">
                  <Wifi className="size-3.5 text-primary" />
                  Network & Connection
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div>
                  <span className="block text-[11px] text-foreground/70">Public IP:</span>
                  <span className="text-foreground">{data.ip}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground/70">Provider / ISP:</span>
                  <span className="text-foreground" title={data.isp}>{data.isp}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground/70">Network Type:</span>
                  <span className="text-foreground">{data.networkType} ({data.downlink})</span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground/70">Latency / RTT:</span>
                  <span className="text-foreground">{data.rtt}</span>
                </div>
              </div>
            </div>

            {/* Approximate Location */}
            <div className="p-3 rounded-lg border border-border/70 bg-muted/30 space-y-2">
              <div className="flex items-center gap-1.5 font-medium text-foreground pb-1 border-b border-border/40">
                <MapPin className="size-3.5 text-primary" />
                Approximate Location
              </div>

              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div>
                  <span className="block text-[11px] text-foreground/70">City / Region:</span>
                  <span className="text-foreground">{data.city}, {data.region}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground/70">Country:</span>
                  <span className="text-foreground">{data.country}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[11px] text-foreground/70">Coordinates (Lat, Long):</span>
                  <span className="font-mono text-[11px] text-foreground">
                    {typeof data.latitude === "number" ? data.latitude.toFixed(4) : data.latitude}°,{" "}
                    {typeof data.longitude === "number" ? data.longitude.toFixed(4) : data.longitude}°
                  </span>
                </div>
              </div>
            </div>

            {/* Device & Hardware Specs */}
            <div className="p-3 rounded-lg border border-border/70 bg-muted/30 space-y-2">
              <div className="flex items-center gap-1.5 font-medium text-foreground pb-1 border-b border-border/40">
                <Cpu className="size-3.5 text-primary" />
                Device & Hardware Specs
              </div>

              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div>
                  <span className="block text-[11px] text-foreground/70">Device / OS:</span>
                  <span className="text-foreground">{data.deviceType} ({data.os})</span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground/70">Screen Resolution:</span>
                  <span className="text-foreground">{data.screenResolution}</span>
                </div>
              </div>
            </div>

            {/* Browser & Timezone */}
            <div className="p-3 rounded-lg border border-border/70 bg-muted/30 space-y-2">
              <div className="flex items-center gap-1.5 font-medium text-foreground pb-1 border-b border-border/40">
                <Monitor className="size-3.5 text-primary" />
                Browser & Timezone
              </div>

              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div>
                  <span className="block text-[11px] text-foreground/70">Browser:</span>
                  <span className="text-foreground">{data.browser}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground/70">From:</span>
                  <span className="text-foreground">{data.referrer}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground/70">Timezone:</span>
                  <span className="text-foreground">{data.timezone}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-foreground/70">Local Time:</span>
                  <span className="text-foreground">{data.localTime}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
