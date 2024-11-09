import React from 'react'
import User from './User'

const App = () => {

  const userData = {
    name:"Vasu Dev",
    age :23,
    gender: "Male",
    phone : 9360390839,
    email: "vasu@gmail.com",
  };
  
  /* [{"id":1,"name":"Caitlin","email":"charman0@addtoany.com","gender":"Female","location":"Donji Vakuf"},
{"id":2,"name":"Lane","email":"lwooldridge1@etsy.com","gender":"Male","location":"Cabanaconde"},
{"id":3,"name":"Rossy","email":"rchildes2@example.com","gender":"Male","location":"Almere Stad"},
{"id":4,"name":"Fania","email":"fgidman3@free.fr","gender":"Female","location":"Los Mangos"},
{"id":5,"name":"Rosabel","email":"rreeman4@networksolutions.com","gender":"Female","location":"Heishui"},
{"id":6,"name":"Hollis","email":"hmallinson5@marriott.com","gender":"Male","location":"Praia"},
{"id":7,"name":"Alfred","email":"adran6@ning.com","gender":"Male","location":"Taoyuan"},
{"id":8,"name":"Morey","email":"msego7@bluehost.com","gender":"Male","location":"Kukuluk"},
{"id":9,"name":"Elladine","email":"ehaggith8@facebook.com","gender":"Female","location":"Uppsala"},
{"id":10,"name":"Bren","email":"bgabbotts9@virginia.edu","gender":"Female","location":"Rongwo"},
{"id":11,"name":"Garrick","email":"grudsdella@people.com.cn","gender":"Male","location":"Banqiao"},
{"id":12,"name":"Stephannie","email":"sknappeb@examiner.com","gender":"Female","location":"Phultala"},
{"id":13,"name":"Harold","email":"hhoutenc@hc360.com","gender":"Male","location":"Crasto"},
{"id":14,"name":"Penni","email":"pnickolesd@mtv.com","gender":"Female","location":"Postojna"},
{"id":15,"name":"Alfy","email":"aheininge@buzzfeed.com","gender":"Male","location":"Fais"},
{"id":16,"name":"Hortensia","email":"hfoggartyf@tumblr.com","gender":"Female","location":"Krajenka"},
{"id":17,"name":"Krishnah","email":"ksanchesg@squidoo.com","gender":"Male","location":"Dahay"},
{"id":18,"name":"Perry","email":"pseversh@omniture.com","gender":"Male","location":"Avaré"},
{"id":19,"name":"Alex","email":"ameasi@cbc.ca","gender":"Female","location":"Slobodskoy"},
{"id":20,"name":"Germana","email":"gspurdenj@telegraph.co.uk","gender":"Female","location":"Gakem"},
{"id":21,"name":"Ferris","email":"fkilcullenk@nydailynews.com","gender":"Male","location":"Farafangana"},
{"id":22,"name":"Mike","email":"mgawkesl@wunderground.com","gender":"Male","location":"Huangfang"},
{"id":23,"name":"Emmy","email":"esinkinsm@aol.com","gender":"Polygender","location":"Ţalkhā"},
{"id":24,"name":"Breena","email":"bgrimsteadn@wired.com","gender":"Female","location":"Guanqiao"},
{"id":25,"name":"Stephanie","email":"smistryo@wordpress.com","gender":"Female","location":"Voronezh"},
{"id":26,"name":"Vale","email":"vciobutarup@ted.com","gender":"Male","location":"Ialoveni"},
{"id":27,"name":"Aida","email":"acaronq@odnoklassniki.ru","gender":"Female","location":"San Francisco"},
{"id":28,"name":"Gregoire","email":"gferrillor@jigsy.com","gender":"Male","location":"Shetan"},
{"id":29,"name":"Elnar","email":"ereveleys@typepad.com","gender":"Male","location":"Yingta"},
{"id":30,"name":"Ethan","email":"ebeverstockt@nifty.com","gender":"Male","location":"Dnipryany"},
{"id":31,"name":"Sarena","email":"spancoustu@google.nl","gender":"Female","location":"Yanjiatai"},
{"id":32,"name":"Philippe","email":"pdorberv@1und1.de","gender":"Polygender","location":"San Francisco"},
{"id":33,"name":"Anatollo","email":"asambrookw@altervista.org","gender":"Male","location":"Ouijjane"},
{"id":34,"name":"Prescott","email":"ptringhamx@dagondesign.com","gender":"Male","location":"Melaka"},
{"id":35,"name":"Hilarius","email":"hcrosthwaitey@photobucket.com","gender":"Male","location":"Koryčany"},
{"id":36,"name":"Clerissa","email":"ccompfortz@epa.gov","gender":"Female","location":"Богданци"},
{"id":37,"name":"Ryley","email":"rpierse10@redcross.org","gender":"Male","location":"Daruoyan"},
{"id":38,"name":"Shannon","email":"shofner11@washington.edu","gender":"Female","location":"Piritiba"},
{"id":39,"name":"Fergus","email":"fcleave12@state.gov","gender":"Male","location":"Zarasai"},
{"id":40,"name":"Brennan","email":"bmursell13@stumbleupon.com","gender":"Male","location":"Danxia"},
{"id":41,"name":"Xerxes","email":"xpursey14@1688.com","gender":"Male","location":"Krajan Dukuhseti"},
{"id":42,"name":"Norry","email":"ncasbon15@tuttocitta.it","gender":"Male","location":"Alīgūdarz"},
{"id":43,"name":"Lela","email":"ltolland16@wikimedia.org","gender":"Female","location":"Huxi"},
{"id":44,"name":"Kingsly","email":"kmaypole17@canalblog.com","gender":"Male","location":"Västerås"},
{"id":45,"name":"Mead","email":"mfehners18@geocities.com","gender":"Male","location":"Saḩab"},
{"id":46,"name":"Page","email":"pgillicuddy19@jigsy.com","gender":"Male","location":"Taposan"},
{"id":47,"name":"Chaunce","email":"ctatlowe1a@bloglovin.com","gender":"Male","location":"Boljoon"},
{"id":48,"name":"Pauline","email":"pmeah1b@comcast.net","gender":"Female","location":"Grand Bank"},
{"id":49,"name":"Alvera","email":"abeniesh1c@telegraph.co.uk","gender":"Female","location":"Parista"},
{"id":50,"name":"Kylen","email":"kleban1d@slideshare.net","gender":"Female","location":"Botshabelo"},
{"id":51,"name":"Kurtis","email":"klaborde1e@1und1.de","gender":"Male","location":"Pasadena"},
{"id":52,"name":"Kriste","email":"kdee1f@hibu.com","gender":"Female","location":"Pontian"},
{"id":53,"name":"Tedi","email":"trapin1g@opera.com","gender":"Bigender","location":"Wiset Chaichan"},
{"id":54,"name":"Meryl","email":"mbanishevitz1h@wikia.com","gender":"Male","location":"Aoshi"},
{"id":55,"name":"Giselbert","email":"gbrinded1i@unicef.org","gender":"Male","location":"Metallostroy"},
{"id":56,"name":"Bernie","email":"bdrover1j@mayoclinic.com","gender":"Male","location":"Tānsen"},
{"id":57,"name":"Sigfrid","email":"simmings1k@shutterfly.com","gender":"Male","location":"Cipancur"},
{"id":58,"name":"Berthe","email":"bsymms1l@jimdo.com","gender":"Female","location":"Karlstad"},
{"id":59,"name":"Ingemar","email":"ibleier1m@skyrock.com","gender":"Male","location":"Goranboy"},
{"id":60,"name":"Davida","email":"dripsher1n@4shared.com","gender":"Female","location":"Sanchahe"},
{"id":61,"name":"Claybourne","email":"cpaulig1o@ezinearticles.com","gender":"Male","location":"Kampene"},
{"id":62,"name":"Florance","email":"fwixey1p@4shared.com","gender":"Female","location":"Ninomiya"},
{"id":63,"name":"Karna","email":"kkrzyzaniak1q@wiley.com","gender":"Female","location":"Virginia"},
{"id":64,"name":"Heriberto","email":"hwhitear1r@omniture.com","gender":"Genderqueer","location":"Wangying"},
{"id":65,"name":"Timmy","email":"tleonida1s@php.net","gender":"Male","location":"Lammi"},
{"id":66,"name":"Clyve","email":"cvegas1t@reuters.com","gender":"Male","location":"Daliyuan"},
{"id":67,"name":"Linzy","email":"lkobpal1u@sun.com","gender":"Female","location":"Wanghu"},
{"id":68,"name":"Benetta","email":"bcantua1v@telegraph.co.uk","gender":"Female","location":"Bājitpur"},
{"id":69,"name":"Ardene","email":"aklesel1w@jimdo.com","gender":"Female","location":"Lutoryż"},
{"id":70,"name":"Tildy","email":"tmackerel1x@telegraph.co.uk","gender":"Female","location":"N'Djamena"},
{"id":71,"name":"Laurie","email":"lsurgen1y@google.ru","gender":"Male","location":"Ševica"},
{"id":72,"name":"Adela","email":"aadamovicz1z@goo.ne.jp","gender":"Female","location":"Limoges"},
{"id":73,"name":"Balduin","email":"bheak20@google.pl","gender":"Male","location":"Baruunturuun"},
{"id":74,"name":"Gerhardt","email":"gohallihane21@ezinearticles.com","gender":"Male","location":"Juatuba"},
{"id":75,"name":"Pammie","email":"pstolze22@biglobe.ne.jp","gender":"Genderfluid","location":"Panognawan"},
{"id":76,"name":"Teddie","email":"tlargent23@go.com","gender":"Female","location":"Alto Río Senguer"},
{"id":77,"name":"Hinda","email":"hswindles24@vimeo.com","gender":"Female","location":"Baisha"},
{"id":78,"name":"Randy","email":"rrhodes25@i2i.jp","gender":"Agender","location":"Krajan"},
{"id":79,"name":"Puff","email":"pbrettell26@friendfeed.com","gender":"Agender","location":"Nabire"},
{"id":80,"name":"Halimeda","email":"hdews27@ihg.com","gender":"Female","location":"Przyborów"},
{"id":81,"name":"Isabelle","email":"imonksfield28@tumblr.com","gender":"Female","location":"Champigny-sur-Marne"},
{"id":82,"name":"Moira","email":"mlinggood29@mysql.com","gender":"Female","location":"La Reforma"},
{"id":83,"name":"Marlane","email":"mbotting2a@gizmodo.com","gender":"Female","location":"San Juan del Surutú"},
{"id":84,"name":"Chrisy","email":"ccheavin2b@cocolog-nifty.com","gender":"Male","location":"Dinghuo"},
{"id":85,"name":"Augustine","email":"amatysiak2c@networkadvertising.org","gender":"Male","location":"Tacheng"},
{"id":86,"name":"Arabela","email":"amorcom2d@youtube.com","gender":"Female","location":"Orlando"},
{"id":87,"name":"Danit","email":"dscamerdine2e@gizmodo.com","gender":"Female","location":"La Cumbre"},
{"id":88,"name":"Chastity","email":"cgifkins2f@opensource.org","gender":"Female","location":"Sergiyev Posad"},
{"id":89,"name":"Benjy","email":"bewbanche2g@comcast.net","gender":"Male","location":"Santa Rosa"},
{"id":90,"name":"Thibaud","email":"tprovis2h@miibeian.gov.cn","gender":"Male","location":"Hecheng"},
{"id":91,"name":"Jackquelin","email":"jhadley2i@marriott.com","gender":"Female","location":"Wanquan"},
{"id":92,"name":"Courtnay","email":"celsy2j@lycos.com","gender":"Female","location":"Kukur"},
{"id":93,"name":"Tracee","email":"ttorrent2k@google.ru","gender":"Female","location":"Shijiao"},
{"id":94,"name":"Frances","email":"fstrain2l@constantcontact.com","gender":"Female","location":"Moxi"},
{"id":95,"name":"Carree","email":"cmclarty2m@paypal.com","gender":"Bigender","location":"Uzgen"},
{"id":96,"name":"Shaina","email":"smerkel2n@wufoo.com","gender":"Female","location":"Muararupit"},
{"id":97,"name":"Selinda","email":"sshawdforth2o@about.com","gender":"Bigender","location":"Dashev"},
{"id":98,"name":"Brenda","email":"bmaillard2p@plala.or.jp","gender":"Female","location":"Matlang"},
{"id":99,"name":"Roseanna","email":"randreazzi2q@ask.com","gender":"Female","location":"Les Sables-d'Olonne"},
{"id":100,"name":"Ami","email":"aiwanicki2r@g.co","gender":"Bigender","location":"Van Nuys"}] */

 return <div>
    <h1>Hello World!</h1>
    <User 
    /* name={userData.name}
    age={userData.age}
    gender={userData.gender}   #This one method
    phone={userData.phone} 
    email={userData.Email} */ 
    {...userData} //Spread operator method
    
    />
  
    
  </div>
}

export default App