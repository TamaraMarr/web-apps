let cnt = 0;

let button = document.getElementById('dugme');
button.addEventListener('click', increment);

function increment() {
    let counter = sessionStorage.getItem('counter'); 
    
    if (counter !== 'undefined') {
        cnt = counter;
    }

    cnt++;

    sessionStorage.setItem('counter', cnt);

    button.textContent = cnt;
}