//What will the following code print? All awarded points are for explaining your answer cor-
//rectly - a correct answer with no explanation will receive no points.
let foo = p => console.log(p)
const bar = f => {
return p => {
p = p + ’CS’
f(p)
}
}
const baz = f => {
return p => {
p = p + ’409’
f(p)
}
}
foo = bar(foo)
foo = baz(foo)
foo(’RK’)