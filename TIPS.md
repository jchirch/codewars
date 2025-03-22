## Tips, Tricks, and Fun Code

### Looping through an array, wrap back to beginning

Assuming you have some index to track where you are in the array, to make it wrap use

`index = (index + array.length) % array.length`

So if there are 3 items in the array and index is -1, you'll get

`(-1 + 3) % 3 = 2` // last index

or if you reach past the end at index 3

`(3 + 3) % 3 = 0` // back to start