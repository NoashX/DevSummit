<!-- .slide: data-background="../reveal.js/img/background.jpg" -->
<!-- .slide: class="title" -->
<br>
## Intro to TypeScript
<br>
<b>Kelly Hutchins and Noah Sager</b>
</br>
</br>
</br>
Presentation:
</br>
<a href="https://noashx.github.io/DevSummit/2020/Intro-to-TypeScript" target="_blank">https://noashx.github.io/DevSummit/2020/Intro-to-TypeScript</a>
</br>
</br>
</br>
<small>Wednesday, March 11, 2020, 11:15am - 11:45am, Demo Theater 2</small>

----

### **Agenda**
</br>
 - What is TypeScript?
 - Why use TypeScript?
 - Setup and First steps
 - Live Action Demo
 - Where can I get more info?

----

### **What is TypeScript?**
<a href="https://www.typescriptlang.org/" target="_blank">
<img style="float:bottom;" src="Images/TypeScript_Superset_JavaScript.png" alt="TypeScript_Superset_JavaScript">
</a>

----

### **Where do I begin?**
<a href="https://www.typescriptlang.org/" target="_blank">
<img src="Images/TS.png" alt="TypeScript landing page" width="1037" height="516">
</a>

----

### **Where do I begin?**
</br>
<a href="https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html" target="_blank">
<img align="top" src="Images/Setup_TS.png" alt="Setup_TS" style="height:500px;">
</a>
</br>

----

### **Why use TypeScript?**
</br>
TypeScript adds `type` support to JavaScript
</br>
</br>
<img src="Images/addFeatureLayer_TS.png" alt="TypeScript_Example1" width="1538" height="454">

----

### **Why use TypeScript?**
</br>
Enhanced IDE support
</br>
</br>
<img src="Images/addFeatureLayer_TS_error.png" alt="TypeScript_Example2" width="1556" height="466">

----

### **Why use TypeScript?**
</br>
Makes use of the latest JavaScript features
</br>
</br>
<img src="Images/dynamicImport.png" alt="TypeScript_Example4" width="1150" height="336">

----

### **Why use TypeScript?**
</br>
Makes use of the latest JavaScript features - optional chaning
</br>
</br>
<img src="Images/optional-chaining.png" alt="TypeScript_Example5" width="1222" height="336">

----

### **Why use TypeScript?**
</br>
Makes use of the latest JavaScript features - nullish coalescing
</br>
</br>
<img src="Images/nullish-coalescing.png" alt="TypeScript_Example6" width="1224" height="348">

----

## Live Action DEMO time
</br>
</br>
<img style="height:500px;" src="Images/demolition.jpg" alt="Demolition Time">

----

## DEMO: Convert sample to TypeScript

<a href="" alt="Link to sample javascript app"><img style="height:500px;" src="Images/jsappimage.png" alt="JavaScript sample app showing popup with measure this action"></a>

----


## Step 1: TypeScript setup

<a href="https://developers.arcgis.com/javascript/latest/guide/typescript-setup/" alt="Link to TypeScript doc">Getting Started Guide</a>

<img src="Images/Setup_TS.png" style="height:500px;"  alt="Image of the TypeScript getting started doc"/>

----

## Step 2: Create TypeScript file 
  Rename .js files to .ts 

  <img src="Images/RenametoTS.png"/>



----

## Step 3: Compiler options 

- Defines TypeScript project 
- <a href="demo/livedemo/tsconfig.json"  alt ="Opens the tsconfig.json file for the demo app">tsconfig.json</a> file 
  
```
{
  "compilerOptions": {
    "module": "amd",
    "noImplicitAny": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "jsx": "react",
    "jsxFactory": "tsx",
    "target": "es5",
    "experimentalDecorators": true
  }
}
```

----

## Step 4a: Transpile TypeScript
* Use tsc to convert to es5 JavaScript file 
* Add to <a href="demo/livedemo/package.json"  alt ="Opens the package.json file for the demo app">Package.json</a> 

```
{
  "scripts": {
    "dev": "tsc -w",
    "build": "tsc"
  }
}
```


----

## Step 4b: Transpile TypeScript
 Visual Studio Code 

