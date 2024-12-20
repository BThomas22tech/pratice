class Node:
    """An object for storing a single node of a linked list.
    Models two attributes - data and the link to the next node in the list"""
    data = None
    next_node = None
    
    def __init__(self, data):
        self.data = data
        
        
    def __repr__(self):
        return "<Node data: %s>" % self.data
class LinkedList:
    """Singly linked list"""
    
    def __init__(self):
        self.head = None
        
    def is_empty(self):
        return self.head == None
    
    def size(self):
        """returns the number of nodes in the link list Takes O(n) time"""
        current = self.head
        count = 0
        
        while current:
            count += 1
            current = current.next_node
            
        return count
    
    def add(self, data):
        """ adds new Node containing data at the head of the list. Takes constant time O(1)"""
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node
        
    def search(self,key):
        """search for the first node containing data that matches the key takes O(n) time"""
        current = self.head
        
        while current:
            if current.data == key:
                return current
            else:
                current = current.next_node
        return None
    def __repr__(self):
        """
        Return a string representation of the list.
        Takes O(n) time.
        """
        nodes = []
        current = self.head
        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next_node is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next_node
        return  '-> '.join(nodes)