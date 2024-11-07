const facebook = document.getElementById('fb');
const instagram = document.getElementById('ig');

facebook.onclick = function(e){
    e.preventDefault();

    window.open('https://www.facebook.com/burgenmx/');
} 

instagram.onclick = function(e){
    e.preventDefault();

    window.open('https://www.instagram.com/burgenmx/');
}