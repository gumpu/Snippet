#!/usr/bin/env python3


def make_n_adder( n ):
    # Closure with n in it.
    def add( x ):
        return x+n

    return add


a10 = make_n_adder( 10 )
a5  = make_n_adder( 5  )
a1  = make_n_adder( 1  )

print a10( 100 )
print a5( 100 )
print a1( 100 )
print a1( 10 )


