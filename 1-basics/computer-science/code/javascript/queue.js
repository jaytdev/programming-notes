function createQueue() {
    const queue = []

    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }
    }
}

function createPriorityQueue() {
    const lowPriorityQueue = createQueue()
    const highPriorityQueue = createQueue()

    return {
        enqueue(item, isHighPriority = false) {
            isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item)
        },
        dequeue() {
            if (! highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue()
            }

            return lowPriorityQueue.dequeue()
        },
        peek() {
            if (! highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek()
            }

            return lowPriorityQueue.peek()
        },
        length() {
            return highPriorityQueue.length + lowPriorityQueue.length
        },
        isEmpty() {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
        }
    }
}