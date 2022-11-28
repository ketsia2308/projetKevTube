import {useState} from "react";

const usePopUp = () => {
    const [isAffiching, setIsAffiching] = useState(false);
    function Showing() {
        setIsAffiching(!isAffiching);
    }
    return{
        isAffiching,
        Showing
    }
}
export default usePopUp;