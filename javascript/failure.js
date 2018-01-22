var score = 0;
var ahh = "EPIC FAIL!!!!";
	alert(ahh);

var lol = "Lol, just kidding! It'll probably be fine, but let's just check.";
	alert(lol);
	
var question1 = prompt("One at a time, What did you feed me?");
	if (question1 === 'ALMONDS' || question1 === 'ALMOND') {
		score += 10;
	} else if (question1 === 'MILK') {
		score += 20;
	} else if (question1 === 'WHEAT') {
		score += 30;
	} else if (question1 === 'CORN') {
		score += 40;
	} else if (question1 === 'ONION' || question1 === 'ONIONS') {
		score += 50;
	} else if (question1 === 'GRAPES') {
		score += 60;
	} else if (question1 === 'PEACHES' || question1 === 'PEACH') {
		score += 70;
	} else if (question1 === 'APRICOTS' || question1 === 'APRICOT') {
		score += 80;
	} else if (question1 === 'CASHEWS' || question1 === 'CASHEW') {
		score += 90;
	} else if (question1 === 'PECANS' || question1 === 'PECAN') {
		score += 90;
	} else if (question1 === 'PEARS' || question1 === 'PEAR') {
		score += 90;
	} else {
		score += 0;
	}

var question2 = prompt("On a scale of 1-5 how much did you feed me?");
	if (question2 == 1) {
		score += 1;
	} else if (question2 == 2){
		score += 2;
	} else if (question2 == 3) {
		score += 3;
	} else {
		score += 4;
	}

 console.log ( score );

 if ( score  > 60) {
 		document.write (
 		"<p>My ears and throat will get itchy, but that's about it. If there is enough for me to notice, I have probably quietly stopped eating already.</p>");
	} else if ( score  > 50) {
		document.write ( '<p>I will not notice. I may keep eating. Please still tell me though. I need to keep track of my slip ups.</p>');
	} else if ( score  > 44) {
		document.write ( "<p> Corn is the worst for many reasons, but mostly because it is in everything. Additionally, I dont feel it in my ears until it's too late. Please tell me so that I can use my inhaler. If you have it, I want a benedryl. My ears are probably itching slightly, but I won't be sure why yet. Later, there will be a heavy pain in my chest. Im going to feel weak for the next day.</p>");
	} else if ( score  > 43) {
		document.write ( "<p>Corn is the worst for many reasons, but mostly because it is in everything. Additionally, I dont feel it in my ears until it's too late. Please tell me so that I can use my inhaler. I may go home and take a benedryl before it hurts. I'm going to feel weak for a few hours.</p>");
	} else if ( score  > 42) {
		document.write ( "<p>I won't notice for a little while, but when I do I will feel tight in the chest. I'll be uncomfortable for a bit, but I'll get over it.</p>");
	} else if ( score  > 41) {
		document.write ("<p>I am so not going to notice. Please still tell me though. I need to keep track of my slip ups.</p>");
	} else if ( score  > 34) {
		document.write( "<p>I need to take my inhaler and get some benedryl. I will probably head home. My ears are itchy and it feels weird when I swallow. When I notice I will stop eating, but it may be too late. Soon, I will lose all of my energy and become remarkably grumpy. My stomach will begin to hurt and I will feel weak for the next day.</p>");
	} else if ( score  > 33) {
		document.write( "<p>I need to take may need to take my inhaler. I may need some benedryl. When I notice I will stop eating, but it may be too late. I am gonna lose a lot of energy and probably get a bit more snarky. It's not you, it's the wheat. In a way though, it was you-lol.</p>");
	} else if ( score  > 30) {
		document.write ( "<p>I probably won't notice. Wheat does affect my energy levels, and my energy levels affect my crabiness levels. Watch out for added snark! And remember- you did this to you! Please tell me so I can start blaming you right away! LOL jk, I take full responsibilities for my action, regardless of wheat and it's bi-products.</p>");
	} else if ( score  > 23) {
		document.write("<p>The awesome thing about a milk allergy is that I typically notice right away. Also, It doesn't affect me nearly as badly as corn, wheat or almonds. Sometimes, I just power through a nice piece of cheese. That being said, I have probably already stopped eating or accepted the consequeces. Please still tell me. I will still take my inhaler.</p>");
	} else if ( score  > 20) {
		document.write("<p>The awesome thing about a milk allergy is that I typically notice right away. Also, It doesn't affect me nearly as badly as corn, wheat or almonds. Sometimes, I just power through a nice piece of cheese. That being said, with lower levels I may not notice so quickly. Please tell me so that I can make a judgment call. I like to save my mistakes for that nice cheese I was talking about.</p>");
	} else if ( score  > 14) {
		document.write("<p>Ok, please don't panic, but that is kind of a big whoops. I don't go into anaphylactic shock, so I mean that's way less scary. I may have noticed soon enough, but if not, I need to go home NOW. I need benedryl yesterday. I need my inhaler. I will be out of commission for two days. If we don't do these things quickly I will get hives.</p>");
	} else if ( score  > 13) {
		document.write("<p>Ok, please don't panic, but that is kind of a big whoops. I don't go into anaphylactic shock, so I mean that's way less scary. I may have noticed soon enough, but if not, I need to go home now and I'll take a benedryl when I get there. I need my inhaler. I will be out of commission for maybe a day. If we don't do these things quickly I will get hives.</p>");
	} else if ( score  > 12) {
		document.write("<p>Almonds are the only allergen that have given me hives. At a lower level my throat and ears are probably pretty itchy and weird. Be sure on your levels, any higher and I need a benedryl. I should take my inhaler. I may go home.</p>");
 	} else if ( score  > 10) {
		document.write("<p>Almonds are the only allergen that have given me hives. At a lower level my throat and ears are probably pretty itchy and weird. Be sure on your levels, at higher levels I need a benedryl. I should take my inhaler but I'll be fine.</p>");
	} else {
		document.write("<p>I'm fine, that's not on the list.</p>");
	}







