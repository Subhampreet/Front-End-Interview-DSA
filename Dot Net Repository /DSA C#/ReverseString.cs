using System;

public class StringReverser
{
    public static void Main(string[] args)
    {
        string originalString = "C# is fun";
        string reversedString = "";
        
        for (int i = originalString.Length - 1; i >= 0; i--)
        {
            reversedString += originalString[i];
        }
        
        Console.WriteLine($"Original string: {originalString}");
        Console.WriteLine($"Reversed string: {reversedString}");
    }
}