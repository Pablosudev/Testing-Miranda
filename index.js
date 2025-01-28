

class Booking{
    constructor(BookingName, BookingEmail, BookingCheckIn, BookingCheckOut, BookingDiscount, BookingRoom){
        this.Validate(BookingName, BookingEmail, BookingCheckIn, BookingCheckOut, BookingDiscount, BookingRoom)
        this.BookingName = "";
        this.BookingEmail = "";
        this.BookingCheckIn = CheckIn;
        this.BookingCheckOut = CheckOut;
        this.BookingDiscount = Discount;
        this.BookingRoom = {};
    }

    get fee (){
        let roomPrice = this.RoomRate * (1 - this.RoomDiscount / 100)
        let totalFee = roomPrice * (1 - this.BookingDiscount)
        return totalFee;
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
    
    constructor(RoomName,RoomBookings,RoomRate,RoomDiscount){
        this.ValidateRoom(RoomName,RooomBookings,RoomRate,RoomDiscount)
        this.RoomName = "";
        this.RoomBookings = [];
        this.RoomRate = rate;
        this.RoomDiscount = discount;
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
    ValidateRoom(name,Bookings,rate,discount){
        if(typeof name !== "string"){
            throw new Error ("Error en el tipo de dato del nombre")
        }
        if(RoomName.length < 2){
            throw new Error("Nombre demasiado corto");
        }
        if(this.RoomName.length >= 50){
            throw new Error("Error en la longitud del nombre");
        }
        if(!Array.isArray(RoomBookings)){
            throw new Error ("Error con el tipo de propiedad de Booking")
        }
        if(typeof RoomRate !== "number"){
            throw new Error("Error en el tipo de dato de Rate")
        }
        if(RoomRate <= 0){
            throw new Error("Valor de Rate demasiado bajo")
        }
        if(RoomRate >= 1001){
            throw new Error("Valor de Rate demasiado grande")
        }
        if(typeof RoomDiscount !== "number"){
            throw new Error("Error en el tipo de dato de Discount")
        }
        if(typeof RoomDiscount < 0 || discount > 100 || discount % 1 !== 0){
            throw new Error("Error Discount debe ser un número entero")
        }
    }

}

module.exports = {Room, Booking};
