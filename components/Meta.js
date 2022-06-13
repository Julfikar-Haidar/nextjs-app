import React from 'react'
import Head from 'next/head'

export default function Meta({title, description, keyword}) {
    return (
        <>
            <Head>

                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content={keyword} />
                <meta name="description" content={description} />
                


            </Head>
        </>
    )
}

Meta.defaultProps = {
    title: "CPl team",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stat",
    keyword:"java,node,php,go"
}