# My version of challenge-chart-plot

(directions on the challenge can be found [here](README.old.md))

## ~ Design ~

I've opted to use React as my front-end framework. Why? Because I felt like you guys would prefer someone that knows React and, since I have had some experience with it, I thought I could use the practice. My preferred framework would be Vue.js, though. I didn't find any issues using React on this project: I was able to do everything the way I wanted to.

The application was generated using `create-react-app`, with (hopefully) all the unneeded stuff removed. There are basically five components: `Header`, `TextEditor`, `Chart`, `Footer` and an `Index` page to wrap them all.

There were also some external libraries used, which were as follows:
 * `react-ace-builds`: text editor component
 * `chart.js` and `react-chartjs-2`: graph component
 * `relaxed-json`: easily parse the simplified JSON typed on the text editor
 * `cypress`: automated tests
 * `eslint`: enforce code styling
 * some webpack libraries needed by those

## ~ Data handling ~

Since it would be an overkill to use redux for a simple application such as this one, I've decided to rely on callbacks to handle information between components.

The `Index` component, which is basically the main page that calls every needed component, handles the data between its components as follows: 

 * The `TextEditor` component sends its text back to it on a callback called on blur (the text editor already starts focused so it guarantees that the event will be called at least once)
 * The `Footer` component has a callback attached to its button click event: this callback basically converts the text editor input data to the proper format used by the graph component
 * The `Graph` component gets the converted data via props and renders it
## ~ Input protection ~

I wasn't able to think of any proper way to do this. A stress test would be heavily impacted by my PC specs and I couldn't find any info about the chart's capacity on its documentation. There are some constraints implemented, though defined in an arbitrary way: if the text either contains more than 25 selectors/groups or 150 entries, it will give an error message.

## ~ Tests ~

I've made essentially three automated tests using the Cypress library: to check if the page loaded properly, to generate a chart based on the screenshot data and to generate a chart based on data with different selectors, groups and numbers.

They are available in [image](test-run-screenshot.png) and [video](cypress/videos/page-index/indexPageTest.spec.js.mp4) format, and can easily be executed locally using the `yarn test` command (requires the application to be already running).