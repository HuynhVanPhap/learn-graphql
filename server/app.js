const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require('mongoose')

/**
 *  Load Schema N' Resolver
 *  */
const typeDefs = require("./schemas/schema");
const resolvers = require("./resolvers/resolver");

// Load Db Methods
const queryDataMethods = require("./data/db");

// Connect to MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://rikaiphaphuynh:A12345B!@tutorialgraphql.nukai.mongodb.net/TutorialGraphQL?retryWrites=true&w=majority', {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})

		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB();

/**
 *  Tên 2 tham số ApolloServer là bất định
 * 	context là tham số giúp truyền dữ liệu vào resolvers, typeDefs theo kiểu DI
 */
const server = new ApolloServer({
    typeDefs,
    resolvers,
	context: () => ({
		queryDataMethods
	})
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () => {
    console.log(`🚀 Server ready at http://172.19.0.8:4001${server.graphqlPath}`);
});
