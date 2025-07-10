const a=document.createElement('textarea');a.placeholder='Write something...';a.value=localStorage.getItem('note')||'';a.oninput=()=>localStorage.setItem('note',a.value);document.body.appendChild(a);
