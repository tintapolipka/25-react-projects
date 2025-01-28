import { useEffect, useState } from "react";
import User from "./user.jsx";


const gitHubUrl = `https://api.github.com/users/`;

export default function GithubAccauntFinder() {
  /*innen bemásolva*/
  const [loading, setLoading] = useState(true); // indicator of loading
  const [currentUserName, setCurrentUserName] = useState("tintapolipka");

  const [currentUser, setCurrentUser] = useState(null); // the array of currentUser objects

function handleOnSearch(){
  fetchUser();
}

  useEffect(() => fetchUser, []);

  async function fetchUser() {
    console.log('USEEFFECT TRIGGERED')
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${currentUserName}`);
      const result = await response.json();
      console.log(result); // később törlendő
      if (result && result.login) {
       

        setCurrentUser(result);
        setLoading(false);
        console.log("currentUser", currentUser); // később törlendő
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  /*idáig bemásolva*/
  return (
    <div>
      <h1>Github Account Finder</h1>
      <input
        type="text"
        id="github-account-finder-input"
        onChange={(event) => setCurrentUserName(event.target.value)}
      />
      <button onClick={handleOnSearch}>Search</button>
      {loading ? (
        <p>Loading, please wait...</p>
      ) : (
        <User
          UserName={currentUser.login}
          joined={new Date(currentUser.created_at).toLocaleDateString()}
          ImgUrl={currentUser.avatar_url}
          profileUrl={currentUser.html_url}
          repos={currentUser.public_repos}
          followers={currentUser.followers}
          following={currentUser.following}
        />
      )}
    </div>
  );
}
