import Link from "next/link";
import { ArrowRight, Check, Github, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShipLog
            </span>
          </div>
          <Link 
            href="/dashboard"
            className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors text-sm font-medium"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
          <Zap className="h-4 w-4" />
          AI-Powered Changelog Generation
        </div>
        
        <h1 className="text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
          Stop Writing Changelogs.<br />Start Shipping Features.
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          ShipLog automatically transforms your Git commits and PRs into beautiful, 
          customer-friendly release notes. Connect your repo and let AI do the work.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <Link 
            href="/dashboard"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link 
            href="/changelog/shiplog/core"
            className="px-8 py-4 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors font-semibold flex items-center gap-2"
          >
            View Demo
          </Link>
        </div>

        {/* Demo Screenshot */}
        <div className="rounded-xl border border-slate-200 shadow-2xl overflow-hidden bg-white p-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 border border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-100 p-2 rounded">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg mb-1">v2.1.0 - Enhanced User Experience</h3>
                <p className="text-slate-600">Released on Jan 28, 2026</p>
              </div>
            </div>
            <div className="space-y-2 text-left text-sm">
              <div className="flex gap-3">
                <span className="text-blue-600 font-medium">✨ Features</span>
                <span className="text-slate-700">Added dark mode support with system preference detection</span>
              </div>
              <div className="flex gap-3">
                <span className="text-orange-600 font-medium">🐛 Fixes</span>
                <span className="text-slate-700">Improved login reliability and session handling</span>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-600 font-medium">⚡ Improvements</span>
                <span className="text-slate-700">Optimized page load times by 40%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Github className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Connect GitHub</h3>
            <p className="text-slate-600">
              Link your repository in seconds. No complex setup or configuration needed.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. AI Transforms</h3>
            <p className="text-slate-600">
              Our AI reads your commits and PRs, categorizing and rewriting them for customers.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Ship & Share</h3>
            <p className="text-slate-600">
              Get a beautiful public changelog page to share with your users. Embed anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-slate-600 mb-16 text-lg">Start free, upgrade when you need more</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-xl p-8 border-2 border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-slate-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-600" />
                <span>1 repository</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-600" />
                <span>Unlimited releases</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-600" />
                <span>AI-powered generation</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-600" />
                <span>Public changelog page</span>
              </li>
            </ul>
            <Link 
              href="/dashboard"
              className="block w-full text-center px-6 py-3 rounded-lg border-2 border-slate-300 hover:bg-slate-50 transition-colors font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$12</span>
              <span className="text-blue-100">/month</span>
            </div>
            <ul className="space-y-3 mb-8 text-white">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5" />
                <span className="font-medium">Unlimited repositories</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5" />
                <span>Custom branding</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5" />
                <span>Multiple tone options</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5" />
                <span>API access</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5" />
                <span>Priority support</span>
              </li>
            </ul>
            <Link 
              href="/dashboard"
              className="block w-full text-center px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors font-semibold"
            >
              Start Pro Trial
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to automate your changelogs?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join developers who've saved hundreds of hours on release notes
          </p>
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShipLog
              </span>
            </div>
            <p className="text-slate-600 text-sm">© 2026 ShipLog. Automate your changelogs.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
