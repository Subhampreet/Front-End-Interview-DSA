using System;
using System.Text.RegularExpressions;

public class PalindromeChecker
{
    public static bool IsPalindrome(string input)
    {
        // Remove all non-alphanumeric characters and convert to lowercase
        string cleanedInput = Regex.Replace(input.ToLower(), "[^a-z0-9]", "");
        
        // Convert the string to a character array
        char[] charArray = cleanedInput.ToCharArray();
        
        // Reverse the array
        Array.Reverse(charArray);
        
        // Create a new reversed string
        string reversedInput = new string(charArray);
        
        // Compare the cleaned string with the reversed one
        return cleanedInput == reversedInput;
    }
}