#!/usr/bin/python -3

import itertools
import random

foo = [1,2,3,4,5,6,7,8,9,10,11,12]
for i in iter( foo ):
    print i,
print

bar = { 'ddd':0, 'aaa':1, 'bbb':2, 'ccc':3 }
for i in iter(bar):
    print i,
print


# Iteration over the values
for i in bar.itervalues():
    print i,
print

# Iteration over the keys.
for i in bar.iterkeys():
    print i,
print

for i in bar.iteritems():
    print i,
print


bar = { 'ddd':0, 'aaa':1, 'bbb':2, 'ccc':3, 'eee':2, 'fff':3 }

for i in itertools.ifilter( lambda x: x[1] == 2, bar.iteritems() ):
    print i,
print



x = itertools.ifilter( lambda x: x[1] == 2, bar.iteritems() )

print dir(x)
print list( x )
print list( x )

