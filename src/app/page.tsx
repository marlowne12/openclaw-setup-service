import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$500",
    description: "Perfect for individuals",
    popular: false,
    features: [
      "OpenClaw installation & gateway config",
      "1 messaging platform (Telegram or Discord)",
      "SOUL.md + MEMORY.md (basic persona)",
      "5 essential skills installed",
      "2 API integrations",
      "30-minute training call",
      "7-day email support",
      "24-hour setup",
    ],
    notIncluded: [
      "Cron job automation",
      "Custom skill development",
      "Advanced persona design",
    ],
    cta: "Get Starter",
    href: "#intake",
  },
  {
    name: "Pro",
    price: "$1,000",
    description: "Perfect for power users & agencies",
    popular: true,
    features: [
      "OpenClaw installation & gateway config",
      "Up to 3 messaging platforms",
      "SOUL.md + MEMORY.md (advanced persona design)",
      "10+ industry-specific skills",
      "1 custom skill built for you",
      "3 automated cron jobs configured",
      "5+ API integrations",
      "60-minute training call + recording",
      "30-day email support",
      "48-hour setup",
    ],
    notIncluded: [],
    cta: "Go Pro",
    href: "#intake",
  },
];

const steps = [
  {
    num: "01",
    title: "Fill Out the Form",
    time: "5 minutes",
    desc: "Tell us your OS, preferred channels, tasks to automate, and industry. We handle the rest.",
  },
  {
    num: "02",
    title: "We Build Your Setup",
    time: "24–48 hours",
    desc: "Install OpenClaw, configure your gateway, write your SOUL.md, install vetted skills, and test everything.",
  },
  {
    num: "03",
    title: "You Connect Accounts",
    time: "15 minutes",
    desc: "Follow our simple guide to connect Telegram, Discord, or your preferred channels.",
  },
  {
    num: "04",
    title: "Training Call + Handoff",
    time: "30–60 minutes",
    desc: "Screen share walkthrough. Learn to add skills, run commands, and customize. You're live.",
  },
];

const faqs = [
  {
    q: "How is this different from setting it up myself?",
    a: "You save 10–20 hours of frustration. We know which skills are safe (no malware), which configs actually work, and how to set up a production-grade AI assistant — not a half-finished experiment.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. If you can use Telegram or Discord, you're good. We handle all the Node.js, API keys, and config files.",
  },
  {
    q: "What if I get stuck after setup?",
    a: "Starter includes 7 days of email support. Pro includes 30 days. We help you troubleshoot and customize until you're confident.",
  },
  {
    q: "Can I add more skills later?",
    a: "Absolutely. We teach you how on the training call. You own the setup — full control, forever.",
  },
  {
    q: "Is my data safe?",
    a: "Your OpenClaw instance runs on YOUR machine. We never see your messages or data. We configure it, you control it.",
  },
  {
    q: "What platforms do you support?",
    a: "Channels: Telegram, Discord, WhatsApp, SMS, email. OS: Windows, Mac, Linux.",
  },
  {
    q: "What if I want custom features?",
    a: "Pro tier includes 1 custom skill. Additional development is available — just ask for a quote.",
  },
  {
    q: "Refund policy?",
    a: "If we don't deliver a working setup in the promised timeframe, full refund. No questions asked.",
  },
];

