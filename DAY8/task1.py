def CountToN(num):
#num will be assigned
#the absolute value of
#itself
    num = abs(num)
    for i in range(1,num+1):
        print(i)

n = raw_input("enter an integer:\n")
n = int(n)
CountToN(n)

def Factors(num):
    num = abs(num)  
    l = []

    for i in range(1,num+1):
        if num % i == 0:
            l.append(i)

    return l

print Factors(n)
          


          
        
          