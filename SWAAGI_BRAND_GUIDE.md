# SWAAGI Brand Identity Guide 🌟✨

## Brand Overview

**SWAAGI** - Where AI meets drip. Born from the culture, built for the world. 

*"Your drip is just a vibe away."* - This isn't just fashion tech. This is a movement. A global style revolution powered by AI that understands one universal truth: **everyone deserves to look and feel iconic.**

SWAAGI is more than an app—it's your personal hype squad, style guru, and confidence amplifier rolled into one. We celebrate every fit, every culture, every vibe. From streetwear to runway, we got you covered. Period.

### The SWAAGI Vibe
- 🔥 **Trendsetting**: We don't follow trends, we create them
- ✨ **Inclusive**: Your style, your rules, your swag
- 💎 **Authentic**: Real recommendations for real people
- 🌍 **Global**: Fashion without borders
- 🚀 **Innovative**: AI that actually gets your vibe

## Logo System

### Primary Logo
- **File:** `/public/logos/swaagi-logo.svg`
- **Usage:** Main brand representation, headers, marketing materials
- **Contains:** Full wordmark with modern, stylish 'S' symbol

### Logo Mark
- **File:** `/public/logos/swaagi-mark.svg`  
- **Usage:** Favicons, app icons, social media profiles
- **Contains:** Standalone 'S' symbol with contemporary design elements

### Logo Variations
```
📁 /public/logos/
├── swaagi-logo.svg                 # Primary SVG logo
├── swaagi-logo-large.png          # 800x240px
├── swaagi-logo-medium.png         # 400x120px  
├── swaagi-logo-small.png          # 200x60px
├── swaagi-mark.svg                # Logo mark SVG
├── swaagi-mark-512.png           # App icon large
├── swaagi-mark-256.png           # App icon medium
├── swaagi-mark-128.png           # App icon small
├── swaagi-mark-64.png            # Header logo
├── swaagi-mark-32.png            # Small UI elements
└── swaagi-mark-16.png            # Tiny icons
```

## Color Palette

### Primary Brand Colors
```css
/* Golden Amber Gradient */
--brand-primary-start: #D97706    /* Amber-600 */
--brand-primary-mid:   #F59E0B    /* Amber-500 */  
--brand-primary-end:   #FBBF24    /* Amber-400 */

/* Accent Colors */
--brand-accent-dark:   #7C2D12    /* Red-900 */
--brand-accent-light:  #DC2626    /* Red-600 */
```

### Supporting Colors
```css
/* Neutrals */
--neutral-900: #171717    /* Text primary */
--neutral-600: #525252    /* Text secondary */
--neutral-400: #A3A3A3    /* Text muted */
--neutral-100: #F5F5F5    /* Background light */

/* Theme Colors */
--theme-color: #F59E0B     /* PWA theme color */
```

## Typography

### Primary Font
- **Font Family:** Inter
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Usage:** All UI text, headings, body content

### Font Scale
```css
/* Headings */
.text-4xl { font-size: 2.25rem; }  /* Page titles */
.text-2xl { font-size: 1.5rem; }   /* Section titles */
.text-xl  { font-size: 1.25rem; }  /* Subsection titles */
.text-lg  { font-size: 1.125rem; } /* Large body text */

/* Body Text */
.text-base { font-size: 1rem; }    /* Default body */
.text-sm   { font-size: 0.875rem; } /* Small body */
.text-xs   { font-size: 0.75rem; }  /* Captions */
```

## Design Elements

### Modern Geometric Patterns
- **Inspiration:** Contemporary international fashion and global style trends
- **Implementation:** Sleek decorative dots, lines, and geometric shapes
- **Colors:** Primary brand colors with opacity variations

### Style-Inspired Elements
```css
/* Example decorative elements */
.swaagi-dots {
  background: radial-gradient(circle, #F59E0B 2px, transparent 2px);
  background-size: 12px 12px;
}

.swaagi-lines {
  background: linear-gradient(45deg, transparent 40%, #FBBF24 40%, #FBBF24 60%, transparent 60%);
}
```

