window.onload = function(){
    var images = document.querySelectorAll('.gallery1 .photos img'),
        prev = document.querySelector('input[value=Previous]'),
        next = document.querySelector('input[value=Next]'),
        i = 0;
    
    function Slider(content){
        this.content = content;
        
        this.prev = function(){
            this.content[i].classList.remove('showed');
            i--;
            
            if(i < 0){
                i = this.content.length-1
            }
            this.content[i].classList.add('showed');
        }
        
        this.next = function(){
            this.content[i].classList.remove('showed');
            i++;
            if(i == this.content.length){
                i = 0;
            }
            this.content[i].classList.add('showed');
        }
    }
    
    
    var slider1 = new Slider(images);
    
    prev.onclick = function(){
        slider1.prev();
    }
    next.onclick = function(){
        slider1.next();
    }
    
    
    var newImages = document.querySelectorAll('.gallery2 .photos img'),
        newPrev = document.querySelector('input[value=Prev]'),
        newNext = document.querySelector('input[value=NextImg]');
    
    var slider2 = new Slider(newImages);

    newPrev.onclick = function(){
        slider2.prev();
    }
    newNext.onclick = function(){
        slider2.next();
    }
}