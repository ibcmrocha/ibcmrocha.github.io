---
layout: page
title: Talks
permalink: /talks/
description: Invited and conference talks.
nav: true
nav_order: 7
---

<div class="vstack gap-4">
  {% assign items = site.talks | sort: "date" | reverse %}
  {% for t in items %}
    <div class="d-flex align-items-start gap-3 hoverable p-2 rounded border talk-row">
      <!-- LEFT: live PDF preview (from local light PDF) -->
      <div class="pdf-preview" data-pdf-url="{{ t.pdf_preview | relative_url }}" style="max-width:240px; min-width:200px;">
        <div class="pdf-stage ratio ratio-16x9">
          <canvas class="pdf-canvas"></canvas>
          <div class="pdf-controls">
            <button class="pdf-prev" aria-label="Previous slide">‹</button>
            <span class="pdf-page"></span>
            <button class="pdf-next" aria-label="Next slide">›</button>
          </div>
        </div>
        <div class="small mt-1">
          <a href="{{ t.pdf_preview | relative_url }}" target="_blank" rel="noopener">Open preview ↗</a>
        </div>
      </div>

      <!-- RIGHT: details -->
      <div class="flex-grow-1">
        <div class="d-flex flex-wrap align-items-baseline gap-2">
          <h5 class="mb-0">{{ t.title }}</h5>
          <span class="text-muted">· {{ t.date | date: "%B %-d, %Y" }}</span>
        </div>

        <div class="text-muted mt-1">
          {% if t.event %}{{ t.event }}{% endif %}
          {% if t.location %} · {{ t.location }}{% endif %}
          {% if t.type %} · {{ t.type | capitalize }}{% endif %}
        </div>

        {% if t.abstract %}
          <p class="mb-2 mt-2">{{ t.abstract }}</p>
        {% endif %}

        <!-- Buttons (same vibe as Publications: small, outline) -->
        <div class="d-flex flex-wrap gap-2">
          {% if t.pdf_full %}
            <a class="btn btn-sm btn-outline-primary" href="{{ t.pdf_full }}" target="_blank" rel="noopener">
              Download full PDF
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

<!-- PDF.js (CDN) and initializer -->
<script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js"></script>
<script>
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
</script>
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
    const canvas = container.querySelector('.pdf-canvas');
    const pageLabel = container.querySelector('.pdf-page');
    const prevBtn = container.querySelector('.pdf-prev');
    const nextBtn = container.querySelector('.pdf-next');

    let pdf;
    try {
      pdf = await pdfjsLib.getDocument({ url }).promise;
    } catch (err) {
      container.querySelector('.pdf-stage').innerHTML =
        '<div class="d-flex align-items-center justify-content-center w-100 h-100 bg-light rounded"><span class="small text-muted">Preview unavailable</span></div>';
      return;
    }

    let pageNum = 1;
    const total = pdf.numPages;
    pageLabel.textContent = `1 / ${total}`;

    async function render(){
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });

      const stage = container.querySelector('.pdf-stage');
      const stageWidth = stage.clientWidth || 240;
      const scale = stageWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      const ctx = canvas.getContext('2d');
      canvas.width = Math.floor(scaledViewport.width);
      canvas.height = Math.floor(scaledViewport.height);

      await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;

      pageLabel.textContent = `${pageNum} / ${total}`;
      prevBtn.disabled = (pageNum === 1);
      nextBtn.disabled = (pageNum === total);
    }

    prevBtn.addEventListener('click', () => { if (pageNum > 1) { pageNum--; render(); } });
    nextBtn.addEventListener('click', () => { if (pageNum < total) { pageNum++; render(); } });
    window.addEventListener('resize', debounce(render, 150));

    render();
  }

  function debounce(fn, ms){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }
})();
</script>
