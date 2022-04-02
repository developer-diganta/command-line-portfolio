export default function OpenFile(cmd){
    console.log("c:::",cmd)
    switch (cmd) {
        case "main-website":
            
            window.open("https://digantakrbanik.codes/", '_blank').focus();
            return "Opening File...";
        case "resume":
            window.open("https://drive.google.com/file/d/1rjXdCH9-psOieGDsn0algZ0Nj_allLLy/view?usp=sharing", '_blank').focus();
            return "Opening File...";
        case "about-me": return "Hello! I am Diganta Kr Banik, currently a sophomore at Maulana Abul Kalam Azad University Of Technology. I love exploring stuff related to computer science and have knack in coding. I have an interest in web devlopment and am currently also learning about Machine Learning. At other times, I am just a guy chilling out, listening to some soothing melodies on Spotify or maybe watching something on Youtube! Would love to connect!";
        case "me.jpg":
            window.open("https://avatars.githubusercontent.com/u/65999534?v=4", '_blank').focus();
            return "Opening File...";
        case "linkedin": window.open("https://in.linkedin.com/in/diganta-kr-banik-1659121a7");
            return "Opening File...";
        case "github": window.open("https://github.com/developer-diganta");
            return "Opening File...";
        case "twitter": window.open("https://twitter.com/https://twitter.com/banik_diganta");
            return "Opening File...";
        case "facebook": window.open("https://www.facebook.com/digantakumar.banik");
            return "Opening File...";
        case "devpost": window.open("https://devpost.com/digantabanik2000");
            return "Opening File...";
        case "leetcode": window.open("https://leetcode.com/digantabanik2000/");
            return "Opening File...";
        case "email": window.open("mailto:digantabanik2000@gmail.com");
            return "Opening File...";
        case "phone": window.open("tel:+919800583851");
            return "Opening File...";
        case "Amazon-Clone": window.open("https://github.com/developer-diganta/Amazon-India-Clone/tree/main/amazon-clone", '_blank').focus();
            return "Opening File...";
        case "Keep-A-Note": window.open("https://github.com/developer-diganta/keep-a-note", '_blank').focus();
            return "Opening File...";
        case "Chatter": window.open("https://github.com/developer-diganta/chatter", '_blank').focus();
            return "Opening File...";
        case "Sharer": window.open("https://devpost.com/software/sharer", '_blank').focus();
            return "Opening File...";
        case "The-Melody-Box": window.open("https://github.com/developer-diganta/The-Melody-Box-1", '_blank').focus();
            return "Opening File...";
        case "Its-Time-To-Be-One-Of-Us": window.open("https://devpost.com/software/its-time-to-be-one-of-us", '_blank').focus();
            return "Opening File...";
        default: return ("Error running command");
    }
}