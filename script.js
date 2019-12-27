document.getElementById("element-1").onmouseover=function(){
    document.getElementById("floting-window1").style.display="block";
    document.getElementById("floting-window2").style.display="none   "; 
    document.getElementById("floting-window3").style.display="none   "; 
}
document.getElementById("element-1").onmouseleave=function(){
    setTimeout(() => {
        document.getElementById("floting-window1").style.display="none   "; 
    }, 500);

}

document.getElementById("element-2").onmouseover=function(){
    document.getElementById("floting-window2").style.display="block";
    document.getElementById("floting-window1").style.display="none   "; 
    document.getElementById("floting-window3").style.display="none   "; 
}
document.getElementById("element-2").onmouseleave=function(){
    setTimeout(() => {
        document.getElementById("floting-window2").style.display="none   "; 
    }, 500);
}

document.getElementById("element-3").onmouseover=function(){
    document.getElementById("floting-window3").style.display="block";
    document.getElementById("floting-window2").style.display="none   "; 
    document.getElementById("floting-window1").style.display="none   "; 
}
document.getElementById("element-3").onmouseleave=function(){
    setTimeout(() => {
        document.getElementById("floting-window3").style.display="none   "; 
    }, 500);}
function moveright(){
  document.getElementById("main-content-3-element-2-subelement-2-2").style.transform=" translateX(-640px)";
}
function moveleft(){
    document.getElementById("main-content-3-element-2-subelement-2-2").style.transform=" translateX(40px)";
}
var x= document.getElementById("input-scroll");
var y=0;

document.getElementById("main-content-5-btn-right").addEventListener("click",function(){
    y=-(parseInt(x.value)+85);
    if(y*-1<=340){
        console.log(y)
        document.getElementById("scroll").style.transform="translateX("+y+"vw)";
        x.value=-y;
    }
});
var a= document.getElementById("input-scroll");
var b=0;
document.getElementById("main-content-5-btn-left").addEventListener("click",function(){
    b=-(parseInt(a.value)-85);
    if(b<=0){
        console.log(b)
        document.getElementById("scroll").style.transform="translateX("+b+"vw)";
        a.value=-b;
    }

}); 

document.getElementById("main-content-3-element-2-subelement-1-btn-1").addEventListener ("click",function(){
    document.getElementById("main-content-3-element-2-subelement-1-btn-1").classList.replace("content-3-btn","content-3-active");
    document.getElementById("main-content-3-element-2-subelement-1-btn-2").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-3").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-4").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-5").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-6").classList.replace("content-3-active","content-3-btn");

});

document.getElementById("main-content-3-element-2-subelement-1-btn-2").addEventListener ("click",function(){
    document.getElementById("main-content-3-element-2-subelement-1-btn-2").classList.replace("content-3-btn","content-3-active");
    document.getElementById("main-content-3-element-2-subelement-1-btn-1").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-3").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-4").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-5").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-6").classList.replace("content-3-active","content-3-btn");

});

document.getElementById("main-content-3-element-2-subelement-1-btn-3").addEventListener ("click",function(){
    document.getElementById("main-content-3-element-2-subelement-1-btn-3").classList.replace("content-3-btn","content-3-active");
    document.getElementById("main-content-3-element-2-subelement-1-btn-1").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-2").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-4").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-5").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-6").classList.replace("content-3-active","content-3-btn");
});

document.getElementById("main-content-3-element-2-subelement-1-btn-4").addEventListener ("click",function(){
    document.getElementById("main-content-3-element-2-subelement-1-btn-4").classList.replace("content-3-btn","content-3-active");
    document.getElementById("main-content-3-element-2-subelement-1-btn-1").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-2").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-3").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-5").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-6").classList.replace("content-3-active","content-3-btn");
});

document.getElementById("main-content-3-element-2-subelement-1-btn-5").addEventListener ("click",function(){
    document.getElementById("main-content-3-element-2-subelement-1-btn-5").classList.replace("content-3-btn","content-3-active");
    document.getElementById("main-content-3-element-2-subelement-1-btn-1").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-2").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-3").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-4").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-6").classList.replace("content-3-active","content-3-btn");
});

document.getElementById("main-content-3-element-2-subelement-1-btn-6").addEventListener ("click",function(){
    document.getElementById("main-content-3-element-2-subelement-1-btn-6").classList.replace("content-3-btn","content-3-active");
    document.getElementById("main-content-3-element-2-subelement-1-btn-1").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-2").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-3").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-4").classList.replace("content-3-active","content-3-btn");
    document.getElementById("main-content-3-element-2-subelement-1-btn-5").classList.replace("content-3-active","content-3-btn");
});


