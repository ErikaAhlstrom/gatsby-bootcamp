import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head"

export const query = graphql`
    query ($slug: String!){
        contentfulBlogPost (
            slug: {
            eq: $slug
            }
        ) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                raw
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embeded-asset-block": (node) => {
                const alt = JSON.parse(node.data.target.fields.title['en-US'])
                const url = JSON.parse(node.data.target.fields.file['en-US']).url
                return <img alt={alt} src={url}/>
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
        </Layout>
    )
}

export default Blog