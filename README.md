# Simon Hartmann - Terminal Portfolio

A terminal-styled personal portfolio website with authentic terminal experience, featuring filesystem navigation, vim-style forms, and Powerlevel10k aesthetics.

## 🚀 Quick Start

Open `http://localhost:8000` after running:
```bash
./serve.sh
```

## ✨ Features

### 🖥️ Authentic Terminal Experience
- **iTerm2-style window frame** with traffic light buttons
- **True black background** for authentic terminal look
- **Powerlevel10k prompt** with dynamic directory display
- **Purple/lavender color scheme** with proper p10k segment colors

### 📁 Filesystem Navigation
Navigate like a real terminal:
```bash
ls              # List directory contents
cd about/       # Change to about directory
cd ..           # Go back one level
pwd             # Print working directory
cat projects/   # Display projects content
```

Directory structure:
```
~
├── about/
├── experience/
├── education/
├── skills/
├── projects/
└── research/
```

### 💌 Vim-Style Contact Form (IN Terminal!)
Type `contact` to open a vim-style form:
- Press `i` to enter **INSERT mode**
- Type your content
- Press `ESC` to exit INSERT mode
- Navigate fields: `:name`, `:email`, `:message`, `:cv`
- Send: `:wq`
- Cancel: `:q!`

### 🐮 Cowsay & Fortune
Random tech quotes displayed with ASCII cow art on welcome and `help` command!

### 🎨 Features
- Tab completion
- Command history (↑/↓ arrows)
- Blinking cursor
- Responsive design
- Mobile-friendly

## 📝 Available Commands

### Navigation
- `cd <dir>` - Change directory
- `ls` - List directory contents
- `pwd` - Print working directory
- `cat <dir>` - Display directory content

### Content
- `about` - About Simon
- `experience` - Work history
- `education` - Academic background
- `skills` - Technical skills & languages
- `projects` - Academic projects
- `research` - Publications & patents

### Actions
- `contact` - Open vim-style contact form
- `help` - Show all commands
- `clear` - Clear screen

### Easter Eggs
- `fortune` - Random tech quote
- `cowsay <text>` - Make the cow speak
- `coffee` - Brew virtual coffee
- `whoami` - Identity check
- `sudo` - Try root access
- `hack` - "Hacking" sequence
- `vim` - Vim joke
- `exit` - Try to leave

## 🛠️ Customization

### 1. Contact Form Integration

Sign up at [Formspree](https://formspree.io/) and get your form ID.

In `terminal.js` line ~688, uncomment and add your ID:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vimBuffer)
});
```

### 2. Update Personal Links

In `index.html`:
- Line 59: GitHub URL
- Line 66: LinkedIn URL

### 3. Customize Headline

Edit `index.html` line 21 with your sarcastic headline!

### 4. Modify Content

All content is in `terminal.js` in the `CONTENT` object (starts line ~118):
- `about` - Your bio
- `experience` - Jobs (with commented detailed tasks)
- `education` - Academic history
- `projects` - Your projects
- `research` - Publications
- `skills` - Tech stack
- `patents` - Patent numbers

To enable detailed job tasks, uncomment lines ~323-328 in `terminal.js`.

### 5. Customize Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --accent-primary: #bd93f9;    /* Main purple */
    --accent-secondary: #c678dd;  /* Secondary purple */
    --p10k-blue: #61afef;
    --p10k-green: #98c379;
    /* etc... */
}
```

### 6. Add More Fortunes

Add to `FORTUNES` array in `terminal.js` (line ~26).

## 📁 File Structure

```
.
├── index.html          # Main page with iTerm2 frame
├── styles.css          # True black theme + purple accents
├── terminal.js         # All terminal logic + your CV content
├── projects/
│   └── hackathon.html  # Project detail page
├── serve.sh            # Local testing script
└── README.md           # This file
```

## 🚢 Deploy to GitHub Pages

1. Make sure your repo is named `<username>.github.io`
2. Push to GitHub:
```bash
git add .
git commit -m "Launch terminal portfolio"
git push origin main
```
3. Go to repo **Settings → Pages**
4. Set source to **main branch**
5. Site live at `https://hartmann-simon.github.io`

## 🎯 Design Philosophy

This portfolio embraces true terminal aesthetics:
- **Black background** (not gray) for authentic terminal feel
- **Powerlevel10k prompt** with segment styling
- **Filesystem navigation** with cd, ls, pwd
- **Vim-style interactions** for the contact form
- **Purple/lavender theme** for unique personality
- **iTerm2 window frame** for macOS authenticity

## 🧪 Technical Stack

- **jQuery Terminal** - Terminal emulation
- **jQuery** - Required dependency
- **Pure CSS** - Custom iTerm2 and p10k styling
- **Vanilla JS** - Navigation and vim logic
- **No build step** - Direct deployment to GitHub Pages

## 📬 Contact Form Details

The vim-style form captures:
- Name
- Email
- Message
- CV Request (toggle with `:cv`)

When sent, it can integrate with:
- **Formspree** (recommended, free tier available)
- **EmailJS**
- Any form backend API

## 💡 Pro Tips

1. **Show detailed tasks**: Uncomment lines 323-328 in `terminal.js` to display detailed job responsibilities
2. **Add projects**: Add to `CONTENT.projects` array with GitHub links
3. **More easter eggs**: Add to `EASTER_EGGS` object
4. **Custom commands**: Add to the switch statement in terminal initialization
5. **Different cow**: Replace cow ASCII art in the `cowsay()` function

## 🐛 Troubleshooting

**Terminal not loading?**
- Check browser console for errors
- Verify jQuery Terminal CDN is accessible
- Check all file paths are correct

**Vim mode not working?**
- ESC key handling is in `keydown` event
- Make sure vim mode state is tracked correctly

**Colors look wrong?**
- Clear browser cache
- Check CSS custom properties are loading

**Navigation broken?**
- Verify `DIRECTORIES` object has all paths
- Check `currentDirectory` state updates

## 🔮 Future Enhancements

Ideas for later:
- [ ] Command history persistence (localStorage)
- [ ] More ASCII art animations
- [ ] Tab completion for partial commands
- [ ] Session recording/playback
- [ ] Matrix rain effect background
- [ ] Sound effects (optional toggle)
- [ ] Multiple terminal themes
- [ ] Blog section with markdown rendering

## 📄 License

Personal portfolio - do whatever you want with it!

## 🙏 Acknowledgments

- jQuery Terminal for the amazing library
- Powerlevel10k for prompt inspiration
- iTerm2 for window styling reference

---

Built with ☕, 💻, and probably too much vim

**Simon Hartmann** | [GitHub](https://github.com/hartmann-simon) | [LinkedIn](https://www.linkedin.com/in/simon-hartmann-3556a9283/)
