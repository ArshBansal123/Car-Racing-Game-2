
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



car_1 = "Car_1.png";
car_1_x = 250;
car_1_y = 450;
car_1_width = 70;
car_1_height = 140;

car_2 = "Car_2.png";
car_2_x = 320;
car_2_y = 450;
car_2_width = 75;
car_2_height = 150;

background_image = "background.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_image;

    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadcar_1;
    car_1_imgTag.src= car_1;

    car_2_imgTag = new Image();
    car_2_imgTag.onload = uploadcar_2;
    car_2_imgTag.src= car_2;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar_1() {
    ctx.drawImage(car_1_imgTag, car_1_x,car_1_y , car_1_width, car_1_height);
   
}

function uploadcar_2() {
    ctx.drawImage(car_2_imgTag, car_2_x,car_2_y , car_2_width, car_2_height);
   
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log(keyPressed);

    //car 1 keys
    if (keyPressed == '38'){
        up();
        check_win();
        console.log("up");
        
    }

    if (keyPressed == '40'){
        down();
        console.log("down");
        
    }

    if (keyPressed == '39'){
        right();
        console.log("right");
        
    }

    if (keyPressed == '37'){
        left();
        console.log("left");
        
    }


    //car 2 keys
    if (keyPressed == '87'){
        car_up();
        check_win();
        console.log("W");
        
    }

    if (keyPressed == '83'){
        car_down();
        console.log("S");
        
    }

    if (keyPressed == '68'){
        car_right();
        console.log("D");
        
    }

    if (keyPressed == '65'){
        car_left();
        console.log("A");
        
    }


    function up(){
        if(car_1_y >= 0) {
            car_1_y = car_1_y - 10;
            console.log("When up arrow is pressed, X = " + car_1_x + ". Y = ", car_1_y);
            uploadBackground();
            uploadcar_1();
            uploadcar_2();
        }
    }
    function down(){
        if(car_1_y <= 500) {
            car_1_y = car_1_y + 10;
            console.log("When up arrow is pressed, X = " + car_1_x + ". Y = ", car_1_y);
            uploadBackground();
            uploadcar_1();
            uploadcar_2();
        }
    }
    function left(){
        if(car_1_x >= 0) {
            car_1_x = car_1_x - 10;
            console.log("When up arrow is pressed, X = " + car_1_x + ". Y = ", car_1_y);
            uploadBackground();
            uploadcar_1();
            uploadcar_2();
        }
    }
    function right(){
        if(car_1_x <= 500) {
            car_1_x = car_1_x + 10;
            console.log("When up arrow is pressed, X = " + car_1_x + ". Y = ", car_1_y);
            uploadBackground();
            uploadcar_1();
            uploadcar_2();
        }
    }


    //car 2 moving

    function car_up(){
        if(car_2_y >= 0) {
            car_2_y = car_2_y - 10;
            console.log("When up arrow is pressed, X = " + car_2_x + ". Y = ", car_2_y);
            uploadBackground();
            uploadcar_1();
            uploadcar_2();
        }
    }
    function car_down(){
        if(car_2_y <= 500) {
            car_2_y = car_2_y + 10;
            console.log("When up arrow is pressed, X = " + car_2_x + ". Y = ", car_2_y);
            uploadBackground();
            uploadcar_1();
            uploadcar_2();
        }
    }
    function car_left(){
        if(car_2_x >= 0) {
            car_2_x = car_2_x - 10;
            console.log("When up arrow is pressed, X = " + car_2_x + ". Y = ", car_2_y);
            uploadBackground();
            uploadcar_1();
            uploadcar_2();
        }
    }
    function car_right(){
        if(car_2_x <= 500) {
            car_2_x = car_2_x + 10;
            console.log("When up arrow is pressed, X = " + car_2_x + ". Y = ", car_2_y);
            uploadBackground();
            uploadcar_1();
            uploadcar_2();
        }
    }

    function check_win(){
        if (car_1_y < 10)
        {
            console.log("Car 1 won");
            document.getElementById("status").innerHTML = "Car 1 Won!!!";
        }

        if (car_2_y < 10)
        {
            console.log("Car 2 won");
            document.getElementById("status").innerHTML = "Car 2 Won!!!";
        }
    }
    

    
}