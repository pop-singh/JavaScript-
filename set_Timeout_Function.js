//function regarding instagram algo
function step1(fn){
    setTimeout(()=>{
        console.log('image selected')
        //return 'image'
        fn('image')
    },4000)
}


function step2(image,fn2){
    setTimeout(()=>{
    console.log(`filter applied ${image}`)
    //return 'filter Image'
    fn2('filter image')
},3000)
}

//call back hell function
step1((image)=>{
    step2(image,(filterimage)=>{
        step3(filterimage,(captionimage)=>{
            step4(filterimage)
        })
    })
})


function step3(filterimage,fn3){
    setTimeout(()=>{
        console.log(`caption added ${filterimage}`)
        return 'caption image'
    },2000)
}


function step4(captionimage){
    setTimeout(()=>{
        console.log(`image upload ${captionimage}`)
        return 'imageupload'
    },2000)
}


let image=step1()
let filterimage=step2(image)
let captionimage=step3(filterimage)
step4(captionimage)
