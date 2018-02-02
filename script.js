// $( document ).ready() block.
//=================================================================
$( document ).ready(function() {
console.log('document ready');

function reservation (name, qty, phone, email, time) {
    this.name = name;
    this.qty = qty;
    this.phone = phone;
    this.email = email;
    this.time = time;
};

var reserve = new reservation('MARIO', 2,  7863407704, 'MCKAYMA2@GMAIL.COM', 1400 );

console.log(reserve);

});  //closing



