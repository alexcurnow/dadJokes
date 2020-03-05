import { useDadJokesData } from "./DadJokesDataProvider.js"
import { DadJoke } from "./DadJoke.js"

const contentElement = document.querySelector('.dadJokesContainer')

export const RandomDadJokeGenerator = () => {
  let randomNumber = Math.floor(Math.random() * 15)
  const dadJokesData = useDadJokesData()

  contentElement.innerHTML = DadJoke(dadJokesData[randomNumber]) 
  
}

