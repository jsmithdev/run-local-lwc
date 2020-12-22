# run local

run a local command from Salesforce

* screen shot is Salesforce getting response back of command `ls .` that ran on my local machine

![screenshot](https://i.imgur.com/vPGA10L.png)

## Use

You'll want [node](https://nodejs.org/) and [ngrok](https://ngrok.com/) installed

Start the local program

`npm run start`

Expose the port it's using, 4242 by default, to the web

`ngrok http 4242`

Ngrok will log out a Forwarding site for you to use; 

*copy the https one

Set the lwc address property via Salesforce's app builder with the ngrok url copied

For example:

`https://de28ecc06298.ngrok.io/runner`

You will also want to add the ngrok url copied to your CSP Trusted Sites in Salesforce - this can take up to 15 minutes to propagate


## Notes


To use this long term & always on, you'd want cors set to allow only your SF org and maybe a ngrok subscription as free tier lasts 8 hours; This is more a POC as a server, albeit a small one like Heroku's free tier, would be typically what you'd want in that scenario

Uses (the great) [shelljs](https://www.npmjs.com/package/shelljs) project however you can use just Node and remove a dependency if you wish

---

written while petting a 🐶 by [Jamie Smith](https://jsmith.dev)