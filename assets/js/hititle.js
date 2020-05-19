 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '╥﹏╥...标题不见了';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = OriginTitle + '回来了';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });