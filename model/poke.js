class Poke{

    constructor(id, name, img) {
        this._id = id;
        this._name = name;
        this._urlImg = img;
    }
    get id() { return this._id }

    set id(value) { this._id = value }

    get name() { return this._name }

    set name(value) { this._name = value }

    get img() { return this._urlImg }

    set img(value) { this._urlImg = value }
}
module.exports = Poke