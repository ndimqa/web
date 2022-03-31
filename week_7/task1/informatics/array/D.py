n = int(input())
a = [int(i) for i in input().split()]
ans = 0
for index, value in enumerate(a):
    if index > 0:
        if value > a[index-1]:
            ans += 1
print(ans)
    