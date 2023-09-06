//for loop
const countryArr = ["IND", "CHN", "US", "UK", "EUR", "GER"];
for (let i = 0; i < countryArr.length; i++) {
 console.log(countryArr[i]);
};

//for in loop
const countryObj = {
    India: "IND",
    China: "CHN",
    UnitedStated: "US",
    unitedKingdom: "UK",
    Europe: "EUR",
    Germany: "GER",
  };
  for(key in countryObj){
    console.log(`
    keys : ${key}
    values : ${countryObj[key]}
    `);
  };

  //for of loop
const countrystr = "data of all countries";
for(str of countrystr){
    console.log(str);
};

//for each loop
countryArr.forEach((value,index,actualArray)=>
{
    console.log(`
    value : ${value}
    index : ${index}
    actualArray : ${actualArray}
    `);
}
);

//JSON format resume
const resume={
    "name": "Sabareeswaran M",
    "email": "sabari26396@email.com",
    "phone": "9688733582",
    "address": "16 , kottur road, slp , pollachi",
    "summary": "Dedicated professional seeking job opportunities.",
    "education": [
      {
        "diploma": "diploma in Automobile Engineering",
        "school": "Tmt.rukmaniammal Higher Secondary School",
        "passedOut_year": 2014
      }
    ],
    "experience": [
      {
        "position": "Stage operator",
        "company": "Hyundai Motors India Pvt ltd.",
        "start_year": "2014",
        "end_year": "2015",
        
      }
    ],
    "skills": [
      "HTML/CSS",
      "JavaScript",
    ]
  }
  console.log(resume)
