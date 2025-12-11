// Versão sem animações para funcionar no Next.js 14
export default function AppleStylePage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Top global bar */}
      <div className="w-full bg-neutral-100 text-neutral-700 text-xs sm:text-[13px] py-2 text-center">
        Now consulting in Portugal • Limited openings for Q4 — <a className="underline hover:no-underline" href="#contact">Get in touch</a>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
          <a href="#home" className="font-semibold tracking-tight text-xl">oziel.</a>
          <ul className="hidden md:flex gap-6 text-sm text-neutral-700">
            <li><a className="hover:text-black" href="#work">Work</a></li>
            <li><a className="hover:text-black" href="#services">Services</a></li>
            <li><a className="hover:text-black" href="#articles">Articles</a></li>
            <li><a className="hover:text-black" href="#about">About</a></li>
          </ul>
          <a href="#contact" className="text-sm rounded-full px-4 py-1.5 bg-black text-white hover:bg-neutral-900">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32">
          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight font-semibold opacity-0 animate-fade-in">
            Elegantly engineered platforms.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl opacity-0 animate-fade-in-delay-1">
            I build developer platforms and production-grade Kubernetes on AWS/GCP. Secure, observable, and designed with taste.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-2">
            <a href="#contact" className="rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-neutral-900">Start a project</a>
            <a href="#work" className="rounded-full border border-neutral-200 px-6 py-3 text-sm hover:bg-neutral-100">See the work</a>
          </div>
        </div>

        {/* Minimal device mock */}
        <div className="relative max-w-6xl mx-auto px-4 pb-24">
          <div className="aspect-[16/9] rounded-[2rem] border border-neutral-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="h-7 bg-neutral-100 flex items-center justify-center border-b border-neutral-200">
              <div className="w-24 h-1.5 bg-neutral-300 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
                <h3 className="text-2xl font-semibold tracking-tight">Platform, refined.</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Golden paths, GitOps, and secure defaults. Shipping faster shouldn't mean breaking more.
                </p>
                <ul className="text-sm text-neutral-700 space-y-2 list-disc pl-5">
                  <li>Kubernetes, Karpenter, KEDA</li>
                  <li>Observability with OpenTelemetry, Tempo, Loki, GMP</li>
                  <li>Zero-trust networking with Cloudflare / Tailscale</li>
                </ul>
              </div>
              <div className="relative bg-gradient-to-br from-neutral-50 to-white">
                <GridArt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {/* <section id="services" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Services</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl">From foundations to finely tuned platforms.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Platform Architecture", copy: "Blueprints, security, network, and org guardrails.", items: ["AWS / GCP", "Multi‑account", "Zero‑trust" ]},
              { title: "Kubernetes Engineering", copy: "Production‑grade clusters with GitOps automation.", items: ["EKS / GKE", "Karpenter & KEDA", "Policy as code"]},
              { title: "Observability", copy: "Traces, logs, and metrics you can trust.", items: ["OpenTelemetry", "Tempo / Loki / GMP", "SLOs & alerting"]},
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-neutral-200 p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.copy}</p>
                <ul className="mt-4 text-sm text-neutral-700 space-y-2 list-disc pl-5">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Articles strip */}
      <section id="articles" className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Latest writing</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <a key={i} href="#" className="group rounded-3xl bg-white border border-neutral-200 p-6 hover:shadow-md">
                <div className="aspect-[16/9] rounded-2xl bg-neutral-100 border border-neutral-200" />
                <h3 className="mt-4 text-xl font-semibold group-hover:underline">Designing golden paths for Kubernetes</h3>
                <p className="mt-2 text-neutral-600 text-sm">What to automate, what to standardize, and where to leave room for teams to innovate.</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src="/profile.jpg" 
              alt="Oziel" 
              className="w-32 h-34 rounded-full mx-auto object-cover border-4 border-neutral-100 shadow-lg"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Hi, I'm Oziel.</h2>
          <p className="mt-4 text-neutral-600 text-lg"> Senior DevOps Engineer focused on platform engineering, cloud infrastructure, 
      and enabling teams to ship faster with confidence.</p>
          <p className="mt-2 text-neutral-500 text-sm">Experience at Huawei, Azion, TV Globo, and JP Morgan.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight font-semibold mb-6">
              Let's build something great.
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12">
              Tell me about your goals. I'll reply within 1–2 business days.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:oziel@example.com" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                Send Email
              </a>
              <div className="text-gray-400 text-sm">
                or reach out on{" "}
                <a href="https://linkedin.com/in/oziels" className="underline hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer fine print */}
      <footer className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-10 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Oziel. All rights reserved.</p>
          <p className="mt-2">Made with care. No dark patterns. No trackers by default.</p>
        </div>
      </footer>
    </div>
  );
}

function Panel({ title, subtitle, cta, href, light = false, children }: any) {
  return (
    <a href={href} className={`group rounded-3xl border p-6 md:p-8 ${light ? "bg-white border-neutral-200 text-black" : "bg-neutral-900 border-neutral-800 text-white"}`}>
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className={`mt-1 ${light ? "text-neutral-600" : "text-neutral-300"}`}>{subtitle}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs border ${light ? "border-neutral-300 text-neutral-700 group-hover:bg-neutral-100" : "border-neutral-700 text-neutral-200 group-hover:bg-neutral-800"}`}>{cta}</span>
      </div>
      <div className="mt-6">
        {children}
      </div>
    </a>
  );
}

function DeviceCard({ label, children, light = false }: any) {
  return (
    <div className={`rounded-2xl border ${light ? "border-neutral-200 bg-white" : "border-neutral-800 bg-black"} p-4`}> 
      <div className={`h-6 rounded-md ${light ? "bg-neutral-100 border border-neutral-200" : "bg-neutral-900"} mb-3 flex items-center justify-center`}>
        <div className={`w-10 h-1.5 ${light ? "bg-neutral-300" : "bg-neutral-700"} rounded-full`} />
      </div>
      <div className={`text-[10px] uppercase tracking-wide ${light ? "text-neutral-500" : "text-neutral-400"}`}>{label}</div>
      <div className="mt-2">
        {children}
      </div>
    </div>
  )
}

function Dot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
}

function GridArt() {
  return (
    <div className="absolute inset-0 p-6 md:p-10">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-3">
        {Array.from({ length: 72 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-lg border border-neutral-200 bg-white" />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(transparent,black_75%)]" />
    </div>
  );
}