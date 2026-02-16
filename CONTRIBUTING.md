# Contributing to ShipLog

Thank you for your interest in contributing to ShipLog! We welcome contributions from the community.

## 🚀 Current Status

ShipLog is currently a **UI/UX prototype**. The frontend is complete, but backend features (GitHub integration, AI, authentication) are not yet implemented. This is a great opportunity to contribute to core functionality!

## 🛠️ Development Setup

### Prerequisites

- Node.js 20+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Getting Started

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/shiplog.git
   cd shiplog
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

5. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 How to Contribute

### 1. Pick an Issue (or Create One)

- Check [open issues](https://github.com/tahseen137/shiplog/issues) for tasks
- Comment on an issue to claim it
- If no issue exists for your idea, create one first to discuss

### 2. Write Code

- Follow existing code style (TypeScript, ESLint)
- Keep components small and focused
- Add comments for complex logic
- Use meaningful variable names

**Code Style Guidelines:**
- Use TypeScript (no `any` types unless absolutely necessary)
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling (avoid custom CSS when possible)
- Prefer functional components and hooks
- Use Lucide React for icons

### 3. Test Your Changes

```bash
# Lint your code
npm run lint

# Build to ensure no errors
npm run build

# Run the production build locally
npm run start
```

### 4. Commit Your Changes

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: <type>(<scope>): <description>

git commit -m "feat: add GitHub OAuth integration"
git commit -m "fix: resolve mobile layout issue on dashboard"
git commit -m "docs: update README with new features"
git commit -m "refactor: extract changelog card into component"
git commit -m "perf: optimize image loading on landing page"
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, no logic change)
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Adding or updating tests
- `chore:` Maintenance tasks (dependencies, config)

### 5. Push and Create a Pull Request

```bash
git push origin feature/your-feature-name
```

Then go to GitHub and create a Pull Request from your fork to the main repository.

**PR Title Format:**
- Use the same conventional commit format
- Example: `feat: add GitHub OAuth integration`

**PR Description Should Include:**
- What does this PR do?
- Why is this change needed?
- How did you test it?
- Screenshots (if UI changes)
- Related issue(s)

## 🎯 Priority Areas for Contribution

### High Priority
1. **GitHub OAuth Integration** - Enable users to connect their GitHub accounts
2. **Database Setup** - PostgreSQL + Prisma or Supabase
3. **AI Integration** - OpenAI or Anthropic for changelog generation
4. **API Routes** - Backend endpoints for core functionality

### Medium Priority
1. **Tests** - Unit tests (Vitest) and E2E tests (Playwright)
2. **Error Handling** - Better error messages and fallbacks
3. **Documentation** - Tutorials, guides, architecture docs
4. **Accessibility** - ARIA labels, keyboard navigation

### Nice to Have
1. **Analytics** - PostHog or Plausible integration
2. **Email Notifications** - Resend or SendGrid integration
3. **Custom Branding** - Logo upload, color picker, custom domains
4. **Performance** - Image optimization, lazy loading

## 🐛 Reporting Bugs

Found a bug? Help us fix it!

1. **Check if it's already reported** in [Issues](https://github.com/tahseen137/shiplog/issues)
2. **Create a new issue** with:
   - Clear title
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Your environment (browser, OS, Node version)

## 💡 Suggesting Features

Have an idea? We'd love to hear it!

1. **Check existing feature requests** in [Issues](https://github.com/tahseen137/shiplog/issues)
2. **Create a new issue** with:
   - Clear title starting with "Feature Request:"
   - Problem this feature solves
   - Proposed solution
   - Alternative solutions considered
   - Mockups or examples (if applicable)

## 📚 Code Review Process

1. A maintainer will review your PR within 3-5 days
2. They may request changes or ask questions
3. Address feedback and push updates
4. Once approved, your PR will be merged!

## ✅ PR Checklist

Before submitting, ensure:

- [ ] Code follows existing style guidelines
- [ ] No ESLint errors or warnings
- [ ] Build passes (`npm run build`)
- [ ] Commit messages follow Conventional Commits
- [ ] PR description is clear and complete
- [ ] Related issue is linked (if applicable)
- [ ] Screenshots included (if UI changes)
- [ ] No merge conflicts with main branch

## 🙋 Questions?

- Open a [Discussion](https://github.com/tahseen137/shiplog/discussions)
- Comment on a related issue
- Reach out to maintainers

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to ShipLog! 🚀**
