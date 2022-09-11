import React from "react";
import TransactionList from "../components/TransactionList";

function Account({ search }) {
    return (
        <div>
            <TransactionList search={search}/>
        </div>
    )
}

export default Account;