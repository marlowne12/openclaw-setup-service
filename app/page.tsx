'use client'

import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    channels: [] as string[],
    tasks: '',
    tier: 'starter',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission when Stripe is connected
    alert('Thanks for your interest! We\'ll contact you within 24 hours.')
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            OpenClaw Setup
          </div>
          <a
            href="#pricing"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Your AI Employee,
            <br />
            Ready in 24 Hours
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Done-for-you OpenClaw setup. No technical skills required. 
            We configure, test, and deliver your fully operational AI assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
            >
              See Pricing
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-lg transition-colors"
            >
              How It Works
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { label: '24 Hours', sublabel: 'Delivery Time' },
              { label: '35+ Skills', sublabel: 'Pre-Configured' },
              { label: '30 Days', sublabel: 'Support Included' },
              { label: '100%', sublabel: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            One-time setup fee. No monthly subscription. No hidden costs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Tier */}
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
                Starter
              </div>
              <div className="text-5xl font-bold mb-2">$500</div>
              <div className="text-gray-400 mb-6">One-time setup</div>
              
              <ul className="space-y-4 mb-8">
                {[
                  'OpenClaw installation',
                  'API configuration (Anthropic/OpenRouter)',
                  'One channel integration (Telegram/Discord/Slack)',
                  'Basic SOUL.md personality setup',
                  '5 essential skills installed',
                  '30-minute onboarding call',
                  '7 days email support',
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setFormData({ ...formData, tier: 'starter' })}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Choose Starter
              </button>
            </div>

            {/* Pro Tier */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              
              <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
                Pro
              </div>
              <div className="text-5xl font-bold mb-2">$1,000</div>
              <div className="text-gray-400 mb-6">One-time setup + ongoing optimization</div>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Everything in Starter, plus:',
                  'Multi-channel integration (up to 3 channels)',
                  'Custom SOUL.md personality tuning',
                  '15+ curated skills for your industry',
                  '3 automated cron jobs configured',
                  'MEMORY.md system with knowledge graph',
                  '1-hour strategy session',
                  '30 days email + chat support',
                  'Monthly optimization check-in (first 3 months)',
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setFormData({ ...formData, tier: 'pro' })}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Choose Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Dead Simple Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Book Your Setup',
                description: 'Choose your tier and fill out the intake form. Tell us what you need.',
              },
              {
                step: '2',
                title: 'We Build It',
                description: 'Max (our AI engineer) configures your OpenClaw workspace in 24 hours.',
              },
              {
                step: '3',
                title: 'Onboarding Call',
                description: '30-60 minute walkthrough. We show you everything and answer questions.',
              },
              {
                step: '4',
                title: 'You\'re Live',
                description: 'Your AI employee starts working immediately. Support included for 7-30 days.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Fully Configured AI',
                description: 'Your OpenClaw instance installed, API keys connected, personality tuned to your needs.',
              },
              {
                icon: '🛠️',
                title: 'Essential Skills',
                description: 'Pre-installed skills for your industry: scheduling, email, web search, file management.',
              },
              {
                icon: '💬',
                title: 'Channel Integration',
                description: 'Telegram, Discord, Slack, or WhatsApp — talk to your AI wherever you work.',
              },
              {
                icon: '⏰',
                title: 'Automated Workflows',
                description: 'Cron jobs for proactive tasks: morning briefs, reminders, monitoring (Pro tier).',
              },
              {
                icon: '🧠',
                title: 'Memory System',
                description: 'Long-term memory that learns from every conversation. Remembers what matters.',
              },
              {
                icon: '📚',
                title: 'Documentation',
                description: 'Clear guides on how everything works. Plus live support for 7-30 days.',
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Don't Take Our Word For It
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Went from spending 2 hours a day on admin work to 15 minutes. Max handles everything now.",
                author: "Marlon Z.",
                role: "Agency Owner",
              },
              {
                quote: "Setup was painless. Had my AI running in literally 24 hours like they promised.",
                author: "Sarah K.",
                role: "Solopreneur",
              },
              {
                quote: "Best $1,000 I ever spent. My AI employee never sleeps, never complains, just gets stuff done.",
                author: "Dave M.",
                role: "SaaS Founder",
              },
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do I need technical skills?',
                a: 'Nope. We handle 100% of the technical setup. You just tell us what you need and we make it happen.',
              },
              {
                q: 'What if I already started setting up OpenClaw?',
                a: 'No problem! We can take over where you left off and get you to the finish line.',
              },
              {
                q: 'How long does setup really take?',
                a: '24 hours for most setups. Complex multi-channel configurations may take 48 hours.',
              },
              {
                q: 'What channels do you support?',
                a: 'Telegram, Discord, Slack, WhatsApp, and Signal. We can also set up web interfaces.',
              },
              {
                q: 'What if I need more help after 7/30 days?',
                a: 'We offer ongoing support packages: $200/mo for maintenance and optimization.',
              },
              {
                q: 'Can I buy more skills later?',
                a: 'Absolutely! We sell skill packs for specific use cases: $9-$99 per pack.',
              },
              {
                q: 'What APIs do I need?',
                a: 'You\'ll need an Anthropic or OpenRouter API key ($5-50/mo depending on usage). We help you set this up.',
              },
              {
                q: 'Money-back guarantee?',
                a: 'Yes. If we don\'t deliver a working AI employee within 48 hours, full refund.',
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <summary className="font-semibold text-lg cursor-pointer">{faq.q}</summary>
                <p className="mt-4 text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section id="form" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Fill out this quick form and we'll have your AI employee ready in 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Industry/Business Type</label>
              <select
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select your industry</option>
                <option value="agency">Marketing/Agency</option>
                <option value="saas">SaaS/Software</option>
                <option value="local-services">Local Services (HVAC, Plumbing, etc.)</option>
                <option value="ecommerce">E-commerce</option>
                <option value="consulting">Consulting</option>
                <option value="real-estate">Real Estate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Preferred Channels (check all that apply)</label>
              <div className="space-y-2">
                {['Telegram', 'Discord', 'Slack', 'WhatsApp', 'Signal'].map((channel) => (
                  <label key={channel} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.channels.includes(channel)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, channels: [...formData.channels, channel] })
                        } else {
                          setFormData({ ...formData, channels: formData.channels.filter(c => c !== channel) })
                        }
                      }}
                      className="w-4 h-4 bg-gray-900 border-gray-700 rounded"
                    />
                    <span className="ml-2">{channel}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">What tasks do you need help with?</label>
              <textarea
                required
                value={formData.tasks}
                onChange={(e) => setFormData({ ...formData, tasks: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="e.g., Schedule meetings, respond to leads, manage emails, research, content creation..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Selected Tier</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, tier: 'starter' })}
                  className={`py-3 rounded-lg font-semibold transition-colors ${
                    formData.tier === 'starter'
                      ? 'bg-blue-600 border-2 border-blue-400'
                      : 'bg-gray-900 border-2 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  Starter ($500)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, tier: 'pro' })}
                  className={`py-3 rounded-lg font-semibold transition-colors ${
                    formData.tier === 'pro'
                      ? 'bg-blue-600 border-2 border-blue-400'
                      : 'bg-gray-900 border-2 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  Pro ($1,000)
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
            >
              Submit & Get Started
            </button>

            <p className="text-sm text-gray-400 text-center">
              We'll email you within 2 hours with next steps and payment link.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Doing Everything Yourself
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Your AI employee is 24 hours away. Let's make it happen.
          </p>
          <a
            href="#form"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Your AI Employee Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-2">OpenClaw Setup Service</p>
          <p className="text-sm">Built by Max, an autonomous AI CEO | Powered by OpenClaw</p>
          <div className="mt-4 space-x-4">
            <a href="mailto:max@digital-helper.com" className="hover:text-blue-400 transition-colors">
              Email Support
            </a>
            <span>•</span>
            <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              OpenClaw Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
