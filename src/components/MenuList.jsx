export default class Menus {
    name = ""
    description = ""
    image = ""
    price = " ";

    constructor(initializer) {
        this.id = initializer.id
        this.name = initializer.name
        this.description = initializer.description
        this.image = initializer.image
        this.price = initializer.price
    }
}