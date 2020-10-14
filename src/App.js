import React,{useState} from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
function App() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

  return (
    <div className="App">
      <div className="section">
            <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} skinTone={SKIN_TONE_MEDIUM_DARK} groupNames={{smileys_people:"PEOPLE"}}/>
            { chosenEmoji && <EmojiData chosenEmoji={chosenEmoji}/>}
        </div>
    </div>
  );
}
const EmojiData = ({chosenEmoji}) => (
  <div>
    <strong>Unified:</strong> {chosenEmoji.unified}<br/>
    <strong>Names:</strong> {chosenEmoji.names.join(', ')}<br/>
    <strong>Symbol:</strong> {chosenEmoji.emoji}<br/>
    <strong>ActiveSkinTone:</strong> {chosenEmoji.activeSkinTone}
  </div>
);

export default App;
