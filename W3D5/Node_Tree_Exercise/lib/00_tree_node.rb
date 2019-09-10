require "byebug"
class PolyTreeNode
    attr_reader :value, :parent, :children
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)
        
        self.parent.children.delete(self) unless self.parent.nil?
        
        @parent = new_parent

        new_parent.children << self unless (self.parent.nil? || new_parent.children.include?(self))
        
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        child_node.parent = nil
        if !@children.include?(child_node)
            raise "Error: no such child exists for this node"
        end
    end

    def dfs(target_value)
        return self if self.value == target_value
        self.children.each do |child|
            result = child.dfs(target_value)
            return result unless result.nil?
        end

        nil

    end

    def bfs(target_value)
        q = [self]
        until q.empty?
            node = q.shift
            if node.value == target_value
                return node
            else
                node.children.each {|child| q << child}
            end
        end
        nil
    end


end
