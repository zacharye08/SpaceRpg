addScripts("",["Main.js","Keys.js","UI.js","Assets.js","Drawing.js","Mouse.js","Utils.js","Physics.js"]);window.onload=init;function addScripts(path,srcs){for(var p in srcs){var script=document.createElement("script");script.setAttribute("src",path+srcs[p]);document.head.appendChild(script);}}function init(){registerFrameworks([{f:MainFramework,n:"M"},{f:KeysFramework,n:"K"},{f:UIFramework,n:"UI"},{f:UtilsFramework,n:"Utils"},{f:PhysicsFramework,n:"Physics"},{f:AssetsFramework,n:"Ast"},{f:DrawingFramework,n:"Drw"},{f:MouseFramework,n:"Ms"}]);document.body.style.margin="0px";M.createCanvas(window.innerWidth,window.innerHeight);var smaller=M.canvas.width,larger=M.canvas.height;if(smaller > M.canvas.height){smaller = M.canvas.height;larger = M.canvas.width;}var UU=new UI.DBox(0,0,M.canvas.width,M.canvas.height);UU.camera.centerZero();UU.camera.zoomto(smaller/1000);makeShortcut(new UI.DBox(-500,-500,1000,1000),"U");U.color="black";U.camera.centerZero();UU.add(U);var lasttime=Date.now()/1000;M.setLoop(function(){var before=Date.now()/1000;var dt=before-lasttime;lasttime=before;UU.update(dt);var g=M.canvas.getContext("2d");g.clearRect(0,0,M.canvas.width,M.canvas.height);UU.render(g);});Ms.setcanvas(M.canvas);Ms.setupListeners({down:U.mousedown.bind(U),up:function(){U.mouseup();},moved:function(){},rclick:function(){U.mouserclick();}});var hub=new K.KeyHub();hub.down=U.keydown.bind(U);hub.up=U.keyup.bind(U);K.setupListeners(hub,document.body);M.startLoop();}
addScripts("",["seedrandom.js"]);