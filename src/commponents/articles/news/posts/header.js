import React from 'react'
import TeamInfo from './elements/teamInfo'
import PostData from './elements/postData'
const Header = (props) => {

    const teamInfo = (team) => {
        return team ? (
            <TeamInfo team={team}>

            </TeamInfo >

        ) : null;
    }

    const postData = (date, author) => {

        return <PostData data={{ date, author }}>


        </PostData>
    }


    return (
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
    )
}
export default Header;
