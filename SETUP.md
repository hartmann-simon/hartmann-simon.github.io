# 🎯 Quick Setup Checklist

Complete these steps to personalize your terminal portfolio:

## ✅ Immediate TODOs

### 1. Set Up Contact Form (5 min)
1. Go to https://formspree.io and sign up (free)
2. Create a new form
3. Copy your form ID (looks like `mxxxxxxx`)
4. In `terminal.js` line ~688, uncomment these lines and add your ID:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vimBuffer)
});
```

### 2. Update Social Links (2 min)
In `index.html`:
- Line 59: Update GitHub URL to `https://github.com/hartmann-simon`
- Line 66: Update LinkedIn URL to `https://www.linkedin.com/in/simon-hartmann-3556a9283/`

### 3. Write Your Headline (2 min)
Edit `index.html` line 21 - make it funny/sarcastic!

Current placeholder:
```html
<h1 id="headline">Welcome to my terminal... I mean, portfolio</h1>
```

Ideas:
- "$ whoami → One of those terminal nerds"
- "Warning: This portfolio is optimized for people who know what 'ls' means"
- "If you can't exit vim, we probably can't work together 😏"
- "Terminal-based portfolio because CSS is too mainstream"

## 📝 Content Already Added ✓

Your CV content is already integrated:
- ✅ Work experience at SAP & Porsche
- ✅ Education (TUM, Queen's, Furtwangen)
- ✅ Projects (Agentic Finance, Smart Search Gallery, Bachelor Thesis)
- ✅ Publications (IEEE ITSC paper)
- ✅ Patents
- ✅ Skills & tech stack
- ✅ Languages (German, English)

**Note**: Detailed job tasks are commented out (lines 323-328 in terminal.js).
To enable them, uncomment those lines if you want more detail visible.

## 🎨 Optional Customization

### Add Your Hackathon Video
Edit `projects/hackathon.html`:
- Replace `YOUR_VIDEO_ID` with your YouTube video ID
- Update project description
- Update tech stack tags

### Customize Colors
If you want different purple shades, edit `styles.css` line 4-17.

### Add More Fortune Quotes
Add your favorite tech quotes to `terminal.js` line 26-37.

## 🧪 Test Locally

```bash
./serve.sh
```
Then open http://localhost:8000

Try these commands:
- `help` - See all commands with cowsay quote
- `ls` - List directories
- `cd about/` - Navigate to about
- `cat experience/` - View experience
- `contact` - Try vim form (press `i`, type, ESC, `:wq`)
- `fortune` - Get random quote
- `cowsay hello world` - Make cow speak

## 🚀 Deploy to GitHub Pages

Once you're happy with the site:

```bash
git add .
git commit -m "Launch terminal portfolio with all features"
git push origin main
```

Then:
1. Go to GitHub repo → Settings → Pages
2. Source: main branch
3. Wait ~1 minute
4. Visit `https://hartmann-simon.github.io`

## 🎯 What's Already Working

✅ iTerm2-style terminal frame with traffic lights
✅ True black background (no gray!)
✅ Purple/lavender color scheme
✅ Powerlevel10k prompt (changes with directory)
✅ Filesystem navigation (cd, ls, pwd, cat)
✅ Vim-style contact form IN the terminal
✅ Cowsay + Fortune on welcome & help
✅ Tab completion
✅ Command history (↑/↓)
✅ All your CV content formatted
✅ Easter eggs (coffee, sudo, hack, etc.)
✅ Mobile responsive
✅ Links to GitHub & LinkedIn in footer

## 📚 Need Help?

- **Full docs**: See README.md
- **Commands**: Type `help` in terminal
- **Vim form**: Type `contact`, then `i` to INSERT, ESC to normal, `:wq` to send
- **Navigation**: Works like a real terminal - cd, ls, pwd

---

**Next steps**:
1. Set up Formspree (5 min)
2. Test locally
3. Deploy to GitHub Pages
4. Share your awesome terminal portfolio! 🎉
