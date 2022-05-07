import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";

function App() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [profile, setProfile] = useState({});

    useEffect(() => {
        liff.init({
            liffId: import.meta.env.VITE_LIFF_ID,
        })
            .then((e) => {
                setProfile(e);
                setMessage("LIFF init succeeded.");
            })
            .catch((e) => {
                setMessage("LIFF init failed.");
                setError(`${e}`);
            });
    });

    return (
        <div className="App">
            <h1>create-liff-app</h1>
            {message && <p>{message}</p>}
            {message && <p>{profile}</p>}
            {error && (
                <p>
                    <code>{error}</code>
                </p>
            )}
        </div>
    );
}

export default App;
