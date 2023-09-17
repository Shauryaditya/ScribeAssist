import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { API_KEY, BASE_URL } from '@/constant';
import getToken from '@/hook/getToken'
const stripePromise = loadStripe(API_KEY);
const SubscriptionButton = ({ plan_key, plan_id, price }) => {
    const handlePayment = async () => {
        const token = getToken()
        const planKey = plan_key
        const planId = plan_id
        const stripe = await stripePromise;
        // Call your backend to create the Checkout Session
        // Define the data you want to send in the body of the request
        const requestBody = {
            plan_key: planKey,
            plan_id: planId
        };

        // Create the options object for the fetch request
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Specify the content type of the request body
                "Authorization": `Bearer ${token}` // Include any required headers
            },
            body: JSON.stringify(requestBody) // Convert the data to JSON format
        };

        // Send the POST request
        const response = await fetch(`${BASE_URL}/payment`, requestOptions);

        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
        }

    }

    return (
        <button
            onClick={() => handlePayment()}
            type="button"
            class="w-full px-3 py-4 text-sm shadow rounded-b-[20px] text-white  bg-[#8167E6] hover:bg-white transition-colors  transform"
        >
            Subscribe
            <div className="absolute inset-0 flex items-center justify-center transform translate-y-2 opacity-0 hover:translate-y-0 hover:opacity-100 transition-transform hover:duration-300 ">
                <p className="text-[#8167E6] text-sm">{price}</p>

            </div>
        </button>
    )
}

export default SubscriptionButton