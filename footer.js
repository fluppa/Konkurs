export default function footer() {
  document.querySelector('footer').innerHTML = `<div class="wrap">
        <div class="row logo">
          <img class="logo" src="resources/logo.svg" />
          <section class="sc-wrapper">
            <a href="#" class="face icon"></a>
            <a href="#" class="ig icon"></a>
          </section>
        </div>
        <div class="row nav">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#about">O konkursie</a></li>
            <li><a href="index.html#stages">Etapy</a></li>
            <li><a href="regulamin.html">Regulamin</a></li>
            <li><a href="index.html#organizator">Organizator</a></li>
            <li><a href="index.html#contact">Kontakt</a></li>
          </ul>
          <ul>
            <li><a href="etap1.html">Etap I</a></li>
            <li><a href="etap2.html">Etap II</a></li>
            <li><a href="etap3.html">Etap III</a></li>
          </ul>
        </div>
        <div class="row copy">Copyright &copy; Cinespace 2022</div>
      </div>`
}
