export const getContributer = async (name:string) => {
    const url = `https://raw.githubusercontent.com/Clinify-Open-Sauce/SPRINT/master/contributors/${name}.json`
    const req = await fetch(url);

	if (req.status !== 200) {
		throw new Error(`Failed to fetch user API from getContributer ${url}`)
	}
	const obj = await req.json()
    return obj
}
export const getContributers = async () => {
    const req = await fetch('https://api.github.com/repos/Clinify-Open-Sauce/SPRINT/contributors')
    const obj = await req.json()
    const contributers=await obj.map(async (item)=>{
        const user = await getContributer(item.login)
        return user
    })
    return contributers

}
