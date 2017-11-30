const buildWidget = function () {
  // Load styles
  var cleanstate = document.createElement( "link" );
  cleanstate.href = "cleanstate.css";
  cleanstate.type = "text/css";
  cleanstate.rel = "stylesheet";

  var styles = document.createElement( "link" );
  styles.href = "styles.css";
  styles.type = "text/css";
  styles.rel = "stylesheet";

  document.getElementsByTagName( "head" )[0].appendChild( cleanstate );
  document.getElementsByTagName( "head" )[0].appendChild( styles );

  // Actual Widget
  text = document.createTextNode("This from the JS");
  h1 = document.createElement("h1");
  h1.appendChild(text);

  // Build Widget node
  widget = document.createElement('section');
  widget.className = 'cleanslate charliehr-widget-wrapper'
  widget.appendChild(h1);
  console.log('Loading CharlieHR Widget')
  return widget;
}
