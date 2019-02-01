# Java Notes

You can put an underscore anywhere in numeric literals to improve readability with java 7 [Underscores in Numeric Literals](https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html)

Double takes 8 bytes and stores 16 decimal places, float takes 4 bytes and stored 7 decimal places, 64 bit vs 32 bit storage
Numeric literals are stored as doubles by default in java
The following are valid implicit conversions in java byte-->short-->int-->long-->float-->double char-->int-->long-->float-->double

class variable is specific to a class and is static
instance variable is specific to an instance of a class 

double and long not allowed in switch statements

cant manipulate instance variables in a static context such as a method with a static signature

default for char is a space

```java
private char ch;
	public static void main(String[] args) 
	{
		char ch1='a';
		char ch2=ch1;
		ch2='e';
 
		Test obj1= new Test();
		Test obj2=obj1;
		obj1.ch='i';
		obj2.ch='o';
 
		System.out.println(ch1+":"+ch2);
		System.out.println(obj1.ch+":"+obj2.ch);		
	}
```
a:e
o:o 
because object variables are referencing the same object but the primitives are referencing their own values

when assigning an array to another array it changes the pointer to the object so if you have 
```java
int[] n1= new int[3];
int[] n2={10,20,30,40,50};
n1=n2;
``` 
that will work because it even though n1 only has 3 indicies its just changing the object that n1 is pointing to 

```java
System.out.println("5 + 2 = "+4+3); // 43
System.out.println("5 + 2 = "+(4+3)); // 7
// when printing if theres a string first java will try to concat, the parenthesis puts the 4+3 in a higher order of operations 
```

`(String[] args)` is an array of strings as comamnd line arguments that are passed in

All 3 parts of a for loop args are optional

`a=b=c=d=20` chained assignment, done right to left
`+=` compound assignment operator

```java
/*
2468
24
first for loop is using an array as the iterator because multidimensional arrays are an array of arrays
*/
int[][] x = new int[2][4];
		x[0]= new int[]{2,4,6,8};
		x[1]= new int[]{2,4};
		for(int[] x1: x)
		{
			for(int x2 :x1)
			{
				System.out.print(x2+" ");
			}
			System.out.println();
		}
```

annonamous arrays are arrays passed into methods without a reference variable
```java
bark(new int[]={1,2,3,4});

bark(int[] nums){
	//code 
}
```

experessions are allowed in switch statements but not cases, cases must be constants

for each loop index value is referenced by `i` not `x[i]`

The only allowed types for switch argument type are: byte,short,int,char and corresponding wrapper classes,String and enum.

The only overloaded operator in java is + operator. Sometimes it acts as arithmetic addition operator and sometimes it acts as string concatenation operator.If both arguments are number type then it acts as arithmetic addition operator and if atleast one argument is string type then it acts as concatenation operator. Parenthesis will get highest priority in operator precedence. (4) simply treated as 4 only.