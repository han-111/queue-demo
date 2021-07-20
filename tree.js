const createTree = (val) => {
    return {
        data: val,
        children: null,
        partent: null
    }
}
const appendTree = (node, val) => {
    const newnode = {
        data: val,
        children: null,
        partent: node
    }
    node.children = node.children || []
    node.children.push(newnode)
    return newnode
}
const travel = (tree, fn) => {
    fn(tree)
    if (!tree.length) {
        return
    }
    for (let i = 0; i < tree.children.length; i++) {
        travel(tree.children[i], fn)
    }
}
const findNode = () => {
    if (tree === node) {
        return

    } else if (tree.children) {
        for (let i = 0; i < tree.children.length; i++) {
            const result = findNode(tree.children)
            if (result) {
                return result
            }
        }
        return undefined
    } else {
        return undefined

    }
}
const removeNode = (tree, node) => {
    const sib = node.partent.children
    let index = 0
    for (let i = 1; i < sib.length; i++) {
        if (sib[i] === index) {
            index = i
        }
    }
    sib.splice(index, 1)

}
const tree = createTree(10)
const app2 = appendTree(tree, 30)
const app1 = appendTree(tree, 20)
const app3 = appendTree(tree, 40)
const app4 = appendTree(app2, 201)
const app5 = appendTree(app2, 202)
const app6 = appendTree(app2, 203)
removeNode(tree, app5)
console.log(tree)