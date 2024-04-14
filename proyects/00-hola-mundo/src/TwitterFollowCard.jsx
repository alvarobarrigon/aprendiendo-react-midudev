import { useState } from "react" 
export function TwiterFollowCard ({userName, children, initianIsFollowing}){
    const imgSrc = `https://unavatar.io/${userName}`

    const [isFollowing,setIsFollowing] = useState(initianIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log(isFollowing)
    return(
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img src={imgSrc} alt="El avatar de alvarofatty" className="tw-followCard-avatar"/>
                <div className="tw-followCard-info">
                    <strong >{children}</strong>
                    <span className="tw-followCard-infoUsername">{userName}</span>
                </div>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>

                        <span className="tw-followCard-text">{text}</span>
                        <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                    </button>
                </aside>
            </header>
        </article>
    )
}