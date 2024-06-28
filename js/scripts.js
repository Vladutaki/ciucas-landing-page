document.addEventListener('DOMContentLoaded', function() {
    var button5 = document.getElementById('button5');
    var button6 = document.getElementById('button6');
    var castigatoriDiv = document.querySelector('.castigatori');
    var oraseDiv = document.querySelector('.orase');

    var buton4 = document.getElementById('buton4');
    var buton7 = document.getElementById('buton7');
    var formular = document.getElementById('formular');
    var formular2 = document.getElementById('formular2');

    document.getElementById('buton1').addEventListener('click', function() {
        window.scrollBy(0, window.innerHeight + 200);
    });

    document.getElementById('buton2').addEventListener('click', function() {
        window.scrollBy(0, 2*window.innerHeight + 500);
    });

    oraseDiv.style.display = 'none';

    button5.addEventListener('click', function() {
        oraseDiv.style.display = 'block';
        castigatoriDiv.style.display = 'none';
    });

    button6.addEventListener('click', function() {
        castigatoriDiv.style.display = 'block';
        oraseDiv.style.display = 'none';
    });

    formular2.style.display = 'none';

    buton4.addEventListener('click', function() {
        formular.style.display = 'none';
        formular2.style.display = 'block';
    });

    buton7.addEventListener('click', function() {
        formular2.style.display = 'none';
        formular.style.display = 'block';
    });
});