<img  src="Images/RunNodeScript.png" alt="NPM Script section of VSCode">

<img class="fragment" src="Images/watchTerminal.png" alt="Terminal showing errors that occur during traspilation">
----


## Step 5a: Fix errors
Convert AMD module declaration 

```
require([
  "esri/Map",
  "esri/layers/FeatureLayer",
  "esri/views/MapView",
  "esri/geometry/geometryEngine"
], function (Map, FeatureLayer, MapView, geometryEngine) {


```
To ES6 style <a src="MDN web doc for import" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">imports</a> 

```
import Map from "esri/Map";
import FeatureLayer from "esri/layers/FeatureLayer";
import MapView from "esri/views/MapView";
import { geodesicLength } from "esri/geometry/geometryEngine";

```

----

## Tip: ES6 module import 

- Add `esModuleInterop` to tsConfig
  
```
// Import all contents 
import watchUtils as * from "esri/core/watchUtils";

watchUtils.whenDefinedOnce(slider, "values",function(){});

```

```
// Import a single export  
import { whenDefinedOnce } from "esri/core/watchUtils";

whenDefinedOnce(slider, "values",function(){});

```

```
// Import multiple exports  
import { whenDefinedOnce, whenEqualOnce } from "esri/core/watchUtils";

whenDefinedOnce(slider, "values",function(){});
whenEqualOnce(....)

```

----

## Step 5b: Fix errors 

Cannot find name 'geometryEngine'

<img style="height:400px;"  src="Images/FixError1.gif" alt="Remove geometryEngine from the geodesicLength call"/ >


----


## Step 5c: Fix errors

Type '{ title: string; id: string; className: string; }[]' is not assignable to type 'CollectionProperties ActionButton | ActionToggle'.

<img style="height:400px;"  src="Images/FixError2.gif" alt="Add Action Button type to the Measure This action"/ >


----

## Tip: Use __esri instead of import
- Only contains type interfaces
- Use when not instantiating type
  
```
var measureThisAction = {
  title: "Measure",
  id: "measure-this",
  className: "esri-icon-measure"
} as __esri.ActionButton;

```
----

 ## Step 6: Ready to test 

Transpilation successful

<img style="height:400px;"  src="Images/NoErrors.png" alt="Visual Studio Code terminal with 0 errors"/ >


----

 ## Step 7: Modernize Code 

* Const and let
  * Find - replace var to const  
  * Use let when needed
  
  <img src="Images/modernize.png" alt="Error message showing distance cant be defined with const"/>

----
 ## Step 7b: Modernize Code

<a target="_blank" alt="Object property shorthand doc" href="https://alligator.io/js/object-property-shorthand-es6/">Object Property Value Shorthand</a>

<img src ="Images/objectpropshorthand.gif" alt="Remove the map:map since  we have a variable with the same name as the object key ">

----



 ## Step 7c: Modernize Code 

<a target="_blank" alt="MDN doc on template literals" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">Template Literals</a>
 
```
// String concatenation 
view.popup.selectedFeature.attributes.Name 

+ " trail is " + distance + "miles long.";

```
 <br>
 
```
// Template Literals 
   `${view.popup.selectedFeature.attributes.Name} trail is ${distance} miles long.`

```


----

## Tip: Debugging with source maps
  - Enable source maps in browser dev tools
  - Set breakpoints in .ts instead of .js

  ![JS Code](Images/transpiled.png)

----


### **Where can I get more info?**

<br>

- SDK Documentation
- Esri-related training and webinars
- ArcGIS Blogs
- GeoNet, Spatial Community in Slack, StackExchange, etc.</br>
</br>
<a href="https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/using-typescript-with-the-arcgis-api-for-javascript/" target="_blank">
<img style="float:bottom;" src="Images/Using_TS_blog.png" alt="Using_TS_blog">

----

### **Additional TypeScript Session**

<a><img style="float:bottom;" src="Images/Using_TS_with_JSAPI.png" alt="TypeScript_Session"</a>

----

<a><img style="float:bottom;" src="Images/bg-rating.jpg" alt="Ratings"</a>

---

<a><img style="float:bottom;" src="Images/bg-intro.jpg" alt="Ending"</a>
