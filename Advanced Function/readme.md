Avoid Side Effects, Functional purity.

Example of Side Effects:
|-------------------------------------------------|
|                 console.log/etc..               |
|            (2,5)       ^        return?   value |
| input        =>       ***         =>        /   |
|                    function            undefined|
|-------------------------------------------------|

let a = 1
function b() {
    a = 2
}

that's function doing something that effect outside world.
think a function as its own universe.

|----------------------------------------|
|                                        |
|         (2,5)          return          |
| input     =>     ***     =>     value  |
|                function                |
|----------------------------------------|