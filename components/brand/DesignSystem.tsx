"use client"
import { Check, X, AlertTriangle, Info, Calendar, Users, Activity, ArrowRight, Plus, Search } from "lucide-react"
import CareTrackerLogo from "./CareTrackerLogo"

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <CareTrackerLogo size="xl" className="justify-center" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-8">Brand Design System</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive design system for CareTracker - the intelligent clinic management platform
          </p>
        </header>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Color Palette</h2>

          {/* Primary Colors */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="Primary" color="#0A8FDC" desc="Ocean Blue" />
              <ColorSwatch name="Secondary" color="#4CAF50" desc="Healing Green" />
              <ColorSwatch name="Accent" color="#7C3AED" desc="Premium Purple" />
              <ColorSwatch name="Primary Dark" color="#065A8C" desc="Deep Ocean" />
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Semantic Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="Success" color="#10B981" desc="Completed" />
              <ColorSwatch name="Warning" color="#F59E0B" desc="Attention" />
              <ColorSwatch name="Error" color="#EF4444" desc="Critical" />
              <ColorSwatch name="Info" color="#3B82F6" desc="Informational" />
            </div>
          </div>

          {/* Neutrals */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Neutral Scale (Slate)</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {[
                { name: "50", color: "#F8FAFC" },
                { name: "100", color: "#F1F5F9" },
                { name: "200", color: "#E2E8F0" },
                { name: "300", color: "#CBD5E1" },
                { name: "400", color: "#94A3B8" },
                { name: "500", color: "#64748B" },
                { name: "600", color: "#475569" },
                { name: "700", color: "#334155" },
                { name: "800", color: "#1E293B" },
                { name: "900", color: "#0F172A" },
              ].map((item) => (
                <div key={item.name} className="text-center">
                  <div className="w-full aspect-square rounded-lg border" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-muted-foreground mt-1 block">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Typography</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-brand">
              <h3 className="text-lg font-semibold mb-4">Inter - Headings</h3>
              <div className="space-y-3">
                <p className="text-5xl font-bold">Aa Bb Cc</p>
                <p className="text-3xl font-semibold">The quick brown fox</p>
                <p className="text-xl font-medium">jumps over the lazy dog</p>
                <p className="text-sm text-muted-foreground">Weights: 400, 500, 600, 700, 800</p>
              </div>
            </div>

            <div className="card-brand">
              <h3 className="text-lg font-semibold mb-4 font-sans">Roboto - Body Text</h3>
              <div className="space-y-3 font-serif">
                <p className="text-2xl">Aa Bb Cc</p>
                <p className="text-lg">The quick brown fox jumps over the lazy dog.</p>
                <p className="text-base leading-relaxed">
                  CareTracker helps healthcare providers streamline their operations with intelligent automation and
                  seamless integrations.
                </p>
                <p className="text-sm text-muted-foreground font-sans">Weights: 300, 400, 500, 700</p>
              </div>
            </div>
          </div>

          <div className="card-brand">
            <h3 className="text-lg font-semibold mb-4">Type Scale</h3>
            <div className="space-y-4">
              <div>
                <span className="text-6xl font-bold">H1</span>{" "}
                <span className="text-muted-foreground ml-4">60px / Bold</span>
              </div>
              <div>
                <span className="text-5xl font-bold">H2</span>{" "}
                <span className="text-muted-foreground ml-4">48px / Bold</span>
              </div>
              <div>
                <span className="text-4xl font-semibold">H3</span>{" "}
                <span className="text-muted-foreground ml-4">36px / Semibold</span>
              </div>
              <div>
                <span className="text-3xl font-semibold">H4</span>{" "}
                <span className="text-muted-foreground ml-4">30px / Semibold</span>
              </div>
              <div>
                <span className="text-2xl font-medium">H5</span>{" "}
                <span className="text-muted-foreground ml-4">24px / Medium</span>
              </div>
              <div>
                <span className="text-xl font-medium">H6</span>{" "}
                <span className="text-muted-foreground ml-4">20px / Medium</span>
              </div>
              <div>
                <span className="text-base">Body</span>{" "}
                <span className="text-muted-foreground ml-4">16px / Regular</span>
              </div>
              <div>
                <span className="text-sm">Small</span>{" "}
                <span className="text-muted-foreground ml-4">14px / Regular</span>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Buttons</h2>

          <div className="card-brand space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn-primary">
                Primary Button
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-success">
                <Check className="w-4 h-4" />
                Success
              </button>
              <button className="btn-ghost">Ghost Button</button>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn-primary text-sm px-4 py-2">Small</button>
              <button className="btn-primary">Default</button>
              <button className="btn-primary text-lg px-8 py-4">Large</button>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn-primary rounded-full px-8">Rounded</button>
              <button className="btn-primary" disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
                Disabled
              </button>
              <button className="btn-primary">
                <Plus className="w-4 h-4" />
                With Icon
              </button>
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Form Inputs</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-brand space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Default Input</label>
                <input type="text" className="input-brand" placeholder="Enter text..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">With Icon</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input type="text" className="input-brand pl-10" placeholder="Search patients..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Textarea</label>
                <textarea className="input-brand min-h-[100px]" placeholder="Enter message..." />
              </div>
            </div>

            <div className="card-brand space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select</label>
                <select className="input-brand">
                  <option>Select an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Checkbox</label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded accent-[#0A8FDC]" />
                  <span>I agree to the terms</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Radio</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="plan" className="w-5 h-5 accent-[#0A8FDC]" />
                    <span>Basic Plan</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="plan" className="w-5 h-5 accent-[#0A8FDC]" />
                    <span>Professional Plan</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Cards & Surfaces</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-brand">
              <div className="icon-container mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Default Card</h3>
              <p className="text-muted-foreground text-sm">Standard card with subtle border and hover shadow effect.</p>
            </div>

            <div className="card-elevated">
              <div
                className="icon-container mb-4"
                style={{ backgroundColor: "var(--brand-secondary-light)", color: "var(--brand-secondary)" }}
              >
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
              <p className="text-muted-foreground text-sm">Card with prominent shadow for emphasis.</p>
            </div>

            <div className="section-pattern p-6 rounded-xl">
              <div className="card-glass">
                <div
                  className="icon-container-lg mb-4"
                  style={{ backgroundColor: "var(--brand-accent-light)", color: "var(--brand-accent)" }}
                >
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Glass Card</h3>
                <p className="text-muted-foreground text-sm">Glassmorphism effect with backdrop blur.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Badges & Status</h2>

          <div className="card-brand">
            <div className="flex flex-wrap gap-3">
              <span className="badge-primary">Primary</span>
              <span className="badge-success">
                <Check className="w-3 h-3 mr-1" /> Confirmed
              </span>
              <span className="badge-warning">
                <AlertTriangle className="w-3 h-3 mr-1" /> Pending
              </span>
              <span className="badge-error">
                <X className="w-3 h-3 mr-1" /> Cancelled
              </span>
              <span className="badge-info">
                <Info className="w-3 h-3 mr-1" /> Info
              </span>
            </div>
          </div>
        </section>

        {/* Elevation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Elevation / Shadows</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "sm", shadow: "var(--shadow-sm)" },
              { name: "md", shadow: "var(--shadow-md)" },
              { name: "lg", shadow: "var(--shadow-lg)" },
              { name: "xl", shadow: "var(--shadow-xl)" },
              { name: "2xl", shadow: "var(--shadow-2xl)" },
            ].map((item) => (
              <div key={item.name} className="bg-card p-6 rounded-xl text-center" style={{ boxShadow: item.shadow }}>
                <span className="font-semibold">Shadow {item.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Spacing Scale (8px base)</h2>

          <div className="card-brand overflow-x-auto">
            <div className="flex items-end gap-2 min-w-[600px]">
              {[
                { name: "1", size: 4 },
                { name: "2", size: 8 },
                { name: "3", size: 12 },
                { name: "4", size: 16 },
                { name: "5", size: 20 },
                { name: "6", size: 24 },
                { name: "8", size: 32 },
                { name: "10", size: 40 },
                { name: "12", size: 48 },
                { name: "16", size: 64 },
              ].map((item) => (
                <div key={item.name} className="flex flex-col items-center">
                  <div className="bg-[#0A8FDC] rounded" style={{ width: item.size, height: item.size }} />
                  <span className="text-xs text-muted-foreground mt-2">{item.name}</span>
                  <span className="text-xs text-muted-foreground">{item.size}px</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Illustrations Recommendation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Illustrations</h2>

          <div className="card-brand">
            <h3 className="text-lg font-semibold mb-4">Recommended Free Illustration Libraries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">unDraw</h4>
                <p className="text-sm text-muted-foreground">
                  undraw.co - Open source illustrations, customizable colors
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">Health Icons</h4>
                <p className="text-sm text-muted-foreground">
                  healthicons.org - Free medical icons by Resolve to Save Lives
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">Illustrations.co</h4>
                <p className="text-sm text-muted-foreground">Free illustration library with medical themes</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">Storyset by Freepik</h4>
                <p className="text-sm text-muted-foreground">storyset.com - Animated illustrations, medical category</p>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Variations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Logo Variations</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-brand flex items-center justify-center py-8">
              <CareTrackerLogo size="lg" variant="default" />
            </div>
            <div className="section-primary rounded-xl flex items-center justify-center py-8">
              <CareTrackerLogo size="lg" variant="white" />
            </div>
            <div className="card-brand flex items-center justify-center py-8">
              <CareTrackerLogo size="lg" showText={false} />
            </div>
            <div className="bg-slate-100 rounded-xl flex items-center justify-center py-8">
              <CareTrackerLogo size="sm" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ColorSwatch({ name, color, desc }: { name: string; color: string; desc: string }) {
  return (
    <div className="space-y-2">
      <div className="w-full h-20 rounded-lg shadow-inner" style={{ backgroundColor: color }} />
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
        <p className="text-xs font-mono text-muted-foreground">{color}</p>
      </div>
    </div>
  )
}
