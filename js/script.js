// ANIMAÇÃO PAGINA
$(document).ready(function(){

	$('#telefone').mask('(99) 9999-99999');
	$('#telefone1').mask('(99) 9999-99999');

	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('#menu-top').css('top','0');
		} else {
			$('#menu-top').css('top','-60px');
		}
	});

	$('.slide-top').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		$('#menu-slider').removeClass('open-menu');
	});

	$('.slide-down').click(function(){
		$('html, body').animate({
			scrollTop: $('div.about').offset().top
		}, 1000);
	});

	$('.slide-about').click(function(){
		$('html, body').animate({
			scrollTop: $('div.about').offset().top
		}, 1000);
		$('#menu-slider').removeClass('open-menu');
	});

	$('.slide-services').click(function(){
		$('html, body').animate({
			scrollTop: $('div.services').offset().top
		}, 1000);
		$('#menu-slider').removeClass('open-menu');
	});

	$('.slide-customers').click(function(){
		$('html, body').animate({
			scrollTop: $('div.customers').offset().top
		}, 1000);
		$('#menu-slider').removeClass('open-menu');
	});

	$('.bars-open').click(function(){
		$('#menu-slider').toggleClass('open-menu');
	});

	$('.open-contact').click(function(){
		$('.mask').css('display','block');
		$('.contact-mobile').css('display','block');
	});

	$('.close-contact').click(function(){
		$('.mask').css('display','none');
		$('.contact-mobile').css('display','none');
	});

	$('.mask').click(function(){
		$('.mask').css('display','none');
		$('.contact-mobile').css('display','none');
	});

});

// VALIDAR OS CAMPOS DO FORMULÁRIO
function validaform() {
	var nome = contato.nome.value;
	var email = contato.email.value;
	var telefone = contato.telefone.value;
	var mensagem = contato.mensagem.value;

	if (nome == "" || email == "" || telefone == "" || mensagem == "") {
		alert("Preencha todos os campos");
		contato.nome.focus();
		return false;
	}else {
		alert("Obrigado! Em breve entraremos em contato!");
		// return true;
		window.location.reload()
		return false;
	};
};

function validaformmobile() {
	var nome1 = contatomobile.nome1.value;
	var email1 = contatomobile.email1.value;
	var telefone1 = contatomobile.telefone1.value;
	var mensagem1 = contatomobile.mensagem1.value;

	if (nome1 == "" || email1 == "" || telefone1 == "" || mensagem1 == "") {
		alert("Preencha todos os campos");
		contatomobile.nome1.focus();
		return false;
	}else {
		alert("Obrigado! Em breve entraremos em contato!");
		// return true;
		window.location.reload()
		return false;
	};	
};

// SLIDE COMENTARIOS
var slideIndex = 1;
showDivs(slideIndex);

function Slides(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("coments");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}