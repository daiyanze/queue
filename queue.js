
function Queue (data) {
  this.data = data || []

  this.enqueue = function (element) {
    this.data.push(element)

    return this
  }

  this.dequeue = function () {
    this.data.shift()

    return this
  }

  this.front = function () {
    if (this.isEmpty()) return null

    return this.data[0]
  }

  this.rear = function () {
    if (this.isEmpty()) return null

    return this.data[this.data.length - 1]
  }

  this.isEmpty = function () {
    return this.data.length == 0
  }

  this.toString = function () {
    return this.data.toString()
  }

  this.clear = function () {
    delete this.data
    this.data = []

    return this
  }
}