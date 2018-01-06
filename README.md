# Weather App

### I made this app following a course on Node.js from Udemy. I will continue to add features and exploring what more I can do to make this app even better.

How to install and use:

```bash
git clone https://github.com/t0nyandre/weather-app-node.git
cd weather-app-node && npm install
touch .env
```
After you have successfully installed all dependencies and created a file called ".env" you can now paste this into that file:

```
export GOOGLE_API_KEY=[Your Google Maps API key goes here]
export DARKSKY_API_KEY=[Your Dark Sky API key goes here]
```

Now you are ready to start using this awesome weather app!

```bash
source .env
node app.js -a '1600 Amphitheater Parkway'
```

Replace the address after "-a" to check the temperature at your own location.