class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop () {
        if (!this.head) return undefined;
        var tmp = this.head;
        while (tmp.next) {
            tmp = tmp.next;
        }
        tmp.next = null;
        this.tail = tmp;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    // with two ptrs:
    pop_2(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift () {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    // set (index, val) {
    //     if (index < 0 || index >= this.length) return null;
    //     var counter = 0;
    //     var current = this.head;
    //     while (counter !== index) {
    //         current = current.next;
    //         counter++;
    //     }
    //     current.val = val;
    //     return current;
    // }

    set (index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert (index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        }
        //OR:
        //if (index === this.length) return !!this.push(val); !!: doubly negate
        if (index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        //get the previous node
        //insert into prev and index
        var prev = this.get(index - 1);
        var tmp = prev.next;
        prev.next = newNode;
        newNode.next = tmp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var preNode = this.get(index - 1);
        var rmNode = preNode.next;
        preNode.next = rmNode.next;
        this.length--;
        return rmNode;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
    print () {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

}

var list = new SinglyLinkedList()
list.push(100)
list.push(200)
list.push(300)
list.push(400)
list.push(999)

