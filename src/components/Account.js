import React from "react";
import Search from "./Search";
import TransactionList from "./TransactionList";

function Account() {
    return (
        <div>
            <Search />
            <TransactionList />
        </div>
    )
}

export default Account;