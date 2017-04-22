
let submit= document.getElementById("submit");
let field= document.getElementById("field");
submit.addEventListener('click', callback)
let h2= document.getElementById("name");

let arr= [21, 22, 33, 24, 35, 26];
console.log(arr[2])

// fitler array method
// filter and map should return a value;
//forEach

let array =[];
arr.forEach(function(item, index){
      if(item >= 24){
        array.push(item)
      }
  })
  console.log(array)
// just like the plain javascript for loop, and doesn't return anything..

// let filteredArray =
//           arr.filter(function(item, index, array){
//             return item;
//           })
// always returns array..
// console.log(filteredArray)
// for (var i = 0; i < arr.length; i++) {
//   if(arr[i] >= 3){
//     console.log("item "+ arr[i] + " is greater then or equal 3")
//   }
// }
function callback(e){
  e.preventDefault();
  if(field.value){
      h2.innerHTML = field.value;
  }else{
    console.log('you should provide value!!')
  }
}


    var name = "hasan";
    let names = [];
    function changeName(n){
      names.push(n);
    }
