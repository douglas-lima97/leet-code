function twoSum(nums: number[], target: number): number[] {
    const hashmapSums: Record<number, number> = {}

    for (let idx = 0; idx < nums.length; idx++) {
        const num = nums[idx]

        if (typeof hashmapSums[num] === 'number') {
            return [hashmapSums[num], idx]
        }

        hashmapSums[target - num] = idx
    }

    return []
}