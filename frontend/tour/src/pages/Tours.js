import React, { Component } from 'react';
import WelcomeSection from '../components/WelcomeSection';
import CatalogSection from '../components/CatalogSection';

export default class Tours extends Component {
    render() {
        return (
            <div>
                <WelcomeSection />
                <CatalogSection />
            </div>
        )
    }
}
