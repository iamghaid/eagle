# 🦅 Global Eagle Travel
### Rise Above. Aim High.

A luxury travel & tourism website for **Global Eagle Travel** — Saudi Arabia.
Built with pure HTML/CSS/JS + Firebase Realtime Database for live sync across all devices.

---

## 🌐 Live Site
**[iamghaid.github.io/eagle/index.html](https://iamghaid.github.io/eagle/index.html)**

---

## 📁 Project Files

| File | Description |
|------|-------------|
| `index.html` | Main website — public facing |
| `admin.html` | Admin dashboard — manage all content |
| `README.md` | This file |

---

## ✨ Features

### Website (`index.html`)
- 🌙 Dark / ☀️ Light mode toggle
- 🌍 Bilingual — English & Arabic with full RTL support
- 🔤 Instant font switching — no flash or delay
- 🎬 Cinematic loader animation synced with Firebase loading
- ✈️ Hero section with parallax & particle effects
- 📦 Packages grid — pulled live from Firebase, fully bilingual
- 🪜 How It Works — interactive steps timeline with auto-cycle
- 🛎️ Services bento grid — translates names & descriptions
- 🔤 Running marquee with translated service names
- 🖼️ Gallery section — auto-shows when images exist
- 📞 Contact form → sends directly via WhatsApp
- 📱 Fully responsive — iPhone, Android, tablet & desktop

### Admin (`admin.html`)
- 🔐 Password protected login
- 🔥 Firebase Realtime Database — changes appear instantly on ALL devices worldwide
- 📦 Add / edit / delete travel packages with images, Arabic & English names
- 🏷️ Manage special offers & service pricing
- 🛎️ Show / hide services in bento & marquee
- 🎨 Hero text, typography & background images (separate dark + light versions)
- 📸 Gallery management with drag & drop upload
- 📊 Hero stats — destinations, fleet, members, years
- ℹ️ Company info — phone, WhatsApp, email, social links
- ⚙️ Site settings — intro animation, WhatsApp button, maintenance mode
- 📱 Fully mobile responsive — works on phone & laptop

---

## 🔥 Firebase Setup

Firebase config is **hardcoded directly** in both files.
Any device that opens either file connects to the same database automatically — no setup needed.

**Project:** `eagle-b6d1c`
**Database:** `eagle-b6d1c-default-rtdb` (asia-southeast1 region)

### Database Structure
```
/packages    → travel package objects (nameEn, nameAr, catEn, catAr, price, img...)
/offers      → special offer objects (title, discount)
/pricing     → service pricing rows
/services    → service objects (name, status)
/gallery     → base64 image strings array
/info        → company info & hero settings
/settings    → site feature toggles
```

---

## 🚀 Deployment

Hosted on **GitHub Pages** — auto-deploys on every push to `main`.

### To update the site:
1. Edit files in **VS Code**
2. Write a commit message (e.g. `update packages`)
3. Click **Commit** → **Sync Changes**
4. Wait ~60 seconds → live on all devices ✅

---

## 🔐 Admin Access

| Field | Value |
|-------|-------|
| **URL** | `iamghaid.github.io/eagle/admin.html` |
| **Username** | `admin` |
| **Default Password** | `eagle2025` |

> ⚠️ Change the password from **Settings** inside the dashboard after first login.

---

## 🌍 Bilingual Support

The site supports full English ↔ Arabic switching including:

| Element | Translated |
|---------|-----------|
| All static text | ✅ |
| Package names & categories | ✅ |
| Service names & descriptions | ✅ |
| Package duration (Nights/Days) | ✅ |
| Contact form labels & placeholders | ✅ |
| How It Works steps | ✅ |
| Running marquee | ✅ |
| Fonts (Cinzel/Poppins ↔ Amiri/IBM Plex Arabic) | ✅ instant |

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| `390px` | iPhone SE / small phones |
| `580px` | Standard mobile |
| `768px` | Small tablet |
| `900px` | Tablet / iPad |
| `1100px` | Small laptop |
| `1300px+` | Desktop |

---

## 📱 Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML / CSS / JavaScript | No frameworks — pure vanilla |
| GSAP 3 | Animations, scroll triggers, parallax |
| Firebase Realtime DB v9 | Live data sync across all devices |
| Font Awesome 6 | Icons |
| Google Fonts | Cinzel, Poppins, Amiri, IBM Plex Arabic |
| GitHub Pages | Free hosting with auto-deploy |

---

## 📞 Contact

**Global Eagle Travel**
📱 +966 50 174 9914
📧 info@globaleagletrv.com
📍 Saudi Arabia

---

*© 2025 Global Eagle Travel. The Majesty of Flight.*
