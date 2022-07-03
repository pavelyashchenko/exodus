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
};

// FAQ Show more button
const showMoreFaq = () => {
	$('.faq__button-learn-more').on('click', function () {
		$('.faq__hidden-blocks').slideToggle(300);

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
		var shouldAnimate = window.scrollY + window.innerHeight >= section.offsetTop;

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
	// Functions init
	Accordion();
	sectionAnimations();
	showMoreFaq();
	showMoreTeam();
	numbersCounter();
})();
