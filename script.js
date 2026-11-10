function forgiveMe(){
 const gate=document.getElementById('sorryGate');
 gate.style.transition='opacity .7s ease, transform .7s ease';
 gate.style.opacity='0';gate.style.transform='scale(1.04)';
 setTimeout(()=>{gate.remove();document.body.classList.remove('locked');const main=document.getElementById('birthdayMain');main.style.display='block';window.scrollTo({top:0,behavior:'smooth'});},700);
}
function stillAngry(){
 const r=document.getElementById('sorryReply');
 r.textContent='Awww… teddy is still waiting with the biggest hug. One more chance, Princess? 🥺';
 const t=document.querySelector('.sorry-teddy');
 t.animate([{transform:'translateX(0)'},{transform:'translateX(-7px) rotate(-2deg)'},{transform:'translateX(7px) rotate(2deg)'},{transform:'translateX(0)'}],{duration:550});
}
document.body.classList.add('locked');

const stars=document.getElementById('stars'), petals=document.getElementById('petals');
for(let i=0;i<48;i++){let s=document.createElement('span');s.className='star';s.textContent=['✦','·','✧'][i%3];s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.fontSize=(8+Math.random()*15)+'px';s.style.animationDelay=Math.random()*4+'s';stars.appendChild(s)}
for(let i=0;i<17;i++){let p=document.createElement('span');p.className='petal';p.textContent=['🌸','✿','❀'][i%3];p.style.left=Math.random()*100+'%';p.style.animationDuration=(13+Math.random()*15)+'s';p.style.animationDelay=(-Math.random()*24)+'s';p.style.fontSize=(12+Math.random()*14)+'px';petals.appendChild(p)}
function openLetter(){document.getElementById('letter').classList.toggle('show');}
let blown=0;function blow(i){let b=document.querySelectorAll('.candle')[i];if(b.textContent==='🕯️'){b.textContent='✨';blown++;}if(blown===3)document.getElementById('wish').textContent='All three candles are out — may every beautiful wish find its way to you. ♥';}
function celebrate(){let box=document.getElementById('finalwish');box.textContent='✨ 🌸 ✦ 💗 ✦ 🌸 ✨  The whole sky is cheering for you, Aysha!  ✨ 🌸 ✦ 💗 ✦ 🌸 ✨';for(let i=0;i<35;i++){let s=document.createElement('span');s.textContent=['✦','🌸','♥','✨'][i%4];s.style.position='fixed';s.style.left=Math.random()*100+'vw';s.style.top='-30px';s.style.zIndex=10;s.style.fontSize=(15+Math.random()*18)+'px';s.style.transition='transform 3s linear, opacity 3s';document.body.appendChild(s);requestAnimationFrame(()=>{s.style.transform='translateY(110vh) rotate(500deg)';s.style.opacity='0'});setTimeout(()=>s.remove(),3200)}}
