import React from 'react'
import TeamInfo from '../../news/posts/elements/teamInfo'

const Header = (props) => {

    const teamNfo = (team) => {
        return team ? (
            <TeamInfo team={team}></TeamInfo>) : null
    }

    return (
        <div>
            {teamNfo(props.teamData)}
        </div>
    )
}

export default Header;
