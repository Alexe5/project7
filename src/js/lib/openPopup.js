// ----------------------------------
// ---------------Menu---------------
// ----------------------------------

$('.toggle').click(function() {
	$('.menu').css('display', 'flex');
});

$('.menu__close').click(function() {
	$('.menu').css('display', 'none');
});

// ------------------------------------
// ---------------Pop-up---------------
// ------------------------------------

$('.table__text4').click(function() {
	var number = $(this).data('id');
	var selector = '.row' + number + ' .table__text2';
	var message = $(selector).text();
	$('.popup').fadeIn(500);
	$('.popup__text').append(message);
});

$('.popup__close').click(function() {
	$('.popup').fadeOut(0);
	$('.popup__text').text('');
});

// $('.row1 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row1 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row2 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row2 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row3 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row3 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row4 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row4 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row5 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row5 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row6 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row6 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row7 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row7 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row8 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row8 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row9 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row9 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row10 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row10 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row11 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row11 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row12 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row12 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row13 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row13 .table__text2').text();
// 	$('.popup__text').append(message);
// });

// $('.row14 .table__text4').click(function() {
// 	$('.popup').fadeIn(500);
// 	var message = $('.row14 .table__text2').text();
// 	$('.popup__text').append(message);
// });

module.exports = openPopup;