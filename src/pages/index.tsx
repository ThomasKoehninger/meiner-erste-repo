import React from "react";
import { Link } from "gatsby";

import Helmet from "../components/Helmet";
import Layout from "../layouts/default";

class IndexPage extends React.PureComponent {
    state = {};

    render = () => (
        <Layout>
            <Helmet />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/#">Created by TypeScript Gatsby Template</Link>
        </Layout>
    );
}

export default IndexPage;
