import { ListNode } from "./list-node/list-node"

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head: ListNode | null = new ListNode(0)
    let tail: ListNode | null = head
    let rest: number = 0

    while (l1 != null || l2 != null || rest != 0) {
        const digit1 = l1?.val || 0
        const digit2 = l2?.val || 0

        const sum = digit1 + digit2 + rest
        const currentDigit = sum % 10

        const newList = new ListNode(currentDigit)

        rest = Math.trunc(sum / 10)

        tail.next = newList
        tail = tail.next

        l1 = l1?.next || null
        l2 = l2?.next || null
    }

    const result = head.next

    head.next = null

    return result
}