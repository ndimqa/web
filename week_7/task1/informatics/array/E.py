n = int(input())
a = [int(i) for i in input().split()]
ans = 0
q = False
for i in range(1, n-1):
    if (a[i] and a[i-1]) or (a[i] and a[i+1]) < 0:
        q = True
    if (a[i] and a[i-1]) or (a[i] and a[i+1]) > 0:
        q = True
if q:
    print('YES')
else:
    print('NO')
    