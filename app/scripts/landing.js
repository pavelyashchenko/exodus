// Accordion tabs
const Accordion = () => {
	const panelTitle = $('.accordion__title');
	const visibilityMode = 'single';
	const isInitialized = 'init';
	const transitionTime = 170;

	if (isInitialized === 'init') {
		function hidePanels() {
			const activeTitles = panelTitle.filter(function () {
				return $(this).attr('aria-selected') === 'true';
			});

			$.each(activeTitles, function () {
				$(this).attr('aria-selected', 'false');
				$(this).attr('aria-expanded', 'false');
				$(this).parent().removeClass('is-active');
				$(this).next().slideUp(transitionTime);
			});
		}

		// Expand or collapse panels
		$.each(panelTitle, function () {
			const isOpen = $(this).attr('aria-selected');

			if (isOpen === 'true') {
				$(this).next().slideDown(transitionTime);
			} else {
				$(this).next().slideUp(transitionTime);
			}
		});

		if (visibilityMode === 'single') {
			panelTitle.on('click keydown', function () {
				const title = $(this);
				const panel = $(this).next();
				panelTitle.removeAttr('style');

				if (event.type === 'click') {
					$(this).css('outline', 'none');
				}

				if (event.which !== 9 || event.keyCode !== 9) {
					event.preventDefault();
				}

				if (
					event.which === 13 ||
					event.keyCode === 13 ||
					event.type === 'click'
				) {
					if (panel.length) {
						if (panel.is(':visible')) {
							$.each(panelTitle, function () {
								hidePanels();
								$(this).parent().removeClass('is-active');
							});
						} else {
							hidePanels();
							title.attr('aria-selected', 'true');
							title.attr('aria-expanded', 'true');
							panel.slideDown(transitionTime);
							$(this).parent().addClass('is-active');
							$(panel).focus();
							$(panel).attr('tabindex', '0');
						}
					}
				}
			});
		} else if (visibilityMode === 'multiply') {
			panelTitle.on('click', function () {
				const panel = $(this).next();

				if (panel.length) {
					panel.slideDown(transitionTime);
				} else {
					panel.slideUp(transitionTime);
				}
			});
		}
	} else {
		$(panelTitle).unbind('click');
	}
};

// Lottie anim
const sectionAnimations = () => {
	bodymovin.loadAnimation({
		container: document.querySelector('#doorsAnimation'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/about-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#cardsAnimation'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/cards-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#linesAnimation'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/roadmap-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#linesAnimation2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/roadmap-anim2.json',
	});

	// icons
	bodymovin.loadAnimation({
		container: document.querySelector('#buyNft'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/buy-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#refferals'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/refferals-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#earn'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/money-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#binance'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/binance-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#investments'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/investments-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#invite'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/invite-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#system'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/system-anim.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#present'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/PRESENT.json',
	});

	bodymovin.loadAnimation({
		container: document.querySelector('#loader'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'scripts/animations/loader-anim.json',
	});
};

// Show more buttons
const showMoreHowItWorks = () => {
	$('.how-it-works__button-learn-more').on('click', function () {
		$('.how-it-works__scheme').slideToggle(300);

		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
			$(this).text('Show less');
		} else {
			$(this).text('Learn more');
		}
	});
};

const showMoreRoadmap = () => {
	$('.roadmap__mobile-button button').on('click', function () {
		$('.roadmap__item:nth-child(n+7)').toggleClass('is-active')
		$('.roadmap__items').toggleClass('is-active')

		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
			$(this).text('Show less');
		} else {
			$(this).text('Learn more');
		}
	});
};

const showMoreFaq = () => {
	$('.faq__button-learn-more').on('click', function () {
		$('.faq__hidden-blocks').toggleClass('is-active')

		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
			$(this).text('Show less');
		} else {
			$(this).text('Learn more');
		}
	});
};

const showMoreTeam = () => {
	$('.team__members-button').on('click', function () {
		$('.team__members-wrapper:nth-child(n+5)').toggleClass(
			'is-visible wow fadeInDown'
		);

		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
			$(this).text('Show less');
		} else {
			$(this).text('Show more');
		}
	});
};

// numbers counter on scroll
const numbersCounter = () => {
	var section = document.querySelector('.numbers');
	var hasEntered = false;

	window.addEventListener('scroll', e => {
		var shouldAnimate =
			window.scrollY + window.innerHeight >= section.offsetTop;

		if (shouldAnimate && !hasEntered) {
			hasEntered = true;

			$('.numbers__item-nums').each(function () {
				$(this)
					.prop('Counter', 0)
					.animate(
						{
							Counter: $(this).text(),
						},
						{
							duration: 4000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							},
						}
					);
			});
		}
	});
};

(function () {
	// swiper slider
	var swiper = new Swiper('#roadmapSlider', {
		slidesPerView: 1,
		speed: 1000,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	// Functions init
	Accordion();
	sectionAnimations();
	showMoreHowItWorks();
	showMoreRoadmap();
	showMoreFaq();
	showMoreTeam();
	numbersCounter();
})();