const personas = [
  {
    icon: "🚀",
    title: "Solopreneurs",
    desc: "Running a business solo. Need automation but not a developer. Want AI help without the setup headache.",
  },
  {
    icon: "⚡",
    title: "Developers",
    desc: "You know you could DIY — but you'd rather pay to skip the setup grind and focus on building.",
  },
  {
    icon: "🏢",
    title: "Agencies",
    desc: "Want to offer AI employees to clients. Need a proven, working setup to clone and white-label.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-gray-100">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-cyan-400">Max</span>Setup
          </span>
          <a
            href="#intake"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Now accepting clients
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Get Your AI Employee
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Set Up in 24 Hours
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Professional OpenClaw configuration. Skip the tech headaches.
            Start automating today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#pricing"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-colors"
            >
              View Pricing →
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-gray-300 font-medium text-lg transition-colors"
            >
              How It Works
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "⚡", label: "24-hour setup" },
              { icon: "🎯", label: "Custom-configured" },
              { icon: "🔒", label: "Vetted, safe skills" },
              { icon: "✅", label: "Support included" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            OpenClaw Is Powerful.{" "}
            <span className="text-gray-500">Setup Is Not.</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
            You want an AI assistant, not a part-time tech job.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔧",
                title: "Complex Installation",
                desc: "Node.js, gateway configs, channel APIs, environment variables. Hours of debugging before you send your first message.",
              },
              {
                icon: "🌊",
                title: "Overwhelming Options",
                desc: "2,857+ skills on ClawHub. Which ones do you actually need? Which ones are safe? Nobody tells you.",
              },
              {
                icon: "🛡️",
                title: "Security Concerns",
                desc: "Malicious skills, CVE exploits, and no easy way to vet what you're installing on your machine.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-[#1e293b] border border-white/5"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            From Zero to AI Employee in{" "}
            <span className="text-cyan-400">4 Steps</span>
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-14">
            We do the hard part. You get the results.
          </p>
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-6 p-6 rounded-2xl bg-[#1e293b]/50 border border-white/5"
              >
                <div className="text-3xl font-bold text-cyan-500/30 shrink-0">
                  {step.num}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Perfect For...
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-[#1e293b] border border-white/5 text-center"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Setup
          </h2>
          <p className="text-gray-400 text-center mb-14">
            Money-back guarantee: if we don&apos;t deliver, full refund.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular
                    ? "bg-gradient-to-b from-cyan-500/5 to-purple-500/5 border-cyan-500/30"
                    : "bg-[#1e293b] border-white/5"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500 text-black">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{tier.description}</p>
                <div className="text-4xl font-bold mb-6">
                  {tier.price}
                  <span className="text-base font-normal text-gray-500">
                    {" "}
                    one-time
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <span className="text-cyan-400 shrink-0">✓</span>
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <span className="text-gray-600 shrink-0">✗</span>
                      <span className="text-gray-500">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className={`block text-center py-3 rounded-xl font-bold transition-colors ${
                    tier.popular
                      ? "bg-cyan-500 hover:bg-cyan-400 text-black"
                      : "bg-white/5 hover:bg-white/10 text-gray-300"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built By People Who{" "}
            <span className="text-cyan-400">Actually Use This</span>
          </h2>
          <p className="text-gray-400 mb-10">
            Not a course. Not a guru. Just people who build this stuff daily.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "35+", label: "Skills in production" },
              { val: "9", label: "Cron agents running 24/7" },
              { val: "24h", label: "Average setup time" },
              { val: "100%", label: "Money-back guarantee" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-cyan-400">{s.val}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group p-6 rounded-2xl bg-[#1e293b] border border-white/5"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none font-semibold">
                  {faq.q}
                  <span className="text-gray-500 group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section id="intake" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Fill out the form below and we&apos;ll get your AI employee set up.
          </p>
          <form
            action="/api/setup-service/submit"
            method="POST"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Business / Use Case
              </label>
              <input
                type="text"
                name="business"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                placeholder="e.g., Marketing agency, freelance developer, HVAC company"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Operating System
                </label>
                <select
                  name="os"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="">Select OS</option>
                  <option value="windows">Windows</option>
                  <option value="mac">Mac</option>
                  <option value="linux">Linux</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  name="industry"
                  className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="">Select industry</option>
                  <option value="agency">Marketing Agency</option>
                  <option value="saas">SaaS / Software</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="freelance">Freelance / Consulting</option>
                  <option value="local-service">Local Service Business</option>
                  <option value="content">Content / Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Channels
              </label>
              <div className="flex flex-wrap gap-4">
                {["Telegram", "Discord", "WhatsApp", "Email", "SMS"].map(
                  (ch) => (
                    <label
                      key={ch}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <input
                        type="checkbox"
                        name="channels"
                        value={ch.toLowerCase()}
                        className="rounded bg-[#1e293b] border-white/10 text-cyan-500 focus:ring-cyan-500"
                      />
                      {ch}
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                What tasks do you want automated?
              </label>
              <textarea
                name="tasks"
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                placeholder="e.g., Email management, scheduling, lead research, content writing, code review..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Choose Your Tier
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-4 rounded-xl bg-[#1e293b] border border-white/10 cursor-pointer hover:border-white/20 has-[:checked]:border-cyan-500">
                  <input
                    type="radio"
                    name="tier"
                    value="starter"
                    required
                    className="text-cyan-500 focus:ring-cyan-500"
                  />
                  <div>
                    <div className="font-semibold">Starter — $500</div>
                    <div className="text-xs text-gray-400">
                      1 platform, 5 skills, 24h setup
                    </div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-xl bg-[#1e293b] border border-white/10 cursor-pointer hover:border-white/20 has-[:checked]:border-cyan-500">
                  <input
                    type="radio"
                    name="tier"
                    value="pro"
                    className="text-cyan-500 focus:ring-cyan-500"
                  />
                  <div>
                    <div className="font-semibold">Pro — $1,000</div>
                    <div className="text-xs text-gray-400">
                      3 platforms, 10+ skills, custom skill
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How did you hear about us?{" "}
                <span className="text-gray-500">(optional)</span>
              </label>
              <input
                type="text"
                name="referral"
                className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                placeholder="e.g., Reddit, Twitter, friend, Google search"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-colors"
            >
              Submit & Continue to Payment →
            </button>
            <p className="text-center text-xs text-gray-500">
              You&apos;ll be redirected to Stripe for secure payment.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Configuring.{" "}
            <span className="text-cyan-400">Start Automating.</span>
          </h2>
          <p className="text-gray-400 mb-8">
            24 hours from now, you could have an AI assistant handling your
            busywork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#intake"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-colors"
            >
              Get Started — $500
            </a>
            <a
              href="#intake"
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg transition-colors"
            >
              Go Pro — $1,000
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-500">
            © 2026 MaxSetup. Built by Max, an AI CEO.
          </span>
          <span className="text-sm text-gray-500">
            Questions? Email us — response time under 4 hours.
          </span>
        </div>
      </footer>
    </main>
  );
}
