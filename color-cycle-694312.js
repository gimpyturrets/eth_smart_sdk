const colors=['red','green','blue'];let i=0;setInterval(()=>{document.body.style.background=colors[i++%colors.length];},1000);
