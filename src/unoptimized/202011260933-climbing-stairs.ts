export function climbStairs(n: number): number {
    const dp = new Array<number>(n + 1);
    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }

    return dp[dp.length - 1];
}
