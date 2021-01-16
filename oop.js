const _private = new WeakMap();

class Book{

    constructor(title, author, price){
        

        const properties = {
            _title: title,
            _author: author,
            _price: price
        }

        _private.set(this,{properties});
        _private.get() 

    }

    get title(){
        return _private.get(this).properties['_title'];
    }

    get price(){
        return _private.get(this).properties['_price'];
    }

    set title(newTitle){
        return _private.get(this).properties['_title'] = newTitle;
    }

    getAllData(){
        console.log(`Titulo: ${this.title}`,`Author: ${this.title}`,`Price: ${this.title}`)
        
    }


    
}

class Comic extends Book{
    constructor (name, author, price,ilustrators){
        super(name,author,price);
        this.ilustrators = ilustrators;
    }

    addIllustrator(newIllustator = []){
        this.ilustrators.push(newIllustator)
    }

    getAllData(){
        super.getAllData();
        console.log(`Illustradores: ${this.ilustrators}`);
        
    }

     
}

class ShoppingCart {
    constructor(){
        this.products = [];
    }

    addProduct (amount, price){
        this.products.push( ...Array(amount).fill(price));
    }

    showProducts(){
        console.log(this.products);

    }

    calcTotal(){
        return this.products.map(price => price)
                            .reduce((ac, price) => ac + price,0);
                  

    }

    printTicket(){
        console.log(`Total a pagar ${this.calcTotal()}`)
    }

    

}



//INSTANCIA DE BOOK "OSEA CREACION DE UN OBJETO DE LA CLASE BOOK"
const book1 =  new Book('1984','G,O',350);


const comic1 = new Comic('Killing Joke','A-M',150, ['E.H','J.H']);

const cart = new ShoppingCart();


comic1.addIllustrator('J.V');

console.log(comic1.ilustrators);

cart.addProduct(2,comic1.price);
cart.addProduct(3,book1.price);
cart.showProducts();
cart.printTicket();
book1.getAllData();
comic1.getAllData();





