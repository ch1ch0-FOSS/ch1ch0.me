import { useState } from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">ch1ch0</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/about" className="hover:text-blue-400">About</a>
            <a href="/services" className="text-blue-400">Services</a>
            <a href="/contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">Infrastructure Consulting</h1>
        <p className="text-xl text-slate-300 mb-8">
          Stop depending on GitHub, Google, and Microsoft. Run your data on hardware you control.
        </p>
        <p className="text-lg text-slate-400">
          I help teams and individuals set up <strong>self-hosted, production-grade infrastructure</strong> for collaboration, version control, and file management. Everything runs on your server. Everything stays yours.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">Three Service Tiers</h2>
        
        <div className="grid gap-8">
          {/* Service 1: Forgejo */}
          <div className="border border-slate-700 rounded-lg p-8 hover:border-blue-500 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Forgejo Git Server</h3>
                <p className="text-slate-400 mt-2">Self-hosted Git infrastructure that replaces GitHub.</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400">$5,000</div>
                <div className="text-sm text-slate-400">fixed + $300/mo</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Perfect for:</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>• Teams wanting version control without GitHub's lock-in</li>
                <li>• Organizations needing private git without corporate oversight</li>
                <li>• DevOps teams building internal CI/CD pipelines</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">What you get:</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>✓ Forgejo installation on your dedicated server</li>
                <li>✓ SSH key configuration + user management</li>
                <li>✓ Integration with Nextcloud and Ansible automation</li>
                <li>✓ Monthly monitoring + uptime guarantee (99.5%)</li>
                <li>✓ Runbook for your team</li>
                <li>✓ 24/7 emergency support (first 30 days included)</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-4 rounded">
              <p className="text-sm"><strong>Why:</strong> GitHub can change terms, suspend accounts, or lock you in. Forgejo runs on YOUR hardware. Your data stays in your country.</p>
            </div>
          </div>

          {/* Service 2: Nextcloud */}
          <div className="border border-slate-700 rounded-lg p-8 hover:border-blue-500 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Nextcloud Collaboration</h3>
                <p className="text-slate-400 mt-2">Self-hosted file sync, calendar, contacts, and team chat.</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400">$7,500</div>
                <div className="text-sm text-slate-400">fixed + $500/mo</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Perfect for:</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>• Remote teams needing file sharing without Dropbox</li>
                <li>• Companies handling sensitive data</li>
                <li>• Organizations wanting collaboration tools they control</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">What you get:</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>✓ Nextcloud installation + configuration</li>
                <li>✓ MariaDB database optimization</li>
                <li>✓ Automated daily backups with recovery verification</li>
                <li>✓ Integration with Forgejo git server</li>
                <li>✓ User management system (LDAP-ready)</li>
                <li>✓ Mobile app configuration for iOS/Android</li>
                <li>✓ Security hardening + SSL certificate setup</li>
                <li>✓ Monthly health checks + disaster recovery drills</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-4 rounded">
              <p className="text-sm"><strong>Why:</strong> Dropbox takes 30% cut and locks you in. Nextcloud costs a fraction and runs where YOU want it.</p>
            </div>
          </div>

          {/* Service 3: Full Stack */}
          <div className="border border-slate-700 rounded-lg p-8 hover:border-blue-500 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Full Stack (Everything)</h3>
                <p className="text-slate-400 mt-2">Complete corporate-independent infrastructure + architecture.</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-400">$15,000</div>
                <div className="text-sm text-slate-400">fixed + $800/mo</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Perfect for:</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>• Organizations serious about independence from Big Tech</li>
                <li>• Companies needing SOC 2 / compliance-ready infrastructure</li>
                <li>• Teams scaling from chaos to structure</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">What you get:</h4>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>✓ Forgejo (git) + Nextcloud (collaboration) + Traefik (reverse proxy) fully integrated</li>
                <li>✓ Ansible automation for reproducible deployments</li>
                <li>✓ 24/7 health monitoring with automated alerts</li>
                <li>✓ Automated backup verification (monthly recovery drills)</li>
                <li>✓ Security hardening + firewall configuration</li>
                <li>✓ Custom domain + SSL certificate management</li>
                <li>✓ Staging environment for safe testing</li>
                <li>✓ Weekly infrastructure reviews (first 90 days)</li>
                <li>✓ Runbook + team training</li>
                <li>✓ 30-day post-launch support + optimization</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-4 rounded">
              <p className="text-sm"><strong>Why:</strong> Most teams waste $50,000/year on SaaS tools. This stack costs $15k setup, $800/mo. Pays for itself in 2-3 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose Self-Hosted?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4">Metric</th>
                <th className="text-left py-3 px-4">SaaS</th>
                <th className="text-left py-3 px-4">Self-Hosted</th>
                <th className="text-left py-3 px-4">Winner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Monthly cost</td>
                <td className="py-3 px-4">$500-2,000</td>
                <td className="py-3 px-4">$300-800</td>
                <td className="py-3 px-4 text-green-400">Self-Hosted</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Your data location</td>
                <td className="py-3 px-4">Their servers</td>
                <td className="py-3 px-4">Your server</td>
                <td className="py-3 px-4 text-green-400">Self-Hosted</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Account suspension risk</td>
                <td className="py-3 px-4">High</td>
                <td className="py-3 px-4">Zero</td>
                <td className="py-3 px-4 text-green-400">Self-Hosted</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Vendor lock-in</td>
                <td className="py-3 px-4">Extreme</td>
                <td className="py-3 px-4">None</td>
                <td className="py-3 px-4 text-green-400">Self-Hosted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">How This Works</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-bold mb-2">Phase 1: Discovery (1-2 hours, free)</h3>
            <p className="text-slate-300">30-minute consultation call. You tell me your current tools + frustrations. I show you the exact infrastructure you'll get.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-bold mb-2">Phase 2: Setup (3-21 days)</h3>
            <p className="text-slate-300">I deploy everything on YOUR hardware. Full configuration + security hardening. You test in staging first.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-bold mb-2">Phase 3: Go Live + Support</h3>
            <p className="text-slate-300">We flip the switch together. 24/7 monitoring + automated alerts. Monthly health checks. Emergency support included (first 90 days).</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-blue-900/30 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg text-slate-300 mb-8">
          Schedule a free 30-minute consultation. No obligation. Just a conversation about your infrastructure.
        </p>
        
        <div className="space-y-4">
          <a 
            href="mailto:ch1ch0@duck.com?subject=Infrastructure%20Consultation&body=Hi%20ch1ch0,%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20infrastructure%20services.%0A%0APlease%20let%20me%20know%20your%20availability%20for%20a%20consultation%20call.%0A%0AThanks!"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            Schedule Consultation (Email)
          </a>
          <p className="text-slate-400">
            Email: <strong>ch1ch0@duck.com</strong>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        
        <div className="space-y-6">
          <details className="border border-slate-700 rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-lg">Will this work with my current hardware?</summary>
            <p className="text-slate-300 mt-4">Usually yes. If you have a Mac/Linux/Windows server or spare hardware, we can use that. If not, I can recommend affordable hosting ($10-30/mo).</p>
          </details>

          <details className="border border-slate-700 rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-lg">What if something breaks?</summary>
            <p className="text-slate-300 mt-4">I handle emergency fixes within 2 hours. All infrastructure is automated via Ansible playbooks—recovery is simple and fast.</p>
          </details>

          <details className="border border-slate-700 rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-lg">Can I add more services later?</summary>
            <p className="text-slate-300 mt-4">Absolutely. The base stack is modular. We can add monitoring, analytics, or custom apps later.</p>
          </details>

          <details className="border border-slate-700 rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-lg">What about backups?</summary>
            <p className="text-slate-300 mt-4">Automated hourly. I verify monthly that backups actually recover (not just stored). You get a recovery test report.</p>
          </details>

          <details className="border border-slate-700 rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-lg">Can I move away if I change my mind?</summary>
            <p className="text-slate-300 mt-4">Yes. Full Git history of all configuration, plus backups of all data. No lock-in.</p>
          </details>

          <details className="border border-slate-700 rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-lg">How long is setup?</summary>
            <p className="text-slate-300 mt-4">Forgejo: 3-5 days. Nextcloud: 5-7 days. Full stack: 2-3 weeks (depends on your hardware/complexity).</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 text-center text-slate-400">
        <p>Infrastructure as a service. On your terms.</p>
        <p className="text-sm mt-4">Last updated: November 1, 2025</p>
      </footer>
    </div>
  );
}
