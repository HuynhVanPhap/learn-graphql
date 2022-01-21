import {
    useState
} from 'react';
import {
    Card,
    CardColumns,
    Row,
    Col
} from 'react-bootstrap';
import {
    BookDetail
} from '../../components';

import { useQuery } from '@apollo/client';
import { queries } from '../../graphql-client/queries';

export const BookList = () => {
    const [selected, setSelected] = useState('');
    const { loading, error, data } = useQuery(queries.getListBooks);
    console.log('BookList');
    if (loading) return <p>Loading books....</p>
	if (error) return <p>Error loading books!</p>

    return (
        <Row>
            <Col xs={8}>
                <CardColumns>
                    {data.books.map(book => (
                        <Card 
                            border="info" 
                            text="info" 
                            className="text-center shadow"
                            style={{ cursor: 'pointer' }}
                            key={book.id}
                            onClick={setSelected.bind(this, book.id)}
                        >
                            <Card.Body>{book.name}</Card.Body>
                        </Card>
                    ))}
                </CardColumns>
            </Col>
            <Col>
                <BookDetail id={selected}></BookDetail>
            </Col>
        </Row>
    );
}