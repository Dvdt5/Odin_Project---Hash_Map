

export class HashMap {

    constructor(){
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity);
    }


    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % this.capacity;
        }
     
        return hashCode;
    }

    set(key, value){
        let hashedKey = this.hash(key);

        if (!this.buckets[hashedKey]){
            this.buckets[hashedKey] = value;
        }
    }

    get(key){
        let hashedKey = this.hash(key);

        return this.buckets[hashedKey] ? this.buckets[hashedKey] : null;
    }

    has(key){
        let hashedKey = this.hash(key);

        return this.buckets[hashedKey] ? true : false;
    }

    remove(key){
        let hashedKey = this.hash(key);

        if (this.buckets[hashedKey]){
            this.buckets[hashedKey] = undefined;
            return true;
        }
        else{
            return false;
        }
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
                arr.push(i);
            }
        }
        return arr;
    }

    values(){
        let arr = [];
        for(let i = 0; i < this.capacity; i++){
            if(this.buckets[i]){
                arr.push(this.buckets[i]);
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
                tempArr.push(this.buckets[i]);
                arr.push(tempArr);
            }
        }
        return arr;
    }
}

