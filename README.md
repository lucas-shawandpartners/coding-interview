# Coding Interview

1. Into the file `src/lib/sort.js` implement the function `bubbleSort`, this function must receive an array and apply the Bubble Sort algorithm and return it ordered.

The pseudo code of bubble sort is:

```
procedure bubbleSort( A : list of sortable items ) defined as:
  do
    swapped := false
    for each i in 0 to length(A) - 2 inclusive do:
      if A[i] > A[i+1] then
        swap( A[i], A[i+1] )
        swapped := true
      end if
    end for
  while swapped
end procedure
```

2. You have to implement a restful API. This API must expose an endpoint that receives an array in the body of the POST request and applies the sort function implemented in the last exercise. The code must be defined into the `src/server.js` file.

3. Implement a client-side application where a user can declare an array and POST it to the server to get it ordered. 
 - running:

```
$ npm install
$ node ./src/server.js
```
  - input must be comma separeted as following:
```
1,2,3,4,5,6
```

