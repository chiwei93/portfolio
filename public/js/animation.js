//register scroll plugin
gsap.registerPlugin(ScrollTrigger);

//enable scroll trigger animations
const enableScrollTrigger = container => {
  const watermark = container.querySelector('.skills p');

  const watermarkAnim = gsap.from(watermark, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 0.5,
    clearProps: 'all',
    paused: true,
  });

  ScrollTrigger.create({
    trigger: watermark,
    start: 'top 90%',
    onEnter: () => watermarkAnim.restart(),
  });

  ScrollTrigger.create({
    trigger: watermark,
    start: 'top 130%',
    onLeaveBack: () => watermarkAnim.pause(0),
  });

  const skillHeading = container.querySelector('.skills h2');

  const skillHeadingAnim = gsap.from(skillHeading, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 1,
    clearProps: 'all',
    paused: true,
  });

  ScrollTrigger.create({
    trigger: skillHeading,
    start: 'top 65%',
    onEnter: () => skillHeadingAnim.restart(),
  });

  ScrollTrigger.create({
    trigger: skillHeading,
    start: 'top 120%',
    onLeaveBack: () => skillHeadingAnim.pause(0),
  });

  const skillsItems = container.querySelectorAll('.skills_item');

  skillsItems.forEach(item => {
    const anim = gsap.from(item, {
      xPercent: -100,
      autoAlpha: 0,
      duration: 1,
      clearProps: 'all',
      paused: true,
    });

    ScrollTrigger.create({
      trigger: item,
      start: 'top 75%',
      onEnter: () => anim.restart(),
    });

    ScrollTrigger.create({
      trigger: item,
      start: 'top 110%',
      onLeaveBack: () => anim.pause(0),
    });
  });

  const projectsHeading = container.querySelector('#projects h2');

  const projectsHeadingAnim = gsap.from(projectsHeading, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 1,
    clearProps: 'all',
    paused: true,
  });

  ScrollTrigger.create({
    trigger: projectsHeading,
    start: 'top 60%',
    onEnter: () => projectsHeadingAnim.restart(),
  });

  ScrollTrigger.create({
    trigger: projectsHeading,
    start: 'top 110%',
    onLeaveBack: () => projectsHeadingAnim.pause(0),
  });

  const projectItems = container.querySelectorAll('.projects_item');

  projectItems.forEach(item => {
    const anim = gsap.from(item, {
      xPercent: -100,
      autoAlpha: 0,
      duration: 1,
      clearProps: 'all',
      paused: true,
    });

    ScrollTrigger.create({
      trigger: item,
      start: 'top 65%',
      onEnter: () => anim.restart(),
    });

    ScrollTrigger.create({
      trigger: item,
      start: 'top 110%',
      onLeaveBack: () => anim.pause(0),
    });
  });
};

//for home page initial load animation
const initialHomePageLoad = container => {
  const welcomeContainer = document.querySelector('.welcome_container');
  const welcomeText = document.querySelector('.welcome_text span');
  const welcomeTextCover = document.querySelector('.welcome_text_cover');
  const navLinks = document.querySelectorAll('.nav_link');
  const rocket = document.querySelector('.rocket');
  const heroHeadings = document.querySelectorAll('.hero_heading');
  const projectBtn = document.querySelector('.hero_btn');
  const resumeBtn = document.querySelector('.hero_resume_btn');
  const scrollTopBtn = document.querySelector('#btn_scroll_top');

  const tl = gsap.timeline({ defaults: { duration: 1 } });

  tl.to(welcomeTextCover, { xPercent: 101, duration: 1.5 })
    .to(welcomeText, { yPercent: 101, delay: 0.5 })
    .to(welcomeContainer, { xPercent: -101 })
    .from(
      navLinks,
      {
        autoAlpha: 0,
        yPercent: -100,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power2.in',
        clearProps: 'all',
      },
      '<.1'
    )
    .from(rocket, { autoAlpha: 0, duration: 0.5, clearProps: 'all' }, '<.3')
    .from(heroHeadings, {
      autoAlpha: 0,
      xPercent: -50,
      stagger: 0.2,
      ease: 'power2.out',
      clearProps: 'all',
    })
    .from(projectBtn, {
      autoAlpha: 0,
      yPercent: 100,
      duration: 0.5,
      ease: 'power4.out',
      clearProps: 'all',
    })
    .from(
      resumeBtn,
      {
        autoAlpha: 0,
        yPercent: 100,
        duration: 0.5,
        ease: 'power4.out',
        clearProps: 'all',
      },
      '<.2'
    )
    .from(
      scrollTopBtn,
      {
        autoAlpha: 0,
        scale: 0,
        duration: 0.5,
        ease: 'power4.in',
        clearProps: 'all',
      },
      '<.1'
    );

  enableScrollTrigger(container);

  return tl;
};