## Brand Voice & Taglines

### Core Taglines
1. **Primary:** "Your drip is just a vibe away" 🔥
2. **Secondary:** "Find your swag, anywhere in the world" 🌍
3. **Action:** "Level up your fit" ⬆️
4. **Aspiration:** "Look iconic. Feel iconic. Be iconic." ✨
5. **Community:** "Where the culture meets the closet" 💎

### Brand Voice
- **Tone:** Bold, confident, authentic, hype
- **Language:** Contemporary, inclusive, culturally fluent
- **Energy:** High-energy, trend-forward, empowering
- **Attitude:** No cap, just facts. Real talk, real style.

### The SWAAGI Lexicon
- **Drip**: Your style, your aesthetic, your vibe
- **Fit**: An outfit that goes hard
- **Vibe**: The energy, mood, or aesthetic you're serving
- **No cap**: For real, honestly, seriously
- **Bussin'**: Absolutely incredible, top-tier
- **Iconic**: Legendary status, unforgettable
- **Slay**: To absolutely dominate with your style

### Content Guidelines
- ✅ **DO:** Keep it real, keep it fresh, keep it 100
- ✅ **DO:** Celebrate all styles from all cultures
- ✅ **DO:** Make fashion accessible and exciting
- ✅ **DO:** Use contemporary language that resonates globally
- ❌ **DON'T:** Be boring or generic
- ❌ **DON'T:** Use outdated slang or forced trends
- ❌ **DON'T:** Appropriate without appreciation

## Implementation Examples

### Header Logo Usage
```jsx
<img 
  src="/logos/swaagi-mark-64.png" 
  alt="SWAAGI" 
  className="h-8 w-8" 
/>
```

### Footer Logo Usage  
```jsx
<img 
  src="/logos/swaagi-logo-small.png" 
  alt="SWAAGI" 
  className="h-8 mb-2" 
/>
```

### Meta Tags
```html
<meta name="theme-color" content="#F59E0B" />
<meta property="og:image" content="/logos/swaagi-logo-large.png" />
```

## Favicon System

### Files Created
```
📁 /public/
├── favicon.ico              # Multi-size ICO (16, 32, 48px)
├── favicon-16x16.png       # Browser tab
├── favicon-32x32.png       # Browser tab
├── apple-touch-icon.png    # iOS home screen (180x180)
├── android-chrome-192x192.png  # Android (192x192)
├── android-chrome-512x512.png  # Android (512x512)
└── manifest.json           # PWA manifest
```

## Brand Applications

### Web Headers
- Use `swaagi-mark-64.png` for standard navigation
- Pair with "SWAAGI" text in brand font
- Apply golden gradient to text when possible

### Social Media
- Profile images: `swaagi-mark-512.png`
- Cover photos: `swaagi-logo-large.png`  
- Post graphics: Include brand colors and patterns

### Marketing Materials
- Primary logo for all branded communications
- Maintain golden color scheme
- Include modern, globally-inspired decorative elements

## Technical Implementation

### CSS Variables
```css
:root {
  --brand-gradient: linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%);
  --brand-accent: linear-gradient(135deg, #7C2D12 0%, #DC2626 100%);
}
```

### Tailwind Configuration
```js
// Accent colors already configured in tailwind.config.js
theme: {
  extend: {
    colors: {
      accent: {
        400: '#FBBF24',
        500: '#F59E0B', 
        600: '#D97706',
        // ... other shades
      }
    }
  }
}
```

---

**SWAAGI** - Your Drip Is Just A Vibe Away 🔥✨
*Where AI meets drip. Where style meets confidence. Where you meet iconic.*

**#SwaagiNation** | **#DrippedByAI** | **#FindYourSwag** | **#IconicEveryday**
