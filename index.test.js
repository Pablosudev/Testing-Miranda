const {Room , Booking} = require("./index")
const validRoom = {Name: "room1", Bookings: [], rate:10000, discount: 10};
const validBooking = [
    {name: "Pepe", email: "email@email.com", CheckIn: new Date(), CheckOut: new Date(), Discount:10, room: validRoom},
    {name: "Alejandro", email: "email@email.com", CheckIn: new Date(), CheckOut: new Date(),  Discount:10, room: validRoom}
];




describe("Comprobaciones de Bookings", () => {
    describe("Comprobación propiedad Nombre", () => {
        test("Comprobamos otro tipo de dato", () => {
            
            expect(() => new Booking(150, "email@email.com", new Date(), new Date(), 10, validRoom)).toThrow("Error en el tipo de dato del nombre");
            expect(() => new Booking(true, "email@email.com", new Date(), new Date(), 10, validRoom)).toThrow("Error en el tipo de dato del nombre");
            expect(() => new Booking([], "email@email.com", new Date(), new Date(), 10, validRoom)).toThrow("Error en el tipo de dato del nombre");
            expect(() => new Booking(null, "email@email.com", new Date(), new Date(), 10, validRoom)).toThrow("Error en el tipo de dato del nombre");
        });
        test("Comprobación longitud minima", () => {
            
            expect(() => new Booking("", "email@email.com", new Date(), new Date(), 10, validRoom)).toThrow("Error longitud minima no alcanzada");
        });
        test("Comprobación longitud máxima", () => {
           
            const name = "a".repeat(257);
            expect(() => new Booking(name, "email@email.com", new Date(), new Date(), 10, validRoom)).toThrow("Error nombre demasiado largo");
        });
        test("Comprobado con éxito", () => {
           
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), 10, validRoom)).not.toThrow();
        })
    })
    describe("Comprobacion propiedad Email", () => {
        test("Comprobamos otro tipo dato", () => {
            expect(() => new Booking("Pablo", 1234, new Date(), new Date(), 10, validRoom)).toThrow("Error en el tipo de datos del email");
            expect(() => new Booking("Pablo", [], new Date(), new Date(), 10, validRoom)).toThrow("Error en el tipo de datos del email");
            expect(() => new Booking("Pablo", null, new Date(), new Date(), 10, validRoom)).toThrow("Error en el tipo de datos del email");
            expect(() => new Booking("Pablo", true, new Date(), new Date(), 10, validRoom)).toThrow("Error en el tipo de datos del email");
        });
        test("Comprobamos el numero de caracteres del email", () => {
            const email = "a".repeat(50);
            expect(() => new Booking("Pablo", email, new Date(), new Date(), 10, validRoom)).toThrow("Error email demasiado largo");
            
        });
        test("Comprobamos la estructura del email", () => {
            expect(() => new Booking("Pablo", "gsdgds", new Date(), new Date(), 10, validRoom)).toThrow("Error estructura email");
        })
        test("Comprobado con éxito", () => {
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), 10, validRoom)).not.toThrow();
        })
    });
    describe("Comprobacion propiedad Check-In", () => {
        test("Comprobamos otro tipo dato", () => {
            expect(() => new Booking("Pablo", "email@email.com", "fdsf", new Date(), 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-In");
            expect(() => new Booking("Pablo", "email@email.com", 156, new Date(), 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-In");
            expect(() => new Booking("Pablo", "email@email.com", [], new Date(), 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-In");
            expect(() => new Booking("Pablo", "email@email.com", true, new Date(), 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-In");
        });
        test("Comprobación con éxito de Check-In", () => {
            expect (() => new Booking ("Pablo", "email@email.com", new Date(), new Date(), 10, validRoom)).not.toThrow()
        });
    })
    describe("Comprobacion propiedad Check.Out", () => {
        test("Comprobamos otro tipo dato", () => {
            expect(() => new Booking("Pablo", "email@email.com", new Date(), "", 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-Out");
            expect(() => new Booking("Pablo", "email@email.com", new Date(),true, 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-Out");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), [], 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-Out");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), null, 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-Out");
        });
        test("Comprobación con éxito de Check-Out", () => {
            expect (() => new Booking ("Pablo", "email@email.com", new Date(), new Date(), 10, validRoom)).not.toThrow()
        });
    })
    describe("Comprobacion propiedad Discount", () => {
        test("Comprobamos otro tipo de dato", () => {
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), "hola", validRoom)).toThrow("Error en el tipo de datos del Discount");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), {}, validRoom)).toThrow("Error en el tipo de datos del Discount");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), null, validRoom)).toThrow("Error en el tipo de datos del Discount");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), true, validRoom)).toThrow("Error en el tipo de datos del Discount");
        });
        test("Comrpobamos que el descuento no sea mayor del 100%", () => {
            expect (() => new Booking ("Pablo", "email@email.com", new Date(), new Date(), 101, validRoom)).toThrow("Descuento demasiado grande");
        })
    })
    describe("Comprobacion propiedad room", () => {
        test("Comprobamos otro tipo de dato", () => {
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), 10,"")).toThrow("Tipo de dato de habitación incorrecto");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), 10, true)).toThrow("Tipo de dato de habitación incorrecto");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), 10, 1215)).toThrow("Tipo de dato de habitación incorrecto");
        })
    })
})




describe("Comprobaciones Rooms", () => {
    describe("Comprobamos propiedad de name" , () => {
        test("Comprobamos que name sea un String", () => {
            expect(() => new Room(true, validBooking, 10000, 10)).toThrow("Error en el tipo de dato del nombre")
            expect(() => new Room(124, validBooking, 10000, 10)).toThrow("Error en el tipo de dato del nombre")
            expect(() => new Room({}, validBooking, 10000, 10)).toThrow("Error en el tipo de dato del nombre")
            expect(() => new Room(null, validBooking, 10000, 10)).toThrow("Error en el tipo de dato del nombre")
        })
        test("Comprobamos la longitud mínima de name", () => {
            expect(() => new Room("", validBooking, 10000, 10)).toThrow("Nombre demasiado corto")
        })
        test("Comprobamos la longitud de name", () => {
            const name = "A".repeat(50)
            expect(() => new Room(name, validBooking, 10000, 10)).toThrow("Error en la longitud del nombre")
        })
        test("Test comprobado con éxito", () => {
            expect(() => new Room("Pablo", validBooking, 10000, 10)).not.toThrow()
        })
    })


})