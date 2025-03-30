// Story
// Your friend Bob is working as a taxi driver. After working for a month he is frustrated 
// in the city's traffic lights. He asks you to write a program for a new type of traffic light. 
// It is made so it turns green for the road with the most congestion.

// Task
// Given 2 pairs of values each representing a road (the number of cars on it and its name), 
// construct an object whose turngreen method returns the name of the road with the 
// most traffic at the moment of the method call, and clears that road from cars.

// After both roads are clear of traffic, or if the number of cars on both roads is the same from the beginning,
// return an empty value instead.

// Example
// t = SmartTrafficLight([42, "27th ave"], [72, "3rd st"])
// t.turngreen()  ==  "3rd st"
// t.turngreen()  ==  "27th ave"
// t.turngreen()  ==  null

// t = SmartTrafficLight([10, "27th ave"], [10, "3rd st"])
// t.turngreen()  ==  null

// pseudo

// build constructor to return cars and streets

// compare values of str1 and str2
// iff str1.cars > str2.cars, change str1 cars to zero and return str1 name
// do the same for is str2.cars > str1.cars.
// if both cars numbers are equal return null

class SmartTrafficLight {
  constructor(st1, st2) {
    this.street1name = st1[1]
    this.street1cars = st1[0]
    this.street2name = st2[1]
    this.street2cars = st2[0]
  }
  
  turngreen() {
    if (this.street1cars === 0 && this.street2cars === 0) {return null}
    if (this.street1cars === null || this.street2cars === null) {return null}

    if (this.street1cars > this.street2cars) {
      this.street1cars = 0
      return this.street1name
    }
    if (this.street1cars < this.street2cars) {
      this.street2cars = 0
      return this.street2name
    }
    return null 
  }
}

const test = new SmartTrafficLight([42, '27th ave'], [72, '3rd st'])
console.log(test.turngreen())
console.log(test.turngreen())
console.log(test.turngreen())

// console.log(SmartTrafficLight.turngreen())