//creating array to store the product details
var pro_det=[];
//creating array to store the product prices
var pro_price=[];
//creating array to store the number of orders
var num_order=[];
//creating array to store the total of a product
var pro_tot=[];





function Add_to_Cart(a,b) {
    var discribtion=a;
    var price=b;

    //Requesting the user to enter the number of pieces they need
    var order=prompt("How many pieces you need? ");
    //storing the product Information
    pro_det.push(discribtion);
    // storing the product prices
    pro_price.push(price);
    //storing the number of order
    num_order.push(order);
    //calculating the total price of an product
    var tot_price_of_product=price*order;
    //storing the total price of each purchase
    pro_tot.push(tot_price_of_product);
    // displaying the total(NO NEED HERE!!!!!!!!!!!!!!!!!)
    var fp=alert("total price of this item order is "+ tot_price_of_product);
 
	
	
}


function hide() {

document.getElementById("mainsec").style.display="none";
document.getElementById("cartform").style.display="block";

	var name=document.getElementById("name").value;
	var add1=document.getElementById("ad1").value;
	var add2=document.getElementById("ad2").value;
	
	
	
	
document.write("<table>");
document.write("<th>Order-Number</th>"+"<th>Product-Details</th>"+"<th>Unit-Price</th>"+"<th>Quantity</th>"+"<th>Product-Total</th>"); 
  var num=1;
	for (var i=0; i<pro_det.length; i++) {
       
		
  document.write("<tr><td>" + num + " </td>");
  document.write("<td>" + pro_det[i] + "</td>");
  document.write("<td>" + pro_price[i] + "</td>");
  document.write("<td>" + num_order[i] + "</td>");
  document.write("<td>" + pro_tot[i] + "</td></tr>");
  //document.write("<tr><td>" + x + "</td></tr>");
		num=num+1;
}
	
document.write("</table>");
document.write("<br>")
document.write("Dear"+" "+name);
document.write("<br>")
document.write("Your Order will be shipped to")
document.write("<hr/>")
	document.write("<br>")
document.write(add1);
	document.write("<br>")
document.write(add2);

}

function validate(){
	
	
	var valname=document.getElementById("name").value;
	var valadd1=document.getElementById("ad1").value;
	var valadd2=document.getElementById("ad2").value;
	var valnum=document.getElementById("num").value;
	
	/*for(var i=0;i<=valname.length;i++){
		if(!isNaN(valname.charAt(i))){
			alert("Name cannot be numeric characters");
		}
		
	}*/
	
	if(valname==""){
		alert("Name cannot be empty");
	}
	
	if(valadd1==""){
		alert("Cannot be empty");
	}
	if(valadd2==""){
		alert("Cannot be empty");
	}
	
	if(valnum.length!=10||valnum==""){							
		alert("Only 10 digits are allowed or empty");
	}
	
	for(var i=0;i<=valnum.length;i++){
		if(isNaN(valnum.charAt(i))){
			alert("Input should be a number");
		}
	}	
}