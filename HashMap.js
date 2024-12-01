import LinkedList from "./LinkedListFile.js";

export class HashMap {

    constructor(){
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.tresh = this.capacity * this.loadFactor;
        this.buckets = new Array(this.capacity);
        this.filledBuckets = 0;
    }


    hash(key) {
        let hashCode = 0;
        
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        hashCode = hashCode % this.capacity;
     
        return hashCode;
    }

    set(key, value){
        let index = this.hash(key);


        if(!this.buckets[index]){
            
            if(this.tresh <= this.filledBuckets){
                this.expand(key, value);
                return;
            }

            this.buckets[index] = new LinkedList();
            this.buckets[index].append([key,value]);
            this.filledBuckets++;
        } else {
            
            if (this.has(key)){
                // Gets the linked list as an array and makes a new one after update
                let listArr =  this.buckets[index].toArray();
                this.buckets[index] = new LinkedList();
                listArr.forEach(node => {
                    if(node[0] == key){
                        node[1] = value;
                    }
                    this.buckets[index].append(node);
                });
            } else {
                this.buckets[index].append([key,value]);
            }
        }
        
    }

    get(key){
        let hashedKey = this.hash(key);
        let listArr =  this.buckets[hashedKey].toArray();
        let returnValue = null;
        listArr.forEach(node => {
            if(node[0] == key){
                returnValue = node[1];
            }
        });
        return returnValue
    }

    has(key){
        let hashedKey = this.hash(key);

        if(this.buckets[hashedKey].contains(key)){
            return true;
        }else {
            return false;
        }

        
    }

    remove(key){
        let hashedKey = this.hash(key);

        let listArr =  this.buckets[hashedKey].toArray();
        if(listArr.length == 1){
            this.buckets[hashedKey] = '';
            return;
        }
        this.buckets[hashedKey] = new LinkedList();
        listArr.forEach(node => {
            if(node[0] != key){
                this.buckets[index].append(node);
            }
        });
    }
    

    length(){
        let count = 0;
        for(let i = 0; i < this.capacity; i++){
            if(this.buckets[i]){
                count++;
            }
        }
        return count;
    }

    clear(){
        for(let i = 0; i < this.capacity; i++){
            if(this.buckets[i]){
                this.buckets[i] = undefined;
            }
        }
        
    }

    keys(){
        let arr = [];
        for(let i = 0; i < this.capacity; i++){
            if(this.buckets[i]){
                this.buckets[i].toArray().forEach(node => arr.push(node[0]));
            }
        }
        return arr;
    }

    values(){
        let arr = [];
        for(let i = 0; i < this.capacity; i++){
            if(this.buckets[i]){
                this.buckets[i].toArray().forEach(node => arr.push(node[1]));
            }
        }
        return arr;
    }

    entries(){
        let arr = [];
        for(let i = 0; i < this.capacity; i++){
            if(this.buckets[i]){
                let tempArr = [];
                tempArr.push(i);
                tempArr.push(this.buckets[i].toString());
                arr.push(tempArr);
            }
        }
        
        return arr;
    }

    expand(key, value){
        let data = this.buckets;

        this.capacity *= 2;
        this.tresh = this.capacity * this.loadFactor;
        this.buckets = new Array(this.capacity);
        this.filledBuckets = 0;

        
        
        this.set(key, value);
        data.forEach((element) => {
            element.toArray().forEach(arr => this.set(arr[0], arr[1]))
        
        });
        console.log(this.tresh, this.capacity, this.filledBuckets)
    }
}

