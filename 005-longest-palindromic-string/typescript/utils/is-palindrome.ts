export function isPalindrome(value: string): boolean {
    const lastIndex = value.length - 1

    for (let i = 0; i < lastIndex / 2; i++) {
        if (value[i] != value[lastIndex - i]) {
            return false
        }
    }

    return true
}