//Create variables here
var dogHappy,dogSitting,dog,database,foodstock,foods,position,button,hour,button2,milk;
function preload(){
  //load images here
  dogHappy=loadImage('images/dogimg1.png')
  dogSitting=loadImage('images/dogimg.png')
}

function setup() {
          createCanvas(500,500);
          
          database=firebase.database()
          milk=new Milk()
          foodStock = database.ref('milkbottles');
          foodStock.on("value", milk.readStock, milk.showError)

          dog=createSprite(250,250,40,40)
          dog.addImage(dogSitting)
          dog.scale=0.32

          foods=20

          button=createButton('feed the dog')
          button.position(100,100)

          button2=createButton('add food')
          button2.position(150,100)
      
          
      }

        function draw(){  
        background('orange')

        button.mousePressed(milk.change())

        button2.mousePressed(milk.plusstock(foods))
        
       gethour()

        milk.display()

       drawSprites();
  //add styles here
  /*if(foods>10){
    text(7)
    stroke('green')
      text("milk remaining:"+foods,250,400)
  }else{
    text(7)
    stroke('red')
      text("milk remaining:"+foods,250,400)
  }
  text(7)
    stroke('red')
  text("note:press the key to feed the dog(key went down)",250,40)
  */
}
async function  gethour(){
  if( button.mousePressed(change())){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
    
  hour = datetime.slice(11,16);
  var pm=hour.slice(0,3)

  var unit
  var ref=database.ref("lastfed")
  ref.on("value",some)
  some=hour.val()

  if (pm>00&&pm<12) {
  unit="AM"
  text("last fed:"+hour+unit,50,100)
  }else if(pm>12&&pm<=24)
  unit="pm"
  text("last fed:"+hour+unit,50,100)
    }
  database.ref('/').update({
  lastfed:hour.val()
  })
  }
        