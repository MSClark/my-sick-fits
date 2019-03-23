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
automatically public abstract final so no need to type that
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
identifiers/variable names can start with $ _ or char

You can put an underscore anywhere in numeric literals to improve readability with java 7 [Underscores in Numeric Literals](https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html)

Double takes 8 bytes and stores 16 decimal places, float takes 4 bytes and stored 7 decimal places, 64 bit vs 32 bit storage
Numeric literals are stored as doubles by default in java
The following are valid implicit conversions in java byte-->short-->int-->long-->float-->double char-->int-->long-->float-->double

class variable is specific to a class and is static
instance variable is specific to an instance of a class 

double and long not allowed in switch statements

cant manipulate instance variables in a static context such as a method with a static signature

local variables dont get default initialization

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
 
 when removing items from a list that arent actually in the list the method will just return false

 `trim` only trims oustides of string

 when using remove methods on list interface methods passing a primitive such as `remove(2);` will remove from the specified index, if you want to search for the object to remove need to do something like `remove(new Integer(2));`

 when printing a reference variable such as 
```java
Test t1 = new Test();
System.out.println(t1);
```			
Java will automatically look for a toString method in the test class and if not itll use Object.class's toString method which is usually className@hashcode

All wrapper classes such as string builder have toString overriden

you can handle exceptions, you cant handle errors

catch blocks need to be ordered from child to parent

use finally block for running code that you always want to execute regardless of whether an error was thrown or not

if you have a return statement in try or catch block itll go to the finally statement

`System.exit(0)` will close the program, shut down the jvm

final:  final is a Modifier is Applicable for Classes, Methods and Variables.  If a Class declared as final then we can't Create Child Class. That is Inheritance is Not Possible for final Classes.  If a Method declared as final then we can't Override that Method in Child Classes.  If a Variable declared as final then we can't Perform Re- Assignment for that Variable. 
 
finally:  finally is a Block Always associated with try-catch to Maintain Clean Up Code.  The Specialty of finally Block is it will be executed Always Irrespective of whether Exception raised OR Not and whether Handled OR Not Handled. 
 
finalize():  finalize() is a Method Always Called by the Garbage Collector Just before Destroying an Object to Perform Clean Up Activities.  Once finalize() Completes Automatically Garbage Collector Destroys that Object. 

only use throws keyword on checked exceptions

Unchecked Exception List
ArrayIndexOutOfBoundsException
ClassCastException
IllegalArgumentException
IllegalStateException
NullPointerException
NumberFormatException
AssertionError
ExceptionInInitializerError
StackOverflowError
NoClassDefFoundError

Checked Exception List
Exception
IOException
FileNotFoundException
ParseException
ClassNotFoundException
CloneNotSupportedException
InstantiationException
InterruptedException
NoSuchMethodException
NoSuchFieldException

Summary of Exception Handling Key Words     1) try  To Maintain Risky Code 
 
2) catch   To Maintain Handling Code 
 
3) finally   To Maintain Clean Up Code 
 
4) throw   To Hand-Over Our Created Exception Object to the JVM Manually 
 
5) throws  To Delegate Responsibility of Exception Handling to the Caller Method 
 
Various Possible Compile Time Errors in Exception Handling   1) unreported exception Exception; must be caught or declared to be thrown 
 
2) Exception XXX has already been caught 
 
3) Exception XXX is never thrown in body of corresponding try statement 
 
4) unreachable statement 
 
5) incompatible types       required: java.lang.Throwable       found: Test 
class 

Strings are immutible so if you set a string to something else a new object will be created and that old string will be send to gc

Exception class hierarchy is object->throwable->exception->runtimeexception

you can pass in any number of parameters into a method using the varargs operator, much like js's rest operator. numbers is an array of args
ex. 
```java
public static int sumAll(Integer... numbers) {
    int sum = 0;
    if (numbers.length > 0 ) {
        for (Integer n : numbers) {
            sum += n;
        }
    }
    return sum;
}

int sumOdd = sumAll(1,3,5,7,9); // 25
int sumEven = sumAll(2,4,6,8); // 20
int sumZero = sumAll(); // 0
```

