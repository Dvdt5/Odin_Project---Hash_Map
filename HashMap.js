

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
}

