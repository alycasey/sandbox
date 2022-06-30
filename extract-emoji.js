Array.from(document.querySelector('[data-qa=slack_kit_list]').children).forEach(e => {
  const img = e.querySelector('img.p-customize_emoji_list__image');
  const x = img.src.split('.');
  const filetype = x.reverse()[0];
  const name = img.alt;
  window.sessionStorage.setItem(`*EMOJI--${name}.${filetype}`, img.src);
});



var xhr = new XMLHttpRequest();
xhr.open('GET', img.src);
xhr.responseType = 'blob';
xhr.onload = e => {
  const url = window.URL.createObjectURL(this.response);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  // the filename you want
  a.download = `${name}.${filetype}`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
};
xhr.send(); 