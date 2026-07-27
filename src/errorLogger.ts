window.addEventListener('error', function(e) {
  handleCrash('Error: ' + e.message + ' at ' + e.filename + ':' + e.lineno);
});
window.addEventListener('unhandledrejection', function(e) {
  handleCrash('Unhandled Rejection: ' + (e.reason && e.reason.stack ? e.reason.stack : e.reason));
});

function handleCrash(msg: string) {
  const div = document.createElement('div');
  div.style.color = 'red';
  div.style.background = 'white';
  div.style.padding = '20px';
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.zIndex = '9999';
  div.style.fontSize = '12px';
  
  const btn = document.createElement('button');
  btn.innerText = 'Clear Cache & Reload';
  btn.style.marginTop = '10px';
  btn.style.padding = '10px';
  btn.style.background = 'black';
  btn.style.color = 'white';
  btn.onclick = async () => {
    localStorage.clear();
    sessionStorage.clear();
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
    }
    const cachesKeys = await caches.keys();
    for (const key of cachesKeys) {
      await caches.delete(key);
    }
    window.location.reload();
  };
  
  div.innerText = msg + '\n\n';
  div.appendChild(btn);
  document.body.appendChild(div);
}
