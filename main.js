import { HashMap } from "./HashMap.js";



const cass = new HashMap();

cass.set("Dvd","Hello");
cass.set("d","Heo");
cass.set("Dd","llo");

console.log(cass.buckets);

console.log(cass.get("Dvd"));
console.log(cass.has("Dvd"));
console.log(cass.entries());