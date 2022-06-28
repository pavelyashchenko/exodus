// Show more table
const showMoreTable = () => {
	$('.table-show-more').on('click', function(){
    $('.table .tbody__row:nth-child(n+11)').css('display', 'table-row');
    $('.table').addClass('is-active');
    $(this).remove();
  });
};

(function() {
  showMoreTable();
})();