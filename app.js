const p1DisplayScore = document.querySelector('#p1Display');
const p2DisplayScore = document.querySelector('#p2Display');
const playto = document.querySelector('#playto');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');

p1DisplayScore.innerText = 0;
p2DisplayScore.innerText = 0;

// console.dir(p1DisplayScore);

p1Button.addEventListener('click', function () {
  p1DisplayScore.innerText++;
  if (p1DisplayScore.innerText === playto.value) {
    console.log('p1 won');
    p1Button.disabled = true;
    p2Button.disabled = true;

    p1DisplayScore.classList.add('has-text-success');
    p2DisplayScore.classList.add('has-text-danger');
  }
});

p2Button.addEventListener('click', function () {
  p2DisplayScore.innerText++;
  if (p2DisplayScore.innerText === playto.value) {
    console.log('p2 won');
    p1Button.disabled = true;
    p2Button.disabled = true;

    p1DisplayScore.classList.add('has-text-success');
    p2DisplayScore.classList.add('has-text-danger');
  }
});

function resetMe() {
  p1DisplayScore.innerText = 0;
  p2DisplayScore.innerText = 0;
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1DisplayScore.classList.remove('has-text-success');
  p2DisplayScore.classList.remove('has-text-danger');
}

reset.addEventListener('click', resetMe);
console.log(p1DisplayScore.innerText);
console.log(playto.value);
