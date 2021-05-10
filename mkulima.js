products = [];
farms = [];
class Mkulima {
    constructor(name, Id) {
        this.name = name;
        this.Id = Id;


    }
};



class Farms extends Mkulima {
    constructor(name, Id, farmName, phoneNumber, address) {
        super(name, Id);
        this.farmName = farmName;
        this.phoneNumber = phoneNumber;
        this.address = address;



    }
    addFarm(farm) {
        farm = { name: this.name, Id: this.Id, farmName: this.farmName, phoneNumber: this.phoneNumber, address: this.address }
        farms.push(farm)
    }
    removeFarm(farm) {
        farm = { name: this.name, Id: this.Id, farmName: this.farmName, phoneNumber: this.phoneNumber, address: this.address }
        farms.pop(farm)

    }
}

// getFarm(Id) {
//     return farm(Id)
// }

// updateFarms(name, Id, phoneNumber, address); {
//     var update = this.Farms.find(update => update.name === name)
//     var update = {
//         Id: Id,
//         name: name,
//         phoneNumber: phoneNumber,
//         address: address,
//     }
//     return update
// }




var farm = {
    Id: 1234567,
    name: "SOlia",
    phoneNumber: "07658394",
    address: 2345,
    get farm() {
        return this.Id
    }
}
console.log(farm.Id);
var farm1 = new Farms("Mary", 1234567, "Solia", "07658394", "2345");
var farm2 = new Farms("Grace", 2, "Namanga", "00000", "23344");
var farm3 = new Farms("mamag", 12345, "solio", "078965544");
farm1.addFarm(farm1);
farm2.addFarm(farm2);
farm3.addFarm(farm3);
farm1.removeFarm("Mary", 1, "Solia", "07658394", "2345");
console.log(farms);
console.log(farm1);
//console.log(farm2.getFarm(1233))
//console.log(farm2.updateFarm("mango", 23445, "saisi", "2345678", "23456"))
class Grocery extends Mkulima {
    constructor(name, Id, StoreName, phoneNumber, address) {
        super(name, Id);
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.StoreName = StoreName;
    }
}
class Product extends Mkulima {
    constructor(name, Id, priceField) {
        super(name, Id);
        this.priceField = priceField;
    }
    addProduct(product) {
        product = { name: this.name, Id: this.Id, priceField: this.priceField }
        products.push(product)
    }
    removeProduct(farm) {
        product = { name: this.name, Id: this.Id, priceField: this.priceField }
        products.pop(product)

    }

}
// updateProduct(name, Id, priceField); {

//     let update = this.products.find(update => update.name === name);
//     update = {
//         Id: Id,
//         name: name,
//         priceField: priceField,

//     }
//     return update;
// }
var product = {
    Id: 123,
    name: "fertilizer",
    price: 200,
    get product() {
        return this.Id;
    }
};
console.log(product.Id)
var product1 = new Product("apple", "12567 ", 200);
var product2 = new Product("beans", "3487", 123);
var product3 = new Product("maize", "1234", 4980);

product1.addProduct(product1);
product2.addProduct(product2);
product3.addProduct(product3);

product1.removeProduct("apple", "1234567", 450);
console.log(product1);
console.log(product2);
console.log(products);
// console.log(product1.updateProduct("sweets", 1230, 346));