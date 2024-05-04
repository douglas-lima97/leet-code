function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums1Length = nums1.length
    const nums2Length = nums2.length
    const mergedNumsLength = nums1Length + nums2Length
    const mergedNums: number[] = new Array(mergedNumsLength)

    let nums1Index: number = 0
    let nums2Index: number = 0
    let mergedNumsIndex: number = 0

    while (nums1Index <= nums1Length && nums2Index <= nums2Length) {
        if (nums1Index == nums1Length) {
            while (nums2Index < nums2Length) {
                mergedNums[mergedNumsIndex++] = nums2[nums2Index++]
            }

            break
        }

        if (nums2Index == nums2Length) {
            while (nums1Index < nums1Length) {
                mergedNums[mergedNumsIndex++] = nums1[nums1Index++]
            }

            break
        }

        mergedNums[mergedNumsIndex++] = nums1[nums1Index] < nums2[nums2Index] ? nums1[nums1Index++] : nums2[nums2Index++]
    }

    if (mergedNumsLength % 2 == 0) {
        return (mergedNums[mergedNumsLength / 2 - 1] + mergedNums[mergedNumsLength / 2]) / 2
    }

    return mergedNums[Math.trunc(mergedNumsLength / 2)]
}