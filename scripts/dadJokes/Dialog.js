import { RandomDadJokeGenerator } from "./RandomDadJokeGenerator.js"

export const InitializeGiveUpButtonEvents = () => {
  
  const giveUpButton = document.querySelector('.giveUp')
  
  giveUpButton.addEventListener('click', event => {
    const dialogSiblingSelector = `#${event.target.id}+dialog`
    const theDialog = document.querySelector(dialogSiblingSelector)
    theDialog.showModal()
  })
  
  
  const closeButton = document.querySelector('.closeButton')
  closeButton.addEventListener('click', event => {
    event.target.parentNode.close(RandomDadJokeGenerator())
    InitializeGiveUpButtonEvents()

  })
}

