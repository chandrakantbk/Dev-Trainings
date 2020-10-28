var images_collection = [
    'assets/img/pexels-cristian.jpg',
    'assets/img/nature-3.jpg',
    'assets/img/pexels-designs.jpg',
    'assets/img/pexels-jess.jpg'
]

function changeImage(param) {

    var imgObj = document.getElementsByTagName('img')[0];

    imgObj.setAttribute('src', images_collection[param]);

}


function generate_hallticket() {
    var seat_number = document.getElementById('seat_no').value;

    if (!seat_number) {
        alert("Please enter seat number")
        return false;
    }

    var pdfpath = 'assets/pdf/' + seat_number + '.pdf';

    alert(pdfpath);

    var btn = document.getElementsByClassName('btn-success')[0];

    btn.classList.remove('disabled');

    btn.setAttribute('href', pdfpath);

    btn.removeAttribute('class');

    if (btn.hasAttribute('class')) {
        alert("It Have attribute class")
    } else {
        alert("It doesn't have class attribute")
    }

}