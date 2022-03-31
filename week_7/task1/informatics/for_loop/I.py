import math
a = int(input())
count = 0
for i in range(1, int(math.sqrt(a))+1):
    if a % i == 0:
        count += 2
if math.sqrt(a) == int(math.sqrt(a)):
    print(count - 1)
else:
    print(count)