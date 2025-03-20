### **C# Interview Questions**

### **Fundamentals**

1. What are the main features of C#?
    - **Object-Oriented**: Supports encapsulation, inheritance, and polymorphism.
    - **Strongly Typed**: Ensures type safety, preventing type-related errors.
    - **Garbage Collection**: Automatic memory management to prevent memory leaks.
    - **LINQ (Language-Integrated Query)**: Enables querying data in a syntactic way.
    - **Asynchronous Programming**: Supports async/await for non-blocking code execution.
    - **Exception Handling**: Provides structured exception handling using `try`, `catch`, and `finally`.
    - **Platform Independence**: Runs on Windows, macOS, and Linux using .NET Core.
    - **Properties and Indexers**: Allows encapsulation with property get/set methods.
    - **Delegates and Events**: Supports event-driven programming.
    - **Generics and Collections**: Improves type safety and performance.
2. Explain the difference between **value types** and **reference types** in C#.
    
    ```csharp
    int x = 10; // Value type
    int y = x;  // y gets a copy of x
    
    class Person { public string Name; }
    Person p1 = new Person();
    Person p2 = p1; // p2 points to the same memory as p1
    ```
    
    | Feature | Value Type | Reference Type |
    | --- | --- | --- |
    | **Memory Location** | Stored in **stack** | Stored in **heap** |
    | **Examples** | `int`, `float`, `bool`, `struct`, `enum` | `class`, `interface`, `delegate`, `string`, `object` |
    | **Assignment Behavior** | Copies **actual value** | Copies **reference (memory address)** |
    | **Nullability** | Cannot be `null` (unless made nullable) | Can be `null` |
    | **Performance** | Faster (direct access to data) | Slower (due to heap allocation and garbage collection) |
3. What is the difference between **==** and **Equals()** in C#?
    - **`==` (Equality Operator)**:
        - Compares values for **value types**.
        - Compares **references** for reference types (except for `string`, which compares values).
    - **`Equals()` (Method from `Object` class)**:
        - Can be overridden for custom equality comparison.
        - Used to compare **actual content** rather than references.
    
    ```csharp
    string str1 = "hello";
    string str2 = "hello";
    Console.WriteLine(str1 == str2); // True (compares values)
    Console.WriteLine(str1.Equals(str2)); // True (compares values)
    
    object obj1 = new object();
    object obj2 = new object();
    Console.WriteLine(obj1 == obj2); // False (different references)
    Console.WriteLine(obj1.Equals(obj2)); // False (default behavior)
    ```
    
4. What are **nullable types** in C#?
Nullable types allow value types (e.g., `int`, `bool`) to hold a `null` value.
    
    ```csharp
    int? age = null; // Nullable integer
    if (age.HasValue) 
        Console.WriteLine(age.Value);
    else 
        Console.WriteLine("Age is null");
    ```
    
    They are useful for:
    
    - **Database fields that can be NULL**
    - **Optional values in APIs**
    
    You can use the **null-coalescing operator (`??`)**:
    
    ```csharp
    int finalAge = age ?? 18; // If age is null, assign 18
    ```
    
5. What is the difference between **var, dynamic,** and **object** in C#?
    
    
    | Feature | `var` | `dynamic` | `object` |
    | --- | --- | --- | --- |
    | **Type Resolved** | At **compile-time** | At **runtime** | At **runtime** |
    | **Type Safety** | **Type-safe** (cannot change type after assignment) | **Not type-safe** (can change type) | Type-safe but requires explicit casting |
    | **Performance** | Faster (type known at compile-time) | Slower (resolved at runtime) | Slower (due to boxing/unboxing) |
    | **Example** | `var x = "hello";` | `dynamic y = "hello";` | `object z = "hello";` |
    
    Example:
    
    ```csharp
    var num = 10; // `num` is always an int
    dynamic d = 10; // `d` can change type
    object obj = 10; // Requires casting later
    
    ```
    
6. Explain **Boxing** and **Unboxing**.
    - **Boxing**: Converting a **value type** into an **object type** (stored in heap).
    - **Unboxing**: Extracting the value type from the object.
    
    Example:
    
    ```csharp
    int num = 10;
    object obj = num;  // Boxing (num is stored as an object)
    int unboxedNum = (int)obj;  // Unboxing (retrieved as int)
    ```
    
    Boxing is **implicit**, but unboxing requires **explicit casting**.
    
