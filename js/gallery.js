(function($){
  // Caption
  $('.entry').each(function(i){
    $(this).find('img').each(function(){
      var alt = this.alt;

      if (alt){
        $(this).after('<span class="caption">' + alt + '</span>');
      }

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery' + i + '" />');
    });
  });

  // Gallery
  var play = function(parent, item, callback){
    var width = parent.width();

    item.imagesLoaded(function(){
      var _this = this[0],
        nWidth = _this.naturalWidth,
        nHeight = _this.naturalHeight;

      callback();
      this.animate({opacity: 1}, 500);
      parent.animate({height: width * nHeight / nWidth}, 500);
    });
  };

  $('.gallery').each(function(){
    var $this = $(this),
      current = 0,
      photoset = $this.children('.photoset').children(),
      all = photoset.length,
      loading = true;

    play($this, photoset.eq(0), function(){
      loading = false;
    });

    $this.on('click', '.prev', function(){
      if (!loading){
        var next = (current - 1) % all;
        loading = true;

        play($this, photoset.eq(next), function(){
          photoset.eq(current).animate({opacity: 0}, 500);
          loading = false;
          current = next;
        });
      }
    }).on('click', '.next', function(){
      if (!loading){
        var next = (current + 1) % all;
        loading = true;

        play($this, photoset.eq(next), function(){
          photoset.eq(current).animate({opacity: 0}, 500);
          loading = false;
          current = next;
        });
      }
    });
  });
})(jQuery);
var oBtn = document.getElementById('btn');
var oBtn1 = document.getElementById('btn1');
var oDis = document.getElementById('scroll'); //整个侧边栏
var oMain = document.getElementById('main-col');      
var iSpeed1 = 0;
var paddingLeft = 0;

oBtn.onclick = function ()
{
oDis.style.display = 'none';
oBtn1.style.display = 'block';

clearInterval(oMain.timer);

oMain.timer=setInterval(function (){
  iSpeed1+=10;
  iSpeed1*=0.7;
  paddingLeft+=iSpeed1;
  if(paddingLeft>150)
  {
    clearInterval(oMain.timer);
    oMain.style.paddingLeft=150+'px';
  }
  else
  {
    oMain.style.paddingLeft=paddingLeft+'px';
  }
}, 30);
}

oBtn1.onclick = function ()
{
oDis.style.display = 'block';
oBtn1.style.display = 'none';

clearInterval(oMain.timer);

oMain.timer=setInterval(function (){
  iSpeed1-=10;
  iSpeed1*=0.7;
  paddingLeft+=iSpeed1;
  if(paddingLeft<0)
  {
    clearInterval(oMain.timer);
    oMain.style.paddingLeft=0+'px';
  }
  else
  {
    oMain.style.paddingLeft=paddingLeft+'px';
  }
}, 30);   
