# Cloud Page Headless Demo

The Visual SPA Editor allows authors to edit your headless frontend, reducing your ongoing maintenance duties. (win!) But you get to keep everything fully headless.

This demo shows you how to use the basic features for React.

![The App](_dev/README-screenshot-app.png)

## TODO

This README still needs to be adapted for usage specifically in Magnolia Cloud.

## Features

The demo contains:

Pages
- Basic
- Contact

Components
- Header 
- Paragraph 
- Image 
- List 
- Item  (available inside List component)
- Expander 

- Navigation 

Features
 - Multilanguage support
 - Theme support

# Build your frontend

### React

Go to `/frontend/react-minimal` on the terminal and run `npm install`, and then `npm run build:mgnl`.

See the `.env` files for important configurations.


# Deploy your frontend 

In order to use the Magnolia Pages App - your frontend must be deployed.

## Deploy locally, or to the web

You can connect your Magnolia instance to your local development environment.

For production, deploy your SPA wherever you choose (S3, netlify, vercel, etc).

Once deployed, configure your Magnolia pages to point to the url of your frontend (which might be your `localhost`).

Set the `templateScript` to your URL in the YAML files in these locations:
* `light-modules/react-minimal-lm/templates/pages`

## Running your frontend locally in development mode

### React

Start the headless React application inside `/frontend/react-minimal` by running `npm start`.

# Additional Information

## Configuring DAM security

### DAM

In order for images to be displayed:
Open the Security app, open the `Roles` tab, edit the `anonymous` role, go to `Web access` tab, `Add new` with this path `/dam/*` set to GET.

![Image Access for Anonymous](_dev/README-security-anonymous-dam.png)


## Security set up

### Content endpoint permissions

The app has anonymous access to Magnolia REST endpoints with no additional configuration because:

- "Web access" is allowed, because the restEndpoint files are under the `/delivery` path
- "Access contol list" access is allowed, beause the restEndponts have the `bypassWorkspaceAcls` property.

**NOTE** Allowing anonymous access may not be suitable for a production environment where you wish to keep data private.

### Template Annotations Endpoint

If you want to debug the editing features when running the app outside of the Magnolia page editor, you will want permissions to the template-annotations endpoint:

Open the Security app, open the Roles tab, edit the `rest-anonymous` role, go to `Web access` tab, `Add new` with this path `/.rest/template-annotations*` set to GET.

