import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="latest-match-bg-container">
      <div className="match-details-container">
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo"
      />
      <div className="match-details-container">
        <p className="headings">First Innings</p>
        <p className="description">{firstInnings}</p>
        <p className="headings">Second Innings</p>
        <p className="description">{secondInnings}</p>
        <p className="headings">Man Of The Match</p>
        <p className="description">{manOfTheMatch}</p>
        <p className="headings">umpires</p>
        <p className="description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
