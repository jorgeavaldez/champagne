import styles from './Table.module.css';
import { Table, Row } from 'react-bootstrap';

const fans = [
    {
        rank: "1",
        username: "cybercowgrl",
        numberOfInteractions: "7",
        following: "yes"
    },
    {
        rank: "2",
        username: "ipoopsalot",
        numberOfInteractions: "7",
        following: "yes"
    },
    {
        rank: "3",
        username: "simpbot",
        numberOfInteractions: "6",
        following: "yes"
    },
    {
        rank: "4",
        username: "garfield",
        numberOfInteractions: "5",
        following: "yes"
    },
    {
        rank: "5",
        username: "delvaze",
        numberOfInteractions: "3",
        following: "yes"
    },
]

export default function FansTable() {
    return (
        <Table responsive striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Number of Interactions</th>
                    <th>Follower</th>
                </tr>
            </thead>
            <tbody>
                {fans ? fans.map(fan =>
                    <tr>
                        <td>{fan.rank}</td>
                        <td>{fan.username}</td>
                        <td>{fan.numberOfInteractions}</td>
                        <td>{fan.following}</td>
                    </tr>
                ): <h6 className="p-2 mt-1">There is no data to display right now.</h6>}
            </tbody>
        </Table>
    )
}
