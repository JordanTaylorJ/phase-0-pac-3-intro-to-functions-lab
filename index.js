function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

/*function sayHiToGrandma(string){
    if (string === string.toLowerCase()){
        return 'I can\'t hear you!';
    }
    else if (string === string.toUpperCase())
        return 'YES INDEED!';
    else 
        return "I love you, too.";
}*/

function sayHiToGrandma(string){
switch (string) {
    case string.toLowerCase():
        return 'I can\'t hear you!';
        break;
    case string.toUpperCase():
        return 'YES INDEED!';
        break;
    case ("I love you, Grandma."):
        return "I love you, too.";
        break;
}
}

/*
function sayHiToGrandma(s){
    switch(s){
      case(s.toLowerCase()):
        return "I can\'t hear you!";
  
      case(s.toUpperCase()):
        return "YES INDEED!";
  
      case("I love you, Grandma."):
        return "I love you, too.";
    }
  }
  */