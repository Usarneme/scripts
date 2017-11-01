// Returns the area of an n-interesting sized poligon
// https://codefights.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ/solutions
function shapeArea(n) {
    // fn(1) = 1   =                                 1
    // fn(2) = 5   =                         3 + 1 + 1
    // fn(3) = 13  =                 5 + 3 + 3 + 1 + 1
    // fn(4) = 25  =         7 + 5 + 5 + 3 + 3 + 1 + 1
    // fn(5) = 41  = 9 + 7 + 7 + 5 + 5 + 3 + 3 + 1 + 1
    // fn(x) = (x-1)^2 + x^2
    return Math.pow(n-1,2)+Math.pow(n,2)
}
