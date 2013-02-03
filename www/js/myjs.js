var ques=new Array(50);
var ans=new Array(50);
var hint=new Array(50);
ques[0]="Who is considered as the Father of Geometry ?"
hint[0] = "greek mathematician"
ans[0]="Euclid";
ques[1]="The oldest parliamentary democracy in the world is?"
ans[1]="GreatBritain";
hint[1] = "greek mathematician"
ques[2]="Who is considered as the Father of Geometry ?"
ans[2]="Euclid";
hint[2] = "greek mathematician"
ques[3]="Alexander the Great found which city in Egypt?"
ans[3]="Alexandria";
hint[3] = "no hint"
ques[4]="The Japanese parliament is called, what?"
ans[4]="Diet";
hint[4] = "word synonym to you apetite"
ques[5]="Who killed Julius Caesar?"
ans[5]="Brutus";
hint[5] = "Quintus Servilius Caepio "
ques[6]="What is the name of the continent where the Sahara desert is?"
ans[6]="Africa";
hint[6] = "Second largest continent"
ques[7]="The Mount Everest is in which country? "
ans[7]="Nepal";
hint[7] = "Not in India"
ques[8]="Which organ in our body filters blood ?"
ans[8]="Kidney";
hint[8] = "Body has 2 in number"
ques[9]="The Theory of Relativity was developed by whom?"
ans[9]="AlbertEinstein";
hint[9] = "Born in  germany"
ques[10]="A shape with 8 sides is called what?"
ans[10]="Octagon";
hint[10] = "Third letter is T"
ques[11]="The study of plants is called... ?"
ans[11]="Botany";
hint[11] = "starts from B"

ques[12]="Who is the first Indian woman to win an Asian Games gold in 400m run?";
ans[12]="KamaljitSandhu";
hint[12]="K.S.";

ques[13]="Who was the first Indian to win the World Amateur Billiards title?";
ans[13]="Wilson Jones";
hint[13]="W.J.";

ques[14]="Which was the 1st non Test playing country to beat India in an international ?";
ans[14]="Sri Lanka";
hint[14]="Country bottom to india";

ques[15]="Which county did Ravi Shastri play for?";
ans[15]="Glamorgan";
hint[15]="g_am___an";

ques[16]="Ricky Ponting is also known as what?";
ans[16]="Punter";
hint[16]="";

ques[17]="How long are professional Golf Tour players allotted per shot?";
ans[17]="45 seconds";
hint[17]="quater less to one!";

ques[18]="The nickname of Glenn McGrath is what?";
ans[18]="Pigeon";
hint[18]="bird which once used to convey message";

ques[19]="Mark Waugh is commonly called what?";
ans[19]="Junior";
hint[19]="Xsenior";



ques[20]="The great Victoria Desert is located in?";
ans[20]="Australia";
hint[20]="kangaroo..";

ques[21]="The landmass of which of the following continents is the least?";
ans[21]="Australia";
hint[21]="3 CONSECUTIVE TIMES WORLD CUP CHAMPS";







var points = 0; 
var count = 0; 
var gen;
var ques_count=0;
var arr = new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var ch;


function redirect()
{
	
	/*var e = document.getElementById("sel");
	var struser = e.options[e.selectedIndex].value;
	if(struser == 1)
	 ch = 6;
	else if(struser == 2)
	ch = 5;
	else if(struser == 3)
	ch = 4;
	*/
	
	window.location = "index1.html";
	//alert(ch);
	//document.getElementById("mylife").value = ch;
	
			
}

function redirect1()
{
	window.location = "index.html";	
}

function my()
{
	    var ui=0;
	    while(ui==0)
	    {gen = Math.floor((Math.random()*1000)+1)%22;
	     if(arr[gen]===0){ui=1;arr[gen]=1;}
	     }     
	     ques_count=ques_count+1;
	     if(ques_count==5)
			{alert("You win");alert(points);redirect1();}
	    document.getElementById("ques1").value = ques[gen];
	   		
	 	
		var k = new Array();
		var len = ans[gen].length;
		for(var i = 0; i<len ;i++)
        {
			k[i] = document.createElement("input"); 
			k[i].setAttribute('type',"button");
			k[i].setAttribute('class',"btn btn-primary");
			k[i].setAttribute('id',i);
			k[i].setAttribute('name',"divi");
			document.getElementById("myform").appendChild(k[i]);
		}   
		     		
		 
         var g= document.createElement("form");
         g.setAttribute('class',"well");
     
}

function check(inp)
{
	var flg = 0;
	var len = ans[gen].length;
	var str = ans[gen].toLowerCase();
	
	for(var i = 0;i<len;i++)
	 {
	    if(str[i] === inp)
	     {
			 document.getElementById(i).value = inp;
			 flg = 1;
			 document.getElementById(inp).disabled = true; 
			 count++;
		}	 	 
	 }
	 
	 if(count === len)
	   {
		
	    points = parseInt(points) + 10;
	    alert("Points:"+parseInt(points));
		count = 0;
		var clear = "abcdefghijklmnopqrstuvwxyz0123456789"
		for(var j =0;j<36;j++)
		 {
			 document.getElementById(clear[j]).disabled = false; 
		}
		for(var i = 0; i<len ;i++)
        {
			var parent = document.getElementById("myform");
			var child = document.getElementById(i);
			parent.removeChild(child);
		}  
		
		my();
	   }
	 if(flg == 0)
	 {
		 var life = document.getElementById("mylife").value;
		 if(life == 1)
		   {alert("game over");alert(points);redirect1();}	
		    document.getElementById("mylife").value = life - 1; 
	 }
	
}

function showhint()
{
	 	 
	 alert(hint[gen]);
		    
	
}

function initialize()
{
	
	ques_count = 0;
	for (var i = 0; i < 50; i++) {arr[i] = 0;}
}
