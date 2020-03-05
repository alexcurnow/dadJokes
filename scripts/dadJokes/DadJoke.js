export const DadJoke = dadJokeDataObject => {
  return `
  <section class="dadJoke" id='${dadJokeDataObject.id}'>
  <h3 class="question">${dadJokeDataObject.question}</h3>
  <button class="giveUp" id="button--${dadJokeDataObject.id}">Give up?</button>
  <dialog class="answerDialog">
    <h3 class="answer">${dadJokeDataObject.answer}</h3>
  <button class="closeButton">Haha, terrible...</button>
  </dialog>
</section>
  `
}