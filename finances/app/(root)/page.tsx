import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RIghtSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import exp from "constants";
import React from "react";

const Home = () => {
    const loggedIn = { firstName: 'Jack', lastName: 'Light',
        email: 'contact@email.pro'
    } 

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and manage your account and transactions efficiently.'
                    />

                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.55}
                    />
                </header>

                RECENT TRANSATIONS
            </div>

            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 123.50}, {currentBalance: 142.25}]}
            />
        </section>
    )
}

export default Home