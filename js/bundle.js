document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      const currentPath = window.location.pathname;
      const linkPath = this.pathname;

      if (linkPath !== '' && linkPath !== currentPath) {
        const url = linkPath + targetId;
        window.location.href = url;
      } else {
        const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
        const windowHeight = window.innerHeight;
        const elementHeight = targetElement.offsetHeight;

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (windowHeight / 2) + (elementHeight / 2);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        history.pushState(null, null, targetId);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#') return;

      const targetElement = document.querySelector(href);

      if (targetElement) {
        e.preventDefault();

        const offset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
      overlay = document.querySelector('body'),
      closeButtons = document.querySelectorAll('.modal-dialog .modal-close');

  var currentOpenModal = null;

  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src'),
          modalElem = document.querySelector('.modal-dialog.' + modalId);

      if (currentOpenModal && currentOpenModal !== modalElem) {
        closeModalDirectly(currentOpenModal);
      }

      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';

      setTimeout(function() {
        modalElem.classList.add('modal-opening');
        currentOpenModal = modalElem;
        resolve();
      }, 0);
    });
  }

  async function closeModal(closeBtn) {
    return new Promise(resolve => {
      var modal = closeBtn.closest('.modal-dialog');
      modal.classList.remove('modal-opening');
      modal.classList.add('modal-closing');

      setTimeout(function() {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        if (currentOpenModal === modal) {
          currentOpenModal = null;
        }
        resolve();
      }, 500);
    });
  }

  function closeModalDirectly(modalElem) {
    modalElem.classList.remove('modal-opening');
    modalElem.style.display = 'none';

    if (currentOpenModal === modalElem) {
      currentOpenModal = null;
    }

    var anyModalOpen = document.querySelector('.modal-dialog[style*="display: flex"]');
    if (!anyModalOpen) {
      overlay.classList.remove('modal-open');
    }
  }

  /* open modal */
  modalButtons.forEach(function(modalBtn) {
    modalBtn.addEventListener('click', async function(e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', async function(e) {
      await closeModal(closeBtn);
    });
  });

  document.querySelectorAll('.modal-dialog').forEach(function(modal) {
    modal.addEventListener('click', async function(e) {
      const modalBody = modal.querySelector('.modal-body');
      if (modalBody && !modalBody.contains(e.target)) {
        await closeModal(modal);
      }
    });
  });

});

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const closeMenuButton = document.querySelector('.close-menu-button');
  const headerNav = document.querySelector('.menu-small-screens');

  function isMobileView() {
    return window.innerWidth <= 1024;
  }

  function openMenu() {
    if (isMobileView()) {
      headerNav.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    headerNav.classList.remove('show');
    document.body.style.overflow = '';
  }

  mobileMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);

  const menuLinks = document.querySelectorAll('.main-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (isMobileView()) {
        closeMenu();
      }
    });
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });

});

document.addEventListener('DOMContentLoaded', function() {
  const cardSliders = document.querySelectorAll('.direction-card .card-slider');

  cardSliders.forEach((slider, index) => {
    new Swiper(slider, {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      watchSlidesProgress: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      speed: 500,
      loop: true,
      navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
      },
    });
  });

});

document.addEventListener('DOMContentLoaded', function() {
  const cardSliders = document.querySelectorAll('.attractions-section .card-image-slider');

  cardSliders.forEach((slider, index) => {
    new Swiper(slider, {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      watchSlidesProgress: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      speed: 500,
      loop: true,
      navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
      },
    });
  });

});

