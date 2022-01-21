import { 
    gql
} from '@apollo/client';

export const queries = {
    getListBooks: gql`
        query getListBooks {
                books {
                    id,
                    name,
                    genre,
                    author {
                        name,
                        age
                    }
            }
        }
    `,
    getListAuthor: gql`
        query getListAuthor {
                authors {
                id,
                name
            }
        }
    `,
    getBookById: gql`
        query getBookById ($id: ID!) {
                book(id: $id) {
                id,
                name,
                genre
            }
        }
    `,
    getBookWithAuthor: gql`
        query getBookWithAuthor ($id: ID!) {
                book(id: $id) {
                id,
                name,
                genre,
                author {
                    name,
                    age,
                    books {
                        name
                    }
                }
            }  
        }
    `,
    getAuthorById: gql`
        query getAuthorById ($id: ID!) {
                author(id: $id) {
                name
            }
        }
    `,
    getAuthorWithBooks: gql`
        query getAuthorWithBooks ($id: ID!) {
                author(id: $id) {
                name,
                age,
                books {
                    name,
                    genre
                }
            }
        }
    `,
}