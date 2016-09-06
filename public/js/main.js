/**
 * Created by Tchowa Adonis on 01/09/2016.
 */
$(document).ready(function(){
	$('.banner a').on('click', function(evt){
		if(this.hash !== ""){
			evt.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 2000, function(){
				window.location.hash = hash;
			});
		}
	});

	$(".typed").typed({
		strings: [
			"Société immobilière agréé sur le plan national, nous louons et vendons les immeubles, maisons, terrains....", 
			"Crée depuis 2012, nous sommes installés à Yaoundé Bastos mitoyenne à l'ambassade d'Espagne",
			"Email: abbasimmobilier@gmail.com <br>fix: 222-208-209 <br> Portable: (+237)693-263-780"],
		typeSpeed: 3,
		showCursor: false,
		backSpeed: 2,
		loop: true,
		shuffle: true
	});
});
