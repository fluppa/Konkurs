export default function nav() {
  document.querySelector('nav').innerHTML = `<img class="logo" src="resources/logo.svg" />
      <ul class="nav-menu">
        <li><a href="index.html#about">O konkursie</a></li>
        <li><a href="index.html#stages">Etapy</a></li>
        <li><a href="index.html#organizator">Organizator</a></li>
        <li><a href="index.html#contact">Kontakt</a></li>
      </ul>`
}
