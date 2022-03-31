def min(a, b, c, d):
    m = 0
    if a > b:
        m = b
    else:
        m = a
    if c > d:
        if m < d:
            return m
        else:
            return d
    else:
        if m < c:
            return m
        else:
            return c
        
