/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let currentNode = head;
    let linkedLength = 0;

    while (currentNode != null) {
        linkedLength++;
        currentNode = currentNode.next;
    }
    for (let i = 0; i < Math.floor(linkedLength / 2); i++) {
        head = head.next;
    }
    return head;
};