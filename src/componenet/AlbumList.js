import React, {Component} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
// import AlbumsDetail from './AlbumsDetaiils';

class AlbumList extends Component {
    state = { 
       albums: [] 
    };

    componentWillMount(){
         axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(responce => this.setState({albums: responce.data}));
         }

    renderAlbums(){
        return(
            this.state.albums.map( (n) => {
                <Text key={n.title} style={styles.textStyles} >{n.title}</Text>
            })
        )
    }

    render(){
        console.log(this.state);
        return (
            <View>
                { this.renderAlbums() }
            </View>
        )
    }
}

const styles = {
    textStyles: {
        fontSize: 15,
        color: '#000'
    }
}

export default AlbumList;