import myticket from '../assets/png/myticket.png';
import AQI from '../assets/png/aql.png';
import yadara from '../assets/png/yadara.png';
import NCOG from '../assets/png/NCOG.png';



export const projectsData = [
    {
        id: 1,
        projectName: 'MyTickets',
        projectDesc: 'Mytickets & Yadara is a Web application that provides white label services to clients who did not have an internet presence as it was also managing entire events and concerts for organizers.',
        tags: ['React', 'Node','Postgres'],
        image: myticket
    },
    {
        id: 2,
        projectName: 'AQI',
        projectDesc: 'AQI is a product designed to calculate the purity of air by aggregating data from an external API (RESTful). It provides users with real-time information about air quality, helping them make informed decisions about their environment and built using React for the frontend, Node.js for the backend, and MySQL for database management. The frontend likely communicates with the backend to fetch and display air quality data, while MySQL stores relevant information for the application',
        tags: ['React', 'Node','MySql'],
        image:  AQI
    },
    {
        id: 3,
        projectName: 'Yadara',
        projectDesc: 'Yadara is a ticket-selling portal similar to platforms like BookMyShow. It serves as a centralized hub for users to browse, book, and manage tickets for various events, shows, or activities and developed using Next.js for the frontend, Node.js for the backend, and PostgreSQL for database management. Next.js provides server-side rendering capabilities, enhancing performance and SEO. PostgreSQL likely stores data related to events, venues, users, and ticket bookings',
        tags: ['Next', 'Node','Postgres'],
        image: yadara
    },
    {
        id: 4,
        projectName: 'NCOG',
        projectDesc: 'NCOG is a blockchain project focused on providing decentralized email hosting services leveraging Web3 technologies. It aims to offer users email services that are resistant to censorship and centralized control',
        tags: ['React', 'Ether', 'Solidity'],
        image: NCOG
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/