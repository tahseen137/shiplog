# ShipLog - AI-Powered Changelog Generator 🚀

Transform your Git commits into beautiful, customer-facing changelogs automatically.

## 🌐 Live Demo

- **Production**: https://shiplog-three.vercel.app
- **GitHub**: https://github.com/tahseen137/shiplog

## 🎯 What is ShipLog?

ShipLog connects to your GitHub repository and automatically generates beautiful, customer-friendly changelogs from your commits, PRs, and releases. Using AI, it transforms technical Git messages like "fix: null check in auth middleware" into marketing-friendly release notes like "Improved login reliability."

## ✨ Features

### 1. **Beautiful Landing Page**
- Clear value proposition
- Feature showcase
- Transparent pricing (Free: 1 repo, Pro: $12/mo unlimited)
- Professional gradient design with Tailwind CSS

### 2. **GitHub OAuth Flow** (Mock Demo)
- Shows the complete UX experience
- Uses demo data for MVP demonstration
- No real GitHub integration needed for demo

### 3. **Dashboard**
- Connected repositories overview
- Recent releases tracking
- Quick access to changelog generation
- Clean, modern interface

### 4. **Changelog Generator**
- Select commits to include
- Choose tone: Technical, Marketing, or Casual
- Real-time preview
- AI-powered transformation (simulated)

### 5. **Public Changelog Page**
- Beautiful timeline layout
- Auto-categorized changes:
  - ✨ Features
  - 🐛 Bug Fixes
  - ⚡ Improvements
  - ⚠️ Breaking Changes
- Embeddable anywhere
- SEO-friendly

### 6. **Customizable Tone Options**
- **Technical**: Detailed, precise, developer-focused
- **Marketing**: Customer-friendly, benefit-focused, engaging
- **Casual**: Friendly, approachable, fun

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Language**: TypeScript

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/tahseen137/shiplog.git
cd shiplog

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🚀 Deployment

The project is configured for instant Vercel deployment:

```bash
npx vercel --prod
```

## 📂 Project Structure

```
shiplog/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/
│   │   └── page.tsx          # User dashboard
│   ├── generate/
│   │   └── page.tsx          # Changelog generator
│   ├── changelog/[org]/[repo]/
│   │   └── page.tsx          # Public changelog page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/                   # Static assets
└── package.json              # Dependencies
```

## 🎨 Pages Overview

### Landing Page (`/`)
- Hero section with value proposition
- Feature showcase (Connect → Transform → Ship)
- Pricing tiers
- Live demo preview
- Call-to-action sections

### Dashboard (`/dashboard`)
- Connected repositories
- Plan information
- Quick actions (Generate, View Public Page, Settings)
- Repository stats

### Generator (`/generate`)
- Commit selection
- Tone customization
- Real-time preview
- Copy/publish actions

### Public Changelog (`/changelog/[org]/[repo]`)
- Timeline-based layout
- Categorized changes
- Version badges
- Embeddable design
- ShipLog branding footer

## 💡 Why ShipLog?

### Problems Solved:
- Developers hate writing changelogs manually
- Customers want to know what's new
- Technical commit messages aren't user-friendly
- Maintaining changelogs is time-consuming

### Value Proposition:
- Saves hours on release notes
- Improves customer communication
- Integrates with existing GitHub workflow
- AI transforms technical → user-friendly
- Beautiful, embeddable changelog pages

## 🎯 MVP Scope

This is a complete MVP demonstrating:
- ✅ Full user experience flow
- ✅ All core features
- ✅ Professional UI/UX
- ✅ Demo data showing capabilities
- ✅ Production-ready deployment

Not included in MVP (future enhancements):
- Real GitHub OAuth integration
- Actual AI/LLM integration
- Database for user accounts
- Payment processing
- API endpoints

## 🔮 Future Enhancements

1. **Real GitHub Integration**
   - OAuth authentication
   - Actual commit/PR fetching
   - Automatic release detection

2. **AI Integration**
   - OpenAI GPT-4 for transformation
   - Custom training on changelog patterns
   - Sentiment analysis

3. **Advanced Features**
   - Custom branding/themes
   - Webhook integrations
   - Slack/Discord notifications
   - Analytics dashboard
   - API access

4. **Monetization**
   - Stripe payment integration
   - Team/Enterprise plans
   - White-label options

## 📄 License

MIT License - feel free to use for your own projects!

## 👨‍💻 Built For

Hackathon MVP - Complete in one session!

---

**ShipLog** - Stop Writing Changelogs. Start Shipping Features. 🚀
