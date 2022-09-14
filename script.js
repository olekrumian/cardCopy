let btnCopy = document.querySelectorAll('.btn-copy');

function copyClip(e) {
  btnCopy = e.currentTarget.dataset.id;
  let element = document.createElement('textarea');
  element.value = btnCopy;
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
  alert(`Номер карти ${element.value} скопійовано. Дякую за допомогу!`);
}

btnCopy.forEach(function (btn) {
  btn.addEventListener('click', copyClip);
});
