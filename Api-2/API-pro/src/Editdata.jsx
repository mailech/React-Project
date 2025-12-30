import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Editdata() {
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [Email, setEmail] = useState("");
    const { id: studentId } = useParams();
    const navigate = useNavigate();
    const url = `http://localhost:3000/students/${studentId}`;
    useEffect(() => {
        fetchdata();
    }, [url])
    const fetchdata = async () => {
        let res = await fetch(url);
        res = await res.json();
        setid(res.id);
        setname(res.name);
        setage(res.age);
        setEmail(res.Email);
    }
    const updatedata = async (e) => {
        e.preventDefault();
        let res = await fetch(url,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, age, Email })
        })
        res = await res.json();
        if(res){
            alert("Data updated successfully");
            navigate("/");
        }
    }
    return (
        <>
            <h2 className="text-center text-info">Edit and Update Data</h2>
            <div>
                <form action="" className="mx-auto w-50">

                    {/* <label htmlFor="id">ID:</label> */}
                    <input onChange={(event) => setid(event.target.value)} value={id} className="form-control" placeholder="Type your ID" form type="number" style={{ width: "300px" }} name="name" /><br /><br />
                    {/* <label htmlFor="name">Name:</label> */}
                    <input onChange={(event) => setname(event.target.value)} value={name} className="form-control" placeholder="Type your Name" style={{ width: "300px" }} type="text" name="name" /><br /><br />
                    {/* <label htmlFor="age">Age:</label> */}
                    <input onChange={(event) => setage(event.target.value)} value={age} className="form-control" style={{ width: "300px" }} placeholder="Type your Age" type="number" name="age" /><br /><br />
                    {/* <label htmlFor="Email">Email:</label> */}
                    <input onChange={(event) => setEmail(event.target.value)} value={Email} className="form-control" style={{ width: "300px" }} placeholder="Type your Email" type="email" name="Email" /><br /><br />
                    <button onClick={updatedata} className="btn btn-success">Update data</button><br /><br />
                    {/* <button type="submit" className="btn btn-success">Submit</button> */}
                </form>
            </div>

        </>
    )

}
export default Editdata;