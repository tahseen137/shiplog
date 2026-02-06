"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft, Copy, Check, Wand2 } from "lucide-react";

// Mock commits from GitHub
const mockCommits = [
  { sha: "a1b2c3d", message: "fix: null check in auth middleware", author: "john" },
  { sha: "e4f5g6h", message: "feat: add dark mode support", author: "sarah" },
  { sha: "i7j8k9l", message: "perf: optimize database queries", author: "mike" },
  { sha: "m0n1o2p", message: "fix: memory leak in websocket handler", author: "john" },
  { sha: "q3r4s5t", message: "feat: implement user preferences page", author: "sarah" },
];

export default function GenerateChangelog() {
  const [tone, setTone] = useState<"technical" | "marketing" | "casual">("marketing");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getChangelogContent = () => {
    if (tone === "technical") {
      return {
        title: "v2.1.0 - Technical Release",
        features: [
          "Implemented dark mode with system preference detection and localStorage persistence",
          "Added comprehensive user preferences management interface"
        ],
        fixes: [
          "Fixed null pointer exception in authentication middleware with improved validation",
          "Resolved memory leak in WebSocket connection handler by implementing proper cleanup"
        ],
        improvements: [
          "Optimized database query performance by adding indexes and query plan optimization"
        ]
      };
    } else if (tone === "marketing") {
      return {
        title: "v2.1.0 - Enhanced User Experience",
        features: [
          "✨ Beautiful Dark Mode: Your eyes will thank you! Now with automatic light/dark switching based on your system preferences",
          "🎨 Personalized Settings: Customize your experience with our new preferences page"
        ],
        fixes: [
          "🔒 Improved Login Reliability: We've made logging in faster and more secure",
          "⚡ Better Performance: Fixed issues that could slow down your real-time updates"
        ],
        improvements: [
          "🚀 Lightning Fast: We've optimized our backend to load your data 40% faster"
        ]
      };
    } else {
      return {
        title: "v2.1.0 - Some Cool Updates",
        features: [
          "Dark mode is here! It looks slick and your eyes won't hate you at night 😎",
          "You can now tweak settings to make things work just the way you like"
        ],
        fixes: [
          "Login used to be wonky sometimes. Not anymore! 🎉",
          "Squashed a bug that was eating up memory. Sorry about that!"
        ],
        improvements: [
          "Everything loads way faster now. We're talking 40% faster. Zoom zoom! 🏎️"
        ]
      };
    }
  };

  const changelog = getChangelogContent();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShipLog
            </span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Generate Changelog</h1>
          <p className="text-slate-600">
            Repository: <span className="font-semibold">shiplog/core</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Configuration */}
          <div className="space-y-6">
            {/* Recent Commits */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="font-bold text-lg mb-4">Recent Commits</h2>
              <div className="space-y-2">
                {mockCommits.map((commit) => (
                  <div key={commit.sha} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <input type="checkbox" defaultChecked className="mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-mono text-slate-900 truncate">{commit.message}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {commit.sha.substring(0, 7)} • {commit.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tone Selection */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="font-bold text-lg mb-4">Choose Tone</h2>
              <div className="space-y-3">
                <button
                  onClick={() => setTone("technical")}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    tone === "technical"
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-semibold mb-1">Technical</div>
                  <div className="text-sm text-slate-600">
                    Detailed, precise, developer-focused
                  </div>
                </button>

                <button
                  onClick={() => setTone("marketing")}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    tone === "marketing"
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-semibold mb-1">Marketing</div>
                  <div className="text-sm text-slate-600">
                    Customer-friendly, benefit-focused, engaging
                  </div>
                </button>

                <button
                  onClick={() => setTone("casual")}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    tone === "casual"
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-semibold mb-1">Casual</div>
                  <div className="text-sm text-slate-600">
                    Friendly, approachable, fun
                  </div>
                </button>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Wand2 className="h-5 w-5 animate-spin" />
                  Generating with AI...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate Changelog
                </>
              )}
            </button>
          </div>

          {/* Right Column - Preview */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg">Preview</h2>
              {isGenerated && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </button>
              )}
            </div>

            {!isGenerated ? (
              <div className="text-center py-12 text-slate-400">
                <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <p>Select commits and tone, then generate your changelog</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{changelog.title}</h3>
                  <p className="text-slate-600">Released on January 28, 2026</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                    ✨ Features
                  </h4>
                  <ul className="space-y-2">
                    {changelog.features.map((feature, i) => (
                      <li key={i} className="text-slate-700 leading-relaxed">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-orange-600 mb-3 flex items-center gap-2">
                    🐛 Fixes
                  </h4>
                  <ul className="space-y-2">
                    {changelog.fixes.map((fix, i) => (
                      <li key={i} className="text-slate-700 leading-relaxed">
                        • {fix}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-purple-600 mb-3 flex items-center gap-2">
                    ⚡ Improvements
                  </h4>
                  <ul className="space-y-2">
                    {changelog.improvements.map((improvement, i) => (
                      <li key={i} className="text-slate-700 leading-relaxed">
                        • {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200 flex gap-3">
                  <Link
                    href="/changelog/shiplog/core"
                    className="flex-1 text-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-shadow"
                  >
                    Publish to Public Page
                  </Link>
                  <button className="px-6 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors font-semibold">
                    Save Draft
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
