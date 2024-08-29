import './index.css'

const MatchCard = props => {
  const {matchCardItems} = props
  const {competingTeam, competingTeamLogo, result, matchStatus, id} =
    matchCardItems

  const getStatusClassName = status => {
    if (status === 'Won') {
      return 'won'
    }
    return 'lost'
  }

  return (
    <div className="match-card-container" id={id}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={getStatusClassName(matchStatus)}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
