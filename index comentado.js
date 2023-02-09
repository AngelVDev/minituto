const ffmpeg = require('fluent-ffmpeg');
//En la primera línea, alistamos la herramienta
//que vamos a utilizar para la mini-app

//Estas dos líneas de abajo son para indicarle a
//nuestra herramienta "ffmpeg" el lugar de los recursos que necesita.
//en mi caso "ffmpeg" se instaló en ese lugar.
ffmpeg.setFfmpegPath('C:/Program Files (x86)/ffmpeg/bin/ffmpeg.exe');
ffmpeg.setFfprobePath('C:/Program Files (x86)/ffmpeg/bin/ffprobe.exe');

// Ruta y nombre del archivo
// Nótese que en mi caso, la carpeta se llama "input"
const inputFile = 'input/RickRollPaQuienLoLea.wav';
// Aquí abajo especificamos que el archivo
// convertido tendrá el mismo nombre pero termina en ".mp3"
const output = inputFile.split('.')[0] + '.mp3';

ffmpeg()
  // Aquí especificamos las propiedades
  // de salida del archivo:
  // nombre de salida, calidad del audio,
  // canales de audio y códec a usar.
  .input(inputFile)
  .output(output)
  .audioBitrate(320)
  .audioChannels(2)
  .audioCodec('libmp3lame')
  .on('progress', (progress) => {
    // Mensaje de progreso
    console.log('Processing: ' + Math.round(progress.percent) + '% done');
  })
  .on('end', () => {
    // Mensaje al finalizar correctamente
    console.log('Conversion completed!');
  })
  .on('error', (err) => {
    // Mensaje al tener un error
    console.log(`Error: ${err.message}`);
  })
  .run();
