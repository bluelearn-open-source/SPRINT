export const getContributer = async (name:string) => {
    const url = `https://raw.githubusercontent.com/Clinify-Open-Sauce/SPRINT/master/contributors/${name}.json`
    const req = await fetch(url);

	if (req.status !== 200) {
		console.error(`Failed to fetch user API from getContributer ${url}`)
        return undefined
	}
	const obj = await req.json()
    return obj
}
export const getContributers = async () => {
    const req = await fetch('https://api.github.com/repos/Clinify-Open-Sauce/SPRINT/git/trees/master?recursive=2')
    let obj = await req.json()
    //mapping all file names 
    obj = obj.tree.map(i=>i.path)

    obj = obj.filter(i=>i.startsWith('contributors/'))
    obj = obj.map(i=>i.replace('contributors/','').replace('.json',''))
    obj.remove(obj.indexOf('YogPanjarale'))
    obj.unshift("YogPanjarale")
    // console.log(obj)
    const contributers=await obj.map(async (item)=>{
        const user = await getContributer(item)
        return user
    })
    return contributers

}
