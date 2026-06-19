const timeData = {
    morning:   { emoji:'🌅', bg:'#fef9c3', color:'#854d0e', text:'Good Morning'   },
    afternoon: { emoji:'☀️',  bg:'#ffedd5', color:'#9a3412', text:'Good Afternoon' },
    evening:   { emoji:'🌆', bg:'#ede9fe', color:'#5b21b6', text:'Good Evening'   },
    night:     { emoji:'🌙', bg:'#dbeafe', color:'#1e40af', text:'Good Night'     },
  };

  function greet(){
    let fullName = document.getElementById('nameInput').value.trim();
    if(!fullName) { document.getElementById('nameInput').focus(); return; }

    let hour = new Date().getHours();
    let period = hour < 12 ? 'morning' : hour >= 13 && hour < 17 ? 'afternoon' : hour >= 18 && hour < 22 ? 'evening' : 'night';
    let t = timeData[period];

    document.getElementById('greetingText').textContent = 'Hi, welcome ' + fullName + '!';
    let timeEl = document.getElementById('timeText');
    timeEl.textContent = t.emoji + ' ' + t.text;
    timeEl.style.background = t.bg;
    timeEl.style.color = t.color;

    let box = document.getElementById('resultBox');
    box.style.background = t.bg + '55';
    box.style.border = '1.5px solid ' + t.bg;
    box.classList.add('show');
  }

  document.getElementById('nameInput').addEventListener('keydown', e => { if(e.key==='Enter') greet(); });