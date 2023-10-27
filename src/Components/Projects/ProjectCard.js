import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
    return (
    <Card style={{ position:"relative", top:"40px", margin:"auto", width: '80%',  backgroundColor:"rgba(15, 43, 74, 0.8)", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.9)", borderRadius:"40px"}}>
        <Card.Img variant="top" src={props.url} style={{ width:"100%", borderRadius:"40px"}} />

    </Card>
    );
}

export default BasicExample;