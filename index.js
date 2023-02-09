const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath('C:/Program Files (x86)/ffmpeg/bin/ffmpeg.exe');
ffmpeg.setFfprobePath('C:/Program Files (x86)/ffmpeg/bin/ffprobe.exe');

const inputFile = 'input/RickRollPaQuienLoLea.wav';

const output = inputFile.split('.')[0] + '.mp3';

ffmpeg()
  .input(inputFile)
  .output(output)
  .audioBitrate(320)
  .audioChannels(2)
  .audioCodec('libmp3lame')
  .on('progress', (progress) => {
    console.log('Processing: ' + Math.round(progress.percent) + '% done');
  })
  .on('end', () => {
    console.log('Conversion completed!');
  })
  .on('error', (err) => {
    console.log(`Error: ${err.message}`);
  })
  .run();