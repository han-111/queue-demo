const createList = (value) => {
    return createNnode(value)
}
const appendList = (list, val) => {
    const node = createNnode(val)
    list.next = node
    return node
}
const createNnode = (value) => {
    return {
        data: value,
        next: null
    }
}
const removeList = (list, node) => {
    let x = list
    let p = node
    while (x !== node) {
        p = x
        x = x.next
    }
    if (x === null) { // 若 x 为 null，则不需要删除，直接 return， false 表示无法删除不在list里的节点
        return false
    } else if (x === p) { // 这说明要删除的节点是第一个节点
        p = x.next
        return p // 如果删除的是第一个节点，那么就要把新 list 的头节点 p 返回给外面，即 newList = removeFromList(list, list)
    } else {
        p.next = x.next;
        return list // 如果删除的不是第一个节点，返回原来的 list 即可
    }
    // if (list === node) {
    //     //如果删除的是第一个节点
    //     list = node.next
    // } else {
    //     //如果删除的是第二个节点
    //     //第一个节点的next等于第三个节点
    //     if (list.next === node) {
    //         list.next = node.next
    //     } else {
    //         //如果删除的是第三个节点
    //         //第二个节点的next等于第四个节点
    //         if (list.next.next === node) {
    //             list.next.next = node.next
    //         } else {
    //             //如果删除的是第四个节点
    //             //第四个个节点的next等于第五个节点
    //             if (list.next.next.next === node) {
    //                 list.next.next.next = node.next
    //             }

    //         }
    //     }
    // }

}
const list = createList(10)
const append = appendList(list, 20)
const append1 = appendList(append, 30)
const node = list // node 就是 list 的第一个节点了现在
const newList = removeList(list, node)// 必须用 newList 获取返回值才能拿到删除了第一个节点的新 list
console.log(newList)