you can use `System.out.printf("%s stuff %d", string1, integer1)` just like in c

complier automatically injects `super();` into subclass constructors 

Polymorphism example: `Animal tabby = new Cat("Tabby", "salmon", "ball");`
When you cast like this you can only access methods that are in both classes. If cat has any methods that animal doesnt, if you call it youll get an error. If you call a method that exists in both classes itll use the child classes's method


Java composition: has-a relationship example
```java
public class Job {
    private String role;
    private long salary;
    private int id;
        
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public long getSalary() {
        return salary;
    }
    public void setSalary(long salary) {
        this.salary = salary;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }    
}
```
```java
public class Person {

    //composition has-a relationship
    private Job job;
   
    public Person(){
        this.job=new Job();
        job.setSalary(1000L);
    }
    public long getSalary() {
        return job.getSalary();
    }
}
```
```java
public class TestPerson {

    public static void main(String[] args) {
        Person person = new Person();
        long salary = person.getSalary();
    }
}
```
can only call `super();` in constructors
can only either `super();` or `this();` in constructors

calling .length() on a multidimensional array will get you the base length 
ex. `int[][] a = new int[2][3]` base length is 2

if two reference vars point to the same obj and you make changed to the obj through one of them, that will reflect in both because they both point to the same obj

cannot cast string to comparable obj

invoking static overidden methods on child objects will result in calling the parent method. in the case of `A a = new B(); a.run();` if A and B have the `run` method as static, A's run will be called

cannot use more restrictive access modifiers for child entities 

in java 8 interfaces can have default methods and static methods. This was added so you can update or expand an interface without breaking everything implementing it. default methods just specify an implementation. Static methods are the same as default methods, except they cant be overriden 

if you implement two interfaces that have the same method signature but you override it then it wont error out

annanamous objects: ex. new A.show(); creates obj in heap but not reference variable in stack and will have default obj values. Only good if youre going to use an obj once and never again. 

will get unsupportedTemporalTimeException when formatting dates wrong, such as if you format with a time and you just have a date obj

ctrl-click on datetimeformatter obj in intelli j to go to documentation

lambda functions:
ex. `stuff = () -> System.out.println("hi");`
theyre a lot like arrow functions in js, theyre setting variables to functions and you can pass them around and into other methods
parameters still need types
if the function is one line the compiler will use that line as the return so you dont need a return keyword; youll actually get an error if you have the return keyword in a one line lambda function
when declaring a lambda function based off an interface that interface should only have one method otherwise the compiler gets confused cause its still dumb

Ananamous inner class:
ex.
```java
Greeting ineerClassGreeting = new Greeting() {
    public void perform(){
        System.out.println("hi");
    }
};
```
Doesnt have a name and provides implementation inline as well as creating an instance at the same time.
Can perform the same functionality of lambdas for the most part
Interfaces for lambdas need to have only one method
Thread example 
```java
Thread myThread = new Thread(() -> System.out.println("hello"));
myThread.run();
```
use annotation `@FunctionalInterface` for interfaces meant for lambdas

deep equals method expects multilevel arrays and will error out if you give it a single dimension array

ExceptionInInitializer is thrown by the jvm, illegalargument, io, and numberformat are thrown by their wrapper classes of java.lang

only one package statement allowed per file `package com.test;`

main method can be final, can be in the form `public static final void main(String... c)` so you can use the var args operator and itll work as main method because the jvm looks for the main signature with arguements passed in of an array of strings

if youre going to use variable names as case labels such as `case c1: ...` c1 needs to be final

when declaring multiple vars in a for loop if you do `for(int i=0,j=0;...)` youre fine, but `for(inti=0, int j=0)` doesnt compile

you can actually just have a for loop with no body `for(int i=0; i<10; i++);` its stupid, but it compiles

stringbuilder capacity upon empty initialization is 16 if you were to initialize it with "java" it would be 20. So its always 16 more than whats in it. 

System.out.print() will not compile because java is stupid

interface variables are implicitely public static and final so theyre constants
you can access interface fields either by `interface.field` or just by field in an implementing class
```java
class Whiz implements A{
    public static void main(String[] args) {
        System.out.println(A.s);
        System.out.println(A.value);
        System.out.println(s);
        System.out.println(value);
    }
}
interface A{
    static int value = 15;
    String s = "value";
}
```

