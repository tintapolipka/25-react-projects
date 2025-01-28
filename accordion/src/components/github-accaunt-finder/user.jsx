import "./user.css"

export default function User({ImgUrl, UserName, profileUrl, joined, repos,followers,following}){

    return <div id="Github-profile-img-container">
        User
        <div >
            <div >
            <img src={ImgUrl} alt={UserName} className="github-user-img rounded"/>
            </div>
        </div>
        <div id="user-data">
            <div id="name-container">
                <a target="_blank" href={profileUrl}>{UserName}</a> 
                <span>User joined on {joined}</span>
            </div>
            <p id="">Public Repos {repos}</p>
            <p id="">Followers {followers}</p>
            <p id="">Following {following}</p>
        </div>
    </div>
}