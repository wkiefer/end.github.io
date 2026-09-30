// Keep the existing radio tabs in sync with shareable in-page links.
const tabs = [...document.querySelectorAll('.tab-control')];

function syncTabFromHash() {
  const page = window.location.hash.slice(1) || 'shows';
  const tab = tabs.find((control) => control.id === `tab-${page}`);
  if (tab) tab.checked = true;
}

for (const tab of tabs) {
  tab.addEventListener('change', () => {
    if (tab.checked) window.location.hash = tab.id.replace('tab-', '');
  });
}

window.addEventListener('hashchange', syncTabFromHash);
syncTabFromHash();
