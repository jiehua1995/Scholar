function get_Ajax() {
  $.get('https://v1.hitokoto.cn',{},function(respoonse){
    $('#hitokoto').html(respoonse.hitokoto);
  },'JSON');
}
function Ajax_Start(){
  setInterval(get_Ajax,6000);
}
get_Ajax();
Ajax_Start();
/*
function get_word(){
var subtitleEffect = true
fetch('https://v1.hitokoto.cn')
.then(function (res){
  return res.json();
})
.then(function (data) {

    var from = '出自 ' + data.from
    var sub = ''.length == 0  ? new Array() : ''.split(",");
    var both = sub.unshift(data.hitokoto,from)  
    var typed = new Typed("#hitokoto", {
      strings: sub,
      startDelay: 300,
      typeSpeed: 150,
      loop: true,
      backSpeed: 50
    });
})
.catch(function (err) {
  console.error(err);
})
$('#hitokoto').html(data.hitokoto);
}
function Ajax_Start(){
  setInterval(get_word,5000);
}
Ajax_Start();
*/
