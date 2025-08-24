
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

class Bus {
    constructor(id, route, seats, reservedSeats){
        this.id =id;
        this.route =route.toLowerCase();
        this.seats =seats;
        this.reservedSeats = reservedSeats.length === 0 ? [] : reservedSeats;
    };
    getDetails(){
        return `Id: ${this.id} Yo'nalishi: ${this.route} O'rindiqlari: ${this.seats} Band qilingan o'rindiqlar: ${this.reservedSeats.length}`
    }
    reserveSeat(seatNumber){
        if(this.reservedSeats.includes(seatNumber)){
            return `${seatNumber} raqamli o'rindiq allaqachon band`;
        } else {
            this.reservedSeats.push(seatNumber);
            return `${seatNumber} raqamli joy band qilindi`;
        }
    }
    cancelReservation(cancelseatNumber){
        return `${this.reservedSeats.filter((item) => item !==cancelseatNumber)}`
    }
};

let bus1 =new Bus(1, "Chilonzor", 44, [1, 4, 6]);
let bus2 =new Bus(2, "Olmazor", 41, [1, 4, 6, 10, 12]);
let bus3 =new Bus(3, "Sergeli", 10, [1, 6, 8]);


class BusSystem {
    buses =[]
    constructor(buses){
        this.buses =buses;
    }

    addBus(bus){
        this.buses =[...this.buses, bus];
        console.log("yangi avtobus qo'shildi")
    }
    listsBuses(){
        this.buses.forEach((value) => console.log(value))
    }
    searchByRoute(route){
        return this.buses.filter((v) => v.route.includes(route))
    }
    reserveSeat(busId, seatNumber){
        let bus =this.buses.find((b)=> b.id===busId);
        if(bus.id ==busId){
            return bus.reserveSeat(seatNumber)
        } else{
            return "Bunaqa avtobus topilmadi"
        }
    }
    cancelReservation(busId, seatNumber){
        let bus =this.buses.find((b)=> b.id===busId);
        if(bus.id ==busId){
            return bus.cancelReservation(seatNumber)
        } else{
            return "Bunaqa avtobus topilmadi"
        }
    }

}

let buslar =new BusSystem([bus1, bus2, bus3]);
console.log(buslar.reserveSeat(2, 20));


