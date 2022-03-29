export default function scroll() {
  document.querySelector('.scroll-down').addEventListener('click', () => {
    let height = window.innerHeight
    window.scrollTo({ top: height, behavior: 'smooth' })
  })
}
