export const InitializeGiveUpButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll('.closeButton')
  allCloseButtons.forEach(button => button.addEventListener('click', event => event.target.parentNode.close()))

  const allGiveUpButtons = document.querySelectorAll('.giveUp')
  
  allGiveUpButtons.forEach(button => button.addEventListener('click', event => {
    const dialogSiblingSelector = `${event.target.id}+dialog`
    const theDialog = document.querySelector(dialogSiblingSelector)
    theDialog.showModal()
  }))
}