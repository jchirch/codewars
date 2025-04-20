// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5


package main

import (
	"math"
	"fmt"
)

func Litres(time float64) int {
	litres := math.Floor(time * 0.5)
  
	return int(litres)
}

func main () {
	fmt.Println(Litres(0))
	fmt.Println(Litres(3))
	fmt.Println(Litres(678))
}