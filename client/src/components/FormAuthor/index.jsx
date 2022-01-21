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

import { mutations } from '../../graphql-client/mutations';

export const FormAuthor = () => {
    const [newAuthor, setAuthor] = useState({
        name: '',
        age: ''
    });
    const { name, age } = newAuthor;
    const [addAuthor, dataMutation] = useMutation(mutations.addNewAuthor);
    const handleInput = (e) => {
        setAuthor({
            ...newAuthor,
            [e.target.name]: e.target.value,
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        addAuthor({
			variables: {
                name: name,
                age: parseInt(age)
            },
		})

		setAuthor({ name: '', age: '' })
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Tên Tác giả" 
                    name="name"
                    onChange={handleInput}
                    value={name}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control type="number" placeholder="Tuổi" 
                    name="age"
                    onChange={handleInput}
                    value={age}
                />
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">
                Thêm mới
            </Button>
        </Form>
    );
}