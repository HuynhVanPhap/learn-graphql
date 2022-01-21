import {
    Forms
} from '../../components';

export const Book = () => {
    console.log('Book');
    return (
        <>
            <h1 className="text-center text-info mb-3">My Books</h1>
            <hr/>
                <Forms />
            <hr/>
        </>
    );
}