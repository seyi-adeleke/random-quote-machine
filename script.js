/**
 * Created by seyi adeleke on 12/3/2015.
 */
function quote(){
  var  myquotes = ["“Nigeria has had the misfortune - no, the fortune - of seeing the worst face of capitalism anywhere in Africa." +
    " The masses have seen it, they are disgusted, and they want an alternative”- Wole Soyinka",
        "“My parents were early converts to Christianity in my part of Nigeria. They were not just converts; my father was an evangelist, a religious teacher. He and my mother traveled for thirty-five years to different parts of Igboland, spreading the gospel”-chinua achebe",
        "“We want to thank the President for bringing Facebook to Nigeria”-Labaran Maku","“With all due respect, if Jesus Christ could come to the world and be the chairman of INEC, any election he would conduct will be disputed.” – Olusegun Obasanjo",
        "“Over 70% of what they call corruption in Nigeria, is mere common theft.” – Goodluck Jonathan","“Ojukwu is a great man,he died but his manhood lives on” – Patience Jonathan.","“Go and die” – Edo State Governor Adams Oshiomhole said to a widowed woman",
        "“I will not die. I drink bottled water. You do not drink bottled water.” – Rotimi Amaechi",
      "“People exaggerate Corruption in Nigeria. It is not even our first or second problem, maybe the third” - President Jonathan",
      "“How will you tell me I don't have right to treasury of Oyo State Government. The Govt I installed? Pa Lamidi Adedibu”",
      "“President Yar'Adua can rule from anywhere in the World”- AGF Michael Aandoaka SAN, AGF to Yar'Adua",
      "“Those that died at the Immigration stampede died as a result of impatience”- Min of Interior, Abba Moro.",
      "“I was not a tribalist when I had a long-standing and intimate relationship with Miss Bianca Onoh, an igbo lady, who many years later married Ojukwu and who is now our Ambassador in Spain-”Femi-Fani Kayode"
      ,"“We have stolen billions of dollars, what "+
      "did you do? We steal because you never stoned us for it”-Rotimi Amechi",
      "“We do not pray for accidents but it is inevitable… we do everything to ensure that we do not have accidents, but it is an act of God”-Stella Oduah"

  ];

   // var rndquote =  myquotes[Math.floor(Math.random() * myquotes.length)];

    document.getElementById("quotes").innerHTML =   myquotes[Math.floor(Math.random() * myquotes.length)];

}
function tweetIt () {
    var phrase = document.getElementById('quotes').innerText;
    var tweetUrl = 'https://twitter.com/share?text=' +
        encodeURIComponent(phrase) +
        '&url=' +
        'http://www.randomnaijaquote.com';

    window.open(tweetUrl);
}
window.onload = quote();