const screenMap = {
  'splash':             'screen-splash',
  'home-public':        'screen-home-public',
  'login':              'screen-login',
  'otp':                'screen-otp',
  'home-main':          'screen-home-main',
  'alta-quema':         'screen-alta-quema',
  'quema-confirmada':   'screen-quema-confirmada',
  'historial':          'screen-historial',
  'detall-quema':       'screen-detall-quema',
  'recursos':           'screen-recursos',
  'perfil':             'screen-perfil',
};

const pillMap = {
  'splash': 0,
  'home-public': 1,
  'login': 2,
  'otp': 3,
  'home-main': 4,
  'alta-quema': 5,
  'quema-confirmada': 5,
  'historial': 6,
  'detall-quema': 6,
  'recursos': 7,
  'perfil': 8,
};

function goto(id) {
  Object.values(screenMap).forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.remove('active');
  });
  const target = document.getElementById(screenMap[id]);
  if (target) {
    target.classList.add('active');
    const sc = target.querySelector('.scroll-content');
    if (sc) sc.scrollTop = 0;
  }
  const pills = document.querySelectorAll('.nav-pill');
  pills.forEach(p => p.classList.remove('active'));
  const pillIdx = pillMap[id];
  if (pillIdx !== undefined && pills[pillIdx]) pills[pillIdx].classList.add('active');
}

function toggleLang(btn) {
  btn.closest('.lang-row').querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  goto('splash');
});
