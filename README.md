# Google OAuth Token Generator

A simple web-based tool to generate Google OAuth access tokens. This tool helps developers quickly obtain OAuth tokens for testing and development purposes.

## Installation

```bash
# Run directly with npx
npx google-oauth-token-generator

# Or install globally
npm install -g google-oauth-token-generator
google-oauth-token-generator
```

## Features

- Simple web interface
- Automatic browser opening
- Copy-to-clipboard functionality
- Token information display
- Support for all Google API scopes
- Real-time token validation
- Configurable port number

## Usage

1. Run the command:
   ```bash
   # Using default port (2323)
   npx google-oauth-token-generator

   # Using custom port
   npx google-oauth-token-generator --port=3000
   ```

2. The tool will:
   - Start a local server (default port: 2323)
   - Open your default browser automatically
   - Display the setup instructions

3. Follow the on-screen instructions to:
   - Set up your Google Cloud Project
   - Configure OAuth consent screen:
     - Set User Type as "External"
     - Set Publishing Status to "In Production"
     - Fill in required app information
   - Create credentials
   - Generate your token

## Port Configuration

- Default port: 2323
- To use a different port: `--port=<number>`
- Valid port range: 0-65535
- Example: `npx google-oauth-token-generator --port=3000`

## OAuth Configuration Requirements

1. **Publishing Status**: Your application must be set to "In Production" in the OAuth consent screen
   - Go to Google Cloud Console → APIs & Services → OAuth consent screen
   - Under "Publishing status", select "In Production"
   - This is required for public access to your application

2. **User Type**: Must be set to "External"
   - This allows any Google account to authenticate
   - Internal user type is only for Google Workspace users

3. **Required Information**:
   - Application name
   - User support email
   - Application home page
   - Authorized domains (if needed)
   - Developer contact information

## Common Scopes

- `https://www.googleapis.com/auth/userinfo.profile` - User profile information
- `https://www.googleapis.com/auth/userinfo.email` - User email information
- `https://www.googleapis.com/auth/calendar` - Google Calendar access
- `https://www.googleapis.com/auth/drive` - Full Google Drive access
- `https://www.googleapis.com/auth/gmail.readonly` - Gmail read-only access

For a complete list of available scopes, visit [Google OAuth 2.0 Scopes](https://developers.google.com/identity/protocols/oauth2/scopes).

## Important Notes

- The application must be run on a web server (localhost is fine for development)
- You need to configure your Google Cloud Console project properly
- Some scopes may require verification from Google
- Always handle tokens securely and never expose them in client-side code
- Your application must be in "Production" status, not "Testing"
- Verification may be required for certain sensitive scopes

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 