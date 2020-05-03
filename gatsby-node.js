const path = require('path');




module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const obraComponentPath = path.resolve('./src/templates/Obra.js');


  const res = await graphql(`
    query{
      allContentfulObra{
        edges{
          node{
            slug
          }
        }
      }
    } 
  `);


  res.data.allContentfulObra.edges.forEach(edge => {
    createPage({
      component: obraComponentPath,
      path: `/proyectos/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
