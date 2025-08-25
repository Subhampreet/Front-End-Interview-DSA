using System;

public class FactorialCalculator
{
    public static void Main(string[] args)
    {
        int number = 5;
        
        // Check for non-negative input
        if (number < 0)
        {
            Console.WriteLine("Factorial of a negative number does not exist.");
        }
        else
        {
            long result = Factorial(number);
            Console.WriteLine($"The factorial of {number} is {result}.");
        }
    }

    // Recursive function to calculate factorial
    public static long Factorial(int n)
    {
        // Base case: 0! and 1! are both 1
        if (n <= 1)
        {
            return 1;
        }
        // Recursive step: n * (n-1)!
        else
        {
            return n * Factorial(n - 1);
        }
    }
}