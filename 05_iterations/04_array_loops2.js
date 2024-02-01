// for in loop

const myObject={
    Rohit:45,
    Virat:18,
    Dhoni:7,
    Gill:77,
    Rahul:1
 }
// this will print the keys of the object

//  for(const key in myObject){
//     console.log(key);
//  }


// this will print the values of the object

// for(const key in myObject){
//     console.log(`${key} has ${myObject[key]}`);
// }


const programming=["js","java","gcc","cpp","py","rb"]

for(const key in programming){
    // console.log(programming[key]);
}


const map=new Map()

map.set("one",1)
map.set("Two",2)
map.set("Three",3)
map.set("Four",4)
map.set("Five",5)

// we can't iterate over a map using for in loop
for(const key in map){
    // console.log(key);
}


