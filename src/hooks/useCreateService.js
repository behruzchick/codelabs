import axios from "axios";
import { API } from "../API";
const useCreateService = () => {
    const createService = async({name,projectName,projectType,number,description,setSuccess,setError}) => {
        console.log({name,projectName,projectType,number,description});
        axios
        .post(`${API}/post`,{
            name:name,
            projectName:projectName,
            number:number,
            description:description,
            projectType:projectType
        })
        .then((res) => {
            console.log(res);
            setSuccess(true)
        }).catch((e) => {
            console.log(e);
            setError(true)
            alert("Error in sumbit!")
        })
    }

    return {
        createService
    }
}

export default useCreateService;