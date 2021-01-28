<!-- .slide: data-background="../reveal.js/img/bg-1.png" -->
<!-- .slide: class="title" -->
<br>
<br>
<br>
### Intro to TypeScript
<br>
Kelly Hutchins and Noah Sager
</br>
</br>
Presentation:
</br>
<a href="https://noashx.github.io/DevSummit/2019/Intro-to-TypeScript" target="_blank">https://noashx.github.io/DevSummit/2019/Intro-to-TypeScript</a>

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

### **Developer Setup**
</br>
<a href="https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html" target="_blank">
<img style="float:bottom;" src="Images/Setup_TS.png" alt="Setup_TS">
</a>

----

### **Why use TypeScript?**
</br>
TypeScript adds `type` support to JavaScript
</br>
<img src="Images/addFeatureLayer_TS.png" alt="TypeScript_Example1" width="1538" height="454">

----

### **Why use TypeScript?**
</br>
Enhanced IDE support
</br>
<img src="Images/addFeatureLayer_TS_error.png" alt="TypeScript_Example2" width="1556" height="466">

----

### **Why use TypeScript?**
</br>
Makes use of the latest JavaScript features
</br>
<img src="Images/promise_async_await.png" alt="TypeScript_Example3" width="1700" height="646">

----

### **Why use TypeScript?**
</br>
Makes use of the latest JavaScript features
</br>
<img src="Images/dynamicImport.png" alt="TypeScript_Example4" width="1150" height="336">

----

### **Setup and First steps**
<br></br>
1. The recommended way to install TypeScript is via `Node` and `npm`.
<br></br>
2. Make sure to install TypeScript globally: <br>
<pre style="display:inline-block; padding: 5px; margin: 10px auto; width: 100%;"><code data-trim>
npm install -g typescript
</code></pre>
<br></br>
3. Install the ArcGIS API for JavaScript Typings: <br>
<pre style="display:inline-block; padding: 5px; margin: 10px auto; width: 100%;"><code data-trim>
npm install --save @types/arcgis-js-api
</code></pre>
<br></br>

----

### **Demo: Build a TypeScript app from scratch**

<img style="float:bottom;" src="Images/KellyH.png" alt="Kelly_Hutchins">

----
### **Tip: Hide .js and .jsmap files **

- Reduce clutter
- VSCode: Add below to user preferences in files.exclude

```
 **/*.js.map": true,
        "**/*.js": {
            "when": "$(basename).ts

```

----
### **Tip: Debugging with source maps**
  - Enable source maps in browser dev tools
  - Set breakpoints in .ts instead of .js

  ![JS Code](Images/transpiled.png)

----
### **Tip: Use __esri instead of import**
- Only contains type interfaces
- Can use when not instantiating type
```
import esri = __esri;
const layerList = new LayerList({
  view,
  listItemCreatedFunction: event => {
    const item = event.item as __esri.ListItem;
  }
});
```
----

### **Where can I get more info?**

- SDK Documentation
- Esri-related training and webinars
- ArcGIS Blogs
- GeoNet, StackExchange, Spatial Community in Slack, etc.</br>
</br>
<a href="https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/using-typescript-with-the-arcgis-api-for-javascript/" target="_blank">
<img style="float:bottom;" src="Images/Using_TS_blog.png" alt="Using_TS_blog">

----

### **Additional TypeScript Session**

<a><img style="float:bottom;" src="Images/Using_TS_with_JSAPI.png" alt="TypeScript_Session"</a>

----

<a><img style="float:bottom;" src="Images/bg-rating.png" alt="Ratings"</a>

---

<a><img style="float:bottom;" src="Images/bg-esri.png" alt="Ending"</a>
