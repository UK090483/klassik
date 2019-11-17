// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// const { createRemoteFileNode } = require('gatsby-source-filesystem')
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   createTypes(`
//     type internal__concerts implements Node {
//       frontmatter: Imaaaages
//     }
//     type Imaaaages {
//       title: String!
//       featuredImgUrl: String
//       featuredImgAlt: String
//     }
//   `)
// }

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }) => {
//   // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
//   if (
//     node.internal.type === 'internal__concerts' &&
//     node.thumbnail_url !== undefined
//   ) {
//     let fileNode = await createRemoteFileNode({
//       url: node.thumbnail_url, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       cache, // Gatsby's cache
//       store, // Gatsby's redux store
//     })
//     // if the file was created, attach the new node to the parent node
//     if (fileNode) {
//       node.featuredImg___NODE = fileNode.id
//     }
//   }
// }
