var bio = {
  "name": "Adie Williams",
  "role": "Front-End Web Developer",
  "contactInfo": {
    "mobile": 07525655736,
    "email": "hello@adie.codes",
    "twitter": "@adie.codes",
    "github": "adieCodes",
    "blog": "http://www.adie.codes",
    "location": "Sheffield, UK"
  },
  "pictureURL": "images/fry.jpg",
  "welcome": "Front-End Web Developer who uses HTML, CSS" +
    "and JavaScript to build mobile-first responsive sites." +
    " I enjoy working with people to gain a clear understanding" +
    " of their business, requirements and users; and then use " +
    " this knowledge to create a focused and enjoyable experience.",
  "skills": ["HTML", "CSS", "JavaScript"]
};

var work = {
  "roles": [
    {
      "employer": "PeoplePlus Ltd",
      "title": "Telecoms Analyst",
      "dates": "June 2012 - Present",
      "location": "Sheffield, UK",
      "description": "Started as a temp with responsibility for providing 3rd line support and asset management of 2000 mobile devices (BlackBerry’s, mobiles and dongles).<br>After 6 months, I was made permanent and made solely responsible for supporting telephone lines and systems (Cisco, Mitel, Samsung and Panasonic) for 150 sites. This included co-ordinating new offices/office moves, troubleshooting of lines/phone systems, maintenance, liaising with suppliers, invoicing and feeding into board reports.<br>I was also central in a project to migrate from BlackBerry’s to Nokia Lumia’s. Feeding into contract negotiation and Mobile Device Management requirements, testing and implementation. I am currently heavily involved in a project to move our landline infrastructure from legacy phone systems to Avaya."
    },
    {
      "employer": "Unemployed",
      "title": "Studying Web Dev",
      "dates": "Feb 2012-June 2012",
      "location": "Sheffield, UK",
      "description": "When I was not job hunting, I spent my time learning about coding, design theory and building my first site for a client. I returned to work as my fiancee was made redundant"
    },
    {
      "employer": "Virgin Media via Hays Recruitment",
      "title": "Desktop Support Analyst",
      "dates": "April 2011 - Feb 2012",
      "location": "Sheffield UK",
      "description": "The role was to try to fix faulty PDA's and organise replacements, build functional devices to be sent to the Field Tech and produce reports tracking the allocation of the devices as well as support the 2nd Line EUC Analyst when workload permits."
    }
  ]
}

var projects = {
  "project": [
    {
      "title": "Udacity Portfolio Project",
      "dates": "November 2016",
      "description": "Responsive portfolio project using Flexbox",
      "image": "images/logoLine.svg"
    },
    {
      "title": "TEST",
      "dates": "November 2016",
      "description": "Responsive portfolio project using Flexbox",
      "image": "images/logoLine.svg"
    }
  ]
}

var education = {
  "schools": [
    {
      "name": "Bournemouth Uni",
      "city": "Bournemouth, UK",
      "course": "HND in Tourism and Leisure Management",
      "graduated": 2003,
      "url": "https://www1.bournemouth.ac.uk/"
    },
    {
      "name": "Oakmead Sixth Form",
      "city": "Bournemouth, UK",
      "course": "A level Physical Education",
      "graduated": 2001,
      "url": "https://oak.leaf.bournemouth.sch.uk/index.php/sixth-form"
    },
    {
      "name": "Oakmead College of Technology",
      "city": "Bournemouth, UK",
      "course": ["English", "Mathematics", "Science"],
      "graduated": 1999,
      "url": "https://oak.leaf.bournemouth.sch.uk/"
    }
  ],
  "onlineCourses": [
    {
      "name": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    },
    {
      "name": "Front End Developer Certification",
      "school": "Free Code Camp",
      "dates": 2016,
      "url": "https://www.freecodecamp.com/adieCodes"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);

$("#header").append(formattedName);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
}

function displayWork(){
  for(role in work.roles){
    if(work.roles.hasOwnProperty(role)){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.roles[role].employer);
      var formattedEmployerTitle = HTMLworkTitle.replace("%data%", work.roles[role].title);
      var formattedEmployerTitle = formattedEmployer + formattedEmployerTitle;
      var formattedEmployerDates = HTMLworkDates.replace("%data%", work.roles[role].dates)
      var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.roles[role].location);
      var formattedEmployerDescription = HTMLworkDescription.replace("%data%", work.roles[role].description)
      $(".work-entry:last").append(formattedEmployerTitle, formattedEmployerDates, formattedEmployerLocation, formattedEmployerDescription);
    }
  }
}
displayWork();

$('#main').append(internationalizeButton);

function inName(name){
  var internationalName = name.split(" ");
  internationalName[0] = internationalName[0][0].toUpperCase() + internationalName[0].slice(1).toLowerCase();
  internationalName[1] = internationalName[1].toUpperCase();
  internationalName = internationalName.join(" ");
  return internationalName;
}
inName("sebastian thrun");

projects.display = function(){
  projects.project.forEach(function(proj){
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", proj.title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", proj.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",proj.description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", proj.image);

    $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
  })
}
projects.display()
