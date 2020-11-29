export function maxProfit(prices: number[]): number {
    if (prices.length === 0 || prices.length === 1) {
        return 0;
    }

    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currPrice = prices[i];
        if (currPrice < minPrice) {
            minPrice = currPrice;
        } else {
            const profit = currPrice - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}
