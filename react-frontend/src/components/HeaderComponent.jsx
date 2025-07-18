import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Employee Management App</a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;
