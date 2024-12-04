// emojiUtils.js
import emojiMap from './emojiMap.js';


export const replaceEmojisWithImages = (text) => {
  let modifiedText = text;
  for (const [emoji, imgPath] of Object.entries(emojiMap)) {
    const escapedEmoji = emoji.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\\$1');
    const imgTag = `<img src="${imgPath}"/>`;
    modifiedText = modifiedText.replace(new RegExp(escapedEmoji, 'g'), imgTag);
  }
  return modifiedText;
};

