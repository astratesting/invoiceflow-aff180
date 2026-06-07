import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <main className="min-h-screen bg-warm-off-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-display font-bold text-gradient">InvoiceFlow</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/auth/login" className="text-gray-600 hover:text-violet-600 font-medium">Sign In</a>
              <a href="/auth/signup" className="btn-primary">Get Started Free</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-coral-50 py-20 lg:py-32">
        <div className="absolute inset-0 lattice-bg opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              Stop Chasing<br />
              <span className="text-gradient">Get Paid Faster</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 font-sans">
              Automated collections with built-in negotiation. The only invoicing platform that lets clients request payment plans and discounts directly in their invoice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/auth/signup" className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </a>
              <a href="#demo" className="btn-outline text-lg px-8 py-4">
                See How It Works
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              The Collections Problem Is Solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Late payments cost freelancers and SMBs billions annually. InvoiceFlow automates follow-ups and empowers clients to negotiate, reducing DSO by up to 40%.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Behavior-Based Follow-Ups</h3>
              <p className="text-gray-600">
                Automatically send personalized reminders based on invoice views, due dates, and payment history. No manual chasing required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Negotiation Engine</h3>
              <p className="text-gray-600">
                Clients can request payment plans or early-payment discounts directly in their invoice. You approve or counter with one click.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-honey-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">DSO Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track days sales outstanding, collection rates, and cash flow projections. See exactly how much time and money InvoiceFlow saves you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">How InvoiceFlow Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Create & Send',
                description: 'Generate professional invoices and send them with a single click. Clients receive a branded payment portal.',
              },
              {
                step: '02',
                title: 'Automated Follow-Ups',
                description: 'Smart sequences trigger based on behavior—reminders before due, gentle nudges after, escalation when overdue.',
              },
              {
                step: '03',
                title: 'Client Negotiates',
                description: 'Clients can request payment plans or discounts directly. You get notified and can approve instantly.',
              },
              {
                step: '04',
                title: 'Get Paid Faster',
                description: 'Track everything in your dashboard. Watch DSO drop and cash flow improve in real-time.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-violet-600 text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Pay only for what you use. Scale as you grow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                invoices: 'Up to 50 invoices',
                features: ['5 active follow-up sequences', 'Basic analytics', 'Email support', 'Payment plan requests'],
                cta: 'Start Free Trial',
                highlighted: false,
              },
              {
                name: 'Professional',
                price: '$79',
                period: '/month',
                invoices: 'Up to 200 invoices',
                features: ['Unlimited sequences', 'Advanced analytics & DSO tracking', 'Priority support', 'Negotiation engine', 'Custom branding'],
                cta: 'Start Free Trial',
                highlighted: true,
              },
              {
                name: 'Business',
                price: '$199',
                period: '/month',
                invoices: 'Unlimited invoices',
                features: ['Everything in Professional', 'Team collaboration (5 users)', 'API access', 'Same-day payout financing', 'Dedicated account manager'],
                cta: 'Contact Sales',
                highlighted: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`card ${plan.highlighted ? 'ring-2 ring-violet-600 shadow-xl' : ''} relative`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-display font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.invoices}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/auth/signup"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-violet-600 hover:bg-violet-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Same-Day Payout Add-On */}
          <div className="mt-12 max-w-2xl mx-auto card bg-gradient-to-br from-honey-50 to-coral-50 border-honey-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-honey-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">⚡ Same-Day Payout Add-On</h3>
                <p className="text-gray-700 mb-2">
                  Get your money instantly for a small fee. No more waiting 2-5 business days for ACH transfers.
                </p>
                <p className="text-sm text-gray-600">+1.5% per instant payout • Available on Professional & Business plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Ready to Get Paid Faster?
          </h2>
          <p className="text-xl text-violet-100 mb-10">
            Join thousands of freelancers and SMBs who've reduced their DSO by an average of 35%.
          </p>
          <a href="/auth/signup" className="inline-block bg-white text-violet-600 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-violet-50 transition-colors">
            Start Your Free Trial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-display font-bold text-white">InvoiceFlow</span>
              <p className="mt-2 text-sm">Automated collections with negotiation.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © 2026 InvoiceFlow. All rights reserved. Warm Catalyst brand.
          </div>
        </div>
      </footer>
    </main>
  )
}
