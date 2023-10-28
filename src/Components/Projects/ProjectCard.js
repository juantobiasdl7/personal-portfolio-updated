import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
    return (
    <Card style={{ position:"relative", top:"40px", margin:"auto", width: '80%',  backgroundColor:"rgba(15, 43, 74, 0.8)", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.9)", borderRadius:"40px"}}>
        <Card.Img variant="top" src={props.url} style={{ width:"100%", borderRadius:"40px"}} />
        <Card.Title style={{ color:"white", padding:"20px 65px"}}><i>To view the project visit: <a href="https://www.vivaaerobus.com/es-mx/" target="_blank" rel="noopener noreferrer">vivaaerobus.com</a></i></Card.Title>
    </Card>
    );
}

export default BasicExample;