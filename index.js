
$('button').on('click', function(){
    $('.modal').show()
    $('.modal-content').animate({opacity: 1, top: 200})
})

$('.ok').on('click', function(){
    $('.modal-content').animate({opacity: 0, top: -100})
    $('.modal').hide()
})

$('.insta').on('click', function(){
    alert("iii, Không có gì đâu :>>>")
})