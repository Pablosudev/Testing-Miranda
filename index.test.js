const {Room , Booking} = require("./index")
const validRoom = {Name: "room1", Bookings: [], rate:10000, discount: 10}



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
    })
    describe("Comprobacion propiedad Check.Out", () => {
        test("Comprobamos otro tipo dato", () => {
            expect(() => new Booking("Pablo", "email@email.com", new Date(), 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-Out");
            expect(() => new Booking("Pablo", "email@email.com", new Date(),true, 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-Out");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), [], 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-Out");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), null, 10, validRoom)).toThrow("Error en el tipo de datos de la fecha Check-Out");
        });
    })
    describe("Comprobacion propiedad Discount", () => {
        test("Comprobamos otro tipo de dato", () => {
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), "hola", validRoom)).toThrow("Error en el tipo de datos del Discount");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), {}, validRoom)).toThrow("Error en el tipo de datos del Discount");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), null, validRoom)).toThrow("Error en el tipo de datos del Discount");
            expect(() => new Booking("Pablo", "email@email.com", new Date(), new Date(), true, validRoom)).toThrow("Error en el tipo de datos del Discount");
        })
    })
    
})