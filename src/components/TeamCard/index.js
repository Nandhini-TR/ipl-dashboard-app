import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplList} = props
  const {id, name, teamImageUrl} = iplList

  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="list-container">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
