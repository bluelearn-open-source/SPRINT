// console.log("Hello World")
const user = process.env.GITHUB_ACTOR 
const repo = process.env.GITHUB_REPOSITORY

// load fs
const fs = require("fs");
const path_ = require('path');
const path = path_.join(__dirname,`../contributors/${user}.json`)
function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
// console.log(path,__dirname)
if (process.env.GITHUB_ACTIONS){

    if (fs.existsSync(path)){
        
        // read the file
        const content = fs.readFileSync(path);
        try {
            
            const contributor = JSON.parse(content);
        } catch (error) {
            console.error("A JSON file was expected error parisng file to json")
            throw new Error("A JSON file was expected error parisng file to json")
        }
        const contributor = JSON.parse(content);
        const keys = Object.keys(contributor);
        if (contributor['github-username']!=user){
            console.error(`${contributor['github-username']} does not match you username ${user}`)
            throw new Error(`${contributor['github-username']} does not match you username ${user}`)
        }
        const expected=[
            'github-username',
            'favourite-emoji',
            'favourite-music',
            'favourite-color'
          ]
        expected.forEach(function(key){
            if (keys.includes(key))return
            else 
                console.error(`${key} is missing from the file`)
                throw new Error(`${key} is missing from the file`)
        })
        if (expected.length!=keys.length){
              console.error("All The Properties not present or extra properties given")
              console.log(keys,expected)
              throw new Error("All The Properties not present or extra properties given")
          }
    }else{
        console.error(`File contributors/${user}.json does not exist`)
        throw new Error(`File contributors/${user}.json does not exist`);
    }
}else{
const obj={
    "github-username": "YogPanjarale",
    "favourite-emoji": "🍕",
    "favourite-music": "https://open.spotify.com/track/6RM5WJcShIHsxrja11M1iK?si=e2d7fbad9eaf4bee",
    "favourite-color": "#008081"
}
const map = Object.keys(obj);
console.log(map)
}

// console.log(process.env.GITHUB_ACTOR)