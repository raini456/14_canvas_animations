(function () {
    var canvas, ctx, thumbs, savedImg, posX, posY, loopId=-1;
    var init = function () {
        initCanvas();
        initThumbs();
    };
    var initCanvas = function(){
        canvas = document.querySelector('canvas');
        ctx = canvas.getContext('2d');
        ctx.translate(-0.5, -0.5); 
        canvas.addEventListener('click',posThumb);
    }
    var drawThumb = function(){        
        //console.log(this.width);
        //arguments[0];
        var centerX=this.width/4;
        var centerY=this.height/4;
        ctx.drawImage(this, this.posX - centerX, this.posY - centerY, this.width/2, this.height/2);
    };
    var posThumb = function(e){
        savedImg.posX = e.offsetX;        
        savedImg.posY = e.offsetY;
        //                this     arguments[0]
        //drawThumb.call(savedImg);
        window.cancelAnimationFrame(loopId);
        run();        
    }
    var initThumbs = function(){        
        thumbs = document.querySelectorAll('[data-role="thumbs"] > img');        
        for(var i=0, max = thumbs.length; i<max; i++){
            thumbs[i].addEventListener('click', saveThumb);
        }
    };
    var saveThumb = function(){
        savedImg = this;
    }
    var run = function(){
        loopId = window.requestAnimationFrame(run);
        update();
        clear();
        draw();
        
    };
    var update = function(){
        savedImg.posX +=1;
        
        
    };
    var clear = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);        
    };
    
    var draw = function(){
       drawThumb.call(savedImg);//übergibt das Bild als this-Element und 
        //die Canvasposition, event existiert nicht 
        
    };
    window.addEventListener('load', init);
})();