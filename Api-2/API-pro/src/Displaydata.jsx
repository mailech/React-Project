import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Displaydata() {
    const navigate = useNavigate();
    const [studentData, setstudentData] = useState([]);
    useEffect(() => {
        renderdata();
        // deletedata();
        // editdata();
    }, []);
    async function renderdata() {
        const url = "http://localhost:3000/students";
        let res = await fetch(url);
        res = await res.json();
        // console.log(res);
        setstudentData(res);
    }
    const deletedata = async (id) => {
        const url = "http://localhost:3000/students";
        let res = await fetch(url + "/" + id, {
            method: "delete"
        });
        res = await res.json();
        if (res) {
            alert("Data deleted successfully");
            renderdata();
        }
    };
    const editdata = async (id) => {
        navigate("/edit/" + id);
    }
    
        return (
            <>
                <h2 className="text-center text-primary">Display data from teh api</h2>
                <table className="table table-hover table-bordered text-center mx-auto" style={{ width: "50%" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.Email}</td>
                                <td>
                                    <button onClick={() => deletedata(item.id)} className="btn btn-danger me-3">Delete</button>
                                    <button onClick={() => editdata(item.id)} className="btn btn-primary">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </>
        )
    }
    export default Displaydata;