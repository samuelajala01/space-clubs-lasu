import { pastTeams } from "./teamData";

const team = pastTeams.flatMap((teamGroup) => teamGroup.members);

export default team;