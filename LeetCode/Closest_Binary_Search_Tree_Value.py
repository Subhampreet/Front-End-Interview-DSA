class Solution:
    def dfs(self, node, store):
        if not node: return

        self.dfs(node.left, store)
        store.append(node.val)
        self.dfs(node.right, store)

        return store

    def closest_value(self, root: TreeNode, target: float) -> int:
        all_nodes = self.dfs(root, [])
        return min(all_nodes, key = lambda x : abs(target - x))