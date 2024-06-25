import { formatAmount } from "@/lib/utils";
import CountUp from "react-countup";
import AnimatedCounter from "./AnimatedCounter";

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
    return (
        <section className="total-balance">
            <div className="flex  flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">
                        Total Curent Balance
                    </p>

                    <div className="total-balance-amount flex-center gap-2">
                        <AnimatedCounter amount=
                        {totalCurrentBalance} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox