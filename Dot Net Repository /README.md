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


    