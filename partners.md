---
title: Project Partners
permalink: /partners/
wide: true
lead: Six organisations from six countries work together in Save the Earth with Arts, combining expertise in special and inclusive education, adult learning, educational technology and the arts.
description: The six partner organisations of the Save the Earth with Arts Erasmus+ project.
---
<div class="partner-grid">
{%- for p in site.data.partners %}
  <article class="partner-card">
    <div class="partner-card__logo"><img src="{{ p.logo | relative_url }}" alt="{{ p.short | escape }} logo" loading="lazy"></div>
    <div class="partner-card__body">
      <p class="card__meta"><span class="role role--{{ p.role | downcase }}">{{ p.role }}</span> {{ p.flag }} {{ p.country }}</p>
      <h3>{{ p.name }}</h3>
      <p class="partner-card__address">{{ p.address }}</p>
      <a class="card__more" href="{{ p.website }}" target="_blank" rel="noopener">{{ p.website | remove: 'https://' | remove: 'http://' | remove: 'www.' | split: '/' | first }} <span aria-hidden="true">&rarr;</span></a>
    </div>
  </article>
{%- endfor %}
</div>
