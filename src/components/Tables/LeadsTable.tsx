import styles from './Table.module.css';
import { Table, Row } from 'react-bootstrap';

const leads = [
    {
        username: "cybercowgrl",
        numberOfInteractions: "7",
        platform: "Twitter",
        lastDateofInteraction: "09/15/21",
        post: "1"
    },
    {
        username: "ipoopsalot",
        numberOfInteractions: "7",
        platform: "Instagram",
        lastDateofInteraction: "09/15/21",
        post: "2"
    },
    {
        username: "simpbot",
        numberOfInteractions: "6",
        platform: "Instagram",
        lastDateofInteraction: "09/15/21",
        post: "3"
    },
    {
        username: "garfield",
        numberOfInteractions: "5",
        platform: "Twitter",
        lastDateofInteraction: "09/15/21",
        post: "1"
    },
    {
        username: "delvaze",
        numberOfInteractions: "3",
        platform: "Twitter",
        lastDateofInteraction: "09/15/21",
        post: "1"
    },
]

export default function LeadsTable() {
    return (
        <Table responsive striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Platform</th>
                    <th>Post/Posts Interacted with</th>
                    <th>Number of interactions</th>
                    <th>Last Date of Interaction</th>
                </tr>
            </thead>
            <tbody>
                {leads ? leads.map(lead => 
                <tr>
                    <td>{lead.username}</td>
                    <td>{lead.platform}</td>
                    <td>{lead.post}</td>
                    <td>{lead.numberOfInteractions}</td>
                    <td>{lead.lastDateofInteraction}</td>
                </tr>
               ): <h6 className="p-2 mt-1">There is no data to display right now.</h6>}
            </tbody>
        </Table>
    )
}
