<!-- PROJECT SHIELDS -->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![Framework][badge-framework]][framework-url]
[![contributions welcome][contributions-welcome]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://">
	  <img src="https://img.icons8.com/color/96/000000/full-image.png" alt="Logo"/>
  </a>

  <h1 align="center">
	Example Title
  </h1>

  <p align="center">
    Example Subtitle
    <br />
	  🖊️
    <a href="https://">Read the article</a>
    🐞
    <a href="https://github.com/Israel-Laguan/stripe-recurring-membership/issues">Report a Bug</a>
    🙋‍♂️
    <a href="https://github.com/Israel-Laguan/stripe-recurring-membership/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

1. [Node Stripe Membership SaaS](#node-stripe-membership-saas)
2. [Author](#author)
3. [Contributing](#contributing)
4. [Show your support](#show-your-support)
5. [License](#license)

# Node Stripe Membership SaaS

This project using a boilerplate express app for creating a membership/subscription site with [Stripe](https://stripe.com), mongodb and pug. Inspired by [sahat/hackathon-starter](https://github.com/sahat/hackathon-starter) and [RailsApps/rails-stripe-membership-saas](https://github.com/RailsApps/rails-stripe-membership-saas). It also handles stripe webhooks.

Check out the [demo](https://node-stripe-membership-saas.herokuapp.com/dashboard)!

<a href="https://node-stripe-membership-saas.herokuapp.com/dashboard">
    <img src="https://a16545fb495c8760fb33-4cec33efbe2744e99ba863e52edb2075.ssl.cf2.rackcdn.com/stripe-membership-app-screenshot.png">
</a>


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```



### System Requirements

- mongodb
- nodejs

Your app should now be running on [localhost:3000](http://localhost:3000/).



### Getting Started

First update `/server/config/secrets.js` with the following credentials:

- Stripe [API keys](https://dashboard.stripe.com/account/apikeys) and [plan info](https://dashboard.stripe.com/test/plans)
- [Mailgun](https://mailgun.com/signup) for sending forgot/reset password confirmations.
- session secret (you can use a long random string)
- google analytics id

Install dependencies with `npm install`.

Start the server with `node server`.

Note: Stripe webhooks can be recieved at `https://your-url.com/stripe/events`.


https://stripe.com/docs/subscriptions/quickstart
https://stripe.com/docs/testing

### create .env file for storing information 
### install dotenv package: npm install dotenv --save


## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

### Heroku Deployment

```
heroku create your-awesome-saas-product
heroku addons:add mlab
heroku config:set SESSION_SECRET='your_secret';
heroku config:set STRIPE_TEST_KEY='sk_test_example'
heroku config:set STRIPE_TEST_PUB_KEY='pk_test_example'
heroku config:set MAILGUN_USER='example.org'
heroku config:set MAILGUN_PASSWORD='key-secret'
heroku config:set GOOGLE_ANALYTICS='UA-XXXXXX-1'
heroku config:set MONGODB_URI='mongodb://heroku_pl3qcvnq'

```

Want add a heroku deploy button? Pull requests welcome :]

Project scheme
![alt text](https://github.com/atherdon/stripe-recurring-membership/blob/master/docs/162f6342b3ee45ae9c5f338212d554dc.png)


![demo](https://github.com/atherdon/stripe-recurring-membership/blob/master/docs/localhost-3000-billing-form.png)

![demo](https://github.com/atherdon/stripe-recurring-membership/blob/master/docs/localhost-3000-profile-update.png)

![demo](https://github.com/atherdon/stripe-recurring-membership/blob/master/docs/stripe-a.herokuapp.com-profile.png)

![demo](https://github.com/atherdon/stripe-recurring-membership/blob/master/docs/stripe-a.herokuapp.com-signup2.png)

![demo](https://github.com/atherdon/stripe-recurring-membership/blob/master/docs/stripe-a.herokuapp.com-update-card.png)

![demo](https://github.com/atherdon/stripe-recurring-membership/blob/master/docs/stripe-a.herokuapp.com-user-password.png)

![demo](https://github.com/atherdon/stripe-recurring-membership/blob/master/docs/stripe-a.herokuapp.com-whois.png)

# Author

<table style="width:100%">
  <tr>
    <td>
        <div align="center">
            <a href="./docs/img/photo.png" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/36519478?s=460&v=4" style="border-radius: 10%; min-width: 100px;" alt="Israel Laguan's Photo" width="200px">
            </a>
            <h2>
                <a href="https://israel-laguan.github.io/" target="_blank" rel="author">
                    Israel Laguan
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="mailto:israellaguan@gmail.com" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/message-squared.png" style="border-radius: 10%" alt="My GitHub" height="45px">
                <h3>
                    Email me to 
                    <a href="mailto:israellaguan@gmail.com">
                        israellaguan@gmail.com
                    </a>
                </h3>
            </a>
            <a href="https://www.linkedin.com/in/israellaguan/" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="My Linkedin" height="45px">
                <h3>
                    Connect to my Linkedin
                </h3>
            </a>
            <a href="https://github.com/Israel-Laguan" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    Check my GitHub Profile
                </h3>
            </a>
        </div>
    </td>
  </tr>
</table> 

# Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url].

# Show your support

🤗 Give a ⭐️ if you like this project!

Icons from:

<a href="https://icons8.com/icon/13917/full-image">Icons8</a>

# License

[![License][badge-license]](http://badges.mit-license.org)

📝 This project is licensed under the [MIT](LICENSE)\
Feel free to fork this project and improve it

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Israel-Laguan/stripe-recurring-membership?style=for-the-badge
[contributors-url]: https://github.com/Israel-Laguan/stripe-recurring-membership/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Israel-Laguan/stripe-recurring-membership?style=for-the-badge
[forks-url]: https://github.com/Israel-Laguan/stripe-recurring-membership/network/members
[stars-shield]: https://img.shields.io/github/stars/Israel-Laguan/stripe-recurring-membership?style=for-the-badge
[stars-url]: https://github.com/Israel-Laguan/stripe-recurring-membership/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/Israel-Laguan/stripe-recurring-membership?style=for-the-badge
[issues-url]: https://github.com/Israel-Laguan/stripe-recurring-membership/issues
[issues-closed-shield]: https://img.shields.io/github/issues-closed/Israel-Laguan/stripe-recurring-membership?style=for-the-badge
[badge-framework]: https://img.shields.io/badge/framework-here-9cf?style=for-the-badge
[framework-url]: https://google.com
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[badge-license]: https://img.shields.io/:license-mit-blue.svg?style=for-the-badge
