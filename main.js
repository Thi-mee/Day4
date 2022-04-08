const person1 = {
  name: "Tolani",
  age: 21,
  level: "400 level"
}
const person2 = {
  name: "Joshua",
  age: 18,
  level: "100 level"
}

const objectArray = [person1, person2]

function stringArrayFunction(array){
  const stringArray = []
  array.forEach(object => {
    stringArray.push(`${object.name}/${object.age}/${object.level}`)
  });
  return stringArray
}

console.log (stringArrayFunction(objectArray))