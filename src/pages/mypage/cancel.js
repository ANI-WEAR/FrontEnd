import Header from "../../components/header";
import History from "../../components/mypage/history";
import Orderpg from "../../components/mypage/orderpg";

export default function Cancel() {
    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <History />
            <Orderpg />
        </div>
    )
}