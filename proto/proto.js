/* =====================================================================
   RELATORIO · TEMA DA LANDING  (PROTOTIPO, 30/07/2026)
   Par do tema-landing.css. Roda DEPOIS do script do relatorio, entao so
   acrescenta comportamento · nao reescreve nada do arquivo original.

   1. CLARO POR PADRAO  · o escuro passa a ser a opcao (quem ja escolheu
      escuro nesta maquina continua no escuro)
   2. MATERIA ATRAS     · injeta os 3 orbes vivos; sem eles o vidro
      branco sobre fundo branco e literalmente invisivel
   3. GOTA D'AGUA       · onda de luz onde o dedo toca, igual a landing
   ===================================================================== */
(function(){
  'use strict';
  var reduz = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1 · claro por padrao ------------------------------------------- */
  var salvo = null;
  try{ salvo = localStorage.getItem('rc_int_tema'); }catch(e){}
  if(salvo !== 'escuro'){
    document.body.classList.add('light');
    var btn = document.getElementById('themeBtn');
    if(btn) btn.textContent = 'Modo escuro';
    if(window.__bgRepaint) window.__bgRepaint();
  }

  /* 2 · a materia atras do vidro ----------------------------------- */
  if(!document.getElementById('protoOrbes')){
    var orbes = document.createElement('div');
    orbes.id = 'protoOrbes';
    orbes.setAttribute('aria-hidden','true');
    orbes.innerHTML = '<i></i><i></i><i></i>';
    document.body.insertBefore(orbes, document.body.firstChild);
  }

  /* 3 · gota d'agua ------------------------------------------------- */
  if(reduz) return;
  var ALVOS = '.dgrid > .dline, .urow, .acard';
  document.addEventListener('pointerdown', function(ev){
    var alvo = ev.target && ev.target.closest ? ev.target.closest(ALVOS) : null;
    if(!alvo || !document.body.classList.contains('light')) return;

    var r = alvo.getBoundingClientRect();
    var x = ev.clientX - r.left, y = ev.clientY - r.top;
    /* Raio: o canto mais distante, MAS limitado pelo lado curto do elemento.
       Numa fileira de 1370x96 a regra do canto daria r=1000 e a onda viraria
       um lavado sobre a lamina inteira · limitada, ela le como gota mesmo. */
    var canto = Math.max(
      Math.hypot(x, y),            Math.hypot(r.width - x, y),
      Math.hypot(x, r.height - y), Math.hypot(r.width - x, r.height - y)
    );
    var raio = Math.max(88, Math.min(canto, 2.4 * Math.min(r.width, r.height)));

    var g = document.createElement('span');
    g.className = 'proto-gota';
    g.style.width = g.style.height = (raio * 2) + 'px';
    g.style.left = x + 'px';
    g.style.top  = y + 'px';
    alvo.appendChild(g);
    g.addEventListener('animationend', function(){ g.remove(); });
  }, {passive:true});
})();
