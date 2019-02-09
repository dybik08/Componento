To compile jsx code into valid one I've changed babel transform-react-jsx code React > Componento
<br/>
var id = state.opts.pragma || "Componento.createElement";
<br/>
and
<br/>
if (id === "Componento.DOM") 
<br/>
With this changes you are able to use following command: npm run build
<br/>
"build": "babel --plugins transform-react-jsx src/app.js > src/app-transpiled.js",
