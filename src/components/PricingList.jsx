import React from 'react'

const PricingList = ({ icon, text }) => {
    return (
        <li class="mb-3 flex items-center opacity-50 text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                class="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 1792 1792"
            >
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            {text}
        </li>
    )
}

export default PricingList