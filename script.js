//Para adicionar mais, basta colocar mais emojis dentro da []
//const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊','😁', '🐱‍👤', '❤', '💖'];
const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊','😁', '🐱‍👤', '❤', '💖'];
        const gameContainer = document.getElementById('gameContainer');
        let flippedCards = [];
        let matchedPairs = 0;

        function createCard(emoji) {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.emoji = emoji;
            card.addEventListener('click', flipCard);
            return card;
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function initializeGame() {
            const allEmojis = [...emojis, ...emojis];
            shuffleArray(allEmojis);
            allEmojis.forEach(emoji => {
                gameContainer.appendChild(createCard(emoji));
            });
        }

        function flipCard() {
            if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
                this.textContent = this.dataset.emoji;
                this.classList.add('flipped');
                flippedCards.push(this);

                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 500);
                }
            }
        }

        function checkMatch() {
            const [card1, card2] = flippedCards;
            if (card1.dataset.emoji === card2.dataset.emoji) {
                card1.classList.add('matched');
                card2.classList.add('matched');
                matchedPairs++;
                if (matchedPairs === emojis.length) {
                    alert('Parabéns!! Você venceu o jogo!!. Atualize a pagina');
                }
            } else {
                card1.textContent = '';
                card2.textContent = '';
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }
            flippedCards = [];
        }

        initializeGame();
