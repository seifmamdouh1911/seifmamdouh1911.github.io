(function(){
  var root=document.documentElement;
  root.classList.add('js');
  var home=document.getElementById('view-home');
  var hdr=document.getElementById('hdr');
  var btn=document.getElementById('menuBtn');
  var links=[].slice.call(document.querySelectorAll('#nav a'));
  var pages={'#/gym':{id:'p-gym',title:'Iron Nile Gym Assistant'},'#/har':{id:'p-har',title:'Human Activity Recognition Using Smartphones'},'#/levelup':{id:'p-levelup',title:'LevelUp'}};
  var baseTitle=document.title;
  var onPage=false;

  function setActive(id){
    links.forEach(function(a){
      if(a.getAttribute('href')==='#'+id){a.setAttribute('aria-current','true');}
      else{a.removeAttribute('aria-current');}
    });
  }
  function closeMenu(){hdr.removeAttribute('data-open');btn.setAttribute('aria-expanded','false');}

  function render(h){
    var pg=pages[h],k,wasPage=onPage;
    for(k in pages){document.getElementById(pages[k].id).hidden=(pages[k]!==pg);}
    home.hidden=!!pg;
    onPage=!!pg;
    closeMenu();
    if(pg){
      document.title=pg.title+' | Seif Elden Mohamed Mamdouh';
      window.scrollTo(0,0);
      setActive('projects');
      var t=document.querySelector('#'+pg.id+' h1');
      if(t){try{t.focus({preventScroll:true});}catch(e){}}
    }else{
      document.title=baseTitle;
      var el=(h&&h.length>1)?document.getElementById(h.slice(1)):null;
      if(el){el.scrollIntoView({behavior:wasPage?'auto':'smooth'});}
      else if(!h||h==='#'){window.scrollTo(0,0);}
    }
  }
  function go(h){try{if(location.hash!==h){location.hash=h;}}catch(e){}render(h);}

  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#"]');
    if(!a)return;
    var h=a.getAttribute('href');
    if(h==='#'||h==='#main')return;
    e.preventDefault();
    go(h);
  });
  window.addEventListener('hashchange',function(){render(location.hash);});

  btn.addEventListener('click',function(){
    var open=hdr.hasAttribute('data-open');
    if(open){closeMenu();}else{hdr.setAttribute('data-open','');btn.setAttribute('aria-expanded','true');}
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeMenu();}});

  /* active section indicator + gentle reveal */
  if('IntersectionObserver' in window){
    var secs=['home','about','skills','experience','projects','contact'].map(function(id){return document.getElementById(id);});
    var so=new IntersectionObserver(function(entries){
      if(onPage)return;
      entries.forEach(function(en){if(en.isIntersecting){setActive(en.target.id);}});
    },{rootMargin:'-40% 0px -55% 0px'});
    secs.forEach(function(s){if(s)so.observe(s);});
    var ro=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');ro.unobserve(en.target);}});
    },{rootMargin:'0px 0px -8% 0px'});
    [].slice.call(document.querySelectorAll('.reveal')).forEach(function(el){ro.observe(el);});
  }else{
    [].slice.call(document.querySelectorAll('.reveal')).forEach(function(el){el.classList.add('in');});
    setActive('home');
  }
  render(location.hash);
  if(!location.hash){setActive('home');}
})();
