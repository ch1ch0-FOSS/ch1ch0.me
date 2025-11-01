import React from 'react';

export default function InfrastructurePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Infrastructure Overview</h1>
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        Complete self-hosted infrastructure on Fedora Asahi M1, demonstrating production-grade 
        Linux administration, security hardening, and DevOps practices.
      </p>

      {/* System Architecture */}
      <section className="mb-12 pb-8 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">System Architecture</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6 overflow-x-auto">
          <pre className="font-mono text-sm text-gray-800 leading-relaxed">{`
┌─────────────────────────────────────────────────────────────┐
│                  Apple Silicon M1 Mac Mini                   │
│          Fedora Asahi Remix 42 (Linux Kernel 6.16+)         │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    ┌───▼────┐    ┌────▼────┐    ┌────▼────┐
    │ Forgejo│    │Nextcloud│    │ MariaDB │
    │ (Git)  │    │ (Sync)  │    │(Database)│
    │ :2222  │    │ :443    │    │ :3306   │
    └───┬────┘    └────┬────┘    └────┬────┘
        │              │              │
        └──────────────┬──────────────┘
                       │
        ┌──────────────▼──────────────┐
        │   GitHub Mirror (Public)    │
        │  ch1ch0-FOSS Organization   │
        └──────────────┬──────────────┘
                       │
        ┌──────────────▼──────────────┐
        │   Vercel (Production)       │
        │  https://www.ch1ch0.me      │
        │  Auto-deploy on push        │
        └─────────────────────────────┘
          `}</pre>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <h3 className="font-bold text-green-900 mb-2">What This Shows:</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Local Primary:</strong> Forgejo hosts all code locally (source of truth)</li>
            <li><strong>GitHub Mirror:</strong> Public mirror for visibility and backup</li>
            <li><strong>CI/CD Pipeline:</strong> Push to Forgejo → auto-sync to GitHub → Vercel deploys</li>
            <li><strong>Data Sovereignty:</strong> Full audit trail stays on M1 server</li>
          </ul>
        </div>
      </section>

      {/* Security Zones */}
      <section className="mb-12 pb-8 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Service Communication & Security</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6 overflow-x-auto">
          <pre className="font-mono text-sm text-gray-800 leading-relaxed">{`
┌─────────────────────────────────────────────────────┐
│                   SELinux Enforcing                  │
│              Firewall Rules Active                   │
└─────────────────────────────────────────────────────┘
                         │
     ┌───────────────────┼───────────────────┐
     │                   │                   │
┌────▼────┐         ┌────▼────┐        ┌────▼────┐
│SSH Keys  │         │Forgejo  │        │Nextcloud│
│Only (22) │         │SSH (2222)│       │HTTPS(443)│
│          │         │API      │        │         │
└────┬─────┘         └────┬────┘        └────┬────┘
     │                    │                  │
     └────────────┬───────┴──────────────────┘
                  │
            ┌─────▼──────┐
            │ MariaDB    │
            │ Localhost  │
            │ :3306      │
            │ (no remote)│
            └────────────┘

✓ Key-based SSH only (no passwords)
✓ Each service in isolated container/user
✓ MariaDB only accessible locally (zero external exposure)
✓ Firewall: default deny, explicit allow only
          `}</pre>
        </div>
      </section>

      {/* Production Standards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Production Standards I Implement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">🔒 Security</h3>
            <ul className="space-y-2 text-sm">
              <li>SELinux enforcing (kernel-level access control)</li>
              <li>SSH key-based authentication only</li>
              <li>Firewall: default deny policy</li>
              <li>MariaDB: local-only access</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">💾 Backup & Recovery</h3>
            <ul className="space-y-2 text-sm">
              <li>3-2-1 backup strategy (tested monthly)</li>
              <li>Automated daily backups with timestamps</li>
              <li>Disaster recovery runbook (audit-ready)</li>
              <li>Reproducible restore procedures</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">⚙️ Operations</h3>
            <ul className="space-y-2 text-sm">
              <li>Systemd hardening (security sandboxing)</li>
              <li>Service monitoring & health checks</li>
              <li>Comprehensive runbook for daily/weekly/monthly tasks</li>
              <li>Full audit trail via git version control</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">📝 Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>Reproducible system setup (infrastructure-as-code)</li>
              <li>Version-controlled configuration</li>
              <li>Checkpoint-based change tracking</li>
              <li>Public portfolio + private audit trail</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-12 pb-8 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'OS', value: 'Fedora Asahi Remix 42' },
            { label: 'Platform', value: 'Apple Silicon M1 (ARM64)' },
            { label: 'Services', value: 'Forgejo, Nextcloud, MariaDB' },
            { label: 'Automation', value: 'Systemd, bash scripts, cron' },
            { label: 'Security', value: 'SELinux (enforcing), firewalld, SSH keys' },
            { label: 'Backup', value: 'rsync, automated snapshots, 3-2-1 strategy' },
            { label: 'Version Control', value: 'Forgejo (local-first), GitHub (mirror)' },
            { label: 'Deployment', value: 'Vercel, auto-deploy on push' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded border-l-4 border-indigo-600">
              <strong className="text-gray-700">{item.label}:</strong> <span className="text-gray-600">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation Links */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Public Documentation</h2>
        <div className="space-y-4">
          <a href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi" target="_blank" rel="noopener noreferrer" className="block bg-blue-50 hover:bg-blue-100 border-l-4 border-indigo-600 p-5 rounded transition-all">
            <strong className="text-indigo-700 text-lg block mb-1">Full Infrastructure Repo</strong>
            <p className="text-gray-600 text-sm">Complete system documentation, setup scripts, and runbooks</p>
          </a>
          <a href="https://github.com/ch1ch0-FOSS/sysadmin-toolkit" target="_blank" rel="noopener noreferrer" className="block bg-blue-50 hover:bg-blue-100 border-l-4 border-indigo-600 p-5 rounded transition-all">
            <strong className="text-indigo-700 text-lg block mb-1">Sysadmin Toolkit</strong>
            <p className="text-gray-600 text-sm">Scripts, templates, and automation tools</p>
          </a>
          <a href="https://github.com/ch1ch0-FOSS/sysadmin-config" target="_blank" rel="noopener noreferrer" className="block bg-blue-50 hover:bg-blue-100 border-l-4 border-indigo-600 p-5 rounded transition-all">
            <strong className="text-indigo-700 text-lg block mb-1">System Configuration</strong>
            <p className="text-gray-600 text-sm">Dotfiles and reproducible configuration management</p>
          </a>
        </div>
      </section>
    </div>
  );
}
