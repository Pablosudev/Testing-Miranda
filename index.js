class Booking {
  constructor(
    BookingName,
    BookingEmail,
    BookingCheckIn,
    BookingCheckOut,
    BookingDiscount,
    BookingRoom
  ) {
    this.Validate(
      BookingName,
      BookingEmail,
      BookingCheckIn,
      BookingCheckOut,
      BookingDiscount,
      BookingRoom
    );
    this.BookingName = BookingName;
    this.BookingEmail = BookingEmail;
    this.BookingCheckIn = BookingCheckIn;
    this.BookingCheckOut = BookingCheckOut;
    this.BookingDiscount = BookingDiscount;
    this.BookingRoom = BookingRoom;
  }

  getFee() {
    let roomDiscount = this.BookingRoom.RoomRate * ( this.BookingRoom.RoomDiscount / 100);
    let roomPrice = this.BookingRoom.RoomRate - roomDiscount;
    let totalDiscount = roomPrice * ( this.BookingDiscount / 100);
    let Discount = roomPrice - totalDiscount 
    return Discount;
  }

  Validate(
    BookingName,
    BookingEmail,
    BookingCheckIn,
    BookingCheckOut,
    BookingDiscount,
    BookingRoom
  ) {
    if (typeof BookingName !== "string") {
      throw new Error("Error en el tipo de dato del nombre");
    }
    if (BookingName.length < 2) {
      throw new Error("Error longitud minima no alcanzada");
    }
    if (BookingName.length > 256) {
      throw new Error("Error nombre demasiado largo");
    }
    if (typeof BookingEmail !== "string") {
      throw new Error("Error en el tipo de datos del email");
    }
    if (BookingEmail.length >= 50) {
      throw new Error("Error email demasiado largo");
    }
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(BookingEmail)) {
      throw new Error("Error estructura email");
    }
    if (!(BookingCheckIn instanceof Date)) {
      throw new Error("Error en el tipo de datos de la fecha Check-In");
    }
    if (!(BookingCheckOut instanceof Date)) {
      throw new Error("Error en el tipo de datos de la fecha Check-Out");
    }
    if (typeof BookingDiscount !== "number") {
      throw new Error("Error en el tipo de datos del Discount");
    }
    if (BookingDiscount > 100) {
      throw new Error("Descuento demasiado grande");
    }
    if (typeof BookingRoom !== "object") {
      throw new Error("Tipo de dato de habitación incorrecto");
    }
  }
}


class Room {
  constructor(RoomName, RoomBookings, RoomRate, RoomDiscount) {
    this.ValidateRoom(RoomName, RoomBookings, RoomRate, RoomDiscount);
    this.RoomName = RoomName;
    this.RoomBookings = RoomBookings;
    this.RoomRate = RoomRate;
    this.RoomDiscount = RoomDiscount;
  }
  isOccupied(date) {
    for (let booking of this.RoomBookings) {
      
      if (booking.BookingCheckIn <= date && booking.BookingCheckOut >= date) {
        return true;  
      }
    }
    return false;  
  }

  occupancyPercentage() {
    let totalBookedDays = 0; 
    for (let booking of this.RoomBookings) {
      const bookedDays = (booking.BookingCheckOut - booking.BookingCheckIn) / (1000 * 60 * 60 * 24); 
      totalBookedDays += bookedDays;
    }
    const occupancy = (totalBookedDays * 100) / 365;
    return parseFloat(occupancy.toFixed(2));
}

  static totalOccupancyPercentage(rooms, startDate, endDate) {
    let totalBookedDays = 0;  
    let totalAvailableDays = 0;  

    
    for (let room of rooms) {
        
        for (let booking of room.RoomBookings) {
            
            const bookingStart = booking.BookingCheckIn;
            const bookingEnd = booking.BookingCheckOut;

            
            const overlapStart = bookingStart > startDate ? bookingStart : startDate;
            const overlapEnd = bookingEnd < endDate ? bookingEnd : endDate;

            
            if (overlapStart < overlapEnd) {
                
              const bookedDays = (overlapEnd - overlapStart) / (1000 * 60 * 60 * 24); 
              totalBookedDays += bookedDays;  
            }
        }
      totalAvailableDays += 365;  
    }

    
    const totalOccupancy = (totalBookedDays * 100) / totalAvailableDays;
    return parseFloat(totalOccupancy.toFixed(2));
  }
  static availableRooms(rooms, startDate, endDate) {
    const availableRooms = [];

    // Recorremos todas las habitaciones
    for (let room of rooms) {
        let isAvailable = true; // Suponemos que la habitación está disponible

        // Recorremos todas las reservas de cada habitación
        for (let booking of room.RoomBookings) {
            // Verificamos si la reserva se superpone con el rango de fechas dado
            const bookingStart = booking.BookingCheckIn;
            const bookingEnd = booking.BookingCheckOut;

            // Comprobamos si hay superposición de fechas
            if (bookingStart < endDate && bookingEnd > startDate) {
                isAvailable = false; // Si hay superposición, la habitación no está disponible
                break; // No hace falta seguir revisando otras reservas
            }
        }

        // Si no se encontró ninguna superposición, la habitación está disponible
        if (isAvailable) {
            availableRooms.push(room);
        }
    }

    return availableRooms;
}

  ValidateRoom(RoomName, RoomBookings, RoomRate, RoomDiscount) {
    if (typeof RoomName !== "string") {
      throw new Error("Error en el tipo de dato del nombre");
    }
    if (RoomName.length < 2) {
      throw new Error("Nombre demasiado corto");
    }
    if (RoomName.length >= 50) {
      throw new Error("Error en la longitud del nombre");
    }
    if (!Array.isArray(RoomBookings)) {
      throw new Error("Error con el tipo de propiedad de Booking");
    }
    if (typeof RoomRate !== "number") {
      throw new Error("Error en el tipo de dato de Rate");
    }
    if (RoomRate <= 0) {
      throw new Error("Valor de Rate demasiado bajo");
    }
    if (RoomRate >= 1001) {
      throw new Error("Valor de Rate demasiado grande");
    }
    if (typeof RoomDiscount !== "number") {
      throw new Error("Error en el tipo de dato de Discount");
    }
    if (
      typeof RoomDiscount < 0 ||
      RoomDiscount > 100 ||
      RoomDiscount % 1 !== 0
    ) {
      throw new Error("Error Discount debe ser un número entero");
    }
  }
}

module.exports = { Room, Booking };
