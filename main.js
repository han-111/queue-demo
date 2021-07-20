const divScreen = document.querySelector('#screen')
const createNumber = document.querySelector('#createNumber')
const callNumber = document.querySelector('#callNumber')
const number = document.querySelector('#number')
const queue = document.querySelector('#queue')
let n = 0
let queue_arr = []
createNumber.onclick = () => {
    n = n + 1
    //queue_arr.push(n)
    queue_arr.push.call(queue_arr, n)
    number.innerHTML = n
    queue.innerHTML = JSON.stringify(queue_arr)
}
callNumber.onclick = () => {
    if (queue_arr.length) {
        //let m = queue_arr.shift(0)
        let m = queue_arr.shift.call(queue_arr)
        queue.innerHTML = JSON.stringify(queue_arr)
        divScreen.innerHTML = `请 ${m} 该去就餐啦`
        if (queue_arr.length === 0) {
            queue.innerHTML = ''
        }

    } else {
        divScreen.innerHTML = '没有人就餐了'
    }

}