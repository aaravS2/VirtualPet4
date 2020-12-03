class Milk{
    constructor(){
        this.some=rectangle(80,100,7,7)
this.image=loadImage('images/milk.png')
this.foodstock=foodstock.val()
    }
    display(){
        var x=80
        var y=100
        imageMode(CENTER)
        image(this.image,80,100,7,7)
if(this.foodstock!=0){
for(i=0;i<this.foodstock;i++){
if(i%10===0){
x=80;
y=y+50
}
image(this.image,x,y,7,7)
x=x+30
}
}
    }
     readStock(data){
        foods=data.val()
        }
        writeStock(x){
        if(x<=0){
        x=0
        }else{
          x=x-=1
        }
        database.ref('/').update({
        foodleft:x  
        })
        console.log(x)
        }
         plusstock(y){
        if(y>=20){
        y=20
        }else{
        y+=1
        }
        database.ref('/').update({
        foodadded:y 
        })    
        console.log(y)
        }
      showError(){
        console.log('problems with the database')
        }
       
        change(){
        dog.changeImage(dogHappy)

        if(foods<=0){
          foods=0
          }else{
            foods-=1
          }

        if (frameCount===frameCount+200) {
        dog.changeImage(dogSitting)
        }
        database.ref('/').update({
          milkbottles:foods
        })
        }
}