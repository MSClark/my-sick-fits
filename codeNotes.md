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