const audio1 = new Audio('./tune/winfan.mp3')
audio1.volume = 0.4
const audio2 = new Audio('./tune/pleased.mp3')
audio2.volume = 0.4
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
	button.addEventListener('click', () => {
		audio.play()
	})
})

function clickMe() {
	document.querySelector('h1').innerHTML = '...Rolling'

	setTimeout(() => {
		let randomNumber1 = Math.floor(Math.random() * 6) + 1
		let randomDiceImage1 = 'images/dice' + randomNumber1 + '.png'
		let image1 = document.querySelectorAll('img')[0]
		image1.setAttribute('src', randomDiceImage1)

		let randomNumber2 = Math.floor(Math.random() * 6) + 1
		let randomDiceImage2 = 'images/dice' + randomNumber2 + '.png'
		document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2)

		if (randomNumber1 > randomNumber2) {
			document.querySelector('h1').innerHTML = 'Player 1 wins !!!'
			audio1.play()
		} else if (randomNumber1 < randomNumber2) {
			document.querySelector('h1').innerHTML = 'Player 2 wins !!!'
			audio1.play()
		} else {
			document.querySelector('h1').innerHTML = 'Draw'
			audio2.play()
		}

		setTimeout(() => {
			location.reload()
		}, 3000)
	}, 2000)

	return false
}