Reminder there are three types of variables - class, instance, and local
Local variables MUST be initialized before using them

when a class is loaded any static fields are initialized and static blocks are ran

floats will not throw ArithemeticException when dividing by zero, they will assign infinity or NaN

when you add chars youll get an int result

widening followed by autoboxing wont compile such as `Double d = 10;`

order of initialization 
1. if theres a superclass initialize it first
2. static variable declarations and initializers in the order they appear in the file
3. Instance variable declarations and initializers, and any lone code blocks 
4. constructor 

the only time you should downcast is after you have already upcasted an object
```java
Dog dog = new Dog();         
Animal animal = dog;         //upcasting to Animal
if(animal instanceof Dog){ // testing if the Animal is a Dog       
    Dog dog2 = (Dog) animal; //downcast
}
```

`lengthOfMonth()` will tell you how long a month is for a LocalDate obj 

running a binary search on an array will return the index of the found item `Arrays.BinarySearch(ints, -1)`

if you have throws exception on a method you must handle it somewhere in the method

you can only have 1 finally statement in a try catch block

variable shadowing is when a variable is delcared to have the same name as one from an outer scope
variable hiding is the same except its doing so from a parent class

static import example `import static java.lang.Math.Abs;`

.equals on wrappers will check the wrapper type and primitive value, if either dont match, youll get false

double 10.0 == int 10 true

update part of for loop (the 3rd statement) happens at the end of each iteration

switch is more efficient than nested ifs

you can nest switch statements

when overriding you can return a different type if its a subtype of the original method's return type such as Number and Integer

dot operator has higher precedence than parenthesis

abstract classes cant be final, cant be instantiated 

you cant override default methods

can invoke static method via class name or instance variable

comparind Double 10.0 and int 10 will result in the double unwrapping and comparing resulting in true

cant use == with two wrappers

.BYTES is # of bytes .SIZE is # of bits

return type isnt actually part of a method signature, still required though

fields in an interface are implictely public static final and you cant change the modifier

can declare interface as abstract, but theres no point

jvm throws arrayindexoutofbounds and stackoverflow

final variables must be initialized at declaration

native keyword can only be applied to methods

overloaded methods have to change the argument list

join() and spliterator is new to java 8 

default array list size is 10 

cant declare an array then initialize it like this 
```java
int[] ints;
ints = {1,2,3};
```
exception variable is implicitly final

arrays have default initializations even in methods

you can do assignment in loop conditions

you can do `double d =10`, but not `Double d=10`

when modding(taking 3%2) java will always make it so the result will take the sign of the numerator so -3 % 2 = -1

when overriding you cant throw new or broader checked exceptions, but you can do so with unchecked exceptions

overloading is only determined by changing the number of arguements 

arraylist.set() will return removed value

there are 5 constructors in java lang class

Integer will cache values from -127 to 128 meaning if you use `==` to compare two Integers itll return true, but if one is outside that range Integer will return a new Integer object upon creation 
```java
Integer a = new Integer(127);
Integer b = new Integer(127);
Integer c = 127;
Integer d = 127;
Integer e = new Integer(200);
Integer f = new Integer(200);
Integer g = 200;
Integer h = 200;
System.out.println(a==b c==d e==f g==h);
//false true false false 
```

if you decrement a value past its max value such as an int past -2147483648 itll go to its max value

interface abstract methods are implicitely public so you need to declare them as public when implementing them

always choose to implement an interface over extending a class

Math.random() returns a vale less than 1: a double 

enum constructors must be either package private or private 

you can create string objects directly from stringbuilders

if you have a block that throws a checked exception, if you call that block you need to put that call in a try catch

finally is always executed even if theres a return statement before it

child exceptions can be listed first in catch hierarchy, parents cant otherwise it wont compile

only primitives get default initilization as instance members

static methods cant be overriden 
static binding for polymorphism is done through overloading and is determined at compile time
dynamic binding is done through overriding and is determined at run time
 I PASSED!!