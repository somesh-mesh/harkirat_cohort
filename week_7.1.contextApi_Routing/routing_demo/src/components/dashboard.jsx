import { useNavigate } from "react-router-dom"

export default function Dashboard(){

    const navigate = useNavigate();

    function handleClick(){
        navigate('/dashboard')
    }

    return <div>
        Dashboard Page
    </div>
}