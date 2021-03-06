[![Jovo Framework](https://www.jovo.tech/downloads/jovo-header.png)](https://www.jovo.tech)

# Sample Voice App for Jovo

<p>
<a href="https://github.com/jovotech/jovo-framework-nodejs/"><strong>Framework Repository</strong></a> -
<a href="https://github.com/jovotech/jovo-cli"><strong>CLI</strong></a> -
<a href="https://www.jovo.tech/framework/docs/"><strong>Documentation</strong></a> -
<a href="https://www.jovo.tech/learn/"><strong>Courses</strong></a> -
<a href="https://github.com/jovotech/jovo-framework-nodejs/blob/master/CONTRIBUTING.md"><strong>Contributing</strong></a> - <a href="https://twitter.com/jovotech"><strong>Twitter</strong></a></p>
<br/>

[Jovo](https://www.jovo.tech "Jovo's website") is a development framework for cross-platform voice apps. Use this repository as a starting point to create a voice application for Amazon Alexa and Google Assistant.

> 🚀 Join our newsletter for free courses on voice app development: www.jovo.tech/newsletter

## Table of Contents

* [Getting Started](#getting-started)
* [Tutorials](#tutorials)
* [How to Contribute](#how-to-contribute)


## Getting Started

In this guide, you will learn how to create a "Hello World" voice app for both Amazon Alexa and Google Assistant.

### Step 1: Download Sample App

Clone this repository to your coding environment:

```
$ git clone https://github.com/jovotech/jovo-sample-voice-app-nodejs.git
```

This repository includes

```js
app/
  ├── handlers/
  │   ├── HelloWorldIntent.js // a "Hello World" intent
  │   ├── Launch.js // The launch request (LaunchRequest (Alexa) and Default Welcome Intent (Dialogflow/API.AI))
  │   └── index.js // imports all the handlers and creates the handlers object
  ├── index.js // The base code for the app
  └── package.json // including dependencies for the jovo-framework package
assets/
  ├── ALEXA_IntentSchema.json // the alexa intent schema
  └── Dialogflow_JovoSampleVoiceApp.zip // the Dialogflow data
webhook.js // imports the compiled app from `dist/index.js` and runs it as a webhook
package.json // including dependencies for the jovo-framework package
```

Use node package manager to install the dependencies ([jovo-framework](https://www.npmjs.com/package/jovo-framework "Jovo NPM Package")):

```
$ npm install
```


### Step 2: Configure `app/index.js`

The `app/index.js` file, is where your app's logic is coming together to run. The `app/handlers` folder is where all you handlers are located.


### Step 3: Run local development server

You can run this template in 3 ways:
  - You can run a webhook by running `npm start`. This will build your assets into a `dist` folder and then run your app by running `webhook.js`
  - AWS Lambda (`dist` folder)
  - Local development and debugging run it as a proxy by running `npm run tunnel`. This will run [ngrok](https://www.ngrok.com). It's a tunneling service that points to your localhost to create an accessible web service.

Use the secure link and add "/webhook" to it, as shown below.

![alt text](https://www.jovo.tech/img/get-started/ngrok.jpg "ngrok for Alexa and Google Home")

This will be added to the projects on the respective developer platforms of Amazon and Google. Keep the ngrok terminal tab open in the background and move on to the next step.



### Step 4: "Hello World" on Amazon Alexa

To create a project for Alexa, you need to go to the [Amazon Developer Portal](https://developer.amazon.com/) and sign up with the same account you use for your Alexa enabled device.

If it's your first time to set up a project for Amazon Alexa, [here's a tutorial](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/README.md)

#### Skill Information

Use "Custom Interaction Model" and choose a name and invocation name of your choice. For help with your invocation name, we recommend the [official guide by Amazon](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill).



#### Interaction Model

You can either manually create a custom intent called HelloWorldIntent with 2 utterances "say hello" or "say hi," or copy and paste the examples from below. We recommend the new Skill Builder (in beta), but feel free to use the old editor if you want to.

##### Skill Builder Beta: Code Editor
```
{
  "intents": [
    {
      "name": "AMAZON.CancelIntent",  
      "samples": []  
    },
    {
      "name": "AMAZON.HelpIntent",
      "samples": []
    },
    {
      "name": "AMAZON.StopIntent",
      "samples": []
    },
    {
      "name": "HelloWorldIntent",
      "samples": [
        "say hello",
        "say hi"
      ],
      "slots": []
    }
  ]
}
```

##### Old Editor: Intent Schema

```
{
  "intents": [
    { "intent": "HelloWorldIntent" },
    { "intent": "AMAZON.HelpIntent" },
    { "intent": "AMAZON.StopIntent" },
    { "intent": "AMAZON.CancelIntent" }
  ]
}
```

##### Old Editor: Sample Utterances

```
HelloWorldIntent say hello
HelloWorldIntent say hi
```


#### Configuration

In this step, choose an HTTPS endpoint and paste your webhook link provided by ngrok. Important: Make sure to add "/webhook" to the url.


#### SSL Certificate

As you're using a subdomain provided by ngrok, please choose the second option: "My development endpoint is a sub-domain [...]"


#### Testing
You can test your Alexa skill either directly on the Amazon Developer Portal in the section "Test," or on your Alexa enabled device (if it's connected to the same email address).

Just type in "say hello" and see what it returns!

![Enter an utterance to test your Alexa skill](https://www.jovo.tech/img/get-started/alexa-test.jpg "Jovo Test with Alexa")

Here are other tools that can be used to test your skill: [Reverb](https://reverb.ai/), [EchoSim](https://echosim.io/).



### Step 5: "Hello World" on Google Home
There are several possibilities to set up an Action for Google Home/Google Assistant. We recommend using API.AI for the first simple steps.

If it's your first time to set up a project for Google Assistant, [here's a tutorial](https://developers.google.com/actions/apiai/tutorials/getting-started),

#### Import Agent in API.AI

Create a new agent on API.AI with any name and description you want.

Now, go to the preferences section (gear wheel next to the name) and select "Export and Import." There, you can import the sample agent provided in the /assets folder. Or you can [download it here](https://github.com/jovotech/jovo-sample-voice-app-nodejs/blob/master/assets/APIAI_JovoSampleVoiceApp.zip).

#### Fulfillment: Add Webhook

In the fulfillment section, add the webhook url provided by ngrok. Again, please make sure to append "/webhook".

#### Integrations: Add Google Action

Choose the "Actions on Google" one-click integration and follow the steps to make the integration work. Done!


#### Testing
You can test your Google Action either directly on the [Actions on Google Console](https://console.actions.google.com/), or on your Google Home.

Activate test status in the Simulator. Make sure to use the right invocation (this sometimes defaults to "talk to my test app").

![Using the Simulator to test your Google Action](https://www.jovo.tech/img/get-started/google-test.jpg "Jovo Test with Google Assistant")


## Tutorials

Find a quickstart guide and comprehensive tutorials here:

* [Build a cross-platform voice app in 5 simple steps](https://www.jovo.tech/get-started)
* [Build an Alexa Skill with Jovo](https://www.jovo.tech/blog/alexa-skill-tutorial-nodejs/)
* [Build a Google Action with Jovo](https://www.jovo.tech/blog/google-action-tutorial-nodejs/)



## How to Contribute
Jovo is a free, open source framework for voice developers. We're improving it every day and appreciate any feedback. How to support us? Just go ahead and build something cool with the framework and let us know at feedback@jovo.tech. Thanks!
