// 카드/섹션 등장 애니메이션 (Intersection Observer)
window.addEventListener('DOMContentLoaded', () => {
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });
  document.querySelectorAll('.card, .journey-card, .main-card, main > section').forEach(el => {
    observer.observe(el);
  });

  // 햄버거 메뉴 토글
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar .menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
    // 메뉴 클릭 시 닫기 (모바일 UX)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
      });
    });
  }
}); 