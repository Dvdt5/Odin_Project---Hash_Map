# Odin_Project---Hash_Map

#Methods

    -hash(key)
        Returns the hashed key.

    -set(key, value)
        Stores the value and key in the hashed key index, if collides appends to nodelist, if key already stored updates the key value.
    
    -get(key)
        Gets the value stored in the key.
    
    -has(key)
        Checks if the key exist.
    
    -remove(key)
        Removes key.

    -lenght()
        Returns the bucketlist length
    
    -clear()
        Clears the bucketlist

    -keys()
        Returns keys

    -values()
        Returns values
    
    -entries()
        Returns all the data
    
    -expand(key, value)
        Temporarly stores the current data, expands the capacity, then inserts the new data and old data