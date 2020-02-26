const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const obraComponentPath = path.resolve('./src/templates/Obra.js');

    const res = await graphql(`
        query{
            allStrapiObra{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `);

    res.data.allStrapiObra.edges.forEach(edge => {
        createPage({
            component: obraComponentPath,
            path: `/obra/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        });
    });
}