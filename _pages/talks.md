---
layout: page
title: talks
permalink: /talks/
description: 
nav: true
nav_order: 7
---

{% assign items = site.talks | sort: "date" | reverse %}
{% assign current_year = "" %}

<div class="talks-list">
  {% for t in items %}
    {% assign y = t.date | date: "%Y" %}
    {% if y != current_year %}
      {% unless forloop.first %}</div>{% endunless %}
      <h3 class="mt-2 mb-3">{{ y }}</h3>
      <div class="talks-year-group">
      {% assign current_year = y %}
    {% endif %}

    <div class="talk-card">
      {% assign kind = t.type | downcase | strip %}
      {% if kind == "invited" %}
        <span class="talk-badge talk-badge-invited" aria-label="Invited talk">invited</span>
      {% elsif kind == "conference" %}
        <span class="talk-badge talk-badge-conference" aria-label="Conference talk">conference</span>
      {% endif %}

      <!-- LEFT: uniform-sized live preview from local lightweight PDF -->
      <div class="preview-fixed">
        <div class="pdf-preview" data-pdf-url="{{ t.pdf_preview | relative_url }}">
          <div class="pdf-stage">
            <canvas class="pdf-canvas"></canvas>
            <div class="pdf-controls">
              <button class="pdf-prev" aria-label="Previous slide">‹</button>
              <span class="pdf-page"></span>
              <button class="pdf-next" aria-label="Next slide">›</button>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: details -->
      <div class="flex-grow-1">
        <h5 class="mb-1">{{ t.title }}</h5>
        <div class="text-muted mb-2">{{ t.date | date: "%B %-d, %Y" }}</div>

        <div class="text-muted">
          {% if t.event %}{{ t.event }}{% endif %}
          {% if t.location %} · {{ t.location }}{% endif %}
        </div>

        {% if t.abstract %}
          <p class="mb-2 mt-2">{{ t.abstract }}</p>
        {% endif %}

        <div class="d-flex flex-wrap gap-2 mt-2">
          {% if t.pdf_full %}
            <a class="btn btn-sm btn-outline-primary" href="{{ t.pdf_full }}" target="_blank" rel="noopener">
              Download full slides 
            </a>
          {% endif %}
          {% if t.video %}
            <a class="btn btn-sm btn-outline-secondary" href="{{ t.video }}" target="_blank" rel="noopener">
              Video
            </a>
          {% endif %}
          {% if t.event_url %}
            <a class="btn btn-sm btn-outline-secondary" href="{{ t.event_url }}" target="_blank" rel="noopener">
              Event page
            </a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<!-- PDF.js (CDN) -->
<script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js"></script>
<script>
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
</script>

<!-- Uniform preview initializer (letterboxes to fit 16:9 box; fixed width across talks) -->
<script>
(function(){
  const previews = document.querySelectorAll('.pdf-preview');

  // Lazy init for performance
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => { if (e.isIntersecting) { initPreview(e.target); io.unobserve(e.target); } });
  }, { rootMargin: '200px' });
  previews.forEach(p => io.observe(p));

  async function initPreview(container){
    const url = container.getAttribute('data-pdf-url');
    const stage = container.querySelector('.pdf-stage');
    const canvas = container.querySelector('.pdf-canvas');
    const pageLabel = container.querySelector('.pdf-page');
    const prevBtn = container.querySelector('.pdf-prev');
    const nextBtn = container.querySelector('.pdf-next');

    let pdf;
    try {
      pdf = await pdfjsLib.getDocument({ url }).promise;
    } catch (err) {
      stage.innerHTML =
        '<div class="d-flex align-items-center justify-content-center w-100 h-100 bg-light rounded"><span class="small text-muted">Preview unavailable</span></div>';
      return;
    }

    let pageNum = 1;
    const total = pdf.numPages;

    function size(){
      const w = stage.clientWidth || 260;
      const h = stage.clientHeight || Math.round(w * 9 / 16);
      return { w, h };
    }

    async function render(){
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });

      const { w: stageWidth, h: stageHeight } = size();

      const scaleX = stageWidth / viewport.width;
      const scaleY = stageHeight / viewport.height;
      const scale = Math.min(scaleX, scaleY);
      const scaled = page.getViewport({ scale });

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(stageWidth * dpr);
      canvas.height = Math.floor(stageHeight * dpr);
      canvas.style.width = stageWidth + 'px';
      canvas.style.height = stageHeight + 'px';

      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, stageWidth, stageHeight);

      const offsetX = (stageWidth - scaled.width) / 2;
      const offsetY = (stageHeight - scaled.height) / 2;

      await page.render({
        canvasContext: ctx,
        viewport: scaled,
        transform: [1, 0, 0, 1, offsetX, offsetY]
      }).promise;

      pageLabel.textContent = `${pageNum} / ${total}`;
      prevBtn.disabled = (pageNum === 1);
      nextBtn.disabled = (pageNum === total);
    }

    prevBtn.addEventListener('click', () => { if (pageNum > 1) { pageNum--; render(); } });
    nextBtn.addEventListener('click', () => { if (pageNum < total) { pageNum++; render(); } });

    const onResize = debounce(render, 150);
    window.addEventListener('resize', onResize);
    render();
  }

  function debounce(fn, ms){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }
})();
</script>

<style>
/* -------- Layout & spacing -------- */
.talks-year-group { display: block; }
.talk-card {
  position: relative; /* for badge placement */
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  border: 1px solid var(--bs-border-color, rgba(0,0,0,.125));
  border-radius: .5rem;
  background: var(--bs-body-bg);
  margin-bottom: 1.25rem; /* explicit gap between talks */
}

/* -------- Top-right badges -------- */
.talk-badge {
  position: absolute; top: .5rem; right: .5rem;
  font-size: .75rem; line-height: 1;
  padding: .25rem .5rem;
  border-radius: .5rem;
  color: #fff; text-transform: lowercase;
  user-select: none;
}
.talk-badge-invited { background: rgb(27,158,119); }   /* #1b9e77 */
.talk-badge-conference { background: rgb(217,95,2); }  /* #d95f02 */

/* -------- Fixed preview width for all talks -------- */
.preview-fixed {
  flex: 0 0 260px;   /* no grow, no shrink, fixed basis */
  width: 260px;
  min-width: 260px;
}

/* -------- Uniform preview box (16:9) -------- */
.pdf-stage {
  position: relative; width: 100%; aspect-ratio: 16/9;
  overflow: hidden; border-radius: .5rem; background: #f8f9fa;
}
.pdf-stage canvas { display: block; width: 100%; height: 100%; }

/* -------- Controls -------- */
.pdf-controls {
  position: absolute; left: 0; right: 0; bottom: .25rem;
  display: flex; align-items: center; justify-content: center; gap: .5rem;
  pointer-events: none;
}
.pdf-controls button, .pdf-controls .pdf-page {
  pointer-events: auto; border: 1px solid rgba(0,0,0,.1);
  background: rgba(255,255,255,.85);
  padding: .15rem .5rem; border-radius: .375rem; line-height: 1; font-size: .85rem;
}
.pdf-controls .pdf-page { color: rgba(0,0,0,.65); }

/* -------- Dark mode tweaks -------- */
html[data-theme='dark'] .pdf-stage { background: #2a2a2a; }
html[data-theme='dark'] .pdf-controls button, html[data-theme='dark'] .pdf-controls .pdf-page {
  background: rgba(30,30,30,.85); color: rgba(255,255,255,.85); border-color: rgba(255,255,255,.12);
}
</style>
