var imdb = require("imdb-api");

exports.onCreateNode = async ({ node, getNode, boundActionCreators }) => {

    const { createNodeField } = boundActionCreators

    if (node.internal.type === `TrelloCard`) {
        console.log(`Name: ${node.name}`)

        try {
            let movie = await imdb.get(node.name, { apiKey: 'a50c4406', timeout: 10000 })

            console.log(`Poster: ${movie.poster.substr(0, 5)}`)

            createNodeField({
                node,
                name: `imageUrl`,
                value: movie.poster,
            })

        } catch (error) {
            console.log('ERR: ', error);

            createNodeField({
                node,
                name: `imageUrl`,
                value: null,
            })
        }
    }
}