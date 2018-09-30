// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coins = {H: 50, Q: 25, D: 10, N: 5, P: 1};
    var result = {};
    if (currency > 10000){
    	return { error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    for(let key in coins){
    	const count = Math.floor(currency / coins[key]);
    	if ( count > 0){
    		result[key] = count;
    		currency -=  coins[key] * count;
    	}
    }
   return result;
}
