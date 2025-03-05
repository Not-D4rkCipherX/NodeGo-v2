# NodeGo Auto Bot

Automated bot for NodeGo platform with support for multiple accounts and proxy configurations (HTTP/SOCKS).

## Features

- Multi-account support
- HTTP and SOCKS proxy support
- Automatic periodic pinging
- Detailed logging with colored output
- Account status monitoring
- Graceful shutdown handling

## Requirements

- Node.js (v16 or higher)
- npm (Node Package Manager)
- 
# How to Get NodeGo Access Token

1. Open your browser and login to the NOdeGo dashboard.
2. Press `F12` to open the **Inspect Elements** panel.
3. Go to the **Console** tab and paste the following code:

   ```javascript
   localStorage.getItem('accessToken')
   ```

4. You will receive your user ID, which looks like this: `"eyjxxxx........"`
5. If you can't paste, type allow pasting and press Enter, then paste the line above.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Not-D4rkCipherX/NodeGo-v2.git
cd NodeGo-v2
```

2. Install dependencies:
```bash
npm install
```

## Configuration

1. Set Up Accounts
    ```bash
   nano data.txt
   ```
   - Now Add one NodeGo access token per line
   - Example:
     ```
     token1
     token2
     token3
     ```

3. (Optional) Proxy
 ```bash
nano proxy.txt
```
   - Add one proxy per line
   - Supports both HTTP and SOCKS proxies
   - Example:
     ```
     http://ip1:port1
     socks5://ip2:port2
     socks4://ip3:port3
     ```

## Usage

Run the bot:
```bash
node index.js
```

The bot will:
- Load all accounts from data.txt
- Associate proxies from proxies.txt if available
- Start periodic pinging every 15 seconds
- Display detailed status information for each account

## Output Information

For each account, the bot displays:
- Username
- Email
- Node information
  - Node ID
  - Total Points
  - Today's Points
  - Active Status
- Total Account Points
- Ping Status and Response

## Troubleshooting

Common issues and solutions:

1. Proxy Connection Errors:
   - Verify proxy format is correct
   - Check if proxy is online and accessible
   - Ensure proxy supports HTTPS connections

2. Authentication Errors:
   - Verify token is valid and not expired
   - Check if token has proper permissions

3. Rate Limiting:
   - The bot automatically handles rate limiting with 3-second delays between pings
   - If you encounter rate limits, consider increasing the delay

## Contributing

Feel free to fork the repository and submit pull requests for any improvements.

## License

MIT License

## Disclaimer

This bot is for educational purposes only. Use at your own risk and ensure compliance with NodeGo's terms of service.
