window.addEventListener('devicelight', function(event) {
  var iluminacao = event.value

  if (iluminacao <= 10) {
    document.body.classList.add('lampada--is-acesa')
  } else {
    document.body.classList.remove('lampada--is-acesa')
  }
})

if (!('ondevicelight' in window)) {
  console.log('seu navagador nao suporta device light')
}

