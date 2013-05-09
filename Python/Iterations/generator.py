

words = (line.split() for line in open('../../Dummy/text.txt'))

z = (len(w) for w in words)

for i in z:
    print i
