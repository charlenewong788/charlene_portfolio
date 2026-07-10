# Charlene Huang — Portfolio

Personal portfolio of **Charlene Huang** (Huang Yijun), lighting researcher & designer in London.
MSc Light & Lighting, UCL Institute for Environmental Design and Engineering.

**Live site → [charlenewong788.github.io/charlene_portfolio](https://charlenewong788.github.io/charlene_portfolio/)**

## The idea

Light is the design material. The page behaves like a lit space rather than a coloured layout:

- **A colour-temperature dial** (2200 K night · 2700 K dusk · 4000 K studio · 6500 K daylight) relights the whole page, the way a lighting scene relights a room.
- **The cursor is a luminaire** — it carries a warm pool of light across the hero, with dust drifting in the beam.
- Section headings strike on like fluorescent tubes; project rows dim their neighbours on hover, like turning up one channel on a dimmer rack.
- The contact section shows **live London time and daylight status**, computed client-side from solar geometry. No APIs.
- Motion respects `prefers-reduced-motion`; the layout is responsive down to mobile.

## Structure

```
index.html   the entire site — markup, styles and scripts in one hand-built file
assets/      project images
```

No frameworks, no build step, no dependencies beyond Google Fonts.

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```
python -m http.server
```

## Featured

- CONTINUUM — modular personal exposure monitoring (UCL IEDE × Institute of Ophthalmology), project researcher
- Smart classroom windows for daylight & glare — Wiley IJMHN paper, ICDAMI 2024 Best Abstract
- Tooth segmentation with BiSeNet — IEEE ISHC 2023, first author
- Dancing with Daylight — a daylight-driven house by the sea, 20-board design portfolio
- Light | Shadow — integrated lighting design for Mysteria (UCL BENV0190)

---

© 2026 Charlene Huang. All rights reserved.
