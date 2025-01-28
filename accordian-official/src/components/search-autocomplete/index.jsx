import { useEffect, useState } from "react"
import Suggestions from "./suggestions.jsx";

export default function SearchAutocomplete(){
    
    const [loading, setLoading] = useState(false);
    const [users,setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(()=>{
        fetchListOfUsers();
    },[])

    console.log(users)
    
    async function fetchListOfUsers(){
        try{
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            console.log("data:", data);
            if(data && data.users && data.users.length){
                setUsers(data.users.map(userItem => userItem.firstName));
                setLoading(false);
                setError(null);
            }
            
        } catch(error){
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length>1){
            const filteredData = users && users.length ? users.filter(item=>item.toLowerCase().indexOf(query) > -1) : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);}
     else {setShowDropdown(false);}
        }
 
    function handleSuggestion(e){
        setSearchParam(e.target.innerText);
        setShowDropdown(false);
        setFilteredUsers([]);
    }

    return <div className="search-autocomplete-container"> 
        {loading ? <h2>Loading data! Please wait...</h2> : 
        <input
        name="search-users"
        type="text"
        placeholder="Search Users here..."
        value={searchParam}
        onChange={handleChange}
    
    />}
    
        {showDropdown && <Suggestions data={filteredUsers} onClickHandler={handleSuggestion}/>}
    </div>
}