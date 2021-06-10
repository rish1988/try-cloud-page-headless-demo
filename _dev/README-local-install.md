
# Setup

This Demo is designed for Magnolia Cloud, where no local Magnolia instance is necessary.

However, the demo can be installed on a local Magnolia instance. Instructions for that are here.


## Requirements

- Java (JDK)

- [Magnolia CLI](https://www.npmjs.com/package/@magnolia/cli) installed ([installation documentation](https://documentation.magnolia-cms.com/display/DOCS/Magnolia+CLI+v3))

## Install Magnolia with Magnolia CLI

In a terminal, navigate to the root directory and run:

```
mgnl jumpstart
```

Choose `magnolia-community-webapp` or `magnolia-dx-core-webapp` as the version to download.

(Magnolia is downloaded.)

## Start Magnolia

From within the root directory, start Magnolia with:

```
mgnl start
```

Once the terminal shows `Server startup in X ms`

In your browser, open Magnolia at: http://localhost:8080/magnoliaAuthor/

## Accessing Magnolia

You can log in to Magnolia using the credentials `superuser/superuser`.
This will give you complete access to all content and configuration.

To access the apps that are mentioned in these instructions use the grid icon at the top of the page, to the right of the search bar.


## Create some sample content

Either import some content, or create it manually.

### Import:

Use the 'Import' action (with nothing selected) and select the appropriate file from `/magnolia/_dev/content-to-import/`, either `website.react-minimal.yaml`, `website.angular-minimal.yaml` or `website.vue-minimal.yaml` .

### Manually:

Open the `Pages` app in Magnolia and add either

- A `React: Basic` page and name it `react-minimal`
- A `Angular: Basic` page and name it `angular-minimal`
- A `Vue: Basic` page and name it `vue-minimal`

> The page name is important as the SPA's are hardcoded to treat those names as the base of the app.

Then add components into the `Main` or `Extras` area of the page.
You can also add additional pages as children of that page.


## Security Notes

For Magnolia version 6.2.5 and up see **Configure security** here [https://git.magnolia-cms.com/projects/DEMOS/repos/website-spa-demo/browse/README-local.md](https://git.magnolia-cms.com/projects/DEMOS/repos/website-spa-demo/browse/README-local.md).


By default, the author instance of Magnolia
(see: [Instances](https://docs.magnolia-cms.com/product-docs/Administration/Instances.html)) is restricted to authorised users.

For the purpose of this demo, we want to allow anonymous access to the REST endpoint describing the configured content.
(see: [Security](https://docs.magnolia-cms.com/product-docs/Administration/Security.html))

The endpoint is http://localhost:8080/magnoliaAuthor/.rest/delivery/pages/v1.
Opening this while not logged in will produce the log in page.
