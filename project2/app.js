const menuToogle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToogle.addEventListener('click', function (e) {
  navigation.classList.toggle('open')
});