const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

function toggleCard(cardElement) {
    const expandable = cardElement.querySelector('.expandable');
    expandable.classList.toggle('hidden');
  }

  function toggleCard(cardElement) {
    cardElement.classList.toggle('open');
  }
  
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



