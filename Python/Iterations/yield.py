

def pg():
    n = 0
    while True:
        n = n + 1
        yield n



x = pg()

print x.next()
print x.next()
print x.next()
print x.next()
print x.next()
print x.next()

