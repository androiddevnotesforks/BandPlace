# README

Check out the live [Bandplace](https://bandplace.herokuapp.com/#/) app!

# What is Bandplace?

Bandplace ("A place for bands!") is a clone of the popular music streaming/band platform [Bandcamp](https://bandcamp.com). Users logging onto Bandplace can enjoy all of the core functionalities provided by Bandcamp, including (but not limited to) browsing an artist's release catalog, controlling music playback within the DOM, and creating and customizing artist storefront pages to look good and display key information. 

Writing Bandplace from scratch was a fantastic exercise for me in working with React, Redux, Rails, Jbuilder, and JavaScript, and there are a few pieces of code for the site that I think do a good job of showing some of the creative problem-solving that went into this app:

# A modular media player

Implementing a complete audio player that can render dynamically-fetched content that changes dependent on frontend routing was one of the biggest challenges on this project. I needed to be able to navigate between single-song displays and full-album displays while not having to constantly reset the audio nodes responsible for getting the songs to the client's browser. My solution was to use an "on-deck" system for a complete set of nodes for a given album, combining React and Redux components and states with JavaScript logic and DOM manipulation to provide a seamless track change. On the first load of a particular record, the component responsible for handling the song data receives the song info from the state and creates a "tracklist" of audio elements and gives them some of the basic behaviors they'll need when they become the active ("focused") element: 
```    
createAudioNodes(){
        const nodesArr = []
        this.props.allTracks.forEach(track => {
            const thisTrack = new Audio(track.audioUrl);
            nodesArr.push({
                track: track.track,
                name: track.name,
                trackId: track.id,
                node: thisTrack,
                minutesDuration: null,
                secondsDuration: null
            });
            thisTrack.setAttribute('arrIndex', (nodesArr.length - 1));
            thisTrack.setAttribute('class', `track${track.track}`);
            thisTrack.setAttribute('trackname', track.name);
            thisTrack.addEventListener("loadedmetadata", this.setTrackTime);
            thisTrack.addEventListener("ended", (e) => this.props.changeTrack(e));
            document.getElementById('audio-deck').append(thisTrack);
        });
        this.setState({allNodes: nodesArr});
    } 
```     
When the track changes (because of a song ending or user input), the parent component will call a function to swap out the currently active audio with the appropriate new track from the "on-deck" area, making sure to reset the state to display pertinent information for the now-playing track:
```
    swapAndPlay(audioNode, trackName){

            const waitingContainer = document.getElementById('audio-deck');
            const activeContainer = document.getElementById('audio-holder');
            const oldMain = document.getElementById('focus-audio');

            if (oldMain && oldMain !== audioNode) {
                oldMain.pause();
                oldMain.currentTime = 0; 
                oldMain.setAttribute('id', 'on-deck');
                waitingContainer.append(oldMain);
                activeContainer.append(audioNode);
                audioNode.setAttribute('id', 'focus-audio');
                audioNode.setAttribute('preload', 'auto');
                audioNode.setAttribute('data-playing', 'false'); 
                audioNode.addEventListener('play', (e) => this.setMainTimer(e));
                audioNode.addEventListener('timeupdate', this.updateElapsedTime);
                document.getElementById('track-title').innerText = trackName;
            };
            this.togglePlay(trackName); 
    }
``` 

# Old-school customization

One fun challenge on this site was writing a color-picker feature that enables users to customize their storefront pages. This is the kind of thing that used to be a lot more common on the internet before sites' appearances were smoothed out a bit more, and I think it's a huge part of what gives the original Bandcamp its particular character. While they used a plug-in element color customizer for their version, I decided to try and write the feature from scratch, and I'm really happy with how it turned out. After several false starts, I landed on an implementation that relied on initializing users with a default "color profile" column in their database table, then threading that information through to inline style tags on relevant page elements and updating backend data when users utilized the "page design" option in their dropdown menu. The result is a simple menu that allows for a dramatic difference in user experience:
![](https://media.giphy.com/media/xgaMwWhOFda8lkflXQ/giphy.gif)     


## The future of Bandplace: "A Place For Bands"

Bandplace is constantly being updated with new functionalities that bring it even closer to achieving the full set of features provided by Bandcamp. Soon users will be able to search the site for bands, songs, albums, or by genre tag, which artists will be able to use to tag their new and existing releases. Site styling will be updated to include a more professional and animated UI, and the "+ add new music" form will be fully functional and fully styled. Band pages will be updated to include a "merch" tab, and artists will be able to list pricing for tracks, albums, and merch.  