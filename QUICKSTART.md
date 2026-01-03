# Yori Landing Page - Quick Start Guide

## What You Have

A complete, production-ready landing page for Yori with:
- ✅ Beautiful Warm Sunset color palette
- ✅ Fully responsive design
- ✅ Email waitlist forms
- ✅ All sections: Hero, Why, How It Works, Values, CTA, Footer
- ✅ SEO-optimized HTML
- ✅ Ready to deploy

## Get It Live in 15 Minutes

### Step 1: Install Dependencies (2 minutes)

Open terminal/command prompt in the `yori-landing` folder:

```bash
npm install
```

### Step 2: Test Locally (1 minute)

```bash
npm run dev
```

Open browser to `http://localhost:5173` - you should see your landing page!

### Step 3: Deploy to Vercel (10 minutes)

**Option A - Via Dashboard (Easiest):**

1. Create GitHub account if you don't have one
2. Push this code to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial Yori landing page"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. Go to [vercel.com/signup](https://vercel.com/signup)
4. Sign up with GitHub
5. Click "New Project"
6. Import your `yori-landing` repository
7. Click "Deploy" (Vercel auto-detects everything)
8. Wait 1-2 minutes - done! You'll get a URL like `yori-landing-abc123.vercel.app`

**Option B - Via CLI (Faster if you're comfortable with terminal):**

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts, then `vercel --prod` to deploy to production.

### Step 4: Connect Your Domain (2 minutes)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `yori.rocks` (and `www.yori.rocks`)
4. Vercel gives you DNS records to add at your domain registrar
5. Add those DNS records where you bought yori.rocks
6. Wait ~10 minutes for DNS to propagate
7. Done! yori.rocks now shows your landing page

## Next: Connect Email Service

Your forms currently just console.log emails. To actually collect them:

### Mailchimp (Recommended for beginners):

1. Sign up at mailchimp.com (free up to 500 subscribers)
2. Create an audience
3. Go to Audience → Settings → Audience fields and *MERGE* tags
4. Copy your audience ID
5. Go to Account → Extras → API keys → Create key
6. Install Mailchimp in your project:
   ```bash
   npm install @mailchimp/mailchimp_marketing
   ```
7. Create file `api/subscribe.js` in your project root:
   ```javascript
   import mailchimp from '@mailchimp/mailchimp_marketing';

   mailchimp.setConfig({
     apiKey: 'YOUR_API_KEY',
     server: 'us1', // Check your Mailchimp account for server
   });

   export default async function handler(req, res) {
     const { email } = req.body;
     
     try {
       await mailchimp.lists.addListMember('YOUR_AUDIENCE_ID', {
         email_address: email,
         status: 'subscribed',
       });
       res.status(200).json({ success: true });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   }
   ```

8. Update `Hero.jsx` and `CTA.jsx`:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     
     const response = await fetch('/api/subscribe', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email })
     });
     
     if (response.ok) {
       setSubmitted(true);
       setEmail('');
     }
   };
   ```

9. Redeploy: `vercel --prod`

### Alternative: ConvertKit, EmailOctopus, Buttondown

All work similarly - get API key, create endpoint, update forms.

## Troubleshooting

**Site not loading after deploy?**
- Check Vercel deployment logs
- Make sure all files committed to git
- Verify build succeeded

**Forms not working?**
- Check browser console for errors
- Verify API endpoint is working
- Test with console.log first

**Domain not connecting?**
- DNS can take 24-48 hours (usually faster)
- Double-check DNS records match Vercel's instructions
- Try clearing browser cache

## What's Next?

1. ✅ Site is live
2. ✅ Domain connected
3. ✅ Emails collecting
4. Share on social media to start getting signups
5. Set up Google Analytics or Plausible for tracking
6. Start planning the actual Yori app!

---

**Need help?** The README.md has full documentation.

**Questions?** Email hello@yori.rocks (or your personal email)

You've got this! 🌅
