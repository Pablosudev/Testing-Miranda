const Room = require("./index");
const Booking = require("./index")

import rooms from "./rooms.json"
import bookings from "./bookings.json"


test ("Comprobamos si la habitación está ocupada", () => {
    const room1 = new Room(
        bookings[1].full_name,
        bookings[1].check_out,
        bookings[1].check_in,
    )
    expected(room1.isOccupied(12/12/2020)).toBe(false);
})