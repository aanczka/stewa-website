# How to add a news item

Every news item is one small text file in the `_posts` folder. The website
sorts them by date automatically (newest first), shows the four most recent on
the homepage and gives each one its own page under **News**.

## Option A – directly in the browser on GitHub (no software needed)

1. Open the repository on github.com and click the **`_posts`** folder.
2. Click **Add file → Create new file**.
3. Name the file using the date and a short title, all lowercase, words joined with dashes:
   ```
   2026-10-05-planting-day-in-tallinn.md
   ```
   The date at the start **must** be `YYYY-MM-DD` – it decides the order on the site.
4. Paste the template below into the file and replace the text.
5. Click **Commit changes** (green button). Within 1–2 minutes the site rebuilds
   and the news item is live.

### To add a photo
1. Open the `assets/img/news` folder on GitHub → **Add file → Upload files**,
   drag your photo(s) in and commit. Use simple names without spaces, e.g.
   `2026-10-05-tallinn-1.jpg`. Resize large photos to about 1400 px wide first
   (a phone screenshot or any photo editor can do this) – it keeps the site fast.
2. In the post file, put the path in the `image:` line:
   `image: /assets/img/news/2026-10-05-tallinn-1.jpg`

## Option B – on your computer

Copy `_templates/news-post.md` into `_posts/`, rename it with the date prefix,
edit it, drop photos into `assets/img/news/`, then commit and push with git
(or GitHub Desktop).

## The template

```markdown
---
title: "Title of the news item"
date: 2026-10-05
location: Tallinn, Estonia
image: /assets/img/news/2026-10-05-tallinn-1.jpg
excerpt: "One or two sentences shown on the news card. Keep it under ~160 characters."
gallery:
  - /assets/img/news/2026-10-05-tallinn-2.jpg
  - /assets/img/news/2026-10-05-tallinn-3.jpg
video: https://www.youtube.com/watch?v=XXXXXXXXXXX
---
Write the article here. Blank lines separate paragraphs.

**Bold text** uses two asterisks. Lists start with a dash:

- first point
- second point
```

Rules of thumb:
- Keep the three dashes `---` lines exactly as they are; the lines between them
  are the "settings" of the post.
- `title` and `excerpt` must stay inside double quotes.
- `location`, `image`, `gallery` and `video` are optional – delete the lines you
  don't need. Without `image`, the card shows a green leaf placeholder.
- `video` accepts a YouTube link or a path to an `.mp4` file uploaded to
  `assets/video/`.
- Dates in the future are hidden until that day arrives, so you can prepare a
  post in advance.

## Editing or deleting

Open the file in `_posts` on GitHub, click the pencil icon to edit or the
trash icon to delete, then commit.

## Other content

| What                     | Where                                           |
|--------------------------|-------------------------------------------------|
| Mobilities               | `_mobilities/` – one file per mobility, same idea as posts (see the two existing ones) |
| Partners                 | `_data/partners.yml` + logos in `assets/img/partners/` |
| Menu                     | `_data/navigation.yml`                          |
| Social media links       | `_config.yml` → `social:`                       |
| About / Outputs pages    | `about.md`, `outputs.md`                        |
