function sum(num, currentSum = 0) {
    // your code here
    const newCurrentSum = num + currentSum
  
    const func = (arg) => {
      return sum(arg, num + currentSum)
    }
  
    func.valueOf = () => newCurrentSum
  
    return func
}