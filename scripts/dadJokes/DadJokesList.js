import { useDadJokesData } from "./DadJokesDataProvider.js"
import { DadJoke } from "./DadJoke.js"

const contentElement = document.querySelector('.dadJokesContainer')

export const RenderDadJokesList = () => {
  const dadJokesData = useDadJokesData()
  dadJokesData.forEach(joke => contentElement.innerHTML += DadJoke(joke) )
}