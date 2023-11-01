# youtube-clone

React.js project

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Git command to push local repository to github remote repo

- git remote add origin https://github.com/vsvishal/youtube-clone.git
- git branch -M main
- git push -u origin main
  https://gist.github.com/c0ldlimit/4089101

### Debouncing

### Least Recently Used (LRU) Cache

### N level nesting

## If data is not live then we can simply fetch the api inside the useEffect()

## Handle LIVE Data

- WEB SOCKETS: 2 way communication is made, hadsake it made between client & server, no regular interval, connection is heavy. [eg. Stock Trading app, whatsapp ]
- API Polling: Single direction data is sent (from Server to UI) at some interval, UI will check again & again data from server (poll data) [e.g. gmail, crickbuzz]

```javascript
import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import { useEffect, useState } from "react";

export const useGetSearchSuggestion = (term) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSuggestions(term);
  }, [term]);

  const getSuggestions = (term) => {
    const GOOGLE_AC_URL = `https://clients1.google.com/complete/search`;
    return axios({
      // A YT undocumented API for auto suggest search queries
      url: GOOGLE_AC_URL,
      adapter: jsonpAdapter,
      params: {
        client: "youtube",
        hl: "en",
        ds: "yt",
        q: term,
      },
    }).then((res) => {
      console.log("jsonp results >> ", res);
      if (res.status !== 200) {
        throw Error("Suggest API not 200!");
      }
      setSuggestions(res.data[1].map((item) => item[0]));
    });
  };

  return suggestions;
};
```
