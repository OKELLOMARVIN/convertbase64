# Convertbase64

A simple npm package to convert a file to a Base64-encoded string.

## Installation

```bash
npm install convertbase64
```

## Usage

```js
import convertbase64 from 'convertbase64'

const file = /* ... */; // Your file object here

const fileInfo = convertbase64(file);
console.log(fileInfo);

const fileInBase64 = fileInfo.base64

```
fileInBase64 will contain your file encoded in base64

This package exports a function that takes a File object as input and returns an object with the following properties:

- name: The name of the file.
- type: The MIME type of the file.
- size: The size of the file in kilobytes (kB).
- base64: The Base64-encoded string of the file.
- file: The original File object.
