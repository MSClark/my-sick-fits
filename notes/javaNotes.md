`public static void main(String[] args)`
# Review of data structures and algorithms

## Hash Tables

Has functions are very fast. faster than regular lookups because youre finding the index of what you want through a calculation rather than a blind search 

## Misc. Q/A

Q: What are the four principles of Object-Oriented Programming?
A: Encapsulation, Polymorphism, Abstraction, & Inheritance.
1. [Encapsulation](https://www.geeksforgeeks.org/encapsulation-in-java/): making variables private and hiding information from other classes
2. Hiding complexity and internal implementation in order to reduce complexity and make the functionality easier to use 
3. Polymorphism means the object can take many forms for example a deer is an animal, is a object, is a deer, is a vegetarian based on what classes it extends and what interfaces it implements
4. You know what inheritence is

Iterfaces and abstract classes [Tutorial](http://www.newthinktank.com/2012/02/java-video-tutorial-15/)  
## Interfaces
most common use is to hide details of a class
when defining an interface use the keyword interface instead of class
all vars are public static final whether you like it or not, doesnt hold state so if you want state make it a class
if you ever want a constants interface that just holds a bunch of constants just put them in a final class
cant create instance of an interface
interfaces are adjectives ex. drivable usually want to add "able" to end of name or "can" as prefix
fields are constant
automatically public abstract so no need to type that
if its public in the interface it needs to be public in its implementation
all methods must be implemented
defender classes can provide default implementation in interface, use keyword default in method signature

## Abstract Class
used when you dont want to have to implement every method
variables are not forced to be constants
methods are not automatically abstract
abstract method means the signature has been defined but it hasnt been implemented e.g. `public abstract int getCar();`
extends keyword before implements in class implementation
abstract methods need to be implemented 

## Final keyword
creates constant vars
prevents methods from being overriden
prevents inheritence

### Overriding
same method name in child class, but different implementation

### Overloading
same method name in the same class but different arguments

### Annotations


### Linked Lists

### Unit tests

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

you can generate javadocs by doing /** above a method
psvm + tab will make main method in intellij
ctrl+alt+o will get rid of unused imports
ctrl+alt+l formats code

star imports on packages include all classes in that package, but NOT its sub-packages

when importing packages youre specifying the classes you want, the package name it just there to tell you what package the class is in, so if you import a pakage with no class name or .* you will get an error

super() and this() should be only in first line of constructor,otherwise we will get error.

Whenever we are creating child class object then both parent class and child class constructors will be executed,but first parent class constructor followed by child class constructor.

when implementing an interface you need to implement all interface methods, if you dont you have to declre the class implementing the interface as abstract

you cant create an object from an abstract class

default is acces modified that has scope of same package

only modifier you can put on a local var is final

package statements have to go before import statements

 If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. If the super class does not have a no-argument constructor, you will get a compile-time error.

 super() and this() need to be the first things in a constructor

 cant reduce scope of inherited methods, can expand

 variable without access modifier is assigned default as modifier - package scope

 cant access parent protected vars in child if you make an object as a parent reference such as `A obj = new Test()`

 to modify a static variable set it via class
 ```java
Example e1 = new Example();
Example e2 = new Example();

e1.setNumber(5); //dont do 
Example.setNumber(5);
System.out.println(Example.getNumber()); // prints 5, no surprise...
 ```
 to remove stuff from string builder use `sb.delete(0, sb.length());`
 