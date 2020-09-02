import React, {Component} from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";


class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            searchResults:[
                { name: 'name1', artist: 'artist1', album: 'albom1', id: 1 },
                { name: 'name2', artist: 'artist2', album: 'albom2', id: 2 },
                { name: 'name3', artist: 'artist3', album: 'albom3', id: 3 }
           ],
            playlistName: 'namePlaylist',
            playlistTracks: [
                { name: 'playListName1', artist: 'playListArtist1', album: 'playListAlbom1', id: 4 },
                { name: 'playListName2', artist: 'playListArtist2', album: 'playListAlbom2', id: 5 },
                { name: 'playListName3', artist: 'playListArtist3', album: 'playListAlbom3', id: 6 }
            ]
        }
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        }

        addTrack(track) {
            let tracks = this.state.playlistTracks;
        if(tracks.id === track.id) {
            return;
        } else {
            tracks.push(track)

            this.setState({
                playlistTracks: tracks
            })
        }
        }

     removeTrack(track) {
         let tracks = this.state.playlistTracks;
         tracks = tracks.filter(curTr => curTr.id !== track.id);

             this.setState({
                 playlistTracks: tracks
             })
     }

    updatePlaylistName(name) {
        this.setState({
            playlistName: name
        })
    }

    savePlaylist() {
        const trackURIs = this.state.playlistTracks.map(track => track.uri);
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}
                                       onAdd={this.addTrack}
                        />
                        <Playlist playlistName={this.state.playlistName}
                                  playlistTracks={this.state.playlistTracks}
                                  onRemove={this.removeTrack}
                                  onNameChange={this.updatePlaylistName}
                                  onSave={this.savePlaylist}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
