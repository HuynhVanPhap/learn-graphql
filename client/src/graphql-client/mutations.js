import { 
    gql
} from '@apollo/client';

export const mutations = {
    addNewAuthor: gql`
        mutation addNewAuthor(
            $name: String, 
            $age: Int
        ){
            createAuthor(
                name: $name, 
                age: $age
            ){
                id,
                name,
                age,
                books {
                name
                }
            }
        }
    `,
    addNewBook: gql`
        mutation addNewBook(
            $name: String
            $genre: String
            $authorId: ID!
        ){
            createBook(
                name: $name,
                genre: $genre,
                authorId: $authorId
            ){
                id,
                name,
                genre,
                author {
                    name
                }
            }
        }
    `,
}