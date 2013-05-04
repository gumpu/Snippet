//


var numbers = [ 10, 20, 30, 40, 50, 90, 120 ];

function zoomer( m ) {
    // Notice, not using var here gives unexpected results.
    var zoom = m;
    // Use of a closure
    return function () {
        console.log( '---' );
        n = numbers.length;
        for ( var i=0; i < n; i++ ) {
            console.log( numbers[i]*zoom );
        }
    }
}


console.log( numbers.length );
z1 = zoomer(1);
z3 = zoomer(3);
console.log( z3 );
z1();
z3();


// Define a function, and run it in one go.
//
MapViewer = function() {
    return { x:1, 
        y:2,
        show: function() { console.log( this ) }
    }
}();

console.log( MapViewer );
MapViewer.show()

