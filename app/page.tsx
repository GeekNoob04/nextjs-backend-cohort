import axios from "axios";

async function fetchData() {
    const res = await axios.get("http://localhost:3000/api/user");
    return res.data;
}
export default async function Home() {
    const userDetails = await fetchData();
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>Name: {userDetails?.name}</div>
                    <div>Email: {userDetails?.email}</div>
                </div>
            </div>
        </div>
    );
}
