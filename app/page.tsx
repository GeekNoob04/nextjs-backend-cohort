import axios from "axios";

async function fetchData() {
    await new Promise((r) => setTimeout(r, 2000));
    const res = await axios.get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
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
