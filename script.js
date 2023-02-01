class Input {
    getInput() {
        const form = document.querySelector('form');
        form.addEventListener('submit', e => {
            e.preventDefault();
            let input = form.input.value.trim().toUpperCase();

            if(input) {
                this.palindrome(input.trim())

            }
            form.reset();
        })
    }

    palindrome(input) {
        const display = document.querySelector('.display-result p');
        let letters = input.replace(/[^\w\s]|\s+/g, '');
        let reverse = input.split('').reverse().join('').replace(/[^\w\s]|\s+/g, '');
        

        if(letters === reverse) {
            console.log(letters, reverse)
            display.textContent = 'This word is Palindrome';
        } else {
            console.log(letters, reverse)
            display.textContent = 'This word is not Palindrome';
        }
    }
}


const input = new Input();
console.log(input.getInput())