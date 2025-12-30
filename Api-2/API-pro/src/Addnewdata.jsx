import { useState } from "react";
function Addnewdata() {
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [Email, setEmail] = useState("");

    const Adduser = async () => {
        console.log(id, name, age, Email);
        const url = "http://localhost:3000/students";
        let res = await fetch(url, {
            method: "Post",
            body: JSON.stringify({ id, name, age, Email }),
            // console.log(res);
        });
        res = await res.json();
        if(res == '') {
            alert("Add the user details");
        }
        else{
            alert("Data added successfully");
        }
    }

    return (
        <>

            <h2 className="text-center text-primary">Add new data to the api</h2>
            <div>
                <form action="" className="mx-auto w-50">

                    {/* <label htmlFor="id">ID:</label> */}
                    {/* <input onChange={(event) => setid(event.target.value)} className="form-control" placeholder="Type your ID" form type="number" style={{ width: "300px" }} id="name" name="name" /><br /><br /> */}
                    {/* <label htmlFor="name">Name:</label> */}
                    <input onChange={(event) => setname(event.target.value)} className="form-control" placeholder="Type your Name" style={{ width: "300px" }} type="text" id="name" name="name" /><br /><br />
                    {/* <label htmlFor="age">Age:</label> */}
                    <input onChange={(event) => setage(event.target.value)} className="form-control" style={{ width: "300px" }} placeholder="Type your Age" type="number" id="age" name="age" /><br /><br />
                    {/* <label htmlFor="Email">Email:</label> */}
                    <input onChange={(event) => setEmail(event.target.value)} className="form-control" style={{ width: "300px" }} placeholder="Type your Email" type="email" id="Email" name="Email" /><br /><br />
                    <button onClick={Adduser} className="btn btn-success">Add new data</button><br /><br />
                    {/* <button type="submit" className="btn btn-success">Submit</button> */}
                </form>
            </div>



        </>
    )

}
export default Addnewdata;