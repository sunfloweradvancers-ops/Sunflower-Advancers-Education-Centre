function showTab(tabId){
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));
  const tab = document.getElementById(`tab-${tabId}`);
  if(tab) tab.classList.add('active');
}

// Initialize Home tab
showTab('home');
