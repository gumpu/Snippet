// vi: spell spl=en


// Default way....
// Define a Constructor
Planet = function( x, y ) {
    this.x = x;
    this.y = y;
    this.population = 0;
    this.industry   = 0;
}
// function Planet( x, y ) { ... }  would
// have done the same.
// But now it is clear that Planet is an object

// Define default methods and properties
Planet.prototype.production = function () {
    prod = this.population + 0.3*this.industry;
    return prod;
}
Planet.prototype.kind = 'Planet'
Planet.prototype.key  = '1234'
// All objects created with the constructor
// will have these in common.

planet_1 = new Planet( 10, 11 );
planet_2 = new Planet( 12, 13 );

console.log( "planet_1 x = " + planet_1.x )
console.log( "planet_2 x = " + planet_2.x )
console.log( "planet_1 kind = " + planet_1.kind )
console.log( "planet_2 kind = " + planet_2.kind )

// Modify planet_2 
planet_2.kind = 'Surprise'
console.log( "planet_1 kind = " + planet_1.kind )
console.log( "planet_2 kind = " + planet_2.kind )

// Build an object based on the object planet_2
planet_3 = Object.create( planet_2 );

console.log( "planet_2 kind = " + planet_2.kind )
console.log( "planet_3 kind = " + planet_3.kind )

// Key still comes from the Planet prototype
console.log( "planet_2 kind = " + planet_2.key )
console.log( "planet_3 kind = " + planet_3.key )



