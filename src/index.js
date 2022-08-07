module.exports = function reverse(n) {
    let arr = ('' + Math.abs(n)).split('');
    arr.reverse();
    let res = arr.reduce(function (a, b) {
        return a.concat(b)
    });
    return res
}
