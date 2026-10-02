# Global Eagle Travel

A bilingual travel and tourism website developed by Gheid Abdulkarim. Vercel hosts the website and admin dashboard; Firebase Realtime Database provides persistent content.

- Website: https://eagle-azure.vercel.app/
- Admin: https://eagle-azure.vercel.app/admin.html
- GitHub: https://github.com/iamghaid/eagle

## Features

English/Arabic with RTL layouts, dark/light themes, GSAP scroll reveals and parallax, travel packages, services, offers, gallery, statistics and WhatsApp inquiries. Visitor preferences persist locally. Portfolio links pass `portfolio_lang` and `portfolio_theme`; validated messages from the portfolio parent update previews without reloading.

Four independent hero assets keep the eagle opposite the copy:

| Language | Theme | Asset | Admin field |
| --- | --- | --- | --- |
| English | Dark | assets/hero-en-dark.jpg | heroImgEnDark |
| English | Light | assets/hero-en-light.jpg | heroImgEnLight |
| Arabic | Dark | assets/hero-ar-dark.png | heroImgArDark |
| Arabic | Light | assets/hero-ar-light.png | heroImgArLight |

The admin can replace or restore each image separately. Old shared images remain stored, while the site uses the four dedicated fields. Arabic hero text has separate fields. Theme-aware gradients and text colors retain contrast. A transparent gold eagle icon is used for the company mark and favicon.

## Admin and backend

The implemented admin code uses Firebase Authentication with Google sign-in, session persistence and an authorized-account check. The published database rules enforce writes by the verified Google account `gheidabdulkarim@gmail.com` only; the frontend check alone is not the security boundary. The old client-side password and local password-change controls have been removed.

Public nodes are `packages`, `offers`, `pricing`, `services`, `gallery`, `info` and `settings`. Root reads, other nodes and anonymous writes are denied. Existing data is retained. The previous time-limited test rules expired on July 1, 2026; `database.rules.json` replaces them with non-expiring scoped access.

Writes must succeed in Firebase before success is shown. Failed writes are reported; local storage is a secondary cache, not a production database. Login no longer writes a test node.

The dashboard manages bilingual packages, offers, prices, services, English/Arabic hero text, four hero images, company icon, intro image, statistics, gallery, contact details and settings. Image uploads use data URLs with a 6 MB limit. Large galleries should move to dedicated object storage. Inquiries go to WhatsApp; no reservation or payment backend is included.

Firebase remains the managed backend. Vercel serves static files, so no long-running server or temporary filesystem storage is necessary. Firebase public web configuration identifies the app; private service-account credentials are not shipped.

## Console configuration

Database rules have been published. Google provider activation and the authorized Vercel domain must also be configured before admin sign-in works.

1. Enable Google under Authentication → Sign-in method.
2. Add `eagle-azure.vercel.app` under Authentication → Settings → Authorized domains.
3. Publish `database.rules.json` under Realtime Database → Rules.
4. Sign in at `/admin.html` with the authorized account.

The email in `admin-access.js` must match the rules. The OAuth support email does not grant editing rights.

## Deployment and stack

Push to GitHub and run `vercel deploy --prod` for the linked Eagle project. `vercel.json` adds MIME protection, referrer policy and no-store/noindex/frame-denial headers to the admin page. The public page remains embeddable in the portfolio.

HTML, CSS, JavaScript, GSAP 3 / ScrollTrigger, Firebase Authentication, Firebase Realtime Database v9 compatibility SDK, Font Awesome, Google Fonts, Git/GitHub and Vercel. English typography uses Cinzel/Poppins; Arabic uses Amiri/IBM Plex Sans Arabic.

## Generated assets

Built-in image generation created the Arabic variants and transparent icon, saved under `assets/`. English photos are retained unchanged.

Arabic prompt: horizontally mirror the original eagle and landscape, preserve its identity, lighting, dark/light palette and 3:2 composition; put the eagle on the left facing right with negative space on the right; no text or added objects.

Icon prompt: compact professional flying eagle, ascending swept wings, gold and bronze, clean recognizable silhouette, no text, circle, shield, scenery or background.
