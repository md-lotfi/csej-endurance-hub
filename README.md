agy --conversation=a082dec8-9345-4979-8a32-f2aa7ed0f985

# CSEJ Endurance Hub

Build a modern, high-performance, professional showcase website for an endurance sports club, "CSEJ" (Club Sportif Endurance Jijel).

### Core Requirements & Assets

- **Logo Integration:** Use the provided high-resolution logo (containing a runner, mountain, and Algerian flag symbol) as the primary brand asset in the header. The website's design *must* strictly respect the logo's colors and themes.

- **Bilingual Support (FR/AR):** The entire site must have a seamless bilingual toggle (French and Arabic). Arabic must render correctly with Right-to-Left (RTL) text direction and proper layout re-alignment when activated.

### Brand Color Palette (Derived from Logo)

- **Backgrounds:** Clean, bright White (#FFFFFF) for maximum content readability and a modern feel. Neutral light gray accents (#F8F9FA) for subtle section differentiation.

- **Primary Color:** Deep Forest Green (#006A4E) from the logo for headers, buttons, and navigation text.

- **Accent/Alert Color:** Vibrant Algerian Red (#ED1B24) from the logo for strong Call-to-Actions (CTAs) and active UI elements.

### Visual Style & Photography (Strict Guidelines)

- **Subject Matter:** Focus exclusively on the lower body of athletes: legs, running shoes, track and field surfaces, and mixed trail terrains.

- **Restrictions:** Strict ban on showing upper bodies or faces.

- **Group Composition:** Preference for group imagery showing multiple legs in motion. This must depict camaraderie and intensity in group endurance running and High-Intensity Interval Training (HIIT).

### Detailed Page Structure

1. **Navigation Header:**

   - **Left:** The provided CSEJ logo (image_0.png) with the club name text adjacent in Deep Forest Green.

   - **Center:** Nav links (Accueil, Qui Sommes-Nous, Programmes, Contact).

   - **Right:** Clear Language Toggle (FR | AR) and a prominent Red "Rejoignez-nous" CTA button.

2. **Hero Section:**

   - A full-width, clean photo showing a group of runners' legs starting together on an athletic track. A powerful Deep Green headline in both languages: *"Excellence, Endurance, Jijel – Club Sportif Endurance."*

   - A secondary headline in Red: *"Rejoignez le Mouvement."*

3. **Club Overview:**

   - A clean section with a forest green border, introducing the CSEJ club, its mission in Jijel to promote running and HIIT, and highlighting its Algerian sporting heritage.

4. **Program Showcase (Static/Informational):**

   - Clean, professional cards for training types (Track Running, Trail Endurance, HIIT/Conditioning).

   - A static, clearly legible weekly training timetable presented as an informational grid, matching the white, green, and red scheme. *Do not include any interactive scheduling or booking features.*

5. **Contact & Club Representatives:**

   - Contact form with modern design.

   - Clear listing of official contacts:

     - **Mechtar Hamza:** +213 669 13 24 39

     - **Laissaoui Ferhat:** +213 551 05 66 86

   - Map location placeholder for "36.82193933022667, 5.770131368649796" in Jijel.

6. **Footer:**

   - Minimalist. Repeats the language toggle and key contacts. Includes the text: *"Club Sportif Endurance Jijel © 2024"*.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d69a60e1-b06f-4a24-8e8c-c2daad6c4007).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## GitHub Pages Deployment

This repository is ready for instant hosting on **GitHub Pages**:
- **Option 1 (Branch Deploy)**: In your GitHub repository, navigate to **Settings > Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose branch **`main`**, and set folder to **`/ (root)`**.
- **Option 2 (GitHub Actions)**: In **Settings > Pages**, set **Source** to **GitHub Actions**. The included `.github/workflows/deploy.yml` workflow will automatically build and publish the site on every push to `main`.

## Local Development & Preview

To preview the static site locally with any static server:
```sh
# Using Python
python3 -m http.server 8080

# Or using Node / npx
npx serve .
```
Then open `http://localhost:8080` in your browser.

