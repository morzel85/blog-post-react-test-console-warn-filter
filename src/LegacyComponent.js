import React from 'react';

class LegacyComponent extends React.Component {
    componentWillMount() {
        // This method should be named UNSAFE_componentWillMount...
    }

    componentWillReceiveProps(nextProps) {
        // This method should be named UNSAFE_componentWillReceiveProps...
    }

    componentWillUpdate(nextProps, nextState) {
        // This method should be named UNSAFE_componentWillUpdate...
    }

    render() {
        return <div>Component with legacy lifecycle methods</div>;
    }
}

export default LegacyComponent;
