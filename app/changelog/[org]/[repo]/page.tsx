import Link from "next/link";
import { Sparkles, ExternalLink, Calendar, Tag } from "lucide-react";

// Mock changelog data
const releases = [
  {
    version: "v2.1.0",
    date: "January 28, 2026",
    title: "Enhanced User Experience",
    features: [
      "Beautiful Dark Mode: Your eyes will thank you! Now with automatic light/dark switching based on your system preferences",
      "Personalized Settings: Customize your experience with our new preferences page"
    ],
    fixes: [
      "Improved Login Reliability: We've made logging in faster and more secure",
      "Better Performance: Fixed issues that could slow down your real-time updates"
    ],
    improvements: [
      "Lightning Fast: We've optimized our backend to load your data 40% faster"
    ],
    breaking: []
  },
  {
    version: "v2.0.0",
    date: "January 15, 2026",
    title: "Major Architecture Upgrade",
    features: [
      "Real-time Collaboration: Work together with your team in real-time with live cursors and updates",
      "Advanced Search: Find anything instantly with our new fuzzy search and filters",
      "Export Functionality: Download your data in multiple formats (CSV, JSON, PDF)"
    ],
    fixes: [
      "Resolved intermittent connection issues during peak hours",
      "Fixed edge cases in data synchronization"
    ],
    improvements: [
      "Redesigned navigation for better user flow",
      "Improved mobile responsiveness across all pages"
    ],
    breaking: [
      "API v1 has been deprecated. Please migrate to API v2 (migration guide available)"
    ]
  },
  {
    version: "v1.8.2",
    date: "January 5, 2026",
    title: "Bug Fixes & Polish",
    features: [],
    fixes: [
      "Fixed notification badge not clearing on mobile devices",
      "Resolved timezone display issues for international users",
      "Fixed file upload progress indicator"
    ],
    improvements: [
      "Reduced initial page load time by 25%",
      "Improved error messages to be more helpful"
    ],
    breaking: []
  },
  {
    version: "v1.8.0",
    date: "December 20, 2025",
    title: "Holiday Feature Drop",
    features: [
      "Keyboard Shortcuts: Navigate like a pro with customizable keyboard shortcuts",
      "Batch Operations: Select multiple items and perform actions in bulk",
      "Activity Feed: Stay updated with a chronological feed of all activities"
    ],
    fixes: [
      "Fixed Safari-specific rendering issues",
      "Resolved memory leak in long-running sessions"
    ],
    improvements: [
      "Enhanced accessibility with better screen reader support",
      "Improved color contrast for better readability"
    ],
    breaking: []
  }
];

interface PageProps {
  params: Promise<{
    org: string;
    repo: string;
  }>;
}

export default async function PublicChangelog({ params }: PageProps) {
  const { org, repo } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">{org}/{repo}</h1>
              <p className="text-xs text-slate-600">Product Changelog</p>
            </div>
          </div>
          <a 
            href="https://shiplog.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium"
          >
            <span className="text-slate-600">Powered by</span>
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShipLog
            </span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="mx-auto max-w-4xl px-6 py-12 text-center border-b border-slate-200">
        <h2 className="text-4xl font-bold mb-4">What's New</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Stay up to date with the latest features, improvements, and fixes
        </p>
      </div>

      {/* Releases */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-12">
          {releases.map((release, index) => (
            <div key={release.version} className="relative">
              {/* Timeline Line */}
              {index !== releases.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-slate-200" />
              )}

              <div className="flex gap-6">
                {/* Version Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg relative z-10">
                    <Tag className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{release.version}</h3>
                        <span className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar className="h-4 w-4" />
                          {release.date}
                        </span>
                      </div>
                      <p className="text-slate-700 font-medium">{release.title}</p>
                    </div>

                    {/* Details */}
                    <div className="px-6 py-6 space-y-6">
                      {release.breaking.length > 0 && (
                        <div>
                          <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                            ⚠️ Breaking Changes
                          </h4>
                          <ul className="space-y-2">
                            {release.breaking.map((item, i) => (
                              <li key={i} className="text-slate-700 leading-relaxed pl-4 border-l-2 border-red-300">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {release.features.length > 0 && (
                        <div>
                          <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                            ✨ New Features
                          </h4>
                          <ul className="space-y-2">
                            {release.features.map((feature, i) => (
                              <li key={i} className="text-slate-700 leading-relaxed">
                                • {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {release.improvements.length > 0 && (
                        <div>
                          <h4 className="font-bold text-purple-600 mb-3 flex items-center gap-2">
                            ⚡ Improvements
                          </h4>
                          <ul className="space-y-2">
                            {release.improvements.map((improvement, i) => (
                              <li key={i} className="text-slate-700 leading-relaxed">
                                • {improvement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {release.fixes.length > 0 && (
                        <div>
                          <h4 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                            🐛 Bug Fixes
                          </h4>
                          <ul className="space-y-2">
                            {release.fixes.map((fix, i) => (
                              <li key={i} className="text-slate-700 leading-relaxed">
                                • {fix}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Want changelogs like this?</h3>
          <p className="text-slate-600 mb-6">
            ShipLog automatically generates beautiful changelogs from your Git history
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-shadow"
          >
            Try ShipLog Free
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
