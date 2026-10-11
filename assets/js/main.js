/**
 * Polform S.r.l. — Client-Side Micro-Interactions & Static Search
 * Zero external frameworks. Zero remote dependencies.
 * Clean vanilla JavaScript for high reliability and performance.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Three-Way Theme Management (Light / System-Auto / Dark)
     ========================================================================== */
  var themeButtons = document.querySelectorAll('[data-theme-val]');
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    themeButtons.forEach(function (btn) {
      var val = btn.getAttribute('data-theme-val');
      if (val === theme) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
  }

  // Initial active button highlight based on current setting
  var initialSetting = 'auto';
  try {
    initialSetting = localStorage.getItem('polform-theme') || 'auto';
  } catch (e) {}
  applyTheme(initialSetting);

  themeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var selected = btn.getAttribute('data-theme-val') || 'auto';
      try {
        localStorage.setItem('polform-theme', selected);
      } catch (e) {}
      applyTheme(selected);
    });
  });

  /* ==========================================================================
     2. Mobile Responsive Hamburger Navigation Toggle
     ========================================================================== */
  var mobileToggle = document.getElementById('mobile-menu-toggle');
  var navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     3. Instant Client-Side Static Search (Modal Dialog + Shortcuts)
     ========================================================================== */
  var searchModal = document.getElementById('search-modal');
  var searchTrigger = document.querySelector('[data-search-trigger]');
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var searchCloseBtn = document.getElementById('search-close-btn');
  var searchIndex = null;

  function loadSearchIndex() {
    if (searchIndex) return Promise.resolve(searchIndex);
    var searchUrl = document.body.getAttribute('data-search-url') || '/index.json';
    return fetch(searchUrl)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        searchIndex = data;
        return data;
      })
      .catch(function (err) {
        console.error('Failed to load search index:', err);
        return [];
      });
  }

  function openSearch() {
    if (!searchModal) return;
    loadSearchIndex();
    if (typeof searchModal.showModal === 'function') {
      searchModal.showModal();
    } else {
      searchModal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      if (searchInput) searchInput.focus();
    }, 50);
  }

  function closeSearch() {
    if (!searchModal) return;
    if (typeof searchModal.close === 'function') {
      searchModal.close();
    } else {
      searchModal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  if (searchTrigger) {
    searchTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      openSearch();
    });
  }
  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', closeSearch);
  }
  if (searchModal) {
    searchModal.addEventListener('click', function (e) {
      if (e.target === searchModal) closeSearch();
    });
    searchModal.addEventListener('cancel', function () {
      document.body.style.overflow = '';
    });
  }

  // Keyboard navigation shortcuts: Ctrl+K, Cmd+K, or slash key '/'
  document.addEventListener('keydown', function (e) {
    var isK = (e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K');
    var isSlash = e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey;
    var activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (isSlash && (activeTag === 'INPUT' || activeTag === 'TEXTAREA')) return;
    if (isK || isSlash) {
      e.preventDefault();
      if (searchModal && searchModal.open) {
        closeSearch();
      } else {
        openSearch();
      }
    }
  });

  // Real-time client-side query filtering
  if (searchInput && searchResults) {
    var emptyPrompt = (searchModal && searchModal.getAttribute('data-empty-prompt')) || 'Type to search...';
    var noResultsPrompt = (searchModal && searchModal.getAttribute('data-no-results-prompt')) || 'No results for';

    searchInput.addEventListener('input', function () {
      var query = searchInput.value.trim().toLowerCase();
      if (!query) {
        searchResults.innerHTML = '<div class="search-empty-state">' + escapeHtml(emptyPrompt) + '</div>';
        return;
      }
      loadSearchIndex().then(function (pages) {
        var matches = pages.filter(function (p) {
          var titleMatch = (p.title || '').toLowerCase().indexOf(query) !== -1;
          var descMatch = (p.description || '').toLowerCase().indexOf(query) !== -1;
          var catMatch = (p.category || '').toLowerCase().indexOf(query) !== -1;
          var codeMatch = (p.code || '').toLowerCase().indexOf(query) !== -1;
          return titleMatch || descMatch || catMatch || codeMatch;
        });

        if (!matches.length) {
          searchResults.innerHTML = '<div class="search-empty-state">' + escapeHtml(noResultsPrompt) + ' "<strong>' + escapeHtml(query) + '</strong>".</div>';
          return;
        }

        var html = '<ul class="search-hit-list">';
        matches.slice(0, 8).forEach(function (m) {
          html += '<li class="search-hit-item">' +
            '<a href="' + m.url + '" class="search-hit-link">' +
              '<div class="search-hit-meta">' +
                (m.code ? '<span class="card-code">' + m.code + '</span>' : '') +
                (m.category ? '<span class="badge" style="font-size:0.7rem;">' + m.category + '</span>' : '') +
              '</div>' +
              '<div class="search-hit-title">' + highlight(m.title, query) + '</div>' +
              '<div class="search-hit-desc">' + (m.description || '') + '</div>' +
            '</a>' +
          '</li>';
        });
        html += '</ul>';
        searchResults.innerHTML = html;
      });
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  function highlight(text, query) {
    if (!text) return '';
    var regex = new RegExp('(' + query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + ')', 'gi');
    return escapeHtml(text).replace(regex, '<mark>$1</mark>');
  }

  /* ==========================================================================
     4. Native Zero-Dependency Image Lightbox
     ========================================================================== */
  var contentArea = document.querySelector('.content') || document.querySelector('main');
  if (contentArea) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML =
      '<button class="lb-nav lb-prev" aria-label="Previous" type="button">‹</button>' +
      '<img alt="Enlarged view" src="" class="lb-img">' +
      '<button class="lb-nav lb-next" aria-label="Next" type="button">›</button>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector('.lb-img');
    var lbPrev = lb.querySelector('.lb-prev');
    var lbNext = lb.querySelector('.lb-next');
    var lbImages = [];
    var lbIndex = 0;

    function openLightbox(list, idx) {
      lbImages = list;
      lbIndex = idx;
      lbImg.src = lbImages[lbIndex];
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      var showNav = lbImages.length > 1;
      lbPrev.style.display = showNav ? 'grid' : 'none';
      lbNext.style.display = showNav ? 'grid' : 'none';
    }

    function closeLightbox() {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
      lbImg.src = '';
      lbImages = [];
    }

    function navigateLightbox(dir) {
      if (lbImages.length < 2) return;
      lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
      lbImg.src = lbImages[lbIndex];
    }

    contentArea.addEventListener('click', function (e) {
      var target = e.target;
      if (target.tagName === 'IMG' && target.classList.contains('zoomable')) {
        var imgs = Array.prototype.slice.call(contentArea.querySelectorAll('img.zoomable'));
        var srcList = imgs.map(function (i) { return i.currentSrc || i.src; });
        openLightbox(srcList, imgs.indexOf(target));
      }
    });

    lbPrev.addEventListener('click', function (e) { e.stopPropagation(); navigateLightbox(-1); });
    lbNext.addEventListener('click', function (e) { e.stopPropagation(); navigateLightbox(1); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target === lbImg) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') navigateLightbox(-1);
      else if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

})();
