Array.from(document.querySelector('[data-qa=slack_kit_list]').children).forEach(e => {
  const img = e.querySelector('img.p-customize_emoji_list__image');
  const [_, filetype] = img.src.split('.');
  const name = img.alt;
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  ctx.drawImage(img, 0, 0);
  c.toBlob(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = `${name}.${filetype}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }, "image/jpeg", 0.75);
});