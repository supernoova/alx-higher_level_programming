#!/usr/bin/node

const num = process.argv[2];

if (num === undefined) {
  console.log('No argument');
} else {
  console.log(num);
}
