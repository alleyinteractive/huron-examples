# Huron examples

The following is a basic example of how to set up Huron in your own project.

For complete documentation on how to use Huron, [visit the project repo](https://github.com/alleyinteractive/huron).

## Quickstart guide

1. Clone this repo

    `git clone https://github.com/alleyinteractive/huron-examples.git`

2. Install node modules

    `cd huron-examples`
    
    `npm install`

3. Run Huron:

    `npm run huron`

4. That's it! You should now be able to view the sample prototype in your browser at: http://localhost:8080/static/prototype/sample.html

## Using this repo to develop for Huron

The setup is slightly more complicated if you're developing new features for huron.

1. Clone this repo

    `git clone --recursive https://github.com/alleyinteractive/huron-examples.git`

2. Clone the huron repo (this can be cloned anywhere)

    `git clone https://github.com/alleyinteractive/huron.git`

3. Install relevant node modules

    `npm install`

4. Symlink the huron repo to your global modules directory

    `cd huron`
    `npm link`

5. Use the now-symlinked, local copy of huron in your `huron-examples` repo

    `cd huron-examples`
    `npm link huron`

6. Any builds or updates you make in your local copy of huron will now be reflected in `node_modules/huron` within the `huron-examples` directory as well. This makes it so you won't have to publish each change, push it to git, or use the `file:` protocol in npm to develop with huron.

7. Be sure to make a pull request to Huron for your feature(s) when they're ready. Follow the contributing guide in the [huron repo](https://github.com/alleyinteractive/huron/blob/master/CONTRIBUTING.md)

**Troubleshooting:**
* If you find the symlinked copy of huron in `huron-examples` is not updating, you may need to relink it:
    `rm -rf node_modules/huron`
    `npm link huron`
* If you change the filename or location of the huron binary, you may need to manually remove the old one and relink huron.
    `rm /usr/local/bin/huron`
    `cd huron`
    `npm link`
