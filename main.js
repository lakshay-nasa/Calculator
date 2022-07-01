let result = "";
let buttons = document.querySelectorAll('.func-buttons');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            result = eval(result);
            document.querySelector('.result').innerHTML = result;
        }

        else if(e.target.innerHTML == 'AC'){
            result = "0"
            document.querySelector('.result').innerHTML = '';
            document.querySelector('.user-data').innerHTML = result;
        }

        else {
            console.log(e.target)
            result = result + e.target.innerHTML;
            document.querySelector('.user-data').innerHTML = result;
        }
    })

})