document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.service-slider');

  sliders.forEach((slider) => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  });

  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const panelsContainer = document.querySelector('.tab-panels');

  if (panelsContainer) {
    panelsContainer.style.position = 'relative';
    panelsContainer.style.minHeight = '400px';
  }

  tabPanels.forEach(panel => {
    panel.style.position = 'absolute';
    panel.style.top = '0';
    panel.style.left = '0';
    panel.style.width = '100%';
    panel.style.opacity = '0';
    panel.style.visibility = 'hidden';
    panel.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    panel.style.pointerEvents = 'none';
  });

  function updateContainerHeight(panel) {
    if (!panelsContainer) return;

    const originalDisplay = panel.style.display;
    const originalVisibility = panel.style.visibility;
    const originalOpacity = panel.style.opacity;
    const originalPosition = panel.style.position;

    panel.style.position = 'relative';
    panel.style.visibility = 'visible';
    panel.style.opacity = '1';
    panel.style.display = 'block';

    const height = panel.offsetHeight;

    panel.style.position = originalPosition;
    panel.style.visibility = originalVisibility;
    panel.style.opacity = originalOpacity;
    panel.style.display = originalDisplay;

    panelsContainer.style.height = height + 'px';
  }

  function switchTab(tabId) {
    tabButtons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.querySelector(`[data-tab-id="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    tabPanels.forEach(panel => {
      panel.style.visibility = 'hidden';
      panel.style.opacity = '0';
      panel.style.pointerEvents = 'none';
    });

    const activePanel = document.querySelector(`.tab-panel[data-tab-id="${tabId}"]`);
    if (activePanel) {
      updateContainerHeight(activePanel);

      activePanel.style.visibility = 'visible';
      activePanel.style.opacity = '1';
      activePanel.style.pointerEvents = 'auto';

      setTimeout(() => {
        const swiper = activePanel.querySelector('.swiper');
        if (swiper && swiper.swiper) {
          swiper.swiper.update();
        }
      }, 50);
    }
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab-id');
      switchTab(tabId);
    });
  });

  if (tabButtons.length > 0) {
    const firstPanel = document.querySelector('.tab-panel[data-tab-id="1"]');
    if (firstPanel && panelsContainer) {
      setTimeout(() => {
        panelsContainer.style.height = firstPanel.offsetHeight + 'px';
      }, 100);
    }

    setTimeout(() => {
      switchTab('1');
    }, 150);
  }

  window.addEventListener('resize', function() {
    const activePanel = Array.from(tabPanels).find(panel =>
        panel.style.visibility === 'visible'
    );

    if (activePanel && panelsContainer) {
      updateContainerHeight(activePanel);
    }
  });

});

class CustomVideoPlayer {
  constructor(container) {
    this.container = container;
    this.video = container.querySelector('video');
    this.playButton = container.querySelector('.btn-play');

    if (!this.video || !this.playButton) return;

    this.init();
  }

  init() {
    this.video.removeAttribute('controls');
    this.video.setAttribute('playsinline', '');
    this.video.setAttribute('webkit-playsinline', '');
    this.video.setAttribute('preload', 'metadata');

    this.playButton.style.opacity = '1';
    this.playButton.style.transition = 'opacity 0.3s ease';

    this.bindEvents();
  }

  bindEvents() {
    this.container.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleVideo(e);
    });

    this.playButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleVideo(e);
    });

    this.video.addEventListener('play', () => this.onPlay());
    this.video.addEventListener('pause', () => this.onPause());
    this.video.addEventListener('ended', () => this.onEnded());
  }

  toggleVideo(e) {
    e.stopPropagation();

    if (this.video.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    if (this.video.paused) {
      const playPromise = this.video.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Видео не может быть воспроизведено автоматически');
          this.video.setAttribute('controls', '');
          this.playButton.style.display = 'none';
        });
      }
    }
  }

  pause() {
    if (!this.video.paused) {
      this.video.pause();
    }
  }

  onPlay() {
    this.playButton.style.opacity = '0';
    this.playButton.style.pointerEvents = 'none';
  }

  onPause() {
    this.playButton.style.opacity = '1';
    this.playButton.style.pointerEvents = 'auto';
  }

  onEnded() {
    this.playButton.style.opacity = '1';
    this.playButton.style.pointerEvents = 'auto';
    this.video.currentTime = 0;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const videoWrappers = document.querySelectorAll('.video-wrapper');
  const videoCards = document.querySelectorAll('.card-video');

  videoWrappers.forEach(container => {
    new CustomVideoPlayer(container);
  });

  videoCards.forEach(container => {
    new CustomVideoPlayer(container);
  });
});

var swiper1 = new Swiper(".testimonials-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".testimonials-slider .swiper-button-next",
    prevEl: ".testimonials-slider .swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    601: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const fixedWidgets = document.querySelector('.fixed-widgets');
  const buttonWidgets = document.querySelector('.button-widgets');
  const widgetsList = document.querySelector('.widgets-list');

  if (!buttonWidgets || !widgetsList) return;

  function toggleWidgetsList() {
    const isActive = buttonWidgets.classList.contains('active');

    if (isActive) {
      buttonWidgets.classList.remove('active');
      widgetsList.classList.remove('active');
    } else {
      buttonWidgets.classList.add('active');
      widgetsList.classList.add('active');
    }
  }

  buttonWidgets.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleWidgetsList();
  });

  document.addEventListener('click', function(e) {
    if (!fixedWidgets.contains(e.target) && widgetsList.classList.contains('active')) {
      buttonWidgets.classList.remove('active');
      widgetsList.classList.remove('active');
    }
  });


  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && widgetsList.classList.contains('active')) {
      buttonWidgets.classList.remove('active');
      widgetsList.classList.remove('active');
    }
  });
});


function checkVisibility() {
  const blocks = document.querySelectorAll('.animate-block');

  blocks.forEach(block => {
    if (block.hasAttribute('data-animated')) {
      return;
    }

    const rect = block.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const isInFooter = block.closest('footer');
    const offset = (isInFooter || window.innerWidth < 768) ? 0 : 0;

    const isVisible = rect.top <= windowHeight - offset && rect.bottom >= 0;

    if (isVisible) {
      const delay = block.getAttribute('data-delay') || 0;
      setTimeout(() => {
        block.classList.add('animated');
        block.setAttribute('data-animated', 'true');
      }, parseInt(delay));
    }
  });
}

function checkAllBlocks() {
  const blocks = document.querySelectorAll('.animate-block');

  blocks.forEach(block => {
    if (block.hasAttribute('data-animated')) {
      return;
    }

    const rect = block.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const isInFooter = block.closest('footer');
    const offset = (isInFooter || window.innerWidth < 768) ? 0 : 0;

    if (rect.top <= windowHeight - offset && rect.bottom >= 0) {
      const delay = block.getAttribute('data-delay') || 0;
      setTimeout(() => {
        block.classList.add('animated');
        block.setAttribute('data-animated', 'true');
      }, parseInt(delay));
    }
  });
}

function initAnimations() {
  checkVisibility();
  setTimeout(checkAllBlocks, 500);
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', function() {
    setTimeout(checkAllBlocks, 100);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.preloader');

  if (!preloader) {
    initAnimations();
    return;
  }

  window.addEventListener('load', function() {
    setTimeout(function() {
      preloader.style.opacity = '0';

      setTimeout(function() {
        preloader.style.display = 'none';
        initAnimations();
      }, 500);
    }, 1000);
  });
});

if (document.readyState === 'complete') {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      initAnimations();
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const cardSliders = document.querySelectorAll('.services-section .service-card-slider');

  cardSliders.forEach((slider, index) => {
    new Swiper(slider, {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      watchSlidesProgress: true,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      speed: 500,
      loop: true,
      navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
      },
    });
  });

});
