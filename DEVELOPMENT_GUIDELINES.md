# Above Security Presentation - Development Guidelines

## 🚨 Critical Rules for Production Stability

### CSS Modifications
**NEVER modify CSS without following this checklist:**

1. **Test locally first**
   ```bash
   npm run dev
   # Verify all slides work correctly
   # Test menu functionality
   # Check responsive design
   ```

2. **Run the test suite**
   ```bash
   npm run test
   # All tests must pass before committing
   ```

3. **Validate CSS syntax**
   ```bash
   npx stylelint src/**/*.css
   ```

4. **Check critical classes exist**
   - `.presentation-container` - Main app container
   - `.menu-overlay` - Menu modal
   - `.slide-header` - Slide titles
   - `.key-point-card` - Content cards
   - `.nav-button` - Navigation buttons

### Required Testing Before Deployment

#### 1. Manual Testing Checklist
- [ ] All 6 slides load correctly
- [ ] Navigation buttons work (← →)
- [ ] Menu opens and closes properly
- [ ] All menu items navigate correctly
- [ ] Keyboard navigation works (arrow keys, escape)
- [ ] Responsive design works on mobile
- [ ] No console errors in browser
- [ ] All animations work smoothly

#### 2. Automated Testing
```bash
# Run all tests
npm run test

# Run specific test suites
npm run test:unit
npm run test:e2e
npm run test:visual
```

#### 3. Build Validation
```bash
# Build and verify
npm run build

# Check that dist/index.html doesn't reference source files
grep -q "/src/" dist/index.html && echo "❌ ERROR: References source files" || echo "✅ OK"
```

### CSS Architecture Rules

#### 1. Class Naming Convention
- Use semantic, descriptive class names
- Follow BEM methodology where appropriate
- Prefix component classes: `.presentation-*`, `.slide-*`, `.menu-*`

#### 2. Critical CSS Classes (DO NOT REMOVE)
```css
/* Core Layout */
.presentation-container
.presentation-header
.slide-content
.slide-container

/* Navigation */
.menu-button
.menu-overlay
.menu-content
.nav-button
.navigation-controls

/* Slide Structure */
.slide-header
.slide-title
.slide-subtitle
.content-section

/* Components */
.key-point-card
.landscape-card
.threat-item
.scenario-card
.deployment-step
```

#### 3. Color Palette (GitHub Brand)
```css
/* Primary Colors */
--github-green: #00872b;
--github-green-light: #5fed83;
--github-gray-dark: #24292f;
--github-gray-light: #656d76;
--github-bg: #f6f8fa;
--github-border: #d1d9e0;

/* Status Colors */
--success: #00872b;
--warning: #fd7e14;
--error: #d1242f;
--info: #0969da;
```

### Deployment Safety Measures

#### 1. Pre-commit Hooks
```bash
# Install pre-commit hooks
npm run prepare

# Hooks will automatically:
# - Lint CSS
# - Run tests
# - Validate build
```

#### 2. CI/CD Pipeline Stages
1. **Quality Checks** - CSS validation, syntax checking
2. **E2E Tests** - Full presentation functionality
3. **Production Health** - Bundle analysis, performance checks
4. **Deploy** - GitHub Pages deployment
5. **Post-Deploy** - Live site verification

#### 3. Rollback Procedure
If deployment breaks:
```bash
# 1. Identify the breaking commit
git log --oneline -10

# 2. Revert to last working state
git revert <breaking-commit-hash>

# 3. Push fix
git push origin main

# 4. Verify deployment in ~2 minutes
curl -s https://above-security.github.io/slides/ | grep "Above.*Runtime"
```

### Monitoring and Alerts

#### 1. Production Health Checks
- Automated checks every deployment
- HTTP status monitoring
- Content validation
- Asset loading verification

#### 2. Performance Monitoring
- Bundle size tracking
- Load time monitoring
- Mobile performance validation

### Emergency Procedures

#### 1. If Presentation is Broken in Production
1. **Immediate Response**
   ```bash
   # Check current status
   curl -I https://above-security.github.io/slides/
   
   # View source to identify issue
   curl -s https://above-security.github.io/slides/ | head -50
   ```

2. **Quick Fix**
   ```bash
   # Revert to last known good state
   git revert HEAD
   git push origin main
   ```

3. **Root Cause Analysis**
   - Check GitHub Actions logs
   - Review recent commits
   - Validate local build process

#### 2. If CSS is Broken
1. **Restore from backup**
   ```bash
   # Copy working CSS from backup
   cp /home/ubuntu/above-presentation-website/src/App.css src/App.css
   git add src/App.css
   git commit -m "Restore working CSS"
   git push origin main
   ```

### Development Workflow

#### 1. Making Changes
```bash
# 1. Create feature branch
git checkout -b fix/css-improvements

# 2. Make changes
# Edit files...

# 3. Test locally
npm run dev
npm run test

# 4. Build and validate
npm run build
npm run test:e2e

# 5. Commit and push
git add .
git commit -m "Improve CSS styling"
git push origin fix/css-improvements

# 6. Create PR and wait for CI
gh pr create --title "Improve CSS styling"
```

#### 2. Code Review Requirements
- [ ] All tests pass
- [ ] Manual testing completed
- [ ] CSS validation passed
- [ ] No console errors
- [ ] Responsive design verified

### Tools and Commands

#### 1. Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run all tests
npm run lint         # Lint CSS and JS
```

#### 2. Testing
```bash
npm run test:unit    # Unit tests
npm run test:e2e     # End-to-end tests
npm run test:visual  # Visual regression tests
npm run test:perf    # Performance tests
```

#### 3. Deployment
```bash
npm run deploy       # Deploy to GitHub Pages
npm run health-check # Check production health
npm run rollback     # Emergency rollback
```

### Contact and Support

For issues with the presentation:
1. Check GitHub Actions logs
2. Review this guide
3. Test locally before making changes
4. Use the emergency procedures if needed

**Remember: The presentation is used for customer demos. Any breakage directly impacts business operations.**

