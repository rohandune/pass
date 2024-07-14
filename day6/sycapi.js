function getData(){
    console.log('API Started')
    fetch('https://randomuser.me/api/?results=2')
    .then((details)=>{
        console.log('API Comlpeted')
        let data = details.json()
        .then((d) => {
            console.log(d)
        })
    })
    .catch((err) => {
        console.log('Error'+err)
    })
}
async function getData(){
    console.log('API Started!!')
    let resobj=await fetch('https://randomuser.me/api/?results=2')
    let data=await resobj.json()
    console.log(data)
}