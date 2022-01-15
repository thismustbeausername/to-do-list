$(function() {

	var $ul;
	var $form; 


$list = $('ul')
$form = $('#newItem')

$('#newItem').on('submit', function(e){
 	e.preventDefault();
 	var text = $('input:text').val(); 
 	$list.append('<li>' + text+ '</li>');
 	$('input:text').val();
 })

$list.on('click' , 'li', function(){
	var $this = $(this);
	$this.remove();
})
 





})