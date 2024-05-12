import { useState } from "react";
import axios from "axios";

function AddWords() {
    const [response, setResponse] = useState();
    const [value, setValue] = useState("");
    const prompt = "Translate this to Spanish:";

    const onChange = (e) => setValue(e.target.value);

    const handleSubmit = async () => {
        try {
            if (!value.trim()) {
                // Input is empty, handle appropriately
                setResponse("Please enter an English word or phrase.");
                return;
            }

            const response = await axios.post("http://localhost:3005/chatbot", {
                question: `${prompt} ${value}`,
            });
            setResponse(response.data);
        } catch (error) {
            // Handle errors here
            console.error("Error:", error.message);
            setResponse("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container mt-8">
            <div>
                <p className="mb-8 text-lg font-semibold">Enter an English word, phrase, or question.</p>
                <input className='w-80 h-8'
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div>
                <button className="mt-8" onClick={handleSubmit}>Translate!</button>
            </div>
            <div>
                <p className='mt-8'>{response}</p>
            </div>
        </div>
    )
}

export default AddWords;
