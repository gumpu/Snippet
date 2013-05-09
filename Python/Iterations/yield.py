#!/usr/bin/env python3

def pg():
    n = 0
    print( "starting" )
    while True:
        n = n + 1
        yield n


print( "----" )
x = pg() # This does not run the code...
print( "----" )
print( next( x ) ) # The function code is run here.
print( next( x ) ) # And the loop is run here again 
print( next( x ) )
print( next( x ) )
print( next( x ) )
print( next( x ) )

