import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer, FooterTextContainer} from './homepage.styles';

const HomePage = () => (
    <div>
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
        <FooterTextContainer>this app product by Mariam DHIFALLAH email:mariamdhifallahing@gmail.com  </FooterTextContainer>
    </div>
);

export default HomePage;
