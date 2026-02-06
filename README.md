# ✨ ShipLog

**AI-powered changelog generator—stop writing release notes, start shipping features**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/shiplog)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://shiplog-three.vercel.app)

---

## 📖 About

**ShipLog** automatically transforms your Git commits and pull requests into beautiful, customer-friendly release notes. Connect your GitHub repository and let AI turn technical commit messages into polished changelogs that your users will actually want to read.

**Stop writing changelogs. Start shipping features.**

Perfect for:
- 🚀 SaaS products with frequent releases
- 📱 Apps with regular updates
- 🛠️ Developer tools and libraries
- 🔧 Internal tools and dashboards

**Live Demo:** [shiplog-three.vercel.app](https://shiplog-three.vercel.app)

---

## ✨ Features

### AI Generation
- 🤖 **Smart Categorization** — Automatically groups changes: Features, Fixes, Breaking Changes
- 📝 **Natural Language** — Converts technical commits into user-friendly descriptions
- 🎯 **Emoji Support** — Adds visual markers for different change types
- 🔍 **PR Integration** — Pulls context from pull request descriptions

### Changelog Features
- 📄 **Public Pages** — Beautiful changelog.yourapp.com URLs
- 🔗 **Shareable Links** — Direct links to specific releases
- 📱 **Responsive Design** — Mobile-optimized reading experience
- 📧 **Email Notifications** — Notify subscribers of new releases (Pro)

### Developer Tools
- 🔗 **GitHub Integration** — Automatic sync on new releases
- 🎨 **Customizable Branding** — Add your logo, colors, and domain
- 📊 **Analytics** — Track views and engagement (Pro)
- 🔌 **API Access** — Embed changelog in your app

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn
- Git
- GitHub account (for integration)

### Installation

```bash
# Clone the repository
git clone https://github.com/tahseen137/shiplog.git
cd shiplog

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 📦 Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/shiplog)

---

## 🎯 Usage

### Quick Start

1. **Connect GitHub**
   - Sign in to ShipLog
   - Connect your GitHub account
   - Select a repository

2. **Generate Changelog**
   - Click "Generate from Latest Release"
   - AI analyzes commits and PRs
   - Review and publish

3. **Share**
   - Get your public changelog URL
   - Share with users or embed in your app

### Example Transformation

#### Input (Git Commits)
```
feat: add dark mode support
fix: login session timeout bug
chore: update dependencies
docs: improve README
```

#### Output (AI-Generated Changelog)
```markdown
## v2.1.0 - Enhanced User Experience
Released on February 6, 2026

### ✨ Features
- Added dark mode support with automatic system preference detection

### 🐛 Bug Fixes
- Fixed an issue where users were unexpectedly logged out after 30 minutes
- Improved session management and reliability

### 🔧 Improvements
- Updated core dependencies for better performance and security
```

---

## 🔌 API Reference (Coming Soon)

### `GET /api/changelog/[owner]/[repo]`
Fetch changelog for a repository.

### `POST /api/generate`
Generate new changelog entry from commits.

---

## 🎨 Customization

### Custom Branding
```javascript
{
  "logo": "https://yourapp.com/logo.png",
  "brandColor": "#4F46E5",
  "customDomain": "changelog.yourapp.com"
}
```

### Emoji Mapping
```javascript
{
  "feat": "✨",
  "fix": "🐛",
  "docs": "📝",
  "perf": "⚡",
  "refactor": "♻️"
}
```

---

## 💡 Best Practices

### Writing Good Commit Messages
ShipLog works best with conventional commit messages:

```bash
# Good
feat: add user profile page
fix: resolve payment processing error
docs: update API documentation

# Better (with scope)
feat(auth): add social login
fix(checkout): handle expired coupons
perf(api): optimize database queries
```

### Using PR Descriptions
Add detailed descriptions to pull requests—ShipLog uses them for context:

```markdown
## What changed
Added OAuth integration for Google and GitHub.

## Why
Users requested easier signup options.
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com)

---

## 📧 Contact

For questions or support, please open an issue on GitHub.

**Ship features, not changelogs 🚀**
