// JS Solution is as follows :
var maxProfit = function(prices) {
    let min_price = prices[0];
    let max_profit = 0;

    for(let index in prices){
        if(prices[index] < min_price ){
            min_price = prices[index];
        }
        else if (prices[index] - min_price > max_profit){
            max_profit = prices[index] - min_price;
        }
    } 
    return max_profit;
};


// class Solution {
//     public int maxProfit(int[] prices) {
//         int min_price = Integer.MAX_VALUE;
//         int max_profit = 0;

//         for(int i = 0; i < prices.length; i++){
//             if(prices[i] < min_price){
//                 min_price = prices[i];
//             } else if (prices[i] - min_price > max_profit){
//                 max_profit = prices[i] - min_price;
//             }
//         }
//         return max_profit;
//     }
// }