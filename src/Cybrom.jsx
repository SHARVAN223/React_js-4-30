import Collage from "./Collage"


const student = [
{
    rollno : 121,
    name : "sharvan",
    subject : "php"
},
{
    rollno : 122,
    name : "saurabh",
    subject : "php"
},
{
    rollno : 123,
    name : "sandesh",
    subject : "php"
},
{
    rollno : 124,
    name : "anuj",
    subject : "php"
}
]


const ans = student.map((key)=>{
    return (
        <tr>558
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.subject}</td>
        </tr>
    )
})

const Cybrom =() =>{
    return(
        <>
          <table border="2">
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Subject</th>
            </tr>
            {ans}
          </table>
            
        </>
    )
}

export default Cybrom
