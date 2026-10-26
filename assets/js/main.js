/* Omaha Water Heater Pros — vanilla JS, no frameworks */
(function(){
  "use strict";
  // Mobile nav toggle
  var toggle=document.querySelector(".nav-toggle"),nav=document.querySelector(".main-nav");
  if(toggle&&nav){toggle.addEventListener("click",function(){nav.classList.toggle("open");});}
  // Header dropdowns (click to toggle, for touch + keyboard users; hover also works on desktop)
  document.querySelectorAll(".nav-drop-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      var drop = btn.closest(".nav-drop"), wasOpen = drop.classList.contains("open");
      document.querySelectorAll(".nav-drop.open").forEach(function(d){ d.classList.remove("open"); });
      document.querySelectorAll(".nav-drop-btn").forEach(function(b){ b.setAttribute("aria-expanded", "false"); });
      if(!wasOpen){ drop.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
    });
  });
  document.addEventListener("click", function(e){
    if(!e.target.closest(".nav-drop")){
      document.querySelectorAll(".nav-drop.open").forEach(function(d){ d.classList.remove("open"); });
      document.querySelectorAll(".nav-drop-btn").forEach(function(b){ b.setAttribute("aria-expanded", "false"); });
    }
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
      document.querySelectorAll(".nav-drop.open").forEach(function(d){ d.classList.remove("open"); });
      document.querySelectorAll(".nav-drop-btn").forEach(function(b){ b.setAttribute("aria-expanded", "false"); });
    }
  });
  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach(function(btn){
    btn.addEventListener("click",function(){
      var item=btn.closest(".faq"),ans=item.querySelector(".faq-a"),open=item.classList.contains("open");
      document.querySelectorAll(".faq.open").forEach(function(o){o.classList.remove("open");o.querySelector(".faq-a").style.maxHeight=null;});
      if(!open){item.classList.add("open");ans.style.maxHeight=ans.scrollHeight+"px";}
    });
  });
})();

// scroll reveal
(function(){
  var els = document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window) || !els.length){
    els.forEach(function(e){ e.classList.add('in'); }); return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, {threshold: 0.12});
  els.forEach(function(e){ io.observe(e); });
})();
