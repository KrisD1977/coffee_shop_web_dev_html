$(function () {


    var button = $(".button");
    var buttonBuy = $('#buttonB');
    var buttonClean = $('#buttonC');

    var cartItems = $('#cartItems');
    var total = 0;
    var buttonCounter = 0;


    buttonClean.on('click', function () {
        total = 0;
        $('#totalPrice').text(total);
           for (var i = 0; i < buttonCounter; i++) {
            document.querySelector('.itemInCart').remove();
        }
        buttonCounter = 0;
    })

    buttonBuy.on('click', function () {
        if (total > 0)  {
            window.alert('Dziękujemy za zakupy!!!!' + '\nCałkowita kwota  to: ' + total + ' PLN');
            total = 0;
            $('#totalPrice').text(total);
            for (var i = 0; i < buttonCounter; i++) {
                document.querySelector('.itemInCart').remove();
            }
            buttonCounter = 0;
        } else {
            window.alert('Koszyk jest pusty.' + '\nProsimy o przemyślane zakupy')
        }
    })


    var b1 = $("#b1");
    var price1 = parseInt($('#price1').text(), 10);
    name1 = $('#name1').text();

    b1.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart1" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart1"></div></div>');

            cartItems.append(newElement);

            total = total + price1;
            $('#totalPrice').text(total);

           var array = document.getElementsByClassName('priceInCart1')
            for (var i = 0; i < array.length; i++) {
                array [i] = price1;
                         }
            $('.priceInCart1').text(price1);

            var array2 = document.getElementsByClassName('nameInCart1')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name1;
            }
            $('.nameInCart1').text(name1);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b2 = $("#b2");
    var price2 = parseInt($('#price2').text(), 10);
    name2 = $('#name2').text();

    b2.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart2" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart2"></div></div>');

            cartItems.append(newElement);

            total = total + price2;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart2')
            for (var i = 0; i < array.length; i++) {
                array [i] = price2;
            }
            $('.priceInCart2').text(price2);

            var array2 = document.getElementsByClassName('nameInCart2')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name2;
            }
            $('.nameInCart2').text(name2);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b3 = $("#b3");
    var price3 = parseInt($('#price3').text(), 10);
    name3 = $('#name3').text();

    b3.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart3" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart3"></div></div>');

            cartItems.append(newElement);

            total = total + price3;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart3')
            for (var i = 0; i < array.length; i++) {
                array [i] = price3;
            }
            $('.priceInCart3').text(price3);

            var array2 = document.getElementsByClassName('nameInCart3')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name3;
            }
            $('.nameInCart3').text(name3);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b4 = $("#b4");
    var price4 = parseInt($('#price4').text(), 10);
    name4 = $('#name4').text();

    b4.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart4" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart4"></div></div>');

            cartItems.append(newElement);

            total = total + price4;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart4')
            for (var i = 0; i < array.length; i++) {
                array [i] = price4;
            }
            $('.priceInCart4').text(price4);

            var array2 = document.getElementsByClassName('nameInCart4')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name4;
            }
            $('.nameInCart4').text(name4);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b5 = $("#b5");
    var price5 = parseInt($('#price5').text(), 10);
    name5 = $('#name5').text();

    b5.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart5" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart5"></div></div>');

            cartItems.append(newElement);

            total = total + price5;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart5')
            for (var i = 0; i < array.length; i++) {
                array [i] = price5;
            }
            $('.priceInCart5').text(price5);

            var array2 = document.getElementsByClassName('nameInCart5')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name5;
            }
            $('.nameInCart5').text(name5);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b6 = $("#b6");
    var price6 = parseInt($('#price6').text(), 10);
    name6 = $('#name6').text();

    b6.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart6" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart6"></div></div>');

            cartItems.append(newElement);

            total = total + price6;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart6')
            for (var i = 0; i < array.length; i++) {
                array [i] = price6;
            }
            $('.priceInCart6').text(price6);

            var array2 = document.getElementsByClassName('nameInCart6')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name6;
            }
            $('.nameInCart6').text(name6);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b7 = $("#b7");
    var price7 = parseInt($('#price7').text(), 10);
    name7 = $('#name7').text();

    b7.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart7" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart7"></div></div>');

            cartItems.append(newElement);

            total = total + price7;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart7')
            for (var i = 0; i < array.length; i++) {
                array [i] = price7;
            }
            $('.priceInCart7').text(price7);

            var array2 = document.getElementsByClassName('nameInCart7')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name7;
            }
            $('.nameInCart7').text(name7);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b8 = $("#b8");
    var price8 = parseInt($('#price8').text(), 10);
    name8 = $('#name8').text();

    b8.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart8" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart8"></div></div>');

            cartItems.append(newElement);

            total = total + price8;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart8')
            for (var i = 0; i < array.length; i++) {
                array [i] = price8;
            }
            $('.priceInCart8').text(price8);

            var array2 = document.getElementsByClassName('nameInCart8')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name8;
            }
            $('.nameInCart8').text(name8);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b9 = $("#b9");
    var price9 = parseInt($('#price9').text(), 10);
    name9 = $('#name9').text();

    b9.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart9" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart9"></div></div>');

            cartItems.append(newElement);

            total = total + price9;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart9')
            for (var i = 0; i < array.length; i++) {
                array [i] = price9;
            }
            $('.priceInCart9').text(price9);

            var array2 = document.getElementsByClassName('nameInCart9')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name9;
            }
            $('.nameInCart9').text(name9);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })

    var b10 = $("#b10");
    var price10 = parseInt($('#price10').text(), 10);
    name10 = $('#name10').text();

    b10.on('click', function () {

        buttonCounter++
        if (buttonCounter <= 8) {

            var newElement = $('<div class=" itemInCart"> ' +
                '<div class ="nameInCart nameInCart10" ></div> ' +
                '' +
                '<button class ="cancelItemInCart" >Usuń</button> ' +
                '<div class ="priceInCart priceInCart10"></div></div>');

            cartItems.append(newElement);

            total = total + price10;
            $('#totalPrice').text(total);

            var array = document.getElementsByClassName('priceInCart10')
            for (var i = 0; i < array.length; i++) {
                array [i] = price10;
            }
            $('.priceInCart10').text(price10);

            var array2 = document.getElementsByClassName('nameInCart10')
            for (var i = 0; i < array2.length; i++) {
                array2 [i] = name10;
            }
            $('.nameInCart10').text(name10);

        } else {

            buttonCounter = 8;
            window.alert('Pełny koszyk!');
        }
    })


    cartItems.on('click', '.cancelItemInCart', function () {
        total = total - parseInt(this.parentNode.lastChild.textContent, 10);
        $('#totalPrice').text(total);

        this.parentNode.remove();
        buttonCounter--;


    })


})