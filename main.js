// let hoursDiv = document.querySelectorAll("span")[0];
// let minutesDiv = document.querySelectorAll("span")[1];
// let secondsDiv = document.querySelectorAll("span")[2];


// setInterval(function (){
// 	let now = new Date();
// let h = now.getHours();
// let m = now.getMinutes();
// let s = now.getSeconds();

// hoursDiv.innerHTML = h;
// minutesDiv.innerHTML = m;
// secondsDiv.innerHTML = s;
// },1000)
// var sum = 0;

// setTimeout(function(){
// 	console.log("timeout")
// },2000)
// for (var i = 0; i < 10000; i++) {
// 	for (var m = 0; m < 100000; m++) {
// 		sum++;
// 	}
// }
// console.log(sum)

let xml = new XMLHttpRequest()
xml.open("get","https://mysafeinfo.com/api/data?list=albumreleases2013&format=json&case=default",true)
xml.send()
let data = xml.responseText
console.log(JSON.parse(data))
