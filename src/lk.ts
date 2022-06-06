class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// class Node {
//     val: boolean
//     isLeaf: boolean
//     topLeft: Node | null
//     topRight: Node | null
//     bottomLeft: Node | null
//     bottomRight: Node | null
//
//     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
//         this.val = (val === undefined ? false : val)
//         this.isLeaf = (isLeaf === undefined ? false : isLeaf)
//         this.topLeft = (topLeft === undefined ? null : topLeft)
//         this.topRight = (topRight === undefined ? null : topRight)
//         this.bottomLeft = (bottomLeft === undefined ? null : bottomLeft)
//         this.bottomRight = (bottomRight === undefined ? null : bottomRight)
//     }
// }

// class Node {
//     val: number
//     children: Node[]
//
//     constructor(val?: number, children?: Node[]) {
//         this.val = (val === undefined ? 0 : val)
//         this.children = (children === undefined ? [] : children)
//     }
// }

// const root: TreeNode = {
//     val: 4,
//     left: {
//         val: 2,
//         left: {
//             val: 1,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 6,
//         left: {
//             val: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null
//         }
//     }
// }

const showTime = (fn: () => void) => {
    console.time('fn')
    fn()
    console.timeEnd('fn')
}

function lk(root: TreeNode | null): boolean {
    if(root === null) return true

    let flag = true

    const dfs = (sub: TreeNode | null, low: number, high: number) => {
        if(!flag || !sub) return

        if(sub.val <= low || sub.val >= high) {
            flag = false
        }
        else {
            dfs(sub.left, low, sub.val)
            dfs(sub.right, sub.val, high)
        }
    }

    dfs(root, -Infinity, Infinity)

    return flag
}


class MyCalendarThree {
    #dx = {} as { [k: number | string]: number }

    constructor() {

    }

    book(start: number, end: number): number {
        this.#dx[start] = (this.#dx[start] ?? 0) + 1
        this.#dx[end] = (this.#dx[end] ?? 0) - 1

        let max = 0
        let curr = 0

        Object.keys(this.#dx).forEach(idx => {
            curr += this.#dx[idx]
            max = Math.max(max, curr)
        })
        return max
    }
}

showTime(() => {
    const c = new MyCalendarThree()
    console.log(c.book(10, 20))
    console.log(c.book(30, 100000000))
})

console.time('foreach')

console.timeEnd('foreach')

export {
    lk
}