7. What are **Tuples** in C#?
    
    A **Tuple** is a data structure that holds multiple values in a single object.
    
    Example:
    
    ```csharp
    var person = (Name: "John", Age: 30);
    Console.WriteLine(person.Name); // John
    Console.WriteLine(person.Age);  // 30
    ```
    
    Another way:
    
    ```csharp
    
    Tuple<int, string> student = new Tuple<int, string>(1, "Alice");
    Console.WriteLine(student.Item1); // 1
    Console.WriteLine(student.Item2); // Alice
    ```
    
    Use **ValueTuple** for better performance:
    
    ```csharp
    (ValueTuple<int, string>) student = (1, "Alice");
    ```
    
    Tuples are useful for returning **multiple values** from methods.


    ### **OOP in C#**

1. What is the difference between **Abstraction** and **Encapsulation**?
    
    
    | Feature | **Abstraction** | **Encapsulation** |
    | --- | --- | --- |
    | **Definition** | Hides implementation details and shows only essential features | Wraps data and methods together to restrict direct access |
    | **Purpose** | Reduce complexity and increase reusability | Protect data from unintended modifications |
    | **Achieved Using** | Abstract classes & interfaces | Access modifiers (`private`, `protected`, `public`) |
    | **Example** | Declaring `abstract` methods in an `abstract` class without implementation | Using `private` fields with `public` getters/setters |
    
    Example:
    
    ```csharp
    // Abstraction: Hiding implementation details
    abstract class Vehicle {
        public abstract void Start(); // No implementation
    }
    
    class Car : Vehicle {
        public override void Start() {
            Console.WriteLine("Car started");
        }
    }
    
    // Encapsulation: Restricting direct access
    class BankAccount {
        private double balance;  // Encapsulated data
    
        public void Deposit(double amount) {
            balance += amount;
        }
    
        public double GetBalance() {
            return balance;
        }
    }
    ```
    
2. How does **inheritance** work in C#?
    
    Inheritance allows a class (**child/derived class**) to inherit properties and methods from another class (**parent/base class**).
    
    Syntax:
    
    ```csharp
    class Parent {
        public void Show() {
            Console.WriteLine("Parent class method");
        }
    }
    
    class Child : Parent { } // Child inherits Parent
    
    // Usage
    Child obj = new Child();
    obj.Show();  // Calls Parent's method
    
    ```
    
    **Types of Inheritance:**
    
    1. **Single Inheritance**: One class inherits another.
    2. **Multilevel Inheritance**: A -> B -> C.
    3. **Multiple Inheritance**: Not directly supported (can be achieved using interfaces).
    4. **Hierarchical Inheritance**: One base class, multiple derived classes.
    5. **Hybrid Inheritance**: Combination of above (via interfaces).
3. Explain **Polymorphism** in C# with an example.
    
    **Polymorphism** (many forms) allows methods to behave differently based on the object calling them.
    
    ### **Types of Polymorphism**:
    
    1. **Compile-time (Method Overloading)**
    2. **Runtime (Method Overriding using `virtual` and `override`)**
    
    ### **Example:**
    
    ```csharp
    // Compile-time Polymorphism (Method Overloading)
    class MathOperations {
        public int Add(int a, int b) => a + b;
        public double Add(double a, double b) => a + b; // Different parameter types
    }
    
    // Runtime Polymorphism (Method Overriding)
    class Animal {
        public virtual void Speak() {
            Console.WriteLine("Animal speaks");
        }
    }
    
    class Dog : Animal {
        public override void Speak() {
            Console.WriteLine("Dog barks");
        }
    }
    
    // Usage
    Animal a = new Dog();
    a.Speak();  // Calls Dog's Speak() method (Runtime Polymorphism)
    ```
    
