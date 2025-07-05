#!/usr/bin/env node

const { spawn } = require('child_process');

const child = spawn('react-scripts', ['start'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname,
});

child.on('close', (code) => {
  process.exit(code);
});
