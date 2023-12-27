import React, { useState } from 'react';

export const EventDetails = () => {
    const [eventName] = useState("Event Name");
    const [participants, setParticipants] = useState(['Amine', 'Hamza', 'Reda', 'Yassine']);
    const [expenses, setExpenses] = useState([]);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [payer, setPayer] = useState(participants[0]);
    const [amount, setAmount] = useState("");

    const handleAddPayment = () => {
        const newExpense = {
            payer,
            amount,
            contributors: participants.filter(participant => participant !== payer)
        };

        setExpenses([...expenses, newExpense]);
        setShowPaymentForm(false);
    };

    return (
        <div>
            <div className='bg-[#ECECEC] flex flex-col justify-center items-center px-16 py-12 max-md:px-5'>
                {/* Block Form */}
                <div className='bg-white flex w-full max-w-[1168px] flex-col m-0.5 pr-0.5 py-12 rounded-[100px] items-start max-md:max-w-full'>
                    <div className='text-3xl font-bold whitespace-nowrap ml-16 max-md:max-w-full max-md:text-xl'>
                        {eventName}
                    </div>
                    <div className='text-xl ml-16 mt-3 max-md:max-w-full max-md:text-xl'>
                        <span className='font-semibold'>Participants:</span> {participants.join(' . ')}
                    </div>

                    <div className="bg-gray-200 self-stretch shrink-0 h-1 mt-8 max-md:max-w-full" />

                    <div className="self-center flex w-[964px] max-w-full flex-col items-stretch mt-16 mb-2.5 max-md:mt-10">
                        <div className=''>
                            <button
                                className='bg-[#FFB000] hover:bg-[#00df9a] w-[200px] rounded-3xl font-medium py-3 text-white transition duration-300 ease-in-out'
                                onClick={() => setShowPaymentForm(true)}
                            >
                                Add Payment
                            </button>
                        </div>

                        {/* **** Start - Payment Form **** */}
                        {showPaymentForm && (
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-2">Add Payment</h3>
                                <form>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="payer" className="block text-sm font-medium text-gray-900 mb-2">Payer</label>
                                            <select
                                                id="payer"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                value={payer}
                                                onChange={(e) => setPayer(e.target.value)}
                                            >
                                                {participants.map((participant, index) => (
                                                    <option key={index} value={participant}>{participant}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="amount" className="block text-sm font-medium text-gray-900 mb-2">Amount</label>
                                            <input
                                                type="text"
                                                id="amount"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="bg-[#00df9a] hover:bg-[#FFB000] w-[200px] rounded-3xl font-medium py-3 text-white transition duration-300 ease-in-out"
                                            onClick={handleAddPayment}
                                        >
                                            Save Payment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {/* **** End - Payment Form **** */}
                    </div>
                </div>
            </div>
        </div>
    );
};
