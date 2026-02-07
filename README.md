# designSystem

A modern design system built with Tailwind CSS.

## Getting Started

### Option 1: GitHub Codespaces (Cloud Development)

Click the button below to open this project in GitHub Codespaces:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=LabJanus/designSystem)

**Note:** If you encounter Codespaces budget limits, see [CODESPACES.md](./CODESPACES.md) for solutions.

### Option 2: Local Development

#### Prerequisites
- Node.js (v16 or higher)
- npm package manager

#### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/LabJanus/designSystem.git
   cd designSystem
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development mode:
   ```bash
   npm run dev
   ```
   This will watch for changes and automatically rebuild your CSS.

4. Preview your work:
   ```bash
   npm run serve
   ```
   Then open http://localhost:3000 in your browser.

5. Build for production:
   ```bash
   npm run build:prod
   ```

## Available Scripts

- `npm run dev` - Watch mode for development (rebuilds CSS on changes)
- `npm run build` - Build CSS for development
- `npm run build:prod` - Build optimized CSS for production
- `npm run serve` - Start a local server to preview your work

## Project Structure

```
designSystem/
├── src/
│   └── css/
│       └── input.css      # Source CSS with Tailwind directives
├── dist/
│   └── css/
│       └── styles.css     # Compiled CSS output
├── public/                # Static assets
├── index.html            # Demo page
└── tailwind.config.js    # Tailwind configuration
```

## Contributing

Contributions are welcome! Please read our [SECURITY.md](./SECURITY.md) for security-related guidelines.

## Codespaces & Budget Issues

If you're experiencing issues with GitHub Codespaces budget or usage limits, please refer to our comprehensive guide:

👉 **[CODESPACES.md](./CODESPACES.md)** - Complete guide on managing Codespaces budget and alternative development options

### Türkçe (Turkish)
Codespaces bütçe sorunları için [CODESPACES.md](./CODESPACES.md) dosyasına bakın.

## License

ISC
