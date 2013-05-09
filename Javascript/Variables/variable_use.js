

var foo = { x:1, y:3 };

var bar = foo; 
// bar and foo now point (name?) to the same object.

console.log( foo );
console.log( bar );

// When we change bar we also change foo.
bar.x = 1000;
bar.z = 10;
console.log( foo );
console.log( bar );

// Passing it to a function in a closure.
FF = function ( par ) {
    return {
        fun1 : function() { par.x = 33; },
        fun2 : function() { par.y = 99; }
    };
}( bar );


// Changes made in the closure
FF.fun1();
console.log( bar );
FF.fun2();
console.log( bar );
console.log( foo );

console.log( "----------------" );

FF2 = function ( par ) {
    return {
        fun1 : function() { par.x = 33; },
        fun2 : function() { par.y = 99; },
        fun3 : function() { console.log( par ) }
    };
};

ff2 = FF2( {x:1,y:1} );
ff2.fun1();
ff2.fun3();

