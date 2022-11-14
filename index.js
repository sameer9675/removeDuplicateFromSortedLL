
function startProcess() {
    var size= parseInt(document.getElementById("size").value);
    var element= document.getElementById("allElements").value;
    var allElements= element.split(" ");


    var nodeCreation= document.getElementsByClassName("nodeCreation");

    for(var i=0; i<allElements.length; i++)
    {
        allElements[i]=parseInt(allElements[i]);
    }
    console.log(allElements.length);
    if(size!= allElements.length)
        alert("count of element not matching with size");
    else
    {
        var outerDiv= document.getElementById("nodeCreation");
        var j=0;
        for(var i=0; i<allElements.length; i++)
        {
            setTimeout(() => {
                var innerDiv= document.createElement("div");
                var innerMost= document.createElement("div");
                var arrow= document.createElement("div");
                innerDiv.classList.add("innerNode");
                innerMost.classList.add("innerMost");
                arrow.classList.add("arrow");

                outerDiv.appendChild(innerDiv);
                innerDiv.innerHTML= allElements[j];
                innerDiv.appendChild(innerMost);
                if(j!=(allElements.length-1))
                    arrow.innerHTML = '<i class="fas fa-arrow-right"></i>';
                outerDiv.appendChild(arrow);
                j++;
            }, i*1000, i)
           
        }
        
    }
}

document.getElementById("removeButton").addEventListener("click", deleteNode);


function deleteNode()
{
    var cur= document.getElementById("cursor");
    var prev= document.getElementById("prev");
    var nodes= document.getElementsByClassName("innerNode");
    var arrows= document.getElementsByClassName("arrow");
    var moves= document.getElementsByClassName("animate");
    var eq= document.getElementsByClassName("equal");
    cur.classList.remove("remove");
    prev.classList.remove("remove");

    
    var x= parseInt(nodes.length);

    var cnt=0;
    for(let i=0; i<x-1; i++)
    {
        if(nodes[i].innerHTML==nodes[i+1].innerHTML)
            cnt++;
    }
    

    moves[0].style.marginLeft = "100px";
    var m= 240
    for(let i=0,k=0, j=0; i<x-1; i++, j++, k++)
    {
        setTimeout(() => {
            if(nodes[j].innerHTML==nodes[j+1].innerHTML)
            {
                nodes[j+1].classList.add("upward");
                eq[0].classList.remove("remove");
                setTimeout(()=> {
                    nodes[j+1].classList.add("remove");
                    arrows[j].classList.add("remove");
                    eq[0].classList.add("remove");
                }, 3000);
            }
            else
            {
                moves[0].style.marginLeft = m +'px';
                m+=140;
            }
                
            
        }, (i+1)*3000);                                                                   
    } 
    var totalTime= (x)*3000;
    setTimeout(()=> {
        cur.classList.add("remove");
        prev.classList.add("remove");
    },totalTime); 
              
}







