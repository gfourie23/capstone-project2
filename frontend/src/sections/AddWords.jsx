

import { useState } from "react";
import axios from "axios";

function AddWords({ onAddWord }) {
    const [response, setResponse] = useState("");
    const [value, setValue] = useState("");
    const prompt = "Translate this word/phrase directly into Spanish:";

    const onChange = (e) => setValue(e.target.value);

    const handleSubmit = async () => {
        try {
            if (!value.trim()) {
                setResponse("Please enter an English word or phrase.");
                return;
            }

            const apiResponse = await axios.post("http://localhost:3005/chatbot", {
                question: `${prompt} ${value}`,
            });
            const translation = apiResponse.data;

            setResponse(translation);
            onAddWord(value, translation);
        } catch (error) {
            console.error("Error:", error.message);
            setResponse("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container mt-8">
            <div>
                <p className="mb-10 text-md font">Want to add vocabulary words to this section? Enter an English word, phrase, or question.</p>
                <input className='w-80 h-8'
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div>
                <button className="mt-8" onClick={handleSubmit}>Add!</button>
            </div>
            {/* <div>
                <p className='mt-8'>{response}</p>
    </div> */}
        </div>
    );
}

export default AddWords;
