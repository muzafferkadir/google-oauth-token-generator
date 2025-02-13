#!/usr/bin/env node

const express = require('express');
const path = require('path');
const open = require('open');

// Parse command line arguments
const args = process.argv.slice(2);
const portArg = args.find(arg => arg.startsWith('--port='));
const port = portArg ? parseInt(portArg.split('=')[1]) : (process.env.PORT || 2323);

// Validate port number
if (isNaN(port) || port < 0 || port > 65535) {
    console.error('Invalid port number. Port must be between 0 and 65535.');
    process.exit(1);
}

const app = express();

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(port, () => {
    console.log(`
🔑 Google OAuth Token Generator is running!

📱 Open your browser at: http://localhost:${port}

💡 To use a different port, run with: --port=<number>
   Example: npx google-oauth-token-generator --port=3000

📝 Instructions:
1. The application will automatically open in your default browser
2. Follow the setup instructions on the page
3. Use your Google Cloud Console credentials
4. Generate your OAuth token

❗ Important: Make sure to add http://localhost:${port} to your Google Cloud Console
   in both "Authorized JavaScript origins" and "Authorized redirect URIs"

Press Ctrl+C to stop the server
`);
    
    // Open the browser
    open(`http://localhost:${port}`);
}); 