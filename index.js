const fs = require('fs');
const { Deepgram } = require('@deepgram/sdk');

// The API key you created in step 1
const deepgramApiKey = 'a82f151500fd0bf19d416c61bb2108bdea9b60b9';

// Name and extension of the file you downloaded (e.g. sample.wav)
const pathToFile = 'general 1.mp3';

// Initializes the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);

// Load file into a buffer
const fileBuffer = fs.readFileSync(pathToFile);

console.log('Requesting transcript...');
console.log('Your file may take up to a couple minutes to process.');
console.log('While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s.');
console.log('To learn more about customizing your transcripts check out developers.deepgram.com.');

deepgram.transcription.preRecorded({
  buffer: fileBuffer,
  mimetype: 'audio/mp3' // or appropriate mimetype of your file
}, {
 punctuate: true
})
.then((transcription) => {
  console.log(transcription);
})
.catch((err) => {
  console.log(err);
})