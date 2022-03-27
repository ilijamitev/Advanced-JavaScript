console.log("========== Password Generator ==========");

class PasswordGenerator {
    constructor() {
        this.uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        this.numbers = '1234567890';
        this.symbols = `~!@#$%^&*?()_-+=[];:,.`;

        this.passwordArray = [];
        this.passwordLength = 0;
        this.uppercaseChecked = false;
        this.lowercaseChecked = false;
        this.numbersChecked = false;
        this.symbolsChecked = false;
        this.selectedSettings = 0;
    }

    generatePassword() {
        for (let i = 0; i < this.passwordLength / this.selectedSettings; i++) {
            if (this.uppercaseChecked) {
                this.passwordArray.push(this.uppercaseLetters[Math.floor(Math.random() * 26)])
            }
            if (this.lowercaseChecked) {
                this.passwordArray.push(this.lowercaseLetters[Math.floor(Math.random() * 26)])
            }
            if (this.numbersChecked) {
                this.passwordArray.push(this.numbers[Math.floor(Math.random() * 10)])
            }
            if (this.symbolsChecked) {
                this.passwordArray.push(this.symbols[Math.floor(Math.random() * 22)])
            }
        }
        let generatedPassword = this.passwordArray.slice(0, this.passwordLength).sort(() => Math.random() - 0.5).join("");
        return generatedPassword
    }

    showPassword(htmlElement) {
        return htmlElement.innerText = this.generatePassword()
    }

    resetValues() {
        this.passwordArray = [];
        this.passwordLength = 0;
        this.uppercaseChecked = false;
        this.lowercaseChecked = false;
        this.numbersChecked = false;
        this.symbolsChecked = false;
        this.selectedSettings = 0;
    }

    initialize() {
        const [, , passwordDisplay, passwordLengthDisplay, passwordLengthInput,] = document.querySelectorAll('.password')
        const copyPassword = document.getElementById('copy-password')
        const copiedPassword = document.getElementById('password-coppied')

        passwordLengthDisplay.innerHTML = `LENGTH <b>${passwordLengthInput.value}</b>`

        passwordLengthInput.addEventListener('input', () => {
            passwordLengthDisplay.innerHTML = `LENGTH <b>${passwordLengthInput.value}</b>`
        })

        document.getElementById('generate-btn').addEventListener('click', async (e) => {
            e.preventDefault();
            passwordDisplay.innerText = '';
            passwordDisplay.style.color = 'rgb(206, 206, 206)';
            copiedPassword.setAttribute('hidden', 'hidden');
            copyPassword.removeAttribute('hidden');

            const [uppercase, lowercase, numbers, symbols] = document.getElementsByClassName('settings');

            if (uppercase.checked) {
                this.selectedSettings++;
                this.uppercaseChecked = true;
            }
            if (lowercase.checked) {
                this.selectedSettings++;
                this.lowercaseChecked = true;
            }
            if (numbers.checked) {
                this.selectedSettings++;
                this.numbersChecked = true;
            }
            if (symbols.checked) {
                this.selectedSettings++;
                this.symbolsChecked = true
            }

            if (!this.selectedSettings) {
                copiedPassword.setAttribute('hidden', 'hidden');
                copyPassword.setAttribute('hidden', 'hidden')
                passwordDisplay.style.color = 'red'
                return passwordDisplay.innerText = `Please select at least one of the listed settings !`
            }

            this.passwordLength = Number(passwordLengthInput.value);

            this.showPassword(passwordDisplay);
            this.resetValues()
        })

        copyPassword.addEventListener('click', (e) => {
            e.preventDefault()
            copyPassword.setAttribute('hidden', 'hidden')
            copiedPassword.removeAttribute('hidden')
            navigator.clipboard.writeText(passwordDisplay.innerText);
        })
    }
}

const passwordGenerator = new PasswordGenerator;
passwordGenerator.initialize();
