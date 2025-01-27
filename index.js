class Booking{
    constructor(Name, Email, CheckIn, CheckOut, Discount, Room){
        this.Name = "";
        this.Email = "";
        this.CheckIn = CheckIn;
        this.CheckOut = CheckOut;
        this.Discount = Discount;
        this.Room = {};
    }

    isWithin(date) {
        return date >= this.CheckIn && date <= this.CheckOut;
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
        for (let booking of this.Bookings) {
            if (booking.isWithin(date)){
                return true
            }
        }
        return false;
    }
    static totalOccupancyPercentage(rooms, date1, date2){

    }
}

module.exports = {Room, Booking};
