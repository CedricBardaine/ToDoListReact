# TodoListReact
This is a TodoList created with React, Bootstrap and AlertifyJS.  
This branch integrates the nytimes/react-tracking library.  
There is no particular goal except to train to include the lib in a bigger project.

# Transition
In order to get the new lib react-tracking working with the ToDoList, these steps had to be made : 
1. `npm run eject` to destructurate the "Create React App"
2. Remove *node_modules* and then `npm i` 
3. `npm install --save react-tracking`
4. Add import `import track, { useTracking } from "react-tracking";` and the decorator @ `@track({ page: 'FooPage' })` in the file 
5. `npm install --save-dev babel-plugin-transform-decorators-legacy`
6. `npm install --save-dev @babel/plugin-proposal-class-properties`
7. Add `"plugins": [ ["@babel/plugin-proposal-class-properties", { "loose": true }] ]` in *package.json*
8. Aaand it worked !

It fixed this kind of error :  
> Support for the experimental syntax 'decorators-legacy' isn't currently enabled

# Try it
`npm run start` and you can play with the app.  
Open the console and moove the mouse to see event from react-tracking appearing.  
Paste this (in the console) : 
```js
function roundDecimal(nombre, precision){
    var precision = precision || 2;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}

function getSurveyOfClicks(array) {
    ret = '' ; 
    array.forEach(element => {
        if(element.event === "click")
        ret += element.count + 
        'e click -> a ete ignoré ' +
         element.ignored +
         ' fois avant. Moy='+
         roundDecimal(element.ignored / element.count , 2) +
         '\n'; 
    });
    return ret ; 
}
getSurveyOfClicks(trackingData)
```
to have an example of a random summary about the collected data.