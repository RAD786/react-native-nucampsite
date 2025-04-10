import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';

const DirectoryScreen = ({ navigation }) => {
    const campsites = useSelector((state) => state.campsites);

    if (campsites.isLoading) {
        return <Loading />;
    }
    if (campsites.errMess) {
        return (
            <View>
                <Text>{campsites.errMess}</Text>
            </View>
        );
    }

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Animatable.View
                animation='fadeInRightBig'
                duration={2000}
            >
                <Tile
                    title={campsite.name}
                    caption={campsite.description}
                    featured
                    onPress={() =>
                        navigation.navigate('CampsiteInfo', { campsite })
                    }
                    imageSrc={{ uri: baseUrl + campsite.image }}
                    containerStyle={styles.tileContainer}
                />
            </Animatable.View>

        );
    };
    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    tileContainer: {
        borderWidth: 2,
        borderColor: '#5637DD',
    }
});

export default DirectoryScreen;