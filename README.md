# STEWA – Save the Earth with Arts · project website

Static website of the Erasmus+ project **SAVE the Earth With Arts**
(2025-1-RO01-KA220-SCH-000354913), built with [Jekyll](https://jekyllrb.com)
and hosted on GitHub Pages.

- **Add news:** see [HOW-TO-ADD-NEWS.md](HOW-TO-ADD-NEWS.md).
- **Design:** green palette and nature imagery inspired by the Nature21 theme;
  self-hosted Poppins; no JavaScript frameworks.

## Publish on GitHub Pages (first time)

1. Create an empty repository on GitHub called `stewa-website` (Public, no README).
2. Push this folder to it:
   ```bash
   git remote add origin git@github.com:aanczka/stewa-website.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions.**
4. In `_config.yml` set `url: "https://aanczka.github.io"` (keep
   `baseurl: "/stewa-website"`), commit and push. The workflow in
   `.github/workflows/jekyll.yml` builds and deploys the site on every push.
5. The site is live at `https://aanczka.github.io/stewa-website/`.

### Custom domain (optional, e.g. www.stewaproject.eu)

1. Create a file named `CNAME` in the repository root containing `www.stewaproject.eu`.
2. In `_config.yml` set `url: "https://www.stewaproject.eu"` and `baseurl: ""`.
3. At your domain provider add a `CNAME` record `www → aanczka.github.io`
   and, for the bare domain, `A` records to `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, `185.199.111.153`.
4. GitHub → Settings → Pages → Custom domain → enter the domain, wait for the
   DNS check, tick **Enforce HTTPS**.

## Run locally

Requires Ruby ≥ 3.1 (`brew install ruby`).

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000/stewa-website/>.

## Structure

```
_posts/            news items (one Markdown file each)
_mobilities/       mobility pages
_data/             partners.yml, navigation.yml
_layouts/          page templates
_includes/         header, footer, cards, gallery…
assets/            css, fonts, images
index.html         homepage
news/, mobilities/ archive pages
about.md, outputs.md, partners.md
```

## Credits

Nature photographs in `assets/img/hero/` are CC0 (pxhere.com) via the Nature21
theme. Poppins font © The Poppins Project Authors, SIL Open Font License 1.1.
