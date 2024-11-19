import { HashMap } from "./HashMap.js";



const cass = new HashMap();

cass.set("Dvd","Hello");

console.log(cass.buckets);

console.log(cass.get("Dvd"));
console.log(cass.has("Dvd"));
console.log(cass.remove("Dvd"));
console.log(cass.buckets);