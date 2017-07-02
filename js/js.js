$('.sl').slick({
    prevArrow: '<a><img class="g1" src="img/sl1/arrow-left.png" alt=""></a>',
    nextArrow: '<a><img class="g2" src="img/sl1/arrow-right.png" alt=""></a>',
    dots: true,
    appendDots: ('.works-slider-dots')

        });

$('.sl_2').slick({
    prevArrow: '<a><img class="g3"  src="img/sl2/arrow-left-dark.png" alt=""></a>',
    nextArrow: '<a><img class="g4" src="img/sl2/arrow-right-dark.png" alt=""></a>',
    
    slidesToShow: 3,
    responsive: [
              {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1
                }
              },
              ]

        });

function init_map(){
				var myOptions = {
				zoom:18,
				center:new google.maps.LatLng(50.449283,30.516589),
				mapTypeId: google.maps.MapTypeId.ROADMAP};
				map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);


				var marker = new google.maps.Marker({
					position: {lat: 50.449283, lng: 30.516589},
					map: map,
					icon: {
					url: "img/form/Pin.png",
					scaledSize: new google.maps.Size(69, 69)
				}
			});





				infowindow = new google.maps.InfoWindow
				({content:'<strong>Beetroot</strong><br>Kиев<br>'});
				google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);
					});
					infowindow.open(map,marker);}google.maps.event.addDomListener(window,'load', init_map);



(function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

})
})(jQuery)