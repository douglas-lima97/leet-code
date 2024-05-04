function lengthOfLongestSubstring(s: string): number {
    let substringCount: number = 0
    let longestSubstringSize: number = 0
    let hashmapChars: Record<string, number> = {}

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        const firstAppearedIndex = hashmapChars[char]

        if (typeof firstAppearedIndex === 'number') {
            i = firstAppearedIndex
            substringCount = 0
            hashmapChars = {}
        } else {
            hashmapChars[char] = i
            substringCount++
            longestSubstringSize = substringCount > longestSubstringSize ? substringCount : longestSubstringSize
        }
    }

    return longestSubstringSize
}