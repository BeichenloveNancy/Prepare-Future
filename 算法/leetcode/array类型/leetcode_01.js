// arr [2, 7, 11, 15]

var arr = [3, 2,4]
function twoSum(arr, target) {
  // for(let i = 0; i< arr.length; i++) {
  //   if(arr.slice(i+1).indexOf(target - arr[i]) > -1) {
  //     console.log(arr.slice(i+1))
  //     return [arr.indexOf(target - arr[i]), i]
  //   }
  // }
  var value = new Map()
  for (let i =0; i<arr.length; i++) {
    // sum：3 
    const sum  = target - arr[i] 
    const matchValue = value.get(sum)
    console.log( value,matchValue)
    if(matchValue !== undefined) {
      return [matchValue, i]
    }
    value.set(arr[i], i)
    console.log(value)
  }
}


console.log(twoSum(arr, 6))