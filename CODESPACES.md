# GitHub Codespaces Usage Guide

> 🇹🇷 **Türkçe versiyon için:** [CODESPACES_TR.md](./CODESPACES_TR.md)

## Codespaces Budget and Usage

If you receive a message that you're out of monthly free usage or have exceeded your budget for Codespaces, here are your options:

### Option 1: Increase Your Codespaces Budget

1. **For Personal Accounts:**
   - Go to [GitHub Settings > Billing & Plans > Spending Limits](https://github.com/settings/billing)
   - Under "Codespaces", adjust your spending limit
   - Set a monthly budget that works for your needs
   - GitHub provides 120 core hours free per month for personal accounts

2. **For Organization Accounts:**
   - Navigate to your organization's billing settings
   - Contact your organization administrator to increase the Codespaces budget
   - Organization owners can manage spending limits at `https://github.com/organizations/YOUR_ORG/settings/billing`

### Option 2: Develop Locally Without Codespaces

You can continue development on your local machine. Follow these steps:

#### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

#### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LabJanus/designSystem.git
   cd designSystem
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development:**
   ```bash
   npm run dev
   ```
   This will watch for changes and automatically rebuild your CSS.

4. **Preview your work:**
   ```bash
   npm run serve
   ```
   Then open http://localhost:3000 in your browser.

5. **Build for production:**
   ```bash
   npm run build:prod
   ```

### Option 3: Optimize Your Codespaces Usage

To reduce Codespaces usage and stay within free tier:

1. **Stop Codespaces when not in use:**
   - Codespaces automatically stop after 30 minutes of inactivity by default
   - Manually stop your Codespace from the GitHub Codespaces dashboard
   - Use `gh codespace stop` command to stop from CLI

2. **Use smaller machine types:**
   - Default 2-core machines use fewer hours
   - 4-core machines count as 2x usage
   - 8-core machines count as 4x usage

3. **Monitor your usage:**
   - Check usage at https://github.com/settings/billing
   - Set up spending limit alerts
   - Review usage regularly to avoid surprises

4. **Delete unused Codespaces:**
   - Remove old or abandoned Codespaces
   - Go to https://github.com/codespaces
   - Delete Codespaces you're no longer using

### Option 4: Use Alternative Cloud Development Environments

If you prefer not to increase your budget, consider these alternatives:

- **Gitpod**: Offers 50 hours free per month
- **StackBlitz**: Free browser-based development
- **CodeSandbox**: Free tier available
- **Local Development**: Free and unlimited (see Option 2 above)

## Getting Help

### Turkish / Türkçe

**Nasıl devam edeceğim?**

Codespaces bütçenizi aştıysanız:
1. GitHub ayarlarından aylık bütçenizi artırın
2. Veya yerel bilgisayarınızda geliştirme yapın (yukarıdaki "Option 2" bölümüne bakın)
3. Kullanmadığınız Codespace'leri durdurun ve silin

### Need More Help?

- Check [GitHub Codespaces Documentation](https://docs.github.com/en/codespaces)
- Review [Codespaces Billing](https://docs.github.com/en/billing/managing-billing-for-github-codespaces)
- Open an issue in this repository for project-specific questions

## FAQ

**Q: How much does Codespaces cost?**
A: GitHub provides 120 core hours free for personal accounts. After that, pricing varies by machine type. See [GitHub Pricing](https://github.com/pricing) for details.

**Q: Will I be charged automatically?**
A: Only if you set a spending limit above $0. By default, Codespaces stop working when you hit the free limit.

**Q: Can I continue working on this project without Codespaces?**
A: Yes! See "Option 2: Develop Locally" above for complete setup instructions.

**Q: How do I check my current usage?**
A: Visit https://github.com/settings/billing to see your current Codespaces usage and spending.
