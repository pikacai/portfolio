Jukebox case study — image drop folder
======================================

Put two images here and the site picks them up automatically (no code changes):

1. case-study.png   → the full tall case-study export you shared.
                      Shown on the /jukebox page under "Walk through the case study".

2. thumbnail.png    → a ~4:3 or 16:10 crop (e.g. the top hero of the case study).
                      Used for the project card on the Home page and in the footer.

File names must match exactly (lowercase). PNG or JPG both fine — if you use
.jpg, update the two references in:
  - src/components/jukebox/Jukebox.tsx
  - src/components/home/Home.tsx
  - src/components/Footer.tsx
