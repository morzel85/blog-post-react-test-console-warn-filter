import React from 'react';

class AnotherLegacyComponent extends React.Component {
    componentWillMount() {
        // This method should be named UNSAFE_componentWillMount...
    }

    render() {
        return <div>Another component with legacy lifecycle methods</div>;
    }
}

export default AnotherLegacyComponent;
