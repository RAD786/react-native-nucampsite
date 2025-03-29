import React from 'react';
import RenderCampsites from '../features/campsites/RenderCampsites';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    return <RenderCampsites campsite={campsite} />
};

export default CampsiteInfoScreen;