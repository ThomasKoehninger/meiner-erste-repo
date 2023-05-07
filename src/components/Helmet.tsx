import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

interface IHelmetProps {
    title?: string;
    description?: string;
}

const PageHelmet: React.FunctionComponent<IHelmetProps> = (props) => (
    <StaticQuery
        query={graphql`
            query SiteMetaQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => (
            <Helmet
                defaultTitle={ data.site.siteMetadata.title }
                title={ props.title }
            >
                <meta name="description" content={ props.description || data.site.siteMetadata.title } />
            </Helmet>
        )}
    />
);

export default PageHelmet;
