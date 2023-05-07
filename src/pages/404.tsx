import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/default";

class NotFoundPage extends React.PureComponent {
    state = {};

    render = () => (
        <Layout>
            <h1>Error 404</h1>
            <p>The page you're looking for doesn't exist... The sadness.</p>
            <Link to="/"><button>Back to Home</button></Link>
        </Layout>
    );
}

export default NotFoundPage;
