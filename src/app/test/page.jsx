import axios from "axios";
import Head from "next/head";
import React from "react";

// export const getServerSideProps = async () => {
//     // const res = await axios.get("https://fakestoreapi.com/products");
//     const resN = await fetch("https://fakestoreapi.com/products");
//     const res = await resN.json();

//     console.log(res);
//     return { props: { data: res.data } };
// };

export const metaData = {
    tile: "Test page",
    description: "This is a demo page",
    images: [
        {
            url: "https://static8.depositphotos.com/1012223/980/i/950/depositphotos_9803930-stock-photo-demo-cubes.jpg",
            alt: "Icon",
        },
    ],
};

const TestPage = () => {
    // console.log(data);

    return (
        <>
            <Head>
                <title>Test Page</title>
                <meta name="Testing Page" descrption="This is a demo dec" />
            </Head>
            <div>Test</div>
        </>
    );
};

export default TestPage;
