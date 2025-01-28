

class Booking{
    constructor(Name, Email, CheckIn, CheckOut, Discount, Room){
        this.Validate(Name, Email, CheckIn, CheckOut, Discount, Room)
        this.Name = "";
        this.Email = "";
        this.CheckIn = CheckIn;
        this.CheckOut = CheckOut;
        this.Discount = Discount;
        this.Room = {};
    }

    get fee (){

        return true
    }
    Validate(Name, Email, CheckIn, CheckOut, Discount, Room){
        if(typeof Name !== "string"){
            throw new Error("Error en el tipo de dato del nombre");
        } 
        if(Name.length < 2){
            throw new Error("Error longitud minima no alcanzada");
        }
        if(Name.length > 256){
            throw new Error("Error nombre demasiado largo");
        }
        if(typeof Email !== "string"){
            throw new Error("Error en el tipo de datos del email")
        }
        if(Email.length >= 50){
            throw new Error("Error email demasiado largo")
        }
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!regex.test(Email)){
            throw new Error("Error estructura email")
        }
        if(!(CheckIn instanceof Date)){
            throw new Error("Error en el tipo de datos de la fecha Check-In")
        }
        if(!(CheckOut instanceof Date)){
            throw new Error("Error en el tipo de datos de la fecha Check-Out")
        }
        if(typeof Discount !== 'number'){
            throw new Error("Error en el tipo de datos del Discount")
        }
        if(Discount > 100){
            throw new Error("Descuento demasiado grande")
        }
        if(typeof Room !== 'object'){
            throw new Error ("Tipo de dato de habitación incorrecto")
        }
    }
}




class Room {
    
    constructor(name,Bookings,rate,discount){
        this.name = "";
        this.Bookings = [];
        this.rate = rate;
        this.discount = discount;
    }
    isOccupied(date){
        return true
    }
    occupancyPercentage(startDate, endDate){
        return true
    }
    static totalOccupancyPercentage(rooms, startDate, endDate) {
        return true
    }
    static availableRooms(rooms, startDate, endDate){
        return true
    }

}

module.exports = {Room, Booking};
