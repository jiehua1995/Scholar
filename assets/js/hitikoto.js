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