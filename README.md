# Yori Landing Page

**You belong here** - A community for genuine connection.

This is the landing page for Yori, built with React, Vite, and Tailwind CSS using the Warm Sunset color palette.

## 🎨 Design

- **Colors**: Warm Sunset palette (peach, coral, orange, pink)
- **Typography**: Inter font family
- **Style**: Minimalist, Japanese-inspired, clean and welcoming

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📧 Email Integration

The waitlist forms currently log emails to console. To integrate with an email service:

### Option 1: Mailchimp

1. Sign up at mailchimp.com
2. Create an audience
3. Get your API key and audience ID
4. Update the `handleSubmit` functions in `Hero.jsx` and `CTA.jsx`

### Option 2: EmailOctopus

1. Sign up at emailoctopus.com (cheaper alternative)
2. Create a list
3. Get your API key and list ID
4. Update the `handleSubmit` functions

### Example Integration (EmailOctopus):

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://emailoctopus.com/api/1.6/lists/YOUR_LIST_ID/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: 'YOUR_API_KEY',
        email_address: email,
      }),
    });
    
    if (response.ok) {
      setSubmitted(true);
      setEmail('');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Add custom domain:**
   - In Vercel dashboard, go to Settings > Domains
   - Add `yori.rocks` (or your chosen domain)
   - Update your domain's DNS settings as instructed

### Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub and select your repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

3. **Add custom domain** in Netlify settings

## 📁 Project Structure

```
yori-landing/
├── src/
│   ├── components/
│   │   ├── Hero.jsx       # Hero section with main CTA
│   │   ├── Why.jsx        # Problem/solution section
│   │   ├── HowItWorks.jsx # 3-step process
│   │   ├── Values.jsx     # Core values grid
│   │   ├── CTA.jsx        # Final call-to-action
│   │   └── Footer.jsx     # Footer with contact
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & Tailwind
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## 🎯 Next Steps

### Before Launch:
1. ✅ Buy domain (yori.rocks)
2. ✅ Set up email collection service
3. ✅ Test on mobile devices
4. ✅ Add analytics (Google Analytics or Plausible)
5. ✅ Create social media preview images (Open Graph)
6. ✅ Test all forms and links

### After Launch:
1. Share on Reddit (r/CasualConversation, r/MakeNewFriendsHere, etc.)
2. Post on LinkedIn
3. Monitor email signups
4. Gather feedback from early waitlist members
5. Start planning MVP features

## 📝 Notes

- Email form currently uses `console.log` - integrate with email service before launch
- Contact email in footer: `hello@yori.rocks` (update if needed)
- All colors defined in `tailwind.config.js` for easy updates
- Fully responsive design (mobile-first approach)

## 💛 Built with care

This landing page was built with the values of Yori in mind: genuine, accessible, safe, and kind.

---

**Questions?** Reach out at hello@yori.rocks
