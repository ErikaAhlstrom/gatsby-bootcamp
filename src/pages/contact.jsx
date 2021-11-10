import React from 'react'
import Layout from '../components/layout'
import Head from "../components/head"



const ContactPage = () => {

    return (
        <>
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <h2>Adress</h2>
            <h2>Phone</h2>
            <h2>
               <a href='https://twitter.com/home?lang=en'>Twitter</a>
            </h2>
        </Layout>
        </>
    )
}

export default ContactPage