//for contact page initial load
const contactPageInitialLoad = container => {
  const navLinks = document.querySelectorAll('.nav_link');
  const form = document.querySelector('.contact_form');
  const infoContainer = document.querySelector('.contact_info_container');

  const tl = gsap.timeline({ defaults: { clearProps: 'all', autoAlpha: 0 } });

  tl.from(navLinks, {
    yPercent: -100,
    duration: 0.5,
  })
    .from(form, {
      width: 0,
      duration: 1.5,
      ease: 'bounce',
    })
    .from(infoContainer, {
      duration: 1,
      ease: 'power4.in',
    });

  return tl;
};

//for thank you page initial load
const thankyouInitialLoad = container => {
  const heading = document.querySelector('.thank_you_text h1');
  const paragraph = document.querySelector('.thank_you_text p');
  const btn = document.querySelector('.thank_you_btn_home');
  const navLinks = document.querySelectorAll('.nav_link');
  const redBox = document.querySelector('.red_container');
  const grayBox = document.querySelector('.gray_container');
  const upperBox = document.querySelector('.upper_container');
  const grayUpperBox = document.querySelector('.gray_upper_container');

  const tl = gsap.timeline({
    defaults: {
      ease: 'power4.in',
      duration: 1,
      autoAlpha: 0,
      clearProps: 'all',
    },
  });

  tl.from(navLinks, {
    xPercent: 100,
    duration: 0.5,
    stagger: 0.2,
  })
    .from(heading, { yPercent: 100, duration: 0.8 })
    .from(paragraph, { yPercent: 100, duration: 0.8 }, '<.3')
    .from(btn, { yPercent: 100, ease: 'bounce' })
    .from(redBox, {
      xPercent: 100,
    })
    .from(
      upperBox,
      {
        xPercent: 100,
      },
      '<'
    )
    .from(grayBox, {}, '<.5')
    .from(grayUpperBox, {}, '<');

  return tl;
};

//for error initial load
const errorInitialLoad = container => {
  const navLinks = document.querySelectorAll('.nav_link');
  const heading = document.querySelector('.error_text_container h1');
  const paragraph = document.querySelector('.error_text_container p');
  const btn = document.querySelector('.error_btn_back');
  const img = document.querySelector('.error_img_container img');

  const tl = gsap.timeline({
    defaults: { autoAlpha: 0, ease: 'power4.in', duration: 1 },
  });

  tl.from(navLinks, { yPercent: -100, duration: 0.8 })
    .from(heading, { xPercent: -100 })
    .from(paragraph, { xPercent: -100 }, '<.3')
    .from(btn, { xPercent: -100, ease: 'elastic' })
    .from(img, { scale: 0, ease: 'elastic' });

  return tl;
};

//for all pages entering animation
const animationEnter = container => {
  return gsap.from(container, {
    autoAlpha: 0,
    duration: 1.5,
    clearProps: 'all',
  });
};

//for all pages except home page leaving animation
const animationLeave = container => {
  return gsap.to(container, {
    xPercent: 100,
    duration: 1,
    ease: 'power4.in',
    clearProps: 'all',
  });
};

//for home page leaving animation
const homeAnimationLeave = container => {
  return gsap.to(container, {
    xPercent: -100,
    duration: 1,
    clearProps: 'all',
    ease: 'power4.in',
  });
};

//for home page entering animation
const homeAnimationEnter = container => {
  const welcomeContainer = document.querySelector('.welcome_container');

  const tl = gsap.timeline();

  tl.to(welcomeContainer, { xPercent: -101, duration: 0.1 }).from(container, {
    autoAlpha: 0,
    duration: 1.5,
    clearProps: 'all',
  });

  enableScrollTrigger(container);

  return tl;
};

//scroll pages to the top before entering each page
barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});

//ensure page is scroll to the top when the home page is loaded
barba.hooks.beforeOnce(() => {
  document.querySelector('#nav').scrollIntoView({ behavior: 'smooth' });
});

barba.init({
  views: [
    {
      namespace: 'home',
      beforeEnter({ next }) {
        const projectsList = document.querySelector('.projects_list');
        const projectsBtn = document.getElementById('projects_btn');
        const btnScrollTop = document.getElementById('btn_scroll_top');

        //for image overlays
        projectsList.addEventListener('click', e => {
          const button = e.target.closest('.img_btn_view');

          if (!button) return;

          const imageNumber = button.dataset.image;

          const modal = document.querySelector(`.image_modal_${imageNumber}`);

          modal.classList.add('active');

          document.body.style.overflow = 'hidden';

          const closeModal = e => {
            if (!e.target.classList.contains('image_modal_overlay')) return;

            document.body.style.overflow = '';

            modal.classList.remove('active');

            modal.removeEventListener('click', closeModal);
          };

          modal.addEventListener('click', closeModal);
        });

        //for projects btn
        projectsBtn.addEventListener('click', () => {
          const projectsSection = document.getElementById('projects');

          projectsSection.scrollIntoView({ behavior: 'smooth' });
        });

        //for scroll to top btn
        btnScrollTop.addEventListener('click', () => {
          const navbar = document.getElementById('nav');

          navbar.scrollIntoView({ behavior: 'smooth' });
        });

        ScrollTrigger.getAll().forEach(trigger => {
          trigger.kill();
        });
      },
    },
    {
      namespace: 'contact',
      beforeEnter({ next }) {
        const emailErrorContainer = document.querySelector('.form_email_error');

        emailErrorContainer.addEventListener('click', e => {
          const closeBtn = e.target.closest('.alert_btn_close');

          if (!closeBtn) return;

          const alert = closeBtn.closest('.email_error_alert');

          alert.remove();
        });
      },
    },
  ],
  transitions: [
    {
      name: 'toHome',
      to: {
        namespace: ['home'],
      },
      once({ next }) {
        initialHomePageLoad(next.container);
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        setTimeout(() => {
          homeAnimationEnter(next.container);
        }, 10);
      },
    },
    {
      name: 'toContact',
      from: {
        namespace: ['home'],
      },
      to: {
        namespace: ['contact'],
      },
      async leave({ current }) {
        await homeAnimationLeave(current.container);
        current.container.remove();
      },
      enter({ next }) {
        animationEnter(next.container);
      },
    },
    {
      name: 'contact',
      to: {
        namespace: ['contact'],
      },
      once({ next }) {
        contactPageInitialLoad(next.container);
      },
      async leave({ current }) {
        await animationLeave(current.container);
      },
      enter({ next }) {
        animationEnter(next.container);
      },
    },
    {
      name: 'toThankYou',
      to: {
        namespace: ['thank_you'],
      },
      once({ next }) {
        thankyouInitialLoad(next.container);
      },
      leave: ({ current }) => homeAnimationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
    },
    {
      name: 'error',
      to: {
        namespace: ['error'],
      },
      once({ next }) {
        errorInitialLoad(next.container);
      },
      leave: ({ current }) => homeAnimationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
    },
  ],
});
