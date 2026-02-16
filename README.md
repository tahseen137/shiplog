# ✨ ShipLog

**AI-powered changelog generator—stop writing release notes, start shipping features**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/shiplog)

> **⚠️ Current Status:** This is a **UI/UX prototype** showcasing the design and user flow. Backend features (GitHub integration, AI generation, authentication) are not yet implemented. See [Roadmap](#roadmap) for planned features.

---

## 📖 About

**ShipLog** will automatically transform your Git commits and pull requests into beautiful, customer-friendly release notes. Connect your GitHub repository and let AI turn technical commit messages into polished changelogs that your users will actually want to read.

**Vision:** Stop writing changelogs. Start shipping features.

### Planned Use Cases
- 🚀 SaaS products with frequent releases
- 📱 Apps with regular updates
- 🛠️ Developer tools and libraries
- 🔧 Internal tools and dashboards

**Live Demo:** [shiplog-three.vercel.app](https://shiplog-three.vercel.app)

---

## ✨ Features

### Current (Prototype)
- ✅ **Modern UI/UX** — Beautiful, responsive design built with Next.js 16 and Tailwind CSS 4
- ✅ **Landing Page** — Professional marketing site with pricing tiers
- ✅ **Dashboard View** — Repository management interface
- ✅ **Generator Interface** — Tone selection (Technical, Marketing, Casual)
- ✅ **Public Changelog Pages** — Shareable release note display
- ✅ **Mobile Responsive** — Works on all screen sizes
- ✅ **Zero Build Errors** — Production-ready codebase

### Planned (Roadmap)
- 🔜 **GitHub OAuth** — Secure authentication and repository access
- 🔜 **AI Generation** — Automated changelog creation from commits (GPT-4 or Claude)
- 🔜 **Smart Categorization** — Auto-group changes: Features, Fixes, Breaking Changes
- 🔜 **PR Integration** — Pull context from pull request descriptions
- 🔜 **Database Persistence** — Save and manage changelog history
- 🔜 **API Access** — Embed changelogs in your app
- 🔜 **Email Notifications** — Notify subscribers of new releases
- 🔜 **Custom Branding** — Add your logo, colors, and domain

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

**Future Stack:**
- **Auth:** NextAuth.js (GitHub OAuth)
- **Database:** PostgreSQL (Supabase or Neon)
- **AI:** OpenAI GPT-4 or Anthropic Claude
- **Rate Limiting:** Upstash Redis

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/tahseen137/shiplog.git
cd shiplog

# Install dependencies
npm install

# Copy environment variables (optional - not currently used)
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel (one-click)
vercel
```

**Deploy with Vercel:** [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/shiplog)

---

## 📸 Screenshots

> Coming soon! For now, check out the [live demo](https://shiplog-three.vercel.app).

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅ (Current)
- [x] UI/UX design
- [x] Landing page
- [x] Dashboard mockup
- [x] Changelog generator interface
- [x] Public changelog display
- [x] Responsive design

### Phase 2: Backend (Next)
- [ ] GitHub OAuth integration
- [ ] Database setup (PostgreSQL)
- [ ] API routes for CRUD operations
- [ ] User authentication and sessions

### Phase 3: AI Integration
- [ ] OpenAI/Anthropic API integration
- [ ] Commit message parsing
- [ ] PR description extraction
- [ ] Changelog generation with tone control

### Phase 4: Advanced Features
- [ ] Email notifications
- [ ] Custom branding and domains
- [ ] Analytics and engagement tracking
- [ ] API for embedding changelogs

### Phase 5: Polish
- [ ] Unit and E2E tests
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring
- [ ] Documentation site

---

## 🎯 How It Will Work (When Complete)

### 1. Connect GitHub
```bash
# User clicks "Connect GitHub"
# OAuth flow → User authorizes ShipLog
# Select repository from list
```

### 2. Generate Changelog
```bash
# ShipLog fetches latest commits and PRs
# AI analyzes commit messages:
#   - feat: add dark mode → ✨ New Feature
#   - fix: login bug → 🐛 Bug Fix
#   - perf: optimize DB → ⚡ Improvement
# User selects tone (Technical, Marketing, Casual)
# AI generates customer-friendly descriptions
```

### 3. Publish & Share
```bash
# One-click publish to public page
# Get shareable URL: changelog.yourapp.com
# Optional: Email subscribers automatically
```

### Example Transformation

#### Input (Git Commits)
```
feat: add dark mode support
fix: login session timeout bug
perf: optimize database queries
docs: improve README
```

#### Output (AI-Generated Changelog)
```markdown
## v2.1.0 - Enhanced User Experience
Released on February 16, 2026

### ✨ Features
- Added dark mode support with automatic system preference detection

### 🐛 Bug Fixes
- Fixed an issue where users were unexpectedly logged out after 30 minutes
- Improved session management and reliability

### ⚡ Improvements
- Optimized database queries for 40% faster page loads
```

---

## 🔧 Configuration (Future)

When backend features are implemented, you'll need to configure:

```env
# .env.local
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_secret
OPENAI_API_KEY=your_openai_key
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret
```

See `.env.example` for full configuration options.

---

## 🤝 Contributing

Contributions are welcome! This project is in early stages, so there's lots of room for improvement.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style (TypeScript, ESLint)
- Add comments for complex logic
- Update README if adding new features
- Test locally before submitting PR

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com)

---

## 📧 Contact

For questions or feedback:
- Open an issue on [GitHub](https://github.com/tahseen137/shiplog/issues)
- Visit the [live demo](https://shiplog-three.vercel.app)

---

**🚀 Ship features, not changelogs**
