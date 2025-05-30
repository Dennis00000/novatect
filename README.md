# NOVATECT - Architectural Portfolio Website

A sophisticated, modern portfolio website for an architectural firm built with Next.js and TypeScript.

## 🏗️ Overview

NOVATECT is a premium architectural portfolio website featuring a dark, minimalist design with elegant animations and responsive layouts. The site showcases architectural projects through high-quality imagery and provides an intuitive user experience for potential clients.

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modal Navigation** - Clean popup modals for different sections
- **Smooth Animations** - Subtle hover effects and transitions
- **Image Gallery** - High-quality architectural photography
- **Contact Form** - Professional inquiry form with validation styling
- **Dark Theme** - Sophisticated zinc-900 color scheme with yellow accents

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Images:** Next.js Image Optimization
- **Deployment:** Vercel Ready

## 📦 Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/novatect-portfolio.git
cd novatect-portfolio
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main homepage component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/
│   └── images/           # Project images and assets
├── components/           # Reusable components (if any)
└── README.md
\`\`\`

## 🎨 Design Features

### Navigation
- Fixed header with backdrop blur
- Interactive logo with hover animations
- Mobile hamburger menu
- Smooth scroll-to-top functionality

### Sections
- **Hero:** Full-screen project showcase
- **About:** Company philosophy and specializations
- **Projects:** Portfolio grid with project details
- **Blog:** Architecture articles and insights
- **Contact:** Professional contact form and information

### Animations
- Logo hover effects with scaling and letter spacing
- Button animations with sliding fill effects
- Image hover scaling on project cards
- Smooth modal transitions

## 🖼️ Image Assets

The project uses high-quality architectural photography. Replace the placeholder images in the \`public/\` directory with your own project images:

- Hero background image
- Project portfolio images
- About section pattern image

## 🎯 Customization

### Brand Colors
Update the color scheme in \`tailwind.config.js\`:
\`\`\`javascript
colors: {
  accent: '#d4af37', // Yellow accent color
  // Add your custom colors
}
\`\`\`

### Content
Modify the data arrays in \`app/page.tsx\`:
- \`navItems\` - Navigation menu items
- \`projectData\` - Portfolio projects
- \`blogPosts\` - Blog articles
- \`specializations\` - Service offerings

### Typography
Adjust font settings in \`globals.css\` and component classes.

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
\`\`\`bash
npm run build
npm start
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please contact:
- Email: dennisopoola@gmail.com 

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling approach
- Lucide for the beautiful icon library
- Vercel for seamless deployment

---

**Built with ❤️ for modern architecture**
\`\`\`

```json project="NOVATECT Portfolio" file="package.json" type="code"
{
  "name": "novatect-portfolio",
  "version": "1.0.0",
  "description": "A sophisticated architectural portfolio website built with Next.js",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.0.0"
  },
  "keywords": [
    "architecture",
    "portfolio",
    "nextjs",
    "typescript",
    "tailwindcss",
    "responsive",
    "modern"
  ],
  "author": "NOVATECT Studio",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/novatect-portfolio.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/novatect-portfolio/issues"
  },
  "homepage": "https://novatect.studio"
}
