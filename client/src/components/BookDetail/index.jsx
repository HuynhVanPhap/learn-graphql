import {
    Card
} from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { queries } from '../../graphql-client/queries';

export const BookDetail = ({ id }) => {
    /**
     * useQuery("Queries", {} dùng để set tham số)
     */
    const { loading, error, data } = useQuery(queries.getBookWithAuthor, {
        variables: {
            id: id
        },
        skip: id === null // Nếu id là null thì sẽ không chạy useQuery
    });

    if (loading) return <p>Loading book detail....</p>
	if (id !== null && error) return <p>Error loading book detail!</p>

    return (
        <Card bg="info" text="white" className="shadow">
            <Card.Body>
                <Card.Title>{data.book.name}</Card.Title>
                <Card.Subtitle>{data.book.genre}</Card.Subtitle>
                <p>{data.book.author.name}</p>
                <p>Tuổi: {data.book.author.age}</p>
                <p>Những sản phẩm cùng tác giả</p>
                <ul>
                    {data.book.author.books.map((book, index) => (
                        <li key={index}>{book.name}</li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    );
}