function User(name) {
    this.name = name;
    this.email = '';

    this.showMe = function () {
        console.log("Je suis " + this.name + " et mon email est " + this.email);
    }
}

// Quand on fait de l'objet, le nom de la classe a une majuscule

var u = new User('Batman');

u.email = 'batman@wayne-enterprise.org'

console.log(u);
u.showMe();

var batarang = {
    name : 'Sonique',
    number : '8',
    fly: function () {
        console.log(this.name + " vole sans un bruit");
    }
};

console.log(batarang.name, batarang.number);
batarang.fly();

String.prototype.truncate = function (size) {
    return this.substr(0, size) + '...';
};

console.log('I am Batman'.truncate(8));

// String.prototype. ça existe, par contre truncate on l'invente