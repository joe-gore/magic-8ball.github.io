const form = document.querySelector('form');
const questionInput = document.querySelector('#question');
const answerOutput = document.querySelector('#answer');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (questionInput.value.length < 1) {
    answerOutput.textContent = 'Please ask a question.';
  } else {
    const answer = generateAnswer();
    answerOutput.textContent = answer;
    answerOutput.classList.remove('shake');
    void answerOutput.offsetWidth; // trigger reflow to restart the animation
    answerOutput.classList.add('shake');
  }
});

function generateAnswer() {
  const answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Better not tell you now',
    'Ask again later',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'Outlook not so good',
    'My sources say no',
    'Very doubtful'
  ];
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}