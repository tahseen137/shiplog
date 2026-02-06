import Link from "next/link";
import { Sparkles, Plus, ExternalLink, Calendar, GitBranch, FileText } from "lucide-react";

// Mock demo data
const repos = [
  {
    id: 1,
    name: "shiplog/core",
    fullName: "shiplog/core",
    description: "The core changelog generation engine",
    lastRelease: "v2.1.0",
    lastReleaseDate: "2026-01-28",
    stars: 342,
    changelogUrl: "/changelog/shiplog/core"
  },
  {
    id: 2,
    name: "acme/dashboard",
    fullName: "acme/dashboard",
    description: "Customer analytics dashboard",
    lastRelease: "v1.8.2",
    lastReleaseDate: "2026-01-25",
    stars: 128,
    changelogUrl: "/changelog/acme/dashboard"
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShipLog
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
              Settings
            </button>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <span className="text-sm font-medium">john@example.com</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Repositories</h1>
            <p className="text-slate-600">
              Connected repositories with automated changelog generation
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-shadow">
            <Plus className="h-5 w-5" />
            Connect Repository
          </button>
        </div>

        {/* Plan Info */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-1">Free Plan</h3>
              <p className="text-slate-600">You're using {repos.length} of 1 repository</p>
            </div>
            <Link 
              href="/"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-shadow"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold">{repo.name}</h2>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                      Active
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{repo.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4" />
                      <span>{repo.stars} stars</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Last release: {repo.lastReleaseDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>{repo.lastRelease}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <Link
                  href={`/generate?repo=${repo.fullName}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-shadow"
                >
                  <Sparkles className="h-4 w-4" />
                  Generate Changelog
                </Link>
                <Link
                  href={repo.changelogUrl}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors font-medium"
                >
                  View Public Page
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors font-medium">
                  Settings
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for more repos */}
        <div className="mt-6 bg-white rounded-xl p-12 border border-dashed border-slate-300 text-center">
          <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Connect More Repositories</h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Upgrade to Pro to connect unlimited repositories and unlock advanced features
          </p>
          <div className="flex gap-3 justify-center">
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-shadow">
              Upgrade to Pro
            </button>
            <button className="px-6 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors font-semibold">
              Connect Repository
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
