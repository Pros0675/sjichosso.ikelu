(function(){
'use strict';
var SJ=window.SJ||{},ORG=SJ.org||{},C=SJ.contact||{},SO=SJ.social||{},IM=SJ.images||{},DC=SJ.docs||{};
var L='sw';try{L=localStorage.getItem('lg')||'sw'}catch(e){}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function tx(sw,en){return '<span data-sw="'+esc(sw)+'" data-en="'+esc(en)+'">'+esc(L=='en'?en:sw)+'</span>'}
var ORG_FULL=ORG.full||'Saint Joseph Institute College Health Association Science Students\u2019 Organization',ORG_COLLEGE=ORG.college||'Saint Joseph Institute College';
var D={"Madarasa": "Classes", "Viongozi wengine": "Other leaders", "Timu ya uongozi": "Leadership team", "[Cheo kitawekwa]": "[Role to be added]", "Mwakilishi wa Darasa": "Class Representative", "Vyeo vitawekwa na uongozi.": "Roles will be added by the leadership.", "Mkuu wa Chuo": "College Principal", "Dean of Students": "Dean of Students", "Baraza la Mawaziri": "Cabinet of Ministers", "Wawakilishi wa Madarasa": "Class Representatives", "Wanafunzi": "Students", "Waziri wa Ulinzi na Usalama": "Minister of Protection and Security", "Waziri wa Elimu": "Minister of Education", "Waziri wa Sheria na Nidhamu": "Minister of Law and Discipline", "Waziri wa Michezo, Utamaduni na Mawasiliano": "Minister of Sports, Culture and Communication", "Waziri wa Afya, Mazingira na Miundombinu": "Minister of Health, Environment and Infrastructure", "Muundo": "Structure", "Muundo wa Serikali ya Wanafunzi": "Student Government Structure", "Viongozi wakuu": "Top leaders", "Viongozi wetu": "Our leaders", "Uongozi wa Chuo": "College leadership", "Walezi wa Serikali ya Wanafunzi": "Guardians of the Student Government", "Majina na picha za viongozi zitawekwa na uongozi.": "Leaders’ names and photos will be added by the leadership.", "Ruka hadi maudhui": "Skip to content", "Mwanzo": "Home", "Kuhusu Sisi": "About Us", "Uongozi": "Leadership", "Shughuli": "Activities", "Habari": "News", "Nyaraka": "Documents", "Jiunge Nasi": "Join Us", "Jiunge": "Join", "Umoja • Uongozi • Maendeleo": "Unity • Leadership • Progress", "Sauti Moja. Maono Moja.": "One Voice. One Vision.", "Uongozi wa Wanafunzi.": "Student Leadership.", "Jukwaa la umoja, uwakilishi na maendeleo ya wanafunzi.": "A platform for student unity, representation and progress.", "Uwakilishi": "Representation", "Kusimamia maslahi ya wanafunzi katika ngazi zote.": "Championing student interests at every level.", "Umoja": "Unity", "Kujenga mshikamano miongoni mwa wanafunzi.": "Building solidarity among students.", "Uwajibikaji": "Accountability", "Kuhakikisha uwazi na uwajibikaji katika uongozi.": "Ensuring transparency and accountability in leadership.", "Kuhusu SJICHASSO": "About SJICHASSO", "Sauti ya wanafunzi wa chuo chetu.": "The voice of our college’s students.", "SJICHASSO ni shirika la wanafunzi la Saint Joseph Institute College. Linawakilisha wanafunzi, linajenga umoja na linahimiza uwajibikaji katika uongozi.": "SJICHASSO is the students’ organization of Saint Joseph Institute College. It represents students, builds unity and promotes accountability in leadership.", "Jina kamili": "Full name", "Soma zaidi": "Read more", "Muundo wa uongozi": "Leadership structure", "Rais": "President", "Makamu wa Rais": "Vice President", "Waziri Mkuu": "Prime Minister", "Mawaziri wa ngazi za chini": "Ministers at lower levels", "Mawaziri": "Ministers", "Angalia viongozi wote →": "See all leaders →", "Shughuli Zetu": "Our Activities", "Vilabu vya Kitaaluma": "Academic Clubs", "Afya na Jinsia": "Health and Gender", "Sanaa na Utamaduni": "Arts and Culture", "Michezo": "Sports", "Viongozi Wetu": "Our Leaders", "Nyaraka Muhimu": "Key Documents", "Katiba": "Constitution", "Kanuni za Maadili": "Code of Ethics", "Kalenda ya Mwaka": "Yearly Calendar", "Inakuja": "Coming soon", "Habari na Matukio": "News and Events", "Angalia zote": "View all", "Habari na matangazo ya SJICHASSO yatachapishwa hapa.": "SJICHASSO news and announcements will be published here.", "Sauti yako ina nafasi.": "Your voice matters.", "Jiunge na SJICHASSO leo kwa ajili ya mustakabali bora wa wanafunzi.": "Join SJICHASSO today for a better future for students.", "Sauti ya wanafunzi wa Saint Joseph Institute College.": "The voice of the students of Saint Joseph Institute College.", "Mwelekeo wetu": "Our direction", "Dira, dhamira na historia": "Vision, mission and history", "Dira": "Vision", "Dhamira": "Mission", "Historia": "History", "[Dira ya SJICHASSO itawekwa hapa.]": "[SJICHASSO’s vision will be added here.]", "[Dhamira ya SJICHASSO itawekwa hapa.]": "[SJICHASSO’s mission will be added here.]", "[Historia ya SJICHASSO itawekwa hapa.]": "[SJICHASSO’s history will be added here.]", "Viongozi wanaowakilisha sauti ya wanafunzi.": "Leaders who represent the student voice.", "[Jina la kiongozi]": "[Leader’s name]", "[Jina la waziri]": "[Minister’s name]", "Waziri wa [Wizara]": "Minister of [Ministry]", "Majina, picha na wizara zitawekwa na uongozi.": "Names, photos and ministries will be added by the leadership.", "Zaidi ya uongozi: maisha ya chuo.": "More than leadership: campus life.", "Nafasi ya wanafunzi kujifunza, kujadili na kukuza maarifa pamoja.": "A space for students to learn, discuss and grow their knowledge together.", "Kuhamasisha afya, ustawi na usawa miongoni mwa wanafunzi.": "Promoting health, wellbeing and equality among students.", "Kuonyesha vipaji na kuenzi utamaduni wetu.": "Showcasing talent and celebrating our culture.", "Kujenga afya, ushirikiano na mshikamano kupitia michezo.": "Building health, teamwork and solidarity through sport.", "[Maelezo ya kina yatawekwa na uongozi.]": "[Detailed information will be added by the leadership.]", "Nyaraka rasmi za SJICHASSO zitapatikana hapa mara zitakapochapishwa.": "Official SJICHASSO documents will be available here once published.", "Mwongozo mkuu wa uendeshaji wa SJICHASSO.": "The main guiding document for how SJICHASSO operates.", "Maadili na mwenendo unaotarajiwa kwa viongozi na wanachama.": "Expected ethics and conduct for leaders and members.", "Ratiba ya shughuli na matukio ya mwaka.": "Schedule of the year’s activities and events.", "Habari, matangazo na matukio ya SJICHASSO.": "SJICHASSO news, announcements and events.", "Zote": "All", "Matangazo": "Announcements", "Matukio": "Events", "Jaza fomu hii ili kujiunga na SJICHASSO.": "Fill in this form to join SJICHASSO.", "Kundi lako": "Your group", "Mwanafunzi": "Student", "Kiongozi wa wanafunzi": "Student leader", "Mwalimu / Mhadhiri": "Teacher / Lecturer", "Barua pepe": "Email", "Namba ya simu (si lazima)": "Phone number (optional)", "Tuma Ombi": "Send Request", "Kwa nini ujiunge?": "Why join?", "Imeshindwa kutuma. Jaribu tena.": "Could not send. Please try again.", "Ukurasa haujapatikana": "Page not found", "Ukurasa uliotafuta haupo au umehamishwa.": "The page you looked for does not exist or has moved.", "Rudi Mwanzo": "Back to Home", "Viungo vya Haraka": "Quick Links", "Wasiliana Nasi": "Contact Us", "Pata habari": "Stay informed", "Asante! Utapokea habari zetu.": "Thank you! You will receive our news.", "[barua pepe]": "[email]", "[namba ya simu]": "[phone number]", "[anuani]": "[address]", "“Umoja wetu, nguvu yetu.”": "“Our unity, our strength.”", "© 2026 SJICHASSO. Haki zote zimehifadhiwa.": "© 2026 SJICHASSO. All rights reserved.", "Sauti Moja, Maono Moja": "One Voice, One Vision"};
/* ---------- header & footer ---------- */
var PG=[['index.html','Mwanzo'],['kuhusu.html','Kuhusu Sisi'],['uongozi.html','Uongozi'],['shughuli.html','Shughuli'],['habari.html','Habari'],['nyaraka.html','Nyaraka']];
var logo=IM.logo?'<img class="logoimg" src="'+esc(IM.logo)+'" alt="" width="40" height="40">':'<span class="mark"></span>';
var HEADER='<a class="skip" href="#main">Ruka hadi maudhui</a><header><div class="wrap nav"><a class="logo" href="index.html" aria-label="SJICHASSO">'+logo+'<span class="lt"><b>SJICHASSO</b><small>Sauti Moja, Maono Moja</small></span></a><button id="th" class="lb t" aria-label="Theme"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/></svg></button><button id="lang" class="lb" aria-label="Change language">EN</button><button id="burger" aria-expanded="false" aria-controls="menu" aria-label="Menu">\u2630</button><nav id="menu" aria-label="Menu">'+PG.map(function(p){return '<a href="'+p[0]+'">'+p[1]+'</a>'}).join('')+'<a class="btn gold" href="jiunge.html">Jiunge Nasi</a></nav></div></header>';
var ICON={instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>',x:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20"/></svg>',youtube:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/></svg>',facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/></svg>'};
var NM={instagram:'Instagram',x:'X',youtube:'YouTube',facebook:'Facebook'};
var socials='<div class="so">'+Object.keys(ICON).map(function(k){return SO[k]?'<a href="'+esc(SO[k])+'" target="_blank" rel="noopener noreferrer" aria-label="'+NM[k]+'">'+ICON[k]+'</a>':'<span class="off" role="img" aria-label="'+NM[k]+'" title="Link itawekwa">'+ICON[k]+'</span>'}).join('')+'</div>';
var em=C.email?'<a href="mailto:'+esc(C.email)+'">'+esc(C.email)+'</a>':'<span class="pl">[barua pepe]</span>';
var ph=C.phone?'<a href="tel:'+esc(String(C.phone).replace(/[^\d+]/g,''))+'">'+esc(C.phone)+'</a>':'<span class="pl">[namba ya simu]</span>';
var ad=C.address?'<span>'+esc(C.address)+'</span>':'<span class="pl">[anuani]</span>';
var FOOTER='<footer><div class="wrap"><div class="fg2"><div><div class="lf">'+logo+'<span class="lt"><b>SJICHASSO</b><small>Sauti Moja, Maono Moja</small></span></div><p class="sl">\u201cUmoja wetu, nguvu yetu.\u201d</p><p class="fnf">'+esc(ORG_FULL)+'</p></div><div><b>Viungo vya Haraka</b><p class="ql">'+PG.map(function(p){return '<a href="'+p[0]+'">'+p[1]+'</a>'}).join('')+'<a href="jiunge.html">Jiunge Nasi</a></p></div><div><b>Wasiliana Nasi</b><p>'+em+'</p><p>'+ph+'</p><p>'+ad+'</p>'+socials+'</div><div><b>Pata habari</b><form id="nf" novalidate><input type="email" id="ne-in" required maxlength="200" autocomplete="email" aria-label="Email"><button class="btn gold" type="submit">Jiunge</button></form><p id="nk" style="display:none;color:#F2B705">Asante! Utapokea habari zetu.</p><p id="ne" role="alert" style="display:none;color:#FFB4A9"></p></div></div><div class="cp">\u00a9 2026 SJICHASSO. Haki zote zimehifadhiwa.</div></div></footer>';
document.body.insertAdjacentHTML('afterbegin',HEADER);document.body.insertAdjacentHTML('beforeend',FOOTER);
var cur=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('#menu a,.ql a').forEach(function(a){if(a.getAttribute('href')==cur){a.classList.add('cur');a.setAttribute('aria-current','page')}});
/* ---------- menu ---------- */
var m=document.getElementById('menu'),bg=document.getElementById('burger');
function openMenu(o){m.classList.toggle('open',o);bg.setAttribute('aria-expanded',o?'true':'false')}
bg.onclick=function(){openMenu(!m.classList.contains('open'))};
m.addEventListener('click',function(e){if(e.target.tagName=='A')openMenu(false)});
document.addEventListener('keydown',function(e){if(e.key=='Escape')openMenu(false)});
/* ---------- tabs, reveal, counters ---------- */
document.querySelectorAll('.tab').forEach(function(t){t.onclick=function(){
document.querySelectorAll('.tab').forEach(function(x){x.setAttribute('aria-selected','false')});
t.setAttribute('aria-selected','true');
document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('on')});
document.getElementById(t.dataset.p).classList.add('on')}});
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window&&!reduce){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.r').forEach(function(x){io.observe(x)})}else{document.querySelectorAll('.r').forEach(function(x){x.classList.add('in')})}
document.querySelectorAll('[data-n]').forEach(function(el){var t=+el.dataset.n;if(reduce){el.textContent=t.toLocaleString()+'+';return}var s=0,id=setInterval(function(){s+=Math.ceil(t/40);if(s>=t){s=t;clearInterval(id)}el.textContent=s.toLocaleString()+'+'},30)});
/* ---------- images (set in config.js) ---------- */
document.querySelectorAll('[data-img]').forEach(function(b){var f=IM[b.dataset.img];if(!f)return;var i=new Image();i.alt=b.dataset.alt||'';i.decoding='async';if(b.dataset.img==='hero'){i.fetchPriority='high'}else{i.loading='lazy'}i.onerror=function(){i.remove()};i.src=f;b.appendChild(i)});
/* ---------- documents (set in config.js) ---------- */
document.querySelectorAll('[data-doc]').forEach(function(c){var f=DC[c.dataset.doc];if(!f)return;c.classList.add('ok');var da=c.querySelector('.da');
if(da){da.innerHTML='<a class="dbtn" href="'+esc(f)+'" target="_blank" rel="noopener">'+tx('Fungua','Open')+'</a><a class="dbtn g" href="'+esc(f)+'" download>'+tx('Pakua','Download')+'</a>'}
else{c.href=f;c.target='_blank';c.rel='noopener';var s=c.querySelector('small');if(s)s.innerHTML=tx('Fungua','Open')}});
document.querySelectorAll('[data-org-full]').forEach(function(e){e.textContent=ORG_FULL});
/* ---------- leader contacts (config.js) ---------- */
(function(){var LD=SJ.leaders||{};if(SJ.showContacts===false)return;
function tel(s){var d=String(s).replace(/[^\d+]/g,'');if(d.charAt(0)=='0')d='+255'+d.slice(1);return d}
document.querySelectorAll('[data-leader]').forEach(function(e){var d=LD[e.dataset.leader]||{},h='';
if(d.phone)h+='<a href="tel:'+esc(tel(d.phone))+'">'+esc(d.phone)+'</a>';
if(d.email)h+='<a href="mailto:'+esc(d.email)+'">'+esc(d.email)+'</a>';e.innerHTML=h})})();
/* ---------- translation ---------- */
var TT=document.querySelector('title');TT.dataset.sw=TT.textContent;
var N=[],W=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
while(W.nextNode()){var nd=W.currentNode,tx0=nd.nodeValue.trim();if(tx0&&nd.parentNode.tagName!='SCRIPT'&&Object.prototype.hasOwnProperty.call(D,tx0))N.push([nd,nd.nodeValue,tx0])}
function S(l){L=l;N.forEach(function(x){x[0].nodeValue=l=='en'?x[1].replace(x[2],D[x[2]]):x[1]});
document.querySelectorAll('[data-sw]').forEach(function(e){e.textContent=l=='en'?e.dataset.en:e.dataset.sw});
document.documentElement.lang=l;document.title=l=='en'?TT.dataset.en:TT.dataset.sw;
bg.setAttribute('aria-label',l=='en'?'Open menu':'Fungua menyu');document.getElementById('th').setAttribute('aria-label',l=='en'?'Toggle theme':'Badilisha mandhari');
document.getElementById('lang').textContent=l=='en'?'SW':'EN';document.getElementById('lang').setAttribute('aria-label',l=='en'?'Badilisha lugha: Kiswahili':'Change language: English');
try{localStorage.setItem('lg',l)}catch(e){}renderNews()}
/* ---------- news (news.json) ---------- */
var NEWS=[],NFLT='all';
function safeUrl(u){return /^(https?:\/\/|[\w\-.\/]+$)/.test(u||'')}
function renderNews(){var box=document.querySelector('[data-news]');if(!box)return;var max=+box.dataset.news||999;
var items=NEWS.filter(function(n){return NFLT=='all'||n.aina==NFLT}).sort(function(a,b){return (b.tarehe||'')>(a.tarehe||'')?1:-1}).slice(0,max);
if(!items.length){box.innerHTML='<div class="empty">'+tx('Habari na matangazo ya SJICHASSO yatachapishwa hapa.','SJICHASSO news and announcements will be published here.')+'</div>';return}
box.innerHTML=items.map(function(n){var en=L=='en',t=en&&n.kichwa_en?n.kichwa_en:n.kichwa,s=en&&n.muhtasari_en?n.muhtasari_en:n.muhtasari;
var cat={habari:['Habari','News'],tangazo:['Tangazo','Announcement'],tukio:['Tukio','Event']}[n.aina]||['Habari','News'];
var d='';if(n.tarehe){var dt=new Date(n.tarehe+'T00:00:00');if(!isNaN(dt))d=dt.toLocaleDateString(en?'en-GB':'sw-TZ',{day:'numeric',month:'long',year:'numeric'})}
var h='<article class="nc"><div class="meta"><span class="badge">'+(en?cat[1]:cat[0])+'</span><span>'+esc(d)+'</span></div><h3>'+esc(t||'')+'</h3>'+(s?'<p>'+esc(s)+'</p>':'');
if(n.kiungo&&safeUrl(n.kiungo))h+='<a class="more" href="'+esc(n.kiungo)+'">'+(en?'Read more':'Soma zaidi')+' \u2192</a>';return h+'</article>'}).join('')}
if(document.querySelector('[data-news]')){fetch('news.json').then(function(r){return r.ok?r.json():[]}).then(function(d){NEWS=Array.isArray(d)?d:[];renderNews()}).catch(function(){renderNews()})}
document.getElementById('lang').onclick=function(){S(L=='en'?'sw':'en')};S(L);
document.querySelectorAll('.chip').forEach(function(c){c.onclick=function(){document.querySelectorAll('.chip').forEach(function(x){x.setAttribute('aria-selected','false')});c.setAttribute('aria-selected','true');document.querySelectorAll('.mc').forEach(function(m){m.style.display=(c.dataset.f=='all'||m.dataset.c==c.dataset.f)?'':'none'})}});
document.querySelectorAll('.fc').forEach(function(c){c.onclick=function(){document.querySelectorAll('.fc').forEach(function(x){x.setAttribute('aria-selected','false')});c.setAttribute('aria-selected','true');NFLT=c.dataset.f;renderNews()}});
/* ---------- theme ---------- */
var R=document.documentElement;try{var tt=localStorage.getItem('th');if(tt)R.dataset.theme=tt}catch(e){}
document.getElementById('th').onclick=function(){var d=R.dataset.theme?R.dataset.theme=='dark':matchMedia('(prefers-color-scheme: dark)').matches;R.dataset.theme=d?'light':'dark';try{localStorage.setItem('th',R.dataset.theme)}catch(e){}};
/* ---------- Firebase ---------- */
var FB={apiKey:'AIzaSyA6JJ8SIdb3-ZXhv_hyY0oyuYCECLQRHVg',authDomain:'sjichosso.firebaseapp.com',projectId:'sjichosso',storageBucket:'sjichosso.firebasestorage.app',messagingSenderId:'849406364609',appId:'1:849406364609:web:16fb63a57207fbe0e8fd40'},fsP=null;
function fs(){if(!fsP)fsP=Promise.all([import('https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js'),import('https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js')]).then(function(m){return{db:m[1].getFirestore(m[0].initializeApp(FB)),f:m[1]}});return fsP}
function save(col,data){return fs().then(function(x){return x.f.addDoc(x.f.collection(x.db,col),Object.assign({at:x.f.serverTimestamp()},data))})}
/* ---------- forms ---------- */
var EM=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function setErr(id,msg){var e=document.getElementById(id+'-e');if(e)e.textContent=msg||'';var i=document.getElementById(id);if(i)i.setAttribute('aria-invalid',msg?'true':'false')}
function tooSoon(key){var n=Date.now(),l=0;try{l=+localStorage.getItem(key)||0}catch(e){}return n-l<30000}
function stamp(key){try{localStorage.setItem(key,String(Date.now()))}catch(e){}}
var F=document.getElementById('f');
if(F)F.addEventListener('submit',function(e){e.preventDefault();
var g=function(i){return document.getElementById(i).value.trim()},o=document.getElementById('ok'),oe=document.getElementById('oe'),b=F.querySelector('button[type=submit]');
var nm=g('n'),mail=g('e'),tel=g('p'),good=true;
function bad(id,sw,en){setErr(id,L=='en'?en:sw);good=false}
['n','e','p'].forEach(function(i){setErr(i,'')});o.style.display='none';oe.style.display='none';
if(nm.length<2||!/[A-Za-z\u00C0-\u024F]/.test(nm))bad('n','Andika jina kamili (angalau herufi 2).','Enter your full name (at least 2 letters).');
if(!EM.test(mail)||mail.length>200)bad('e','Andika barua pepe sahihi.','Enter a valid email address.');
if(tel&&!/^[+()\d\s-]{7,20}$/.test(tel))bad('p','Namba ya simu si sahihi.','Phone number is not valid.');
if(!good){var f1=F.querySelector('[aria-invalid="true"]');if(f1)f1.focus();return}
function okMsg(){o.innerHTML=tx('Asante '+nm+'! Ombi lako limepokelewa.','Thank you '+nm+'! Your request has been received.');o.style.display='block';F.reset()}
if(document.getElementById('hp').value){okMsg();return}
if(tooSoon('lsub')){oe.innerHTML=tx('Subiri sekunde chache, kisha jaribu tena.','Please wait a few seconds, then try again.');oe.style.display='block';return}
b.disabled=true;b.setAttribute('aria-busy','true');
var data={name:nm,college:ORG_COLLEGE,group:document.getElementById('k').value,email:mail};if(tel)data.phone=tel;
save('registrations',data).then(function(){stamp('lsub');okMsg()}).catch(function(){oe.innerHTML=tx('Imeshindwa kutuma. Jaribu tena.','Could not send. Please try again.');oe.style.display='block'}).then(function(){b.disabled=false;b.removeAttribute('aria-busy')})});
var NF=document.getElementById('nf');
NF.addEventListener('submit',function(e){e.preventDefault();var k=document.getElementById('nk'),ne=document.getElementById('ne'),v=document.getElementById('ne-in').value.trim();k.style.display='none';ne.style.display='none';
if(!EM.test(v)){ne.innerHTML=tx('Andika barua pepe sahihi.','Enter a valid email address.');ne.style.display='block';return}
if(tooSoon('lnews')){ne.innerHTML=tx('Subiri sekunde chache, kisha jaribu tena.','Please wait a few seconds, then try again.');ne.style.display='block';return}
save('subscribers',{email:v}).then(function(){stamp('lnews');k.style.display='block';NF.reset()}).catch(function(){ne.innerHTML=tx('Imeshindwa. Jaribu tena.','Failed. Please try again.');ne.style.display='block'})});
})();
