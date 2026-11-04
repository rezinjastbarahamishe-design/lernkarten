# Lernkarten Schule – standalone app

This folder is the complete app. It does not need Claude or any account to run.

## Files
- `index.html` – the app
- `lessons.js` – all cards and quiz questions (add new lessons here)
- `sw.js`, `manifest.webmanifest`, icons – make it installable and work offline

## Put it online (free, one time)
iPhone can only install a web app from a web address, so the folder has to be hosted once.
Any static host works, for example:
- **Netlify Drop**: open https://app.netlify.com/drop on a computer and drag this folder onto the page.
- **GitHub Pages**: upload the files to a GitHub repository and turn on Pages (Settings → Pages → Deploy from branch → main).

## Install on iPhone
Open the web address in Safari → Share → "Add to Home Screen".
After the first open it also works without internet. Progress is saved on the phone.

## Add a new lesson
Add one more `{ ... }` lesson object to the `LESSONS` list in `lessons.js`
(same format as the Informatik lesson), upload the files again, and raise the
version in `sw.js` (`lernkarten-v1` → `lernkarten-v2`).
