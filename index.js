// index.js
const convertbase64 = (file) => {
  // Handle the selected file here
  let reader = new FileReader();

  // Convert the file to base64 text
  reader.readAsDataURL(file);
  reader.onload = () => {
    // Make a fileInfo Object
    let fileInfo = {
      name: file.name,
      type: file.type,
      size: Math.round(file.size / 1000) + ' kB',
      base64: reader.result,
      file: file,
    };
    return fileInfo;
  };
};

module.exports = convertbase64;
