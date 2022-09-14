const btnCopy = document.querySelectorAll('.btn-copy');

btnCopy.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const id = e.currentTarget.dataset.id;
    const idStr = JSON.stringify(id);
    console.log(idStr);

    document.execCommand('copy');
  });
});

/* function copyPass(e) {
  e.preventDefault();
  var copyText = document.querySelector('.input');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  // if (copyText.value === "") {
  //   alert("NO DATA");
  // } else {
  //   alert("Copied the text: " + copyText.value);
  // }
} */

// btnCopy.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const category = e.currentTarget.dataset.id;
//     const menuCategory = menu.filter(function (menuItem) {
//       if (menuItem.category === category) {
//         return menuItem;
//       }
//     });
//     if (category === 'all') {
//       displayMenuItems(menu);
//     } else {
//       displayMenuItems(menuCategory);
//     }
//   });
// });
