import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "She's a Rainbow", duration: "4:34" },
    { title: "Space Oddity", duration: "4:42" },
    { title: "Mr. Blue Sky", duration: "5:03" },
    { title: "Don't Stop Me Now", duration: "3:29" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
