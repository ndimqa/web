n = int(input())
a = [int(i) for i in input().split()]
for i in a:
    if i >= 0:
        print(a[i], end=' ')
    