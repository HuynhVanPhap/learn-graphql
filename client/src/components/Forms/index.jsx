import { 
    Col,
    Row 
} from 'react-bootstrap';
import {
    FormBook,
    FormAuthor
} from '../../components';

export const Forms = () => {
    return (
        <Row>
            <Col xs={6}>
                <FormBook />
            </Col>
            <Col xs={6}>
                <FormAuthor />
            </Col>
        </Row>
    );
}