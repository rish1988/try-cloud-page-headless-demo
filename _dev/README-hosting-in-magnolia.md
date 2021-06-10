
# Build your frontend

In order to deploy to Magnolia directly via git,
You'll need to remove the frontends from the `.gitignore` file, where they are excluded.

### Vue

Go to `/frontend/vue-minimal` on the terminal and run `npm install`, and then `npm run deploy:mgnl`.

Once built, check that the app is deployed to `/light-modules/vue-minimal-lm/webresources/dist`.

See the `.env` files for important configurations.

### React

Go to `/frontend/react-minimal` on the terminal and run `npm install`, and then `npm run deploy:mgnl`.

Once built, check that the app is deployed to `/light-modules/react-minimal-lm/webresources/build`.

See the `.env` files for important configurations.

### Angular

Go to `/frontend/angular-minimal` on the terminal and run `npm install`, and then `npm run build`.

Once built, check that the app is deployed to `/light-modules/angular-minimal-lm/webresources/build`.

See the files in `/src/environments` for important configurations.


