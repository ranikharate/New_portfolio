#include <stdio.h>
int main()
{
int a,b,c;
a=9;
b=6;
c=90;
if(a>b)
{
if(a>c)
{
if(b>c)
      printf("2nd largest is %d",c);
else
     printf("2nd largest is %d",b);
}
}else
{
if (b>c)
{
if (c>a)
       printf("2nd largest is %d",a);
else
       
      printf("2nd largest is %d",c);
}
if (c>b)
{
if (b>a)
       printf("2nd largest is %d",c);
else
       printf("2nd largest is %d",b);
}

}       return 0;
}