document.getElementById("categories").addEventListener("mouseover",function(){
    document.getElementById("dropdown").style.display="block";
    
});
document.getElementById("dropdown").addEventListener("mouseover",function(){
    document.getElementById("dropdown2").style.display="block";
    
});
document.getElementById("dropdown2").addEventListener("mouseover",function(){
    document.getElementById("dropdown3").style.display="block";
    
});
document.getElementById("dropdown3").addEventListener("mouseover",function(){
    document.getElementById("dropdown3").style.display="block";
    
});
document.getElementById("dropdown3").addEventListener("mouseleave",function(){
    document.getElementById("dropdown3").style.display="none";
    
});
document.getElementById("dropdown2").addEventListener("mouseleave",function(){
    document.getElementById("dropdown3").style.display="none";
    
});
document.getElementById("dropdowndiv").addEventListener("mouseleave",function(){
    document.getElementById("dropdown2").style.display="none";
    document.getElementById("dropdown").style.display="none";

    
});


function dd1(){
    var arr1=[
        "All Development",
        "Web Development",
        "Data Science",
        "Mobile Apps",
        "Programming Languages",
        "Game Development",
        "Databases",
        "Software Testing",
        "Software Engineering",
        "Development Tools",
        "E-Commerce"
    ];
   
    var element= document.getElementById("dropdown2");
    element.innerHTML = " ";
            
    for(var i=0; i<arr1.length ;i++){
        var list = document.createElement("li");     
        list.setAttribute("id","innerlist"+(i+1));
        list.setAttribute("onmouseover","innerlist"+(i+1)+"()");
        list.innerHTML = arr1[i];
        var element= document.getElementById("dropdown2");
        element.appendChild(list);
    }
    // arr1.forEach((val,i)=>{
    //     `<li id="innerlist ${i}" onmouseover="innerlist${i+1}()">${val}</li>`
    //     document.getElementById()
    // })
    
}

function dd2(){
    var arr1=[
        "All Business",
        "Finance",
        "Entrepreneurship",
        "Communications",
        "Management",
        "Sales",
        "Strategy",
        "Operations",
        "Project Management",
        "Business Law",
        "Data & Analytics",
        "Home Business",
        "Human Resources",
        "Industry",
        "Media",
        "Real Estate",
        "Other",
    ];
    var element= document.getElementById("dropdown2");
    element.innerHTML = " ";
            
    for(var i=0; i<arr1.length ;i++){
        var list = document.createElement("li");
        list.innerHTML = arr1[i]
        var element= document.getElementById("dropdown2");
        element.appendChild(list);
    }

}
function dd3(){
    var arr1=[
        "All IT & Software",
        "IT Certification",
        "Network & Security",
        "Hardware",
        "Operating Systems",
        "Other",
        
    ];
    var element= document.getElementById("dropdown2");
    element.innerHTML = " ";
            
    for(var i=0; i<arr1.length ;i++){
        var list = document.createElement("li");
        list.innerHTML = arr1[i]
        var element= document.getElementById("dropdown2");
        element.appendChild(list);
    }
    
}   


function innerlist1(){
  
    var arr1=[
        "Popular Topics",
        "All Web Development",
        "JavaScript",
        "Angular",
        "React",
        "CSS",
        "Node.Js",
        "PHP",
        "Vue JS",
        "Django",
    ]
    var element= document.getElementById("dropdown3");
    element.innerHTML = " ";
            
    for(var i=0; i<arr1.length ;i++){
        var list = document.createElement("li");
        list.innerHTML = arr1[i]
        var element= document.getElementById("dropdown3");
        element.appendChild(list);
    }
    
}

function innerlist2(){
  
    var arr1=[
        "All Web Development",
        "JavaScript",
        "Angular",
        "React",
        "CSS",
        "Node.Js",
        "PHP",
        "Vue JS",
        "Django",
    ]
    var element= document.getElementById("dropdown3");
    element.innerHTML = " ";
            
    for(var i=0; i<arr1.length ;i++){
        var list = document.createElement("li");
        list.innerHTML = arr1[i]
        var element= document.getElementById("dropdown3");
        element.appendChild(list);
    }
    
}
function innerlist3(){
  
    var arr1=[
        "Popular Topics",
        "All Data Science",
        "Machine Learning",
        "Python",
        "Deep Learning",
        "Data Analysis",
        "Artificial Intelligence",
        "TensorFlow",
        "R",
        "Neural Networks",
    ]
    var element= document.getElementById("dropdown3");
    element.innerHTML = " ";
            
    for(var i=0; i<arr1.length ;i++){
        var list = document.createElement("li");
        list.innerHTML = arr1[i]
        var element= document.getElementById("dropdown3");
        element.appendChild(list);
    }
    
}

function search(e){
    document.getElementById("dropdown").style.display="block";

    var scearch,ul,li;
    scearch = document.getElementById("search").value;
    ul= document.getElementById("dropdown");
    li=ul.getElementsByTagName("li");
    // console.log(li)
    // console.log(ul)
    for( var i=0;i<li.length;i++){
        if(li[i].textContent.toUpperCase().indexOf(scearch.toString().toUpperCase())>-1){
            li[i].style.display="block"
        }
        else{
            li[i].style.display="none"
        }
    }
}