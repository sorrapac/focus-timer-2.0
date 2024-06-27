let darkMode = true
const buttonDark = document.getElementById('dark-mode')

buttonDark.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark')

  const mode = darkMode ? 'dark' : 'light'
  event.currentTarget
  .querySelector('span').textContent = `${mode} mode ativado`

})