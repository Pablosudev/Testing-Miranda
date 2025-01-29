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
    let roomPrice = this.RoomRate * (1 - this.RoomDiscount / 100);
    let totalFee = roomPrice * (1 - this.BookingDiscount / 100);
    return totalFee;
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
    if (this.BookingCheckIn <= date && this.BookingCheckOut >= date) {
      return true;
    }
    return false;
  }

  occupancyPercentage() {

    const bookedDays = this.BookingCheckOut - this.BookingCheckIn;
    const occupancy = (bookedDays * 100) / 365;

    return occupancy;
  }
  static totalOccupancyPercentage(rooms, startDate, endDate) {
    return true;
  }
  static availableRooms(rooms, startDate, endDate) {
    return true;
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
