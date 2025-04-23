let list1 = [1, 2, 4]
let list2 = [1, 3, 4]
// [1, 1, 2, 3, 4, 4]
function mergeTwoLists(list1 , list2){
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1) current.next = list1;
    if (list2) current.next = list2;

    return dummy.next;
}

console.log(mergeTwoLists(list1 ,list2))