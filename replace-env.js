#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Replace environment variables in production environment file
const envProdPath = path.join(__dirname, 'src', 'environments', 'prod.ts');
const apiKey = process.env.OPENAI_API_KEY || '';

if (fs.existsSync(envProdPath)) {
  let content = fs.readFileSync(envProdPath, 'utf8');
  
  // Replace the process.env reference with the actual value
  content = content.replace(
    /process\.env\['OPENAI_API_KEY'\] \|\| ''/g,
    `'${apiKey}'`
  );
  
  fs.writeFileSync(envProdPath, content);
  console.log('✅ Environment variables replaced successfully');
} else {
  console.error('❌ Environment file not found:', envProdPath);
}
