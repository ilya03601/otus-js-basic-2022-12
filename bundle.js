!function(){function t(t){const e=window.location.href;document.querySelector("#app").textContent=t?e.includes("#")?e.replace(/#.*/,t):e+t:window.location.href}document.body.addEventListener("click",(e=>{if(e.target.matches("a")){if(!window.history)throw new Error("History API is not working in your browser");e.preventDefault(),history.pushState({},"",e.target.href),t()}})),t()}();