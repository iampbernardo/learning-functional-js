// https://flaviocopes.com/javascript-functional-programming/#introduction-to-functional-programming

// Functions assigned to variables
const f = (m) => console.log(m)
f('Test')

// As an object method
const obj = {
    f(m) {
        console.log(m)
    }
}
obj.f("Hello world")

const a = [
    m => console.log(m),
    f => console.info(f)
]
a[0]("Hello future")
a[1]("This should be a console.info")
