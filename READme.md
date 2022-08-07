# wysa-assignment

## LeetCode Challenge

### Key points
- In BST left Node value will be less than its root and right node value will be greater than its root(and it will be true for all nodes except root Node)
- take two variable low = -Infinity and high = Infinity 
- traverse the tree using recursion
- for left sub-tree change high = root.val ( as root node of left sub tree will be bigger)aand similarly and we visit right sub tree,    change low = root.val(as root node of right sub tree will be smaller)
- if at any point of time (root.val <= low || root.val >= high) return false else return true


### Alternate Approach
- do inorder traversal of tree and store node values in an array
- if array is sorted , then tree is BST else not
