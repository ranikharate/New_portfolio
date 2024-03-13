first=input("enter first number= ")
operator = input("enter operator (+,-,*,/,%) = ")
second=input("enter second number= ")

# first nd second number convert in int form
first = int(first)
second = int(second)

if operator == "+":
       print(first+second)
elif operator == "-":
        print(first-second)
elif  operator == "*":
        print(first*second)
elif operator == "/":
        print(first/second)
elif operator == "%":
       print(first%second)
else:
    print("invalid number")
