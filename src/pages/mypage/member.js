import Header from "../../components/header";
import Histitle from "../../components/mypage/histitle";
import History from "../../components/mypage/history";
import Memberpg from "../../components/mypage/memberpg";

export default function Member() {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center">
                <Header />
                <Histitle />

            </div>
        </div>
    )
}