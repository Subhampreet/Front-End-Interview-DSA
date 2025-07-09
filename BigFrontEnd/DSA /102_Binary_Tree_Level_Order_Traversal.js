var levelOrder = function(root) {
    if (root === null) return []

    let res = []
    let queue = [root]

    while(queue.length) {
        let levelArr = []
        let levelSize = queue.length

        while (levelSize) {
            let current = queue.shift()

            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)

            levelArr.push(current.val)
            levelSize--
        }

        res.push(levelArr)
    }

    return res
};