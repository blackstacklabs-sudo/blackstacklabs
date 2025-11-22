import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Cpu, Shield, Layers } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-black" />
          <div className="absolute top-0 -right-1/4 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 -left-1/4 w-96 h-96 bg-pink-800 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-40 md:pt-48">
          <div className="text-center">
            <Badge variant="outline" className="mb-8 border-purple-800 text-purple-300 bg-purple-950/30 backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Launching Early 2026
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-gray-100 via-white to-gray-400 bg-clip-text text-transparent">
                Blackstack
              </span>
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Labs
              </span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The next generation of AI-first productivity apps.<br className="hidden md:block" />
              Native. Private. Beautifully crafted for Apple silicon.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium text-lg px-8 h-14 shadow-xl">
                Get Early Access <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-950 hover:border-gray-500 text-lg px-8 h-14 transition-all">
                Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-32 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { icon: Cpu, title: "On-Device AI", desc: "Runs locally on Apple silicon. Zero cloud dependency." },
            { icon: Shield, title: "Privacy by Design", desc: "No accounts. No analytics. Your data never leaves your device." },
            { icon: Layers, title: "Deep Integration", desc: "Built with App Intents, Shortcuts, Widgets, and Live Activities." },
          ].map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-zinc-950/50 border border-zinc-900 hover:border-purple-900/50 transition-all duration-500">
              <f.icon className="w-12 h-12 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-zinc-900 text-center text-gray-500 text-sm">
        © 2025 Blackstack Labs LLC. Built in California.
      </footer>
    </div>
  )
}
