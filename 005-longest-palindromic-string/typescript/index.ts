import { isPalindrome } from "./utils/is-palindrome"

function longestPalindrome(s: string): string {
    for (let size = s.length; size > 1; size--) {
        for (let i = 0; i <= s.length - size; i++) {
            const currentSubstring = s.substring(i, size + i)

            if (isPalindrome(currentSubstring)) {
                return currentSubstring
            }
        }
    }

    return s[0]
};