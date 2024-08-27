var t1 = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
}})

t1.to("#fanta",{
    top:"120%",
    left:"0%"
},'orange')
t1.to("#orange-cut",{
    top:"160%",
    left:"23%"

},'orange')

t1.to("#orange",{
    width:"15%",
    top:"160%",
    right:"10%"
},'orange')
t1.to("#leaf",{
    top:"110%",
    rotate:"130deg",
    left:"70%"

},'orange')

t1.to("#leaf2",{
    top:"110%",
    rotate:"130deg",
    left:"0%"
},'orange')



var t12 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:true,
}})

t12.from(".lemon1",{
    rotate:"-90deg",
    top:"-100%",
    left:"110%",
   
    
},'ca')
t12.from("#cocacola",{
    rotate:"-90deg",
    top:"110%",
    left:"-100%"

},'ca')

t12.from(".lemon2",{
    rotate:"90deg",
    left:"100%",
    
    top:"110%",
   
},'ca')
t12.from("#pepsi",{
    rotate:"90deg",
    top:"110%",
   
    left:"100%"

},'ca')

t12.to("#orange-cut",{
    width:"18%",
    left:"42%",
    top:"204%",

    
},'ca')


t12.to("#fanta",{
    width:"35%",
    top:"210%",
    left:"33%"
},'ca')






