const accordion = document.getElementsByClassName('contentBox');
const length = accordion.length;
for (i = 0; i < length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}