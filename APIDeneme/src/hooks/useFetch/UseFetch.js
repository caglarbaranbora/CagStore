import { useEffect, useState } from "react";
import axios from "axios";


function useFetch(url){

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {

        try{
            const {data : responseData} = await axios.get(url);//dataya responseData adiyla cektik
            setData(responseData);
            setLoading(false);
        }catch (err){
            setError(err.message);
            setLoading(false);
        }

    }

    useEffect(() => {fetchData()}, []);

    return{error, loading ,data};
}

export default useFetch;