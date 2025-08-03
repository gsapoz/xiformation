# 11Formation

Mobile-first/Multi-Platform squad builder for Football's Top 5 leagues, powered by Javascript.

## TO-DO

- Player Images, in the JSON and on the formation builder UI, starting with the topfive-api json
- User console featuring past created squads, with private/public toggle and sharing commands
- Player search, with smart routes so you can pull up player stats via address bar (ie: https://11formation/player/Messi)
- Total Responsiviity (is that the word?) across all devices.

## Product Demo (Beta)

https://gary.sapoz.site/screen%20recordings/xiformation.mov

## Getting Started

To install dependencies and start both the client and server concurrently:

```bash
npm install
npm run start

## Deployment Notes

- React runs at http://localhost:3000

- Express API runs at http://localhost:9876

The frontend proxies API requests to localhost:9876 via the "proxy" setting in client/package.json.

Port configuration is controlled via environment variables (PORT=9876) or defaults