4. What is an **abstract class**? How is it different from an **interface**?
    
    
    | Feature | **Abstract Class** | **Interface** |
    | --- | --- | --- |
    | **Definition** | A class that **cannot be instantiated** and contains **abstract and concrete** methods | A contract with **only method signatures** (C# 8+ allows default implementations) |
    | **Methods** | Can have **abstract** (no body) and **concrete** (with body) methods | Only **abstract methods** (except for C# 8+ default implementations) |
    | **Fields** | Can have fields (variables) | Cannot have instance fields |
    | **Access Modifiers** | Can have access modifiers (`public`, `private`, etc.) | Methods are always **public** by default |
    | **Inheritance** | Inherits using `:` (single inheritance) | A class can implement **multiple interfaces** |
    
    Example:
    
    ```csharp
    csharp
    CopyEdit
    // Abstract Class
    abstract class Animal {
        public abstract void MakeSound();  // Abstract method
        public void Eat() => Console.WriteLine("Eating..."); // Concrete method
    }
    
    class Dog : Animal {
        public override void MakeSound() => Console.WriteLine("Bark");
    }
    
    // Interface
    interface IShape {
        void Draw(); // No implementation
    }
    
    class Circle : IShape {
        public void Draw() => Console.WriteLine("Drawing Circle");
    }
    
    ```
    
5. Can an interface have **default implementations** in C#?
    
    Yes, starting from **C# 8**, interfaces can have **default method implementations** using the `default` keyword.
    
    Example:
    
    ```csharp
    interface IAnimal {
        void Speak(); // Must be implemented
    
        // Default implementation
        void Eat() {
            Console.WriteLine("Eating food...");
        }
    }
    
    class Dog : IAnimal {
        public void Speak() {
            Console.WriteLine("Bark");
        }
    }
    
    // Usage
    Dog d = new Dog();
    d.Speak(); // Bark
    d.Eat();   // Eating food... (default implementation)
    ```
    
6. What is a **sealed class** in C#?
    
    A **sealed class** **prevents further inheritance**.
    
    Example:
    
    ```csharp
    sealed class Vehicle {
        public void Drive() => Console.WriteLine("Driving...");
    }
    
    // Cannot inherit from a sealed class
    // class Car : Vehicle {} // ERROR
    ```
    
    - **Use Case**: When you don’t want other classes to modify behavior by inheritance.
7. What are **extension methods** in C#?
    
    **Extension methods** allow adding new methods to existing classes **without modifying their source code**.
    
    Syntax:
    
    ```csharp
    public static class StringExtensions {
        public static string ToUpperFirstLetter(this string str) {
            return char.ToUpper(str[0]) + str.Substring(1);
        }
    }
    
    // Usage
    string name = "hello";
    Console.WriteLine(name.ToUpperFirstLetter()); // Hello
    
    ```
    
    - **Use Case**: Used for adding helper methods to built-in types like `string`, `List<T>`, etc.
8. What is the difference between **virtual, override,** and **new** keywords?
    
    
    | Keyword | Purpose |
    | --- | --- |
    | `virtual` | Allows a method in a base class to be overridden in a derived class |
    | `override` | Used in a derived class to provide a **new implementation** of a `virtual` method |
    | `new` | Hides the base class method (without overriding) |
    
    Example:
    
    ```csharp
    csharp
    CopyEdit
    class Parent {
        public virtual void VirtualMethod() {
            Console.WriteLine("Parent Virtual Method");
        }
    
        public void NormalMethod() {
            Console.WriteLine("Parent Normal Method");
        }
    }
    
    class Child : Parent {
        public override void VirtualMethod() { // Overrides VirtualMethod
            Console.WriteLine("Child Overridden Method");
        }
    
        public new void NormalMethod() { // Hides NormalMethod
            Console.WriteLine("Child New Method");
        }
    }
    
    // Usage
    Parent obj1 = new Child();
    obj1.VirtualMethod(); // "Child Overridden Method"
    obj1.NormalMethod();  // "Parent Normal Method" (new hides, doesn't override)
    
    Child obj2 = new Child();
    obj2.NormalMethod();  // "Child New Method" (new method used)
    
    ```
    
    **Use Case**:
    
    - Use `override` for polymorphism (when you expect behavior to change).
    - Use `new` when you want to **hide** the base class method (not recommended for polymorphism).
9. What are the types of classes in C#?
    
    **Concrete Class**
    
    - A standard class that can be instantiated directly.
    - Contains both data members and methods.
    
    ```csharp
    public class Car {
        public string Brand { get; set; }
    
        public void Drive() {
            Console.WriteLine($"{Brand} is driving.");
        }
    }
    Car myCar = new Car { Brand = "Tesla" };
    myCar.Drive();
    ```
    
    **Abstract Class**
    
    - Cannot be instantiated.
    - Can have **abstract methods (without implementation)** and **concrete methods**.
    - Must be inherited by a derived class.
    
    ```csharp
    public abstract class Animal {
        public abstract void MakeSound(); // Abstract method (no implementation)
        public void Sleep() {
            Console.WriteLine("Sleeping...");
        }
    }
    
    public class Dog : Animal {
        public override void MakeSound() {
            Console.WriteLine("Bark!");
        }
    }
    Dog dog = new Dog();
    dog.MakeSound(); // Bark!
    dog.Sleep();     // Sleeping...
    ```
    
    **Sealed Class**
    
    - **Cannot be inherited**.
    - Used to **prevent further extension** of a class.
    
    ```csharp
    public sealed class MathUtils {
        public int Square(int number) => number * number;
    }
    
    // ❌ This will cause a compilation error
    // public class AdvancedMath : MathUtils { }
    
    MathUtils math = new MathUtils();
    Console.WriteLine(math.Square(5)); // 25
    ```
    
    **Static Class**
    
    - **Cannot be instantiated**.
    - Contains **only static members** (methods, properties, fields).
    - Used for **utility/helper methods**.
    
    ```csharp
    public static class MathHelper {
        public static int Add(int a, int b) => a + b;
    }
    
    int sum = MathHelper.Add(5, 10);
    Console.WriteLine(sum); // 15
    ```
    
    | Class Type | Can be Instantiated? | Inheritable? | Key Feature |
    | --- | --- | --- | --- |
    | **Concrete Class** | ✅ Yes | ✅ Yes | Standard class |
    | **Abstract Class** | ❌ No | ✅ Yes | Can have abstract methods |
    | **Sealed Class** | ✅ Yes | ❌ No | Prevents inheritance |
    | **Static Class** | ❌ No | ❌ No | Contains only static members |
    | **Partial Class** | ✅ Yes | ✅ Yes | Defined across multiple files |
    | **Nested Class** | ✅ Yes | ✅ Yes | Class inside another class |
    | **Generic Class** | ✅ Yes | ✅ Yes | Works with any data type |
    | **Anonymous Class** | ✅ Yes | ❌ No | Temporary unnamed object |
    | **Record Class** | ✅ Yes | ✅ Yes | Immutable data |
10. Is it possible to prevent object creation of a class in C#?
    
    **Using a Private Constructor**
    
    - A **private constructor** prevents direct instantiation of a class.
    - Commonly used in **Singleton Patterns**.
    
    ```csharp
    public class Singleton {
        private Singleton() { } // Private constructor
    
        public static Singleton Instance { get; } = new Singleton();
    }
    
    // ❌ This will cause an error
    // Singleton obj = new Singleton();
    
    Singleton instance = Singleton.Instance; // ✅ Works
    ```
    
    **Use case:** Singleton design pattern.
    
    **Using an Abstract Class**
    
    - Abstract classes **cannot be instantiated**.
    - A derived class must **inherit** and provide implementations.
    
    ```csharp
    public abstract class Animal {
        public abstract void MakeSound();
    }
    
    // ❌ This will cause an error
    // Animal a = new Animal();
    ```
    
    **Use case:** Enforcing implementation through inheritance.
    
    **Using a Static Class**
    
    - **Static classes** cannot be instantiated.
    - All members **must be static**.
    
    ```csharp
    public static class MathHelper {
        public static int Add(int a, int b) => a + b;
    }
    
    // ❌ This will cause an error
    // MathHelper helper = new MathHelper();
    ```
    
    **Use case:** Utility/helper functions.
    
    **Using a Sealed Class with a Private Constructor**
    
    - A **sealed class** prevents inheritance.
    - A **private constructor** prevents object creation.
    
    ```csharp
    public sealed class Utility {
        private Utility() { } // Private constructor
    }
    ```
    
    **Use case:** Restricting instantiation and inheritance.
    
    | Approach | Can Create Object? | Can Be Inherited? | Use Case |
    | --- | --- | --- | --- |
    | **Private Constructor** | ❌ No | ✅ Yes | Singleton pattern |
    | **Abstract Class** | ❌ No | ✅ Yes | Enforcing inheritance |
    | **Static Class** | ❌ No | ❌ No | Utility functions |
    | **Sealed + Private Constructor** | ❌ No | ❌ No | Fully restricted class |
11. Does C# support Multiple Inheritance? How to you implement
    
    C# allows a class to **implement multiple interfaces**, simulating multiple inheritance.
    
    ```csharp
    public interface IWalk {
        void Walk();
    }
    
    public interface IRun {
        void Run();
    }
    
    // Implementing Multiple Interfaces
    public class Animal : IWalk, IRun {
        public void Walk() {
            Console.WriteLine("Animal is walking...");
        }
    
        public void Run() {
            Console.WriteLine("Animal is running...");
        }
    }
    
    class Program {
        static void Main() {
            Animal animal = new Animal();
            animal.Walk(); // Animal is walking...
            animal.Run();  // Animal is running...
        }
    }
    ```
    
12. Are private class members inherited to the derived class?
    - **Private members (`private`)** belong only to the **base class** and cannot be accessed in derived classes.
    - However, they still exist in the memory of the derived class.
    - You can access them **indirectly** using **protected members, public methods, or properties**.
    
    ```csharp
    public class Parent {
        private int secretNumber = 42;
    
        public int GetSecretNumber() { // Public method to access private member
            return secretNumber;
        }
    }
    
    public class Child : Parent {
        public void ShowSecret() {
            Console.WriteLine("Secret Number: " + GetSecretNumber()); // ✅ Works!
        }
    }
    ```
    
13. What is the difference between Overloading and Overriding?
    
    
    | Feature | **Overloading** | **Overriding** |
    | --- | --- | --- |
    | **Definition** | Defining multiple methods with the **same name** but different parameters in the **same class**. | Redefining a **base class method** in a **derived class** with the **same signature**. |
    | **Where it occurs?** | **Same class** | **Base & derived classes** |
    | **Method Signature** | Must be **different** (different parameters). | Must be **exactly the same** (same name, parameters, and return type). |
    | **Access Modifier** | No restrictions (can be `private`, `public`, etc.). | Base method must be `virtual`, `abstract`, or `override`. |
    | **Keyword Used** | No special keyword needed. | `override` keyword in derived class. |
    | **Compile-time / Runtime** | Happens at **compile-time** (static binding). | Happens at **runtime** (dynamic binding). |
14. Method is marked as virtual, do we have to "override" it from the child base
    - **No, it is not mandatory to override a `virtual` method in the derived class.**
    - A `virtual` method in the base class **can be overridden**, but if not overridden, the base class method will be used.
15. Difference between abstract class and an interface
    
    
    | Feature | **Abstract Class** | **Interface** |
    | --- | --- | --- |
    | **Definition** | A class that **can have** abstract (unimplemented) and non-abstract (implemented) methods. | A contract that only contains method **signatures** (until C# 8.0, after which default implementations are allowed). |
    | **Method Implementation** | Can have **both** implemented and unimplemented methods. | Mostly contains **only unimplemented methods**, but C# 8+ allows default implementations. |
    | **Fields/Variables** | Can have **fields, properties, constructors**. | Cannot have **fields** (only properties with getters and setters). |
    | **Access Modifiers** | Methods can have `public`, `protected`, `private`, etc. | Methods are **public by default** (no access modifiers allowed). |
    | **Multiple Inheritance** | **Cannot** support multiple inheritance (can inherit only one abstract/base class). | **Supports multiple inheritance** (a class can implement multiple interfaces). |
    | **Constructors** | Can have constructors. | **Cannot** have constructors. |
    | **When to Use?** | When you need **partial implementation** and **shared code**. | When you need **only method declarations** to enforce a contract. |
16. Can we define body of Interfaces methods ?
    - **Before C# 8.0** → **No**, interfaces could only have method **signatures** (no body).
    - **C# 8.0 and later** → **Yes**, interfaces can have **default method implementations** using the `default` keyword.
17. Can you create an instance of an Abstract class or an Interface?
    
    **No, you cannot create an instance of an abstract class or an interface.**
    
    - **Abstract Class** → Cannot be instantiated, but you can create an instance of a derived class that implements it.
    - **Interface** → Cannot be instantiated directly, but a class implementing the interface can be instantiated.
18. Can Abstract class be Sealed or Static in C#?
    
    **No, an abstract class cannot be `sealed` or `static` in C#.**
    
    **Why?**
    
    - **`sealed`** prevents a class from being inherited, but **abstract classes must be inherited** to be useful.
    - **`static`** classes cannot be instantiated or inherited, but **abstract classes require inheritance**.
19. Can you declare abstract methods as private in C#?
    
    **No, abstract methods cannot be `private` in C#.**
    
    **Why?**
    
    - **Abstract methods must be overridden in derived classes**.
    - **`private` methods are not accessible in derived classes**, making it impossible to override them.


    