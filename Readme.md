# Byte Morph
Byte Morph is a utensil for bytes.
It can convert your boring old digits and string into beautify bytes 


## Why
When using udp you deal with bytes.
Since Javascript doesn't have a built in way when dealing with bytes in some of the formats that udp require, I noticed I needed to make something to make my life easier.

## Usage

#### convertToBytes
--------------
```js
import convertToBytes from 'byte-morph';

var digit = 5;
convertToBytes(digit, 16); // 0x5
```

## License

Apache 2.0