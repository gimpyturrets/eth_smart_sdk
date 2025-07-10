const colors=['#ff9','#9ff','#f9f','#fc9','#9f9'],b=document.body;let i=0;setInterval(()=>{b.style.transition='background 1s';b.style.background=colors[i++%colors.length];},3000);
