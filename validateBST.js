var isValidBST = function (root) {


    const check = (root, low = -Infinity, high = Infinity) => {
        if (!root) return true;
        if (root.val <= low || root.val >= high) return false;
        return check(root.left, low, root.val) && check(root.right, root.val, high);
    };

    let low = -Infinity
    let high = Infinity
    return check(root, low, high)
};