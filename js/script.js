var username="";
function send_message(message){
	var prevMessage= $("#container").html();
if (prevMessage.length > 3) {
	prevMessage = prevMessage + "<br>";
			}
$("#container").html(prevMessage +"<span class='current_message'>" + "<span class='bot'>ChatBot: </span>" + message + "</span>");
$(".current_message").hide();
$(".current_message").delay("slow").fadeIn();
$(".current_message").removeClass("current_message");



}
function get_username(){
	send_message("Hello, what's your name");
	
}
function ai(message){
	if (username.length<3) {
		username= message;
		send_message("Nice to meet you " + username + ", How are you doing?")
	}
	if (message.indexOf("how are you?")>=0) {
		send_message("thanks, I am good!");

	}
	if (message.indexOf("time")>=0) {
		var date= new Date();
		var h= date.getHours();
		var m = date.getMinutes();
		send_message("the current time is: "+h+":"+m);

	}

}
	$(function(){
		get_username();
		$("#txtbox1").keypress(function(event){
			if (event.which == 13) {
				if ($("#Enter").prop("checked")) {
					$("#Send").click();
					event.preventDefault();
				}
			}

		});
		$("#Send").click(function(){
			var txt= $("#txtbox1").val();
			$("#container").val("");
			
			var username ="<span class='username'=>You: </span>";

			
            $("#txtbox1").val("");
            $("#container").scrollTop($("#container").prop("scrollHeight"));
            ai(txt);
		

		});

	});
