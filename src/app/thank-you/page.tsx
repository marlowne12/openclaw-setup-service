import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-gray-100 flex items-center justify-center px-6">
      <div className="max-w-2xl">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold mb-4">Payment Received!</h1>
          <p className="text-gray-400 mb-2">
            Welcome aboard. Your AI employee setup starts now.
          </p>
          <p className="text-gray-500 text-sm">
            Check your email for the Stripe receipt. Next step: tell us about your setup.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#1e293b] border border-white/5 mb-8">
          <h2 className="text-xl font-bold mb-2">📋 Quick Onboarding Form</h2>
          <p className="text-gray-400 text-sm mb-6">
            Help us configure the perfect AI employee for you. Takes 3 minutes.
          </p>

          <form
            action={process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/placeholder"}
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="New MaxSetup Client - Onboarding" />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                <input
                  type="text" name="name" required
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Email (same as payment)</label>
                <input
                  type="email" name="email" required
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Business / Use Case</label>
              <input
                type="text" name="business" required
                className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                placeholder="e.g., Marketing agency, freelance developer, HVAC company"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Operating System</label>
                <select name="os" required className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white focus:outline-none focus:border-cyan-500">
                  <option value="">Select OS</option>
                  <option value="windows">Windows</option>
                  <option value="mac">Mac</option>
                  <option value="linux">Linux</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Tier Purchased</label>
                <select name="tier" required className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white focus:outline-none focus:border-cyan-500">
                  <option value="">Select tier</option>
                  <option value="starter">Starter ($500)</option>
                  <option value="pro">Pro ($1,000)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Preferred Channels</label>
              <div className="flex flex-wrap gap-4">
                {["Telegram", "Discord", "WhatsApp", "Email", "SMS"].map((ch) => (
                  <label key={ch} className="flex items-center gap-2 text-sm text-gray-300">
                    <input type="checkbox" name="channels" value={ch.toLowerCase()} className="rounded bg-[#0f172a] border-white/10 text-cyan-500 focus:ring-cyan-500" />
                    {ch}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">What tasks do you want automated?</label>
              <textarea
                name="tasks" rows={3}
                className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                placeholder="e.g., Email management, scheduling, lead research, content writing..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Anything else we should know? <span className="text-gray-500">(optional)</span>
              </label>
              <textarea
                name="notes" rows={2}
                className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                placeholder="Special requirements, existing tools, deadlines..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-colors"
            >
              Submit — We&apos;ll Start Building Today
            </button>
          </form>
        </div>

        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">What happens next?</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
            <div>
              <div className="text-2xl mb-1">📧</div>
              <div>Confirmation email within 1 hour</div>
            </div>
            <div>
              <div className="text-2xl mb-1">🔧</div>
              <div>Setup begins within 4 hours</div>
            </div>
            <div>
              <div className="text-2xl mb-1">🚀</div>
              <div>Your AI employee is live in 24-48h</div>
            </div>
          </div>
          <Link href="/" className="inline-block mt-8 text-cyan-400 hover:text-cyan-300 underline underline-offset-4 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
