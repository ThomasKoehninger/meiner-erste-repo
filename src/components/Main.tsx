import React from "react";

const Main: React.FunctionComponent = ({ children }) => (
    <main css={{
        padding: 20,
        minHeight: "100vh",
    }}>
        { children }
    </main>
);

export default Main;
