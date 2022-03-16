class Media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
    }
}

const Mysong = new Song({
    artist: "Queen",
    name: "bohemian",
    publishDate: 1975,
});

console.log(Mysong);