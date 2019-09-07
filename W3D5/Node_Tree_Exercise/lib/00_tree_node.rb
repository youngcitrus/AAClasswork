require "byebug"
class PolyTreeNode
    attr_reader :value, :parent, :children
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)
        #node1 => node2, node3 ;;;;; node4
        # if self.parent != nil  
        #     self.parent.remove_child(self)
        # end

        # @parent = node

        # if new_parent !=nil && !new_parent.children.include?(self)
        #     self.add_child(new_parent)
        # end
        
        old_parent = @parent
        @parent = new_parent
        new_parent.children << self unless new_parent.children.include?(self)
        # if new_parent != nil # && !new_parent.children.include?(self)
            
        # end
        # debugger
        if old_parent != nil
            old_parent.children.delete(self)
        end
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        child_node.parent = nil
    end

    # def add_child(new_child)
    #     if !self.children.include?(new_child)
    #         self.children << new_child
    #     end
    # end

    # def remove_child(old_child)
    #     if self.children.include?(old_child)
    #         self.children.delete(old_child)
    #     end
    # end


end
