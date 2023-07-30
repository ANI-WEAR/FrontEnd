import axios from "axios";
import { useQuery } from 'react-query';


export default function Mainimg() {
    const getMainpage = async () => {
        const response = await axios.get("/dummy/dummy.json");
        return response;
    }

    const { data: bestPickData, isLoading: bestPickLoading } = useQuery(
        ["BestPick"],
        getMainpage,
    );

    return (
        <div className="flex flex-wrap justify-center">
            {bestPickData?.data?.map((res, index) => {
                return (
                    <div className="relative m-3 justify-center" key={index}>
                        <img
                            src={res?.image}
                            alt="이미지 파일"
                            width={800}
                            height={450}
                        />
                        <div className="absolute bottom-0 p-2.5">
                            <p>{res?.title}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}