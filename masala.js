
// class Books {
//     constructor(title, author, genre, available){
//         this.title =title;
//         this.author =author;
//         this.genre =genre;
//         this.available =available;
//     };

//     showDetails(){
//         return `nomi: ${this.title} Muallifi: ${this.author} Janri: ${this.genre} Hozirgi holati: ${this.available ==true ? "mavjud" : "Olib ketilgan"}`
//     };
//     markAsBorrowed(){
//         this.available =false;
//         return `${this.title} nomli kitob ijaraga olib ketildi`
//     };
//     markAsReturned(){
//         this.available =true;
//         return ` ${this.title} nomli kitob ${this.available == true ? "qaytarildi": "qaytarilmadi"}`
//     }

// };

// let Kitob1 =new Books("O'tgan kunlar", "Abdulla qodiriy", "Adabiyot", true);
// let Kitob2 =new Books("garry Potter", "jey key rowling", "fantasiya", false);
// let Kitob3 =new Books("Atomic odatlar", "James", "Ilmiy", true);


// class Library {
//     books =[];
//     constructor(books){
//         this.books =books;
//     }

//     addBook(book){
//         this.books =[...this.books, book];
//         console.log("yangi kitob qo'shildi")
//     }
//     removeBook(title){
//         this.books =this.books.filter((value) => value.title !==title);
//         console.log(`${title} nomli kitob o'chirildi`);
//     }

//     searchByGenre(genre){
//         console.log(this.books.filter((value) => value.genre.includes(genre)));
//     };
//     listAvailableBooks(){
//         console.log(this.books.filter((value) => value.available));
//     }
// }


// let libray =new Library([Kitob1, Kitob2, Kitob3]);

// libray.searchByGenre("a");



// Avtobus tizimlashtirish

// class Bus {
//     constructor(id, route, seats, reservedSeats){
//         this.id =id;
//         this.route =route.toLowerCase();
//         this.seats =seats;
//         this.reservedSeats = reservedSeats.length === 0 ? [] : reservedSeats;
//     };
//     getDetails(){
//         return `Id: ${this.id} Yo'nalishi: ${this.route} O'rindiqlari: ${this.seats} Band qilingan o'rindiqlar: ${this.reservedSeats.length}`
//     }
//     reserveSeat(seatNumber){
//         if(this.reservedSeats.includes(seatNumber)){
//             return `${seatNumber} raqamli o'rindiq allaqachon band`;
//         } else {
//             this.reservedSeats.push(seatNumber);
//             return `${seatNumber} raqamli joy band qilindi`;
//         }
//     }
//     cancelReservation(cancelseatNumber){
//         return `${this.reservedSeats.filter((item) => item !==cancelseatNumber)}`
//     }
// };

// let bus1 =new Bus(1, "Chilonzor", 44, [1, 4, 6]);
// let bus2 =new Bus(2, "Olmazor", 41, [1, 4, 6, 10, 12]);
// let bus3 =new Bus(3, "Sergeli", 10, [1, 6, 8]);


// class BusSystem {
//     buses =[]
//     constructor(buses){
//         this.buses =buses;
//     }

//     addBus(bus){
//         this.buses =[...this.buses, bus];
//         console.log("yangi avtobus qo'shildi")
//     }
//     listsBuses(){
//         this.buses.forEach((value) => console.log(value))
//     }
//     searchByRoute(route){
//         return this.buses.filter((v) => v.route.includes(route))
//     }
//     reserveSeat(busId, seatNumber){
//         let bus =this.buses.find((b)=> b.id===busId);
//         if(bus.id ==busId){
//             return bus.reserveSeat(seatNumber)
//         } else{
//             return "Bunaqa avtobus topilmadi"
//         }
//     }
//     cancelReservation(busId, seatNumber){
//         let bus =this.buses.find((b)=> b.id===busId);
//         if(bus.id ==busId){
//             return bus.cancelReservation(seatNumber)
//         } else{
//             return "Bunaqa avtobus topilmadi"
//         }
//     }

// }

// let buslar =new BusSystem([bus1, bus2, bus3]);
// console.log(buslar.reserveSeat(2, 20));










// Shopping 
class Product {
    constructor(id, name, price, stock){
        this.id =id;
        this.name =name;
        this.price =parseFloat(price.replace("$", ""));
        this.stock =stock;
    }

    getDetails(){
        return `id: ${this.id} Nomi: ${this.name} Narxi: ${this.price} Miqdori: ${this.stock}`
    }
    updateStock(quantity){
        this.stock =quantity;
        return this.stock
    };
};


let product1 =new Product(1, "Futbolka", "12.35$", 5);
let product2 =new Product(2, "Poyabzal", "10$", 10);
let product3 =new Product(3, "naski", "2$", 2);

class OrderItem{
    constructor(product, quantity){
        this.product =product;
        this.quantity =quantity;
    }

    calculatePrice(){
        return this.product.price * this.quantity;
    }   

};

let olma =new OrderItem(product1, 4);
let olma2 =new OrderItem(product2, 3);

class Order {
    constructor(id, items){
        this.id =id;
        this.items =[items];
    }
    addItem(orderItem){
       return  this.items.push(orderItem)
    }
    calculateTotal(){
        let total =0;
        this.items.forEach(item =>{
            total +=item.product.price * item.quantity;
        });
        return total
    }
};

let natija =new Order(1, olma)
let natija2 =new Order(2, olma2)


class Shop {
    constructor(products, orders){
        this.products =products;
        this.orders =orders;
    }
    addProduct(product){
        return products.push(product)
    }
    listProducts(){
         this.products.forEach((val) =>{
            console.log(val.getDetails())
        })
    }
    createOrder(order){
        this.orders.push(order)
        return order
    }
};

let shop =new Shop([product1, product2, product3], [natija, natija2]);
console.log(shop.listProducts())