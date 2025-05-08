// Icon loader
feather.replace();

document.querySelectorAll('a').forEach(link => {
    // Pastikan hanya untuk link internal
    const isSameHost = link.hostname === window.location.hostname;

    if (isSameHost && !link.hasAttribute('target')) {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Cek agar tidak jalan untuk anchor atau javascript:void
        if (href.startsWith('#') || href.startsWith('javascript:')) return;

        e.preventDefault();
        document.body.classList.add('fade-out');

        setTimeout(() => {
          window.location.href = href;
        }, 500); // waktu sesuai dengan CSS transition
      });
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
  });