const crypto= require('crypto')

function hash_and_salt_generator(password) {

    // to generate a random salt
    const salt= crypto.randomBytes(16).toString("hex")
    
    // to create Hash object using SHA-256
    const hash= crypto.createHash("sha256")

    // update the hash_object with the salt and password
    hash.update(salt+password)

    // converting hash data into hexa decimal string 
    const hexHash=hash.digest("hex")

    // return the salt  and hashed password as a string
    return salt+"."+hexHash;
}

console.log(hash_and_salt_generator("password123"))









