import axios from "axios";

async function fetchData() {
    const res = await axios.get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
    return res.data;
}
export default async function Home() {
    const userDetails = await fetchData();
    return (
        <div>
            {userDetails.email}
            <br />
            {userDetails.name}
        </div>
    );
}
