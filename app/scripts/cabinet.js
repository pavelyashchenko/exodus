// Show more table
const showMoreTable = () => {
	$('.table-show-more').on('click', function(){
    $('.table .tbody__row:nth-child(n+11)').css('display', 'table-row');
    $('.table').addClass('is-active');
    $(this).remove();
  });
};

(function() {
  // SLiders
  var swiper = new Swiper(".carousel-cabinet-blocks", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 15,
    grabCursor: true,
    freeMode: true,
    mousewheel: false,
    watchSlidesProgress: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true
    }
  });

  showMoreTable();
})();