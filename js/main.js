<<<<<<< HEAD

const burger = document.getElementById("burger");
const navigation = document.getElementById("navigation");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

// Menyudan tashqariga bosilganda yopish

document.addEventListener("click", (e) => {
    if (
        !burger.contains(e.target) &&
        !navigation.contains(e.target)
    ) {
        burger.classList.remove("active");
        navigation.classList.remove("active");

        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Open menu");
    }
});

// Link bosilganda menyuni yopish

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        navigation.classList.remove("active");

        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Open menu");
    });
=======
document.addEventListener('DOMContentLoaded', () => {

  /* 1. Scroll reveal (stagger) */
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const i = [...items].indexOf(e.target);
        e.target.style.transitionDelay = (i % 4) * 90 + 'ms';
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));

  /* 2. Checklist: bosilganda belgi yoqiladi / o'chadi */
  document.querySelectorAll('.check').forEach(li => {
    li.setAttribute('tabindex', '0');
    li.setAttribute('role', 'checkbox');
    li.setAttribute('aria-checked', 'true');
    const toggle = () => {
      li.classList.toggle('is-off');
      li.setAttribute('aria-checked', String(!li.classList.contains('is-off')));
      li.classList.remove('pop');
      void li.offsetWidth;            // animatsiyani qayta ishga tushirish
      li.classList.add('pop');
    };
    li.addEventListener('click', toggle);
    li.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  /* 3. Button ripple effekti */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const r = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const s = document.createElement('span');
      s.className = 'ripple';
      s.style.width = s.style.height = size + 'px';
      s.style.left = e.clientX - r.left - size / 2 + 'px';
      s.style.top = e.clientY - r.top - size / 2 + 'px';
      btn.appendChild(s);
      setTimeout(() => s.remove(), 600);
    });
  });

  /* 4. Modal */
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openModal');
  const openModal = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('name').focus(), 300);
  };
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  openBtn.addEventListener('click', () => setTimeout(openModal, 150));
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* 5. Forma tekshiruvi */
  const form = document.getElementById('leadForm');
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    let ok = true;

    [name, phone].forEach(inp => inp.parentElement.classList.remove('error'));
    if (name.value.trim().length < 2) { name.parentElement.classList.add('error'); ok = false; }
    if (phone.value.replace(/\D/g, '').length < 7) { phone.parentElement.classList.add('error'); ok = false; }

    if (!ok) {
      msg.style.color = '#e8112d';
      msg.textContent = 'Проверьте введённые данные';
      return;
    }
    msg.style.color = '#3c9d5d';
    msg.textContent = 'Спасибо! Мы скоро свяжемся с вами.';
    form.reset();
    setTimeout(() => { closeModal(); msg.textContent = ''; }, 1800);
  });

  /* 6. Rasmlarda yengil parallax (sichqoncha bilan) */
  const hero = document.querySelector('.hero');
  const main = document.querySelector('.img--main');
  const small = document.querySelector('.img--small');
  if (window.matchMedia('(min-width:901px)').matches) {
    hero.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      main.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
      small.style.transform = `translate(${x * 14}px, ${y * 14}px)`;
    });
    hero.addEventListener('mouseleave', () => {
      main.style.transform = small.style.transform = '';
    });
    main.style.transition = small.style.transition = 'transform .4s ease';
  }
>>>>>>> 328e92b (u)
});
