class User{

    constructor(name, mail) {
        this._name = name;
        this._mail = mail;
        this._favs = [];
    }

    get name() { return this._name }

    set name(value) { this._name = value }

    get mail() { return this._mail }

    set mail(value) { this._mail = value }

    set favs(favs) { this._favs = favs }

    get favs() { return this._favs }
}
module.exports = User