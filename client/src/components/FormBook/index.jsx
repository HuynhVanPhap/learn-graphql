import {
    useState
} from 'react';
import { 
    Button,
    Form
} from 'react-bootstrap';

import { 
    useQuery,
    useMutation
} from '@apollo/client';
import { queries } from '../../graphql-client/queries';
import { mutations } from '../../graphql-client/mutations';

export const FormBook = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        authorId: '',
    });
    const { loading, error, data } = useQuery(queries.getListAuthor);
    /**
     * addBook : dùng để gọi mutation
     * dataMutation: dùng để lưu thông tin về mutation
     */
    const [addBook, dataMutation] = useMutation(mutations.addNewBook);

    const handleInput = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        addBook({
			variables: {
                name: newBook.name,
                genre: newBook.genre,
                authorId: newBook.authorId
            },
            // Chạy query khác sau khi mutation được thực thi
            // Các component sử dụng query được định nghĩa sẽ được rendered lại
            refetchQueries: [{ query: queries.getListBooks }]
		})

		setNewBook({ name: '', genre: '', authorId: '' })
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Tên sách" 
                    name="name" 
                    onChange={handleInput}
                    value={newBook.name}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Thể loại"
                    name="genre" 
                    onChange={handleInput}
                    value={newBook.genre}
                />
            </Form.Group>
            <Form.Group>
                {loading ? <p>Loading author...</p> :
                    <Form.Control as="select"
                        name="authorId" 
                        onChange={handleInput}
                        value={newBook.authorId}
                    >
                        <option disabled value="">Danh sách tác giả</option>
                        {data.authors.map(author => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        ))}
                    </Form.Control>
                }
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">
                Thêm mới
            </Button>
        </Form>
    );
}