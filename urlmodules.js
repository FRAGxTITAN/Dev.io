import {URL} from "url";

const myURl=new URL("https://www.google.com/search?q=utkarsh#124789809");
console.log(myURl.hash);
console.log(myURl.host);
console.log(myURl.hostname);
console.log(myURl.href);
console.log(myURl.origin);
console.log(myURl.pathname);
console.log(myURl.port);
console.log(myURl.protocol);
console.log(myURl.search);
console.log(myURl.toJSON());
console.log(myURl.toString());
console.log(myURl.searchParams);
