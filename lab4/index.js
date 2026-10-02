const express  = require('express')
const app = express()

const SERVER_PORT = process.env.PORT || 3000
//set up middleware capabilities

//serve static
//url of webpage localhost:3000/static
app.use("/static", express.static("public"))

//serve json
app.use(express.json())

//read url param or query
app.use(express.urlencoded({extended:true}))
//---------------------
app.get("/", (request, response) => {
    response.send("<h1>welcome to root of server - usign get method</h1>")
})

app.get("/hello",(req, response ) => {
    response.status(200).send("<h1>Welcome to the /Hello path on server</h1>")
})

app.get("/college",(req, res)=>{
    const college = {
        name: "George Brown Polytechnic",
        location: "Toronoo",
        established: 1967
    }
    res.json(college)
})

app.get("/students", (req, res)=>{
    //validate that the GET url is correct
    if(!req.query.name || ! req.query.age){
        return res.status(400).json({error: "Missing query params"})
    }
    console.log(req.query)
    //not working ?name=keagan&age=23
    const name = req.query.name
    const age = req.query.age
    res.json({
        student_name: name,
        student_age: age
    })
})

app.get("/students/:name/:age", (req, res)=>{
    console.log(req.params)
    if(!req.params.name || !req.params.age){
        return res.status(400).json({error: "must pass in  name and age"})
    }
    const name = req.params.name
    const age = req.params.age
    res.json({
        student_name: name,
        student_age: age
    })
})

//try using pose,put ,delete methods
app.post("/students", (req, res)=>{
    const student = req.body
    console.log(student)
    const{name, age} = student
    if(!student.name || !student.age){
        return res.status(400).json({error:"name or age null"})
    }
})

//------------ EXTRAS ---------
app.get("/hello", (req, res)=>{
    console.log("Hello Express JS")
    res("Hello Express JS")
})

app.get("/user", (req, res) => {
    console.log(req.query)

    const firstName = req.query.firstname || "Pritesh"
    const lastName = req.query.lastname || "Patel"

    res.json({
        firstName: firstName,
        lastName: lastName
    })
})
app.post("/user/:firstname/:lastname", (req, res) => {
    const firstName = req.params.firstname
    const lastName = req.params.lastname

    res.json({
        firstname: firstName,
        lastname: lastName
    })
})
app.post("/users", (req, res) => {
    const users = req.body

    res.json(users)
})



app.listen(SERVER_PORT, () => {
    console.log("Server running on http://localhost:"+ SERVER_PORT)
})