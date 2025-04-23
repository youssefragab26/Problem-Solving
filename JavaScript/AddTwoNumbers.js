let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
function addTwoNumbers(l1, l2) {
  let carry = 0;
  let dummy = new ListNode(0);
  let current = dummy;
  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) {
    current.next = new ListNode(carry);
  }
  return dummy.next;
}
console.log(addTwoNumbers(l1, l2)); // Output: [7, 0, 8]