import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer, FooterTextContainer} from './homepage.styles';

const HomePage = () => (
    <div>
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
        <FooterTextContainer>this app product by Mohammed Shamia email:mohdkarera@gmail.com  </FooterTextContainer>
    </div>
);

export default HomePage;
