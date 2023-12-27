import React, { useState } from 'react';
import axios from "axios";

export const EventForm = () => {
    const [participants, setParticipants] = useState(['']);
    const [eventName, setEventName] = useState("");
    const [currency, setCurrency] = useState("");

    const handleAddPerson = () => {
        setParticipants([...participants, '']);
    };

    const handleParticipantChange = (index, value) => {
        const updatedParticipants = [...participants];
        updatedParticipants[index] = value;
        setParticipants(updatedParticipants);
    };

    const handleCreateEvent = async () => {
        try {
            const response = await axios.post("http://localhost:3001/groups", {
                name: eventName,
                participants,
                currency,
                expenses: [],
            });
            alert(`Event created with ID: ${response.data.id}`);
        } catch (error) {
            console.error("Error creating group:", error);
        }
    };

    return (
        <div>
            <div className='bg-[#ECECEC] flex flex-col justify-center items-center px-16 py-12 max-md:px-5'>

                {/* Block Form */}
                <div className='bg-white flex w-full max-w-[1168px] flex-col m-0.5 pr-0.5 py-12 rounded-[100px] items-start max-md:max-w-full'>
                    <div className='text-3xl font-bold whitespace-nowrap ml-16 max-md:max-w-full max-md:text-xl'>
                        Create New Event
                    </div>
                    <div className="bg-gray-200 self-stretch shrink-0 h-1 mt-8 max-md:max-w-full" />
                    <div className="self-center flex w-[964px] max-w-full flex-col items-stretch mt-16 mb-2.5 max-md:mt-10">

                        {/* **** Start - Form **** */}
                        <form>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="event_name" className="block mb-2 text-sm font-medium text-gray-900 ">Event name</label>
                                    <input
                                        type="text"
                                        id="event_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="trip to Paradise"
                                        value={eventName}
                                        onChange={(e) => setEventName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 ">Choose currency</label>
                                    <select
                                        id="currency"
                                        className="mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Choose currency
                                        </option>
                                        <option value="MAD">Moroccan Dirham</option>
                                        <option value="US">United States dollar</option>
                                        <option value="EU">EURO</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <div className="font-semibold mb-3">Participants</div>

                                    {participants.map((participant, index) => (
                                        <div className="mb-3" key={index}>
                                            <label htmlFor={`participant_${index}`} className="block mb-2 text-sm font-medium text-gray-900">{`Person ${index + 1}`}</label>
                                            <input
                                                type="text"
                                                id={`participant_${index}`}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Name"
                                                value={participant}
                                                onChange={(e) => handleParticipantChange(index, e.target.value)}
                                                required
                                            />
                                        </div>
                                    ))}

                                    <div className="mb-3">
                                        <button
                                            type="button"
                                            className="text-white bg-gray-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            onClick={handleAddPerson}
                                        >
                                            Add New Person +
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        className="bg-[#00df9a] hover:bg-[#FFB000] w-[200px] rounded-3xl font-medium py-3 text-white transition duration-300 ease-in-out"
                                        onClick={handleCreateEvent}
                                    >
                                        Create Event
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* **** End - Form **** */}

                    </div>
                </div>

            </div>
        </div>
    );
};
