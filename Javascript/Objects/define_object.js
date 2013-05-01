

// Define a class
function Planet( x, y ) {
    self.x = x;
    self.y = y;
    self.population = 0;
    self.industry   = 0;
}

// Define a method
//
Planet.prototype.production = function () {
    prod = this.population + 0.3*this.industry;
    return prod;
}


a_planet = new Planet( 10, 10 );

i = a_planet.prototype();

