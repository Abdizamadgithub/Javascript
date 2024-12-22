// let nm = [1,2,3,4,5,6,8,9]

// console.log(nm)

// let nams = ["Abdisamed","Ali","Kasim","Abdulle"]

// console.log(nams)

// let names = [1,"Abdisamed",2,"Ali",3,"Kasim",4,"Abdulle"]
// names.sort()
// console.log(names) 


// let joined = names.join(", ")
// console.log(joined)

// for(i = 0; i < names.length; i ++ ){
//     console.log(names[i])
// }


// adding new element to back

// names.push(10, "Faarah")
// console.log(names)


// delete elements back

// names.pop()
// console.log(names)

// adding new element to front

// names.unshift("Kaamil")
// console.log(names)

// deleting element from front

// names.shift()
// console.log(names )

// let x = ["Abdisamed", "Ali", "Kasim", "Abdulle", "Ahmed",]
// // let sliced = x.slice(1,4)

// let pos = x.indexOf("Kasim")

// // x.splice(1,0 ,"Abdi")

// let removeE = x.splice(pos, 2)

// console.log(x)
let x = [1,2,3,4,5,,6,7,8]
let filtred = x.filter(function flt(n){
    return n >= 4
} )

console.log(filtred)

