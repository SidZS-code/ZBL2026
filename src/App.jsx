import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { supa } from "./supa.js";
import {
  Search, Lock, Trophy, Clock, MapPin, Check, X, RefreshCw, User, LogOut, Megaphone, Play, Undo2, Pencil,
  Network, CalendarDays, Star, ChevronRight, Shield, AlertTriangle, Crown, List, GitFork, SlidersHorizontal, Timer, Info,
} from "lucide-react";

const DATA = {"P":{"M1":"Akshay Pandarkar","M2":"Devang Harsora","M3":"Anirudha Kulkarni","M4":"Abdulla Mohammed","M5":"Aditya Kumar (56125)","M6":"Siddharth Pandey","M7":"Aditya Anand","M8":"Manas Rawat","M9":"Sahil Kamble","M10":"Amogh Choudhary","M11":"Akshat Mishra","M12":"Gopesh Pathak","M13":"Sankalp Patil","M14":"Shikha Mishra","M15":"Parth Patel","M16":"Krushna Wath","M17":"Ashish Yadav","M18":"Piyush Shukla","M19":"Nishant Thottarath","M20":"Mohit Manghnani","M21":"Siddhivinayak Sahoo","M22":"Saswata Mondal","M23":"Omkar Kargar","M24":"Kris Mandanka","M25":"Nesar Joshi","M26":"Jigar Bhanushali","M27":"Hitesh Nayak","M28":"Gourav Singh","M29":"Krupananda Mt","M30":"Dhruv Venu Nair","M31":"Shazil Sihan P","M32":"Harsh Pande","M33":"Vaibhav Bhople","M34":"Aditya Singh","M35":"Rahul Bhatt","M36":"Vasu Sharma","M37":"Parth Shah","M38":"Amar More","M39":"Vishwas Baligidad","M40":"Rohit Phatak","M41":"Rohit Raina","M42":"Priyanshu Savla","M43":"Atharv Deokar","M44":"Rishabh Ferwani","M45":"Mahanth Ranganath","M46":"Abhijay Singh","M47":"Divyansh Sharma","M48":"Yaswanth Naidu","M49":"Varun Iyengar","M50":"Shubhanshu Kumar","M51":"Kumar Krishna","M52":"Aman Mahato","M53":"Sarthak Atal","M54":"Rohan Newaskar","M55":"Yash Vijay","M56":"Aniket Kadu","M57":"Jayant Matte","M58":"Rahul Manhas","M59":"Manish Tiwari","M60":"Ayush Baran","M61":"Ayush Jha","M62":"Aditya Shukla","M63":"Sarthak Vijayvergiya","M64":"Kaustubh Dusad","M65":"Pradeep Patel","M66":"Varad Gattani","M67":"Kartik Rai","M68":"Shardul Chawhan","M69":"Mohit Kumar","M70":"Shailendra Singh","M71":"Parth Kudale","M72":"Shubham Raj","M73":"Sumit Pawar","M74":"Archit Gupta","M75":"Ayush Attawar","M76":"Raunak Soman","M77":"Sandeep Mishra","M78":"Dharavath Rahul Nayak","M79":"Aditya Patil","M80":"Ashish Tiwari","M81":"Abhishek Shukla (52490)","M82":"Aryan Kushwaha","M83":"Pranjal Kaushal","M84":"Vishwas Anil Kumar","M85":"Suyog Kumawat","M86":"Jayam Shah","M87":"Aryan Uppal","M88":"Vishal Patsariya","M89":"Akash Deep","M90":"Sattwik Mondal","M91":"Ayush Kumar Gupta","M92":"Gaurav Bhadula","M93":"Chinmay Patke","M94":"Pushya Mitra Kollipara","M95":"Soham Patil","M96":"Palash Batra","M97":"Vikas Gupta","M98":"Satvik Raina","M99":"Prasanna Bhilegaonkar","M100":"Aman Kumar","M101":"Aryan Pandey","M102":"Arnav Kundalia","M103":"Sreyash Ranjan","M104":"Atharva Mandhare","M105":"Arindam Dey","M106":"Ujjawal Tripathi","M107":"Priansh Waghela","M108":"Anurag Sahu","M109":"Utkarsh Shrivastav","M110":"Abhijeet Shinde","M111":"Vasudev Dhakad","M112":"Abhinav Padoley","M113":"Akshay Chauhan","M114":"Anirudh Kanodia","M115":"Vishal Girawale","M116":"Sharan Sathwik K P","M117":"Ayush Agarwal","M118":"Rohan Patil","M119":"Suresh Koragana","M120":"E Chandrahasa Reddy","M121":"Pushkar Kallurkar","M122":"Rushikesh Jagadale","M123":"Aashish Khatkar","M124":"Yashya Garg","M125":"Sahil Ashraf","M126":"Ashish Gupta","M127":"Vibhav Tripathi","M128":"Srinivas Challa","M129":"Gangadi Sai Prakash Reddy","M130":"Devansh S Raju","M131":"Rishu Kumar","M132":"Soham Amit Panse","M133":"Ashray Gautam","M134":"Arya Nandavadekar","M135":"Mayur Mandavkar","M136":"Jitin Goyal","M137":"Shikhar Agrawal","M138":"Melvin Saji Thomas","M139":"Kumar Aryan","M140":"Dhinesh Kumar Lakshminarayanan","M141":"Harsh Pawar","M142":"Kumar Utsav","M143":"Ayaz Muzammil Hussain","M144":"Mahendra Choudhary","M145":"Sudeep Chella","M146":"Aman Das","M147":"Ishan Oze","M148":"Viplav Khubchandani","M149":"Harsh Nawandar","M150":"Ankit Patne","M151":"Abhay Sahu","M152":"Raj Pandey","M153":"Asaad Khan","M154":"Rahul Kumar Singh","M155":"Jeet Dave","M156":"Sarthak Gupta","M157":"Harsh Bangar","M158":"Adeeb Khan","M159":"Uday Kiran","M160":"Piyush Dhumal","M161":"Rahul Yadav","M162":"Raghav Tripathi","M163":"Pratik Jadhav","M164":"Bhavya Majani","M165":"Amit Sahu","M166":"Namit Chawda","M167":"Prajwal Tirkey","M168":"Apurva Singh","M169":"Jyotiraditya Parihar","M170":"Shivashis Kar","M171":"Sethu R","M172":"Dhanraj Shelke","M173":"Md Huzaifa Imtiyaz","M174":"Pravi Jain","M175":"Atharva Martiwar","M176":"Amogh Dwivedi","M177":"Manas Agrawal","M178":"Ankit Pal","M179":"Anubhav Bansal","M180":"Korutla Sai Krishna","M181":"Shaikh Saad Ali","M182":"Akshar Bhatnagar","M183":"Shubham Jakhar","M184":"Vineet Mota","M185":"Sahil Luthra","M186":"Harshil Thakkar","M187":"Abhishek Raj","M188":"Aneesh Sayal","M189":"Pranjal Nikhare","M190":"Aashish R","M191":"Harsh Shah","M192":"Piyush Aggarwal","M193":"Amol Dhane","M194":"Vancha Bhaavan reddy","M195":"Fahim Jabade","M196":"Jitendra Patil","M197":"Yash Kamboj","M198":"Ansh Tandon","M199":"Hitesh Kalhane","M200":"Yash Maheshwari","M201":"Prarabdha Chatterjee","M202":"Ritish Singh Rana","M203":"Navyanth Gadipudi","M204":"Ansh Sharma","M205":"Vinit Upadhyay","M206":"Parv Sharma","M207":"Ayush Gajbhiye","M208":"Swastik Chaubey","M209":"Hardik Agrawal","M210":"Shubham Pandey","M211":"Nayan Jain","M212":"Manoj Kulkarni","M213":"Neel Prajapati","M214":"Nayan Natani","M215":"Jairam S","M216":"Sabbavarapu Naidu","M217":"Sahilkumar Bendre","M218":"Ajinkya Pande","M219":"Yash Dudani","M220":"Siddhant Chauhan","M221":"Prince Doshi","M222":"Prakash Prakash","M223":"Ayush Shukla","M224":"Dhrumil Gotecha","M225":"Ritwik Jha","M226":"Rauneet Singh","M227":"Anmol Agarwal","M228":"Prasanna Mehendale","M229":"Shivam Kumar","M230":"Jimit Patel","M231":"Akshat Dhaka","M232":"Gangadhar Shaw","M233":"Parth Patil","M234":"Shyam Thakkar","M235":"Rahul Singh","M236":"Veeresh Kanuri","M237":"Yashvir Yadav","M238":"Aditya S Kumar","M239":"Rajesh Bage","M240":"Anirudh Singam","M241":"Nirupam Mondal","M242":"Rhythm Chouhan","M243":"Maneet Singh Chhabra","M244":"Himanshu Singh","M245":"Maulik Moradiya","M246":"Jitendra Mandal","M247":"Satyajeet Mazumdar","M248":"Abhiram Nambiar","M249":"Neeraj Dhakad","M250":"Archit Shah","M251":"Rahul Vashistha","M252":"Aaryan Kedia","M253":"Avinov Ashish","M254":"Siva Bydipudi","M255":"Prajwal Shetty","M256":"Revanasiddesh U","M257":"Mellemputi Anthyush","M258":"Poorna Chandra Tejasvi S","M259":"Abhishek A Shukla","M260":"Nitin Chanda","M261":"Abhisek Singh","M262":"Saket Lende","M263":"Kartavya Arya","M264":"Vedant Mehta","M265":"Sourabh Bajaj","M266":"Abhishek Mishra","M267":"Bhavish Garg","M268":"Sidharth Sharma","M269":"Atmuri Siddharth","M270":"Vishal Salaria","F1":"Ishika Jain","F2":"Pallvi Dogra","F3":"Jahnvi Arora","F4":"Upasana Prasad","F5":"Nidhi Abhyankar","F6":"Anusista Sarangi","F7":"Khushbu Parmar","F8":"Anushka Bidkar","F9":"Netal Agrawal","F10":"Vandana Amgoth","F11":"Shikta Das","F12":"Pankhuri Sharma","F13":"Prajakta Godse","F14":"Chandrima Mukherjee","F15":"Ishita Anand","F16":"Samruddhi Shinde","F17":"Bansi Shelke","F18":"Senona Singh","F19":"Anjali Arya","F20":"Gayathri Varma","F21":"Kaavya Jain","F22":"Ayushi Kumar","F23":"Rashi Kundalia","F24":"Chitra Suralia","F25":"Neha Gurnani","F26":"Mihika Singhal","F27":"Ashima Singh","F28":"Hitika Bidkar","F29":"Sakshi Sharma","F30":"Isha Sah","F31":"Khushi Shah","F32":"Riya Shukla","F33":"Sanskruti Patil","F34":"Arushi Shet Morajkar","F35":"Karishma Kothari","F36":"Aditi Garg","F37":"Manasa Gaddi","F38":"Nandini Sain","F39":"Anushree Chouhan","F40":"Divya Singh","F41":"Dhanashri Saner","F42":"Deepti Choudhary","F43":"Madhumita Madhumita","F44":"Tanisha Singhal","F45":"Krupali Furia","F46":"Samraddhi Tripathi","F47":"Vandita Maloo","F48":"Anisha Gotmare","F49":"Priya Patel","F50":"LakshmiRama Pravallika D","F51":"Darshana Shakyawar","F52":"Vaishnavi Prabha M","F53":"Rishika Batra","F54":"Sharayu Dange","F55":"Anushka Zade","F56":"Amrita Kasiviswanathan","F57":"Rasika Wani","F58":"Lavanya Kosgi","F59":"Aditi Gudadhe","F60":"Keziah John","F61":"Aditi Rai","F62":"Pranali Mate","F63":"Pragya Ostwal","F64":"Pragya Khatwani","F65":"Sruti Kiron","MD1":"Abhiram Nambiar & Aditi Gudadhe","MD2":"Abhishek Mishra & Ishika Jain","MD3":"Akash Deep & Anusista Sarangi","MD4":"Akriti Singh & Palisetti Sudish","MD5":"Akshaj Jha & Samruddhi Shinde","MD6":"Amogh Dwivedi & Tanisha Singhal","MD7":"Anirudh Singam & Amrita Kasiviswanathan","MD8":"Ansh Vora & Keziah John","MD9":"Archit Gupta & Gayathri Varma","MD10":"Arya Nandavadekar & Riya Shukla","MD11":"Atharva Mandhare & Prajakta Godse","MD12":"Atharva Martiwar & Ira Singh","MD13":"Avadhoot Sutar & Anushka Zade","MD14":"Ayush Agarwal & Neha Sachan","MD15":"Ayush Gajbhiye & Upasana Prasad","MD16":"Ayush Kumar Gupta & Isha Sah","MD17":"Bhavish Garg & Haimi Jha","MD18":"Devansh S Raju & Arushi Shet Morajkar","MD19":"Dhanraj Shelke & Prachi Lagad","MD20":"Divyansh Sharma & Pratyaksh Arora","MD21":"Harsh Bangar & Ayush Karan","MD22":"Ishu Ishu & Netal Agrawal","MD23":"Jairam S & Priya Patel","MD24":"Jitin Goyal & Shikhar Agrawal","MD25":"Krupananda Mt & Khushbu Parmar","MD26":"Krushna Wath & Pallvi Dogra","MD27":"Kumar Aryan & Raghav Kakar","MD28":"Mahendra Choudhary & Sai Ankita Kasibatla","MD29":"Manas Rawat & Senona Singh","MD30":"Mayur Mandavkar & Viraj Bhalekar","MD31":"Mellemputi Anthyush & Anisha Gotmare","MD32":"Mohit Manghnani & Jahnvi Arora","MD33":"Prachi Trivedi & Shubh Bansal","MD34":"Prasanna Mehendale & Karishma Kothari","MD35":"Pratik Jadhav & Madhumita Madhumita","MD36":"Prince Doshi & Vaishnavi Prabha M","MD37":"Sahil Ashraf & Khushi Shah","MD38":"Saket Lende & Pragya Ostwal","MD39":"Satvik Raina & Neha Gurnani","MD40":"Sharayu Dange & Rishika Batra","MD41":"Shivashis Kar & Ushba Fatma","MD42":"Siddhivinayak Sahoo & Nidhi Abhyankar","MD43":"Soham Patil & Rashi Kundalia","MD44":"Sreyash Ranjan & Suhani Jain","MD45":"Uday Kiran & Deepti Choudhary","MD46":"Ujjawal Tripathi & Aditi Garg","MD47":"Vaibhav Bhople & Vandana Amgoth","MD48":"Vancha Bhaavan reddy & Vandita Maloo","MD49":"Aaryan Kedia & Jenita Bhat","MD50":"Abhay Sahu & Nidhi Singh","MD51":"Aditya Anand & Mahak Gawate","MD52":"Aditya Kumar (56125) & Priyanshi Kedia","MD53":"Aditya Patil & Sanskruti Patil","MD54":"Agresh Gupta & Tanya Singh","MD55":"Akshay Chauhan & Pranali Mate","MD56":"Amogh Choudhary & Vaibhavi Patil","MD57":"Archit Shah & Guneet Bhatia","MD58":"Ashish Yadav & Ritika Bali","MD59":"Ashray Gautam & Urvi Hirani","MD60":"Ayushi Gupta & Sumit Bodkurwar","MD61":"Chinmay Patke & Saloni Chavan","MD62":"Dhruv Venu Nair & Anupra Agrawal","MD63":"Harsh Pande & Aayush Singh Rajput","MD64":"Harsh Pawar & Anushree Chouhan","MD65":"Harshil Thakkar & Raisa Mariam","MD66":"Ishan Oze & Aanchal Thaman","MD67":"Jigar Bhanushali & Hima Khimani","MD68":"Kinjal Gulati & Shivam Rajput","MD69":"Kris Mandanka & Malini Singh","MD70":"Kumar Krishna & Tulika Mundra","MD71":"Kumar Utsav & Pragati Bhombe","MD72":"Mahanth Ranganath & Sruti Kiron","MD73":"Mahika Verma & Krishan Bhanot","MD74":"Mayank Gurjar & Krupali Furia","MD75":"Neeraj Dhakad & Simarjeet bhatia","MD76":"Parikshit Nehete & Bhushan Munot","MD77":"Parth Patil & Anushka Panwar","MD78":"Piyush Aggarwal & isha Agrawal","MD79":"Piyush Shukla & Jhanvi Sankhla","MD80":"Prasanna Bhilegaonkar & Abhipriya Tyagi","MD81":"Pritam Basu & Ayushi Kumar","MD82":"Rahul Yadav & LakshmiRama Pravallika D","MD83":"Raj Pandey & Niti pindawala","MD84":"Rauneet Singh & Tishaa Chandwani","MD85":"Rishu Kumar & SoundaryaLaxmi Mahindran","MD86":"Shikha Mishra & Akshay Chirde","MD87":"Shivam Singh & Kanak Bhairam","MD88":"Srinivas Challa & Prakhar Shah","MD89":"Sujal Gupta & Aditi Rai","MD90":"Suyog Kumawat & Nupur Patil","MD91":"Utkarsh Shrivastav & Vikas Gupta","MD92":"Vasu Sharma & Divya N Sharma","MD93":"Vasudev Dhakad & Dhanashri Saner","MD94":"Veeresh Kanuri & Melvin Saji Thomas","MD95":"Yash Dudani & Monisha Goyal","MD96":"Yash Maheshwari & Naman Chib","MD97":"Yaswanth Naidu & Saideep"},"S":[{"s":"M_Round1","ev":"M","br":"Round 1","st":"Round 1","n":135},{"s":"M_Cup_Prelim","ev":"M","br":"Gold Cup","st":"Preliminary round","n":7},{"s":"M_Cup_R128","ev":"M","br":"Gold Cup","st":"Round of 128","n":64},{"s":"M_Cup_R64","ev":"M","br":"Gold Cup","st":"Round of 64","n":32},{"s":"M_Cup_R32","ev":"M","br":"Gold Cup","st":"Round of 32","n":16},{"s":"M_Cup_R16","ev":"M","br":"Gold Cup","st":"Round of 16","n":8},{"s":"M_Cup_QF","ev":"M","br":"Gold Cup","st":"Quarter-final","n":4},{"s":"M_Cup_SF","ev":"M","br":"Gold Cup","st":"Semi-final","n":2},{"s":"M_Cup_Final","ev":"M","br":"Gold Cup","st":"Final","n":1},{"s":"M_Plate_Prelim","ev":"M","br":"Plate Cup","st":"Preliminary round","n":7},{"s":"M_Plate_R128","ev":"M","br":"Plate Cup","st":"Round of 128","n":64},{"s":"M_Plate_R64","ev":"M","br":"Plate Cup","st":"Round of 64","n":32},{"s":"M_Plate_R32","ev":"M","br":"Plate Cup","st":"Round of 32","n":16},{"s":"M_Plate_R16","ev":"M","br":"Plate Cup","st":"Round of 16","n":8},{"s":"M_Plate_QF","ev":"M","br":"Plate Cup","st":"Quarter-final","n":4},{"s":"M_Plate_SF","ev":"M","br":"Plate Cup","st":"Semi-final","n":2},{"s":"M_Plate_Final","ev":"M","br":"Plate Cup","st":"Final","n":1},{"s":"F_Round1","ev":"F","br":"Round 1","st":"Round 1","n":32},{"s":"F_Cup_Prelim","ev":"F","br":"Gold Cup","st":"Preliminary round","n":1},{"s":"F_Cup_R32","ev":"F","br":"Gold Cup","st":"Round of 32","n":16},{"s":"F_Cup_R16","ev":"F","br":"Gold Cup","st":"Round of 16","n":8},{"s":"F_Cup_QF","ev":"F","br":"Gold Cup","st":"Quarter-final","n":4},{"s":"F_Cup_SF","ev":"F","br":"Gold Cup","st":"Semi-final","n":2},{"s":"F_Cup_Final","ev":"F","br":"Gold Cup","st":"Final","n":1},{"s":"F_Plate_R32","ev":"F","br":"Plate Cup","st":"Round of 32","n":16},{"s":"F_Plate_R16","ev":"F","br":"Plate Cup","st":"Round of 16","n":8},{"s":"F_Plate_QF","ev":"F","br":"Plate Cup","st":"Quarter-final","n":4},{"s":"F_Plate_SF","ev":"F","br":"Plate Cup","st":"Semi-final","n":2},{"s":"F_Plate_Final","ev":"F","br":"Plate Cup","st":"Final","n":1},{"s":"MD_Prelim","ev":"MD","br":"Knockout","st":"Preliminary round","n":33},{"s":"MD_R64","ev":"MD","br":"Knockout","st":"Round of 64","n":32},{"s":"MD_R32","ev":"MD","br":"Knockout","st":"Round of 32","n":16},{"s":"MD_R16","ev":"MD","br":"Knockout","st":"Round of 16","n":8},{"s":"MD_QF","ev":"MD","br":"Knockout","st":"Quarter-final","n":4},{"s":"MD_SF","ev":"MD","br":"Knockout","st":"Semi-final","n":2},{"s":"MD_Final","ev":"MD","br":"Knockout","st":"Final","n":1}],"M":{"M_Round1#1":{"s":"M_Round1","n":1,"a":["p","M30"],"b":["p","M151"]},"M_Round1#2":{"s":"M_Round1","n":2,"a":["p","M64"],"b":["p","M14"]},"M_Round1#3":{"s":"M_Round1","n":3,"a":["p","M152"],"b":["p","M176"]},"M_Round1#4":{"s":"M_Round1","n":4,"a":["p","M211"],"b":["p","M172"]},"M_Round1#5":{"s":"M_Round1","n":5,"a":["p","M195"],"b":["p","M182"]},"M_Round1#6":{"s":"M_Round1","n":6,"a":["p","M253"],"b":["p","M224"]},"M_Round1#7":{"s":"M_Round1","n":7,"a":["p","M92"],"b":["p","M149"]},"M_Round1#8":{"s":"M_Round1","n":8,"a":["p","M42"],"b":["p","M158"]},"M_Round1#9":{"s":"M_Round1","n":9,"a":["p","M102"],"b":["p","M36"]},"M_Round1#10":{"s":"M_Round1","n":10,"a":["p","M240"],"b":["p","M101"]},"M_Round1#11":{"s":"M_Round1","n":11,"a":["p","M133"],"b":["p","M75"]},"M_Round1#12":{"s":"M_Round1","n":12,"a":["p","M73"],"b":["p","M261"]},"M_Round1#13":{"s":"M_Round1","n":13,"a":["p","M188"],"b":["p","M260"]},"M_Round1#14":{"s":"M_Round1","n":14,"a":["p","M218"],"b":["p","M189"]},"M_Round1#15":{"s":"M_Round1","n":15,"a":["p","M193"],"b":["p","M118"]},"M_Round1#16":{"s":"M_Round1","n":16,"a":["p","M155"],"b":["p","M112"]},"M_Round1#17":{"s":"M_Round1","n":17,"a":["p","M248"],"b":["p","M10"]},"M_Round1#18":{"s":"M_Round1","n":18,"a":["p","M143"],"b":["p","M74"]},"M_Round1#19":{"s":"M_Round1","n":19,"a":["p","M11"],"b":["p","M22"]},"M_Round1#20":{"s":"M_Round1","n":20,"a":["p","M117"],"b":["p","M60"]},"M_Round1#21":{"s":"M_Round1","n":21,"a":["p","M252"],"b":["p","M79"]},"M_Round1#22":{"s":"M_Round1","n":22,"a":["p","M31"],"b":["p","M208"]},"M_Round1#23":{"s":"M_Round1","n":23,"a":["p","M180"],"b":["p","M184"]},"M_Round1#24":{"s":"M_Round1","n":24,"a":["p","M171"],"b":["p","M49"]},"M_Round1#25":{"s":"M_Round1","n":25,"a":["p","M82"],"b":["p","M103"]},"M_Round1#26":{"s":"M_Round1","n":26,"a":["p","M257"],"b":["p","M39"]},"M_Round1#27":{"s":"M_Round1","n":27,"a":["p","M40"],"b":["p","M210"]},"M_Round1#28":{"s":"M_Round1","n":28,"a":["p","M119"],"b":["p","M27"]},"M_Round1#29":{"s":"M_Round1","n":29,"a":["p","M226"],"b":["p","M231"]},"M_Round1#30":{"s":"M_Round1","n":30,"a":["p","M139"],"b":["p","M6"]},"M_Round1#31":{"s":"M_Round1","n":31,"a":["p","M18"],"b":["p","M70"]},"M_Round1#32":{"s":"M_Round1","n":32,"a":["p","M29"],"b":["p","M219"]},"M_Round1#33":{"s":"M_Round1","n":33,"a":["p","M170"],"b":["p","M24"]},"M_Round1#34":{"s":"M_Round1","n":34,"a":["p","M78"],"b":["p","M263"]},"M_Round1#35":{"s":"M_Round1","n":35,"a":["p","M84"],"b":["p","M87"]},"M_Round1#36":{"s":"M_Round1","n":36,"a":["p","M174"],"b":["p","M99"]},"M_Round1#37":{"s":"M_Round1","n":37,"a":["p","M96"],"b":["p","M67"]},"M_Round1#38":{"s":"M_Round1","n":38,"a":["p","M124"],"b":["p","M254"]},"M_Round1#39":{"s":"M_Round1","n":39,"a":["p","M130"],"b":["p","M41"]},"M_Round1#40":{"s":"M_Round1","n":40,"a":["p","M201"],"b":["p","M127"]},"M_Round1#41":{"s":"M_Round1","n":41,"a":["p","M165"],"b":["p","M12"]},"M_Round1#42":{"s":"M_Round1","n":42,"a":["p","M196"],"b":["p","M167"]},"M_Round1#43":{"s":"M_Round1","n":43,"a":["p","M8"],"b":["p","M80"]},"M_Round1#44":{"s":"M_Round1","n":44,"a":["p","M159"],"b":["p","M269"]},"M_Round1#45":{"s":"M_Round1","n":45,"a":["p","M223"],"b":["p","M221"]},"M_Round1#46":{"s":"M_Round1","n":46,"a":["p","M243"],"b":["p","M59"]},"M_Round1#47":{"s":"M_Round1","n":47,"a":["p","M63"],"b":["p","M97"]},"M_Round1#48":{"s":"M_Round1","n":48,"a":["p","M48"],"b":["p","M217"]},"M_Round1#49":{"s":"M_Round1","n":49,"a":["p","M227"],"b":["p","M132"]},"M_Round1#50":{"s":"M_Round1","n":50,"a":["p","M44"],"b":["p","M125"]},"M_Round1#51":{"s":"M_Round1","n":51,"a":["p","M214"],"b":["p","M185"]},"M_Round1#52":{"s":"M_Round1","n":52,"a":["p","M183"],"b":["p","M216"]},"M_Round1#53":{"s":"M_Round1","n":53,"a":["p","M2"],"b":["p","M19"]},"M_Round1#54":{"s":"M_Round1","n":54,"a":["p","M72"],"b":["p","M203"]},"M_Round1#55":{"s":"M_Round1","n":55,"a":["p","M194"],"b":["p","M147"]},"M_Round1#56":{"s":"M_Round1","n":56,"a":["p","M34"],"b":["p","M177"]},"M_Round1#57":{"s":"M_Round1","n":57,"a":["p","M241"],"b":["p","M123"]},"M_Round1#58":{"s":"M_Round1","n":58,"a":["p","M198"],"b":["p","M109"]},"M_Round1#59":{"s":"M_Round1","n":59,"a":["p","M95"],"b":["p","M162"]},"M_Round1#60":{"s":"M_Round1","n":60,"a":["p","M115"],"b":["p","M94"]},"M_Round1#61":{"s":"M_Round1","n":61,"a":["p","M145"],"b":["p","M156"]},"M_Round1#62":{"s":"M_Round1","n":62,"a":["p","M105"],"b":["p","M202"]},"M_Round1#63":{"s":"M_Round1","n":63,"a":["p","M266"],"b":["p","M107"]},"M_Round1#64":{"s":"M_Round1","n":64,"a":["p","M141"],"b":["p","M144"]},"M_Round1#65":{"s":"M_Round1","n":65,"a":["p","M157"],"b":["p","M153"]},"M_Round1#66":{"s":"M_Round1","n":66,"a":["p","M25"],"b":["p","M7"]},"M_Round1#67":{"s":"M_Round1","n":67,"a":["p","M136"],"b":["p","M179"]},"M_Round1#68":{"s":"M_Round1","n":68,"a":["p","M222"],"b":["p","M215"]},"M_Round1#69":{"s":"M_Round1","n":69,"a":["p","M15"],"b":["p","M66"]},"M_Round1#70":{"s":"M_Round1","n":70,"a":["p","M65"],"b":["p","M55"]},"M_Round1#71":{"s":"M_Round1","n":71,"a":["p","M52"],"b":["p","M160"]},"M_Round1#72":{"s":"M_Round1","n":72,"a":["p","M114"],"b":["p","M262"]},"M_Round1#73":{"s":"M_Round1","n":73,"a":["p","M166"],"b":["p","M250"]},"M_Round1#74":{"s":"M_Round1","n":74,"a":["p","M233"],"b":["p","M50"]},"M_Round1#75":{"s":"M_Round1","n":75,"a":["p","M267"],"b":["p","M3"]},"M_Round1#76":{"s":"M_Round1","n":76,"a":["p","M209"],"b":["p","M163"]},"M_Round1#77":{"s":"M_Round1","n":77,"a":["p","M13"],"b":["p","M77"]},"M_Round1#78":{"s":"M_Round1","n":78,"a":["p","M247"],"b":["p","M220"]},"M_Round1#79":{"s":"M_Round1","n":79,"a":["p","M83"],"b":["p","M4"]},"M_Round1#80":{"s":"M_Round1","n":80,"a":["p","M51"],"b":["p","M54"]},"M_Round1#81":{"s":"M_Round1","n":81,"a":["p","M230"],"b":["p","M110"]},"M_Round1#82":{"s":"M_Round1","n":82,"a":["p","M229"],"b":["p","M32"]},"M_Round1#83":{"s":"M_Round1","n":83,"a":["p","M255"],"b":["p","M98"]},"M_Round1#84":{"s":"M_Round1","n":84,"a":["p","M228"],"b":["p","M28"]},"M_Round1#85":{"s":"M_Round1","n":85,"a":["p","M175"],"b":["p","M76"]},"M_Round1#86":{"s":"M_Round1","n":86,"a":["p","M204"],"b":["p","M135"]},"M_Round1#87":{"s":"M_Round1","n":87,"a":["p","M173"],"b":["p","M234"]},"M_Round1#88":{"s":"M_Round1","n":88,"a":["p","M120"],"b":["p","M122"]},"M_Round1#89":{"s":"M_Round1","n":89,"a":["p","M137"],"b":["p","M259"]},"M_Round1#90":{"s":"M_Round1","n":90,"a":["p","M106"],"b":["p","M238"]},"M_Round1#91":{"s":"M_Round1","n":91,"a":["p","M232"],"b":["p","M20"]},"M_Round1#92":{"s":"M_Round1","n":92,"a":["p","M21"],"b":["p","M1"]},"M_Round1#93":{"s":"M_Round1","n":93,"a":["p","M192"],"b":["p","M169"]},"M_Round1#94":{"s":"M_Round1","n":94,"a":["p","M81"],"b":["p","M244"]},"M_Round1#95":{"s":"M_Round1","n":95,"a":["p","M264"],"b":["p","M197"]},"M_Round1#96":{"s":"M_Round1","n":96,"a":["p","M161"],"b":["p","M45"]},"M_Round1#97":{"s":"M_Round1","n":97,"a":["p","M47"],"b":["p","M111"]},"M_Round1#98":{"s":"M_Round1","n":98,"a":["p","M206"],"b":["p","M168"]},"M_Round1#99":{"s":"M_Round1","n":99,"a":["p","M129"],"b":["p","M249"]},"M_Round1#100":{"s":"M_Round1","n":100,"a":["p","M62"],"b":["p","M237"]},"M_Round1#101":{"s":"M_Round1","n":101,"a":["p","M93"],"b":["p","M33"]},"M_Round1#102":{"s":"M_Round1","n":102,"a":["p","M164"],"b":["p","M26"]},"M_Round1#103":{"s":"M_Round1","n":103,"a":["p","M138"],"b":["p","M256"]},"M_Round1#104":{"s":"M_Round1","n":104,"a":["p","M61"],"b":["p","M178"]},"M_Round1#105":{"s":"M_Round1","n":105,"a":["p","M91"],"b":["p","M108"]},"M_Round1#106":{"s":"M_Round1","n":106,"a":["p","M89"],"b":["p","M235"]},"M_Round1#107":{"s":"M_Round1","n":107,"a":["p","M86"],"b":["p","M85"]},"M_Round1#108":{"s":"M_Round1","n":108,"a":["p","M150"],"b":["p","M69"]},"M_Round1#109":{"s":"M_Round1","n":109,"a":["p","M46"],"b":["p","M258"]},"M_Round1#110":{"s":"M_Round1","n":110,"a":["p","M181"],"b":["p","M121"]},"M_Round1#111":{"s":"M_Round1","n":111,"a":["p","M71"],"b":["p","M246"]},"M_Round1#112":{"s":"M_Round1","n":112,"a":["p","M213"],"b":["p","M37"]},"M_Round1#113":{"s":"M_Round1","n":113,"a":["p","M140"],"b":["p","M251"]},"M_Round1#114":{"s":"M_Round1","n":114,"a":["p","M100"],"b":["p","M17"]},"M_Round1#115":{"s":"M_Round1","n":115,"a":["p","M131"],"b":["p","M56"]},"M_Round1#116":{"s":"M_Round1","n":116,"a":["p","M268"],"b":["p","M38"]},"M_Round1#117":{"s":"M_Round1","n":117,"a":["p","M242"],"b":["p","M126"]},"M_Round1#118":{"s":"M_Round1","n":118,"a":["p","M225"],"b":["p","M154"]},"M_Round1#119":{"s":"M_Round1","n":119,"a":["p","M53"],"b":["p","M104"]},"M_Round1#120":{"s":"M_Round1","n":120,"a":["p","M57"],"b":["p","M236"]},"M_Round1#121":{"s":"M_Round1","n":121,"a":["p","M5"],"b":["p","M134"]},"M_Round1#122":{"s":"M_Round1","n":122,"a":["p","M68"],"b":["p","M58"]},"M_Round1#123":{"s":"M_Round1","n":123,"a":["p","M146"],"b":["p","M212"]},"M_Round1#124":{"s":"M_Round1","n":124,"a":["p","M128"],"b":["p","M200"]},"M_Round1#125":{"s":"M_Round1","n":125,"a":["p","M9"],"b":["p","M23"]},"M_Round1#126":{"s":"M_Round1","n":126,"a":["p","M205"],"b":["p","M142"]},"M_Round1#127":{"s":"M_Round1","n":127,"a":["p","M43"],"b":["p","M265"]},"M_Round1#128":{"s":"M_Round1","n":128,"a":["p","M116"],"b":["p","M148"]},"M_Round1#129":{"s":"M_Round1","n":129,"a":["p","M113"],"b":["p","M190"]},"M_Round1#130":{"s":"M_Round1","n":130,"a":["p","M16"],"b":["p","M207"]},"M_Round1#131":{"s":"M_Round1","n":131,"a":["p","M187"],"b":["p","M35"]},"M_Round1#132":{"s":"M_Round1","n":132,"a":["p","M186"],"b":["p","M199"]},"M_Round1#133":{"s":"M_Round1","n":133,"a":["p","M270"],"b":["p","M90"]},"M_Round1#134":{"s":"M_Round1","n":134,"a":["p","M239"],"b":["p","M88"]},"M_Round1#135":{"s":"M_Round1","n":135,"a":["p","M191"],"b":["p","M245"]},"M_Cup_Prelim#1":{"s":"M_Cup_Prelim","n":1,"a":["w","M_Round1#1"],"b":["w","M_Round1#2"]},"M_Cup_Prelim#2":{"s":"M_Cup_Prelim","n":2,"a":["w","M_Round1#3"],"b":["w","M_Round1#4"]},"M_Cup_Prelim#3":{"s":"M_Cup_Prelim","n":3,"a":["w","M_Round1#5"],"b":["w","M_Round1#6"]},"M_Cup_Prelim#4":{"s":"M_Cup_Prelim","n":4,"a":["w","M_Round1#7"],"b":["w","M_Round1#8"]},"M_Cup_Prelim#5":{"s":"M_Cup_Prelim","n":5,"a":["w","M_Round1#9"],"b":["w","M_Round1#10"]},"M_Cup_Prelim#6":{"s":"M_Cup_Prelim","n":6,"a":["w","M_Round1#11"],"b":["w","M_Round1#12"]},"M_Cup_Prelim#7":{"s":"M_Cup_Prelim","n":7,"a":["w","M_Round1#13"],"b":["w","M_Round1#14"]},"M_Cup_R128#1":{"s":"M_Cup_R128","n":1,"a":["w","M_Round1#15"],"b":["w","M_Cup_Prelim#1"]},"M_Cup_R128#2":{"s":"M_Cup_R128","n":2,"a":["w","M_Round1#16"],"b":["w","M_Cup_Prelim#2"]},"M_Cup_R128#3":{"s":"M_Cup_R128","n":3,"a":["w","M_Round1#17"],"b":["w","M_Cup_Prelim#3"]},"M_Cup_R128#4":{"s":"M_Cup_R128","n":4,"a":["w","M_Round1#18"],"b":["w","M_Cup_Prelim#4"]},"M_Cup_R128#5":{"s":"M_Cup_R128","n":5,"a":["w","M_Round1#19"],"b":["w","M_Cup_Prelim#5"]},"M_Cup_R128#6":{"s":"M_Cup_R128","n":6,"a":["w","M_Round1#20"],"b":["w","M_Cup_Prelim#6"]},"M_Cup_R128#7":{"s":"M_Cup_R128","n":7,"a":["w","M_Round1#21"],"b":["w","M_Cup_Prelim#7"]},"M_Cup_R128#8":{"s":"M_Cup_R128","n":8,"a":["w","M_Round1#22"],"b":["w","M_Round1#23"]},"M_Cup_R128#9":{"s":"M_Cup_R128","n":9,"a":["w","M_Round1#24"],"b":["w","M_Round1#25"]},"M_Cup_R128#10":{"s":"M_Cup_R128","n":10,"a":["w","M_Round1#26"],"b":["w","M_Round1#27"]},"M_Cup_R128#11":{"s":"M_Cup_R128","n":11,"a":["w","M_Round1#28"],"b":["w","M_Round1#29"]},"M_Cup_R128#12":{"s":"M_Cup_R128","n":12,"a":["w","M_Round1#30"],"b":["w","M_Round1#31"]},"M_Cup_R128#13":{"s":"M_Cup_R128","n":13,"a":["w","M_Round1#32"],"b":["w","M_Round1#33"]},"M_Cup_R128#14":{"s":"M_Cup_R128","n":14,"a":["w","M_Round1#34"],"b":["w","M_Round1#35"]},"M_Cup_R128#15":{"s":"M_Cup_R128","n":15,"a":["w","M_Round1#36"],"b":["w","M_Round1#37"]},"M_Cup_R128#16":{"s":"M_Cup_R128","n":16,"a":["w","M_Round1#38"],"b":["w","M_Round1#39"]},"M_Cup_R128#17":{"s":"M_Cup_R128","n":17,"a":["w","M_Round1#40"],"b":["w","M_Round1#41"]},"M_Cup_R128#18":{"s":"M_Cup_R128","n":18,"a":["w","M_Round1#42"],"b":["w","M_Round1#43"]},"M_Cup_R128#19":{"s":"M_Cup_R128","n":19,"a":["w","M_Round1#44"],"b":["w","M_Round1#45"]},"M_Cup_R128#20":{"s":"M_Cup_R128","n":20,"a":["w","M_Round1#46"],"b":["w","M_Round1#47"]},"M_Cup_R128#21":{"s":"M_Cup_R128","n":21,"a":["w","M_Round1#48"],"b":["w","M_Round1#49"]},"M_Cup_R128#22":{"s":"M_Cup_R128","n":22,"a":["w","M_Round1#50"],"b":["w","M_Round1#51"]},"M_Cup_R128#23":{"s":"M_Cup_R128","n":23,"a":["w","M_Round1#52"],"b":["w","M_Round1#53"]},"M_Cup_R128#24":{"s":"M_Cup_R128","n":24,"a":["w","M_Round1#54"],"b":["w","M_Round1#55"]},"M_Cup_R128#25":{"s":"M_Cup_R128","n":25,"a":["w","M_Round1#56"],"b":["w","M_Round1#57"]},"M_Cup_R128#26":{"s":"M_Cup_R128","n":26,"a":["w","M_Round1#58"],"b":["w","M_Round1#59"]},"M_Cup_R128#27":{"s":"M_Cup_R128","n":27,"a":["w","M_Round1#60"],"b":["w","M_Round1#61"]},"M_Cup_R128#28":{"s":"M_Cup_R128","n":28,"a":["w","M_Round1#62"],"b":["w","M_Round1#63"]},"M_Cup_R128#29":{"s":"M_Cup_R128","n":29,"a":["w","M_Round1#64"],"b":["w","M_Round1#65"]},"M_Cup_R128#30":{"s":"M_Cup_R128","n":30,"a":["w","M_Round1#66"],"b":["w","M_Round1#67"]},"M_Cup_R128#31":{"s":"M_Cup_R128","n":31,"a":["w","M_Round1#68"],"b":["w","M_Round1#69"]},"M_Cup_R128#32":{"s":"M_Cup_R128","n":32,"a":["w","M_Round1#70"],"b":["w","M_Round1#71"]},"M_Cup_R128#33":{"s":"M_Cup_R128","n":33,"a":["w","M_Round1#72"],"b":["w","M_Round1#73"]},"M_Cup_R128#34":{"s":"M_Cup_R128","n":34,"a":["w","M_Round1#74"],"b":["w","M_Round1#75"]},"M_Cup_R128#35":{"s":"M_Cup_R128","n":35,"a":["w","M_Round1#76"],"b":["w","M_Round1#77"]},"M_Cup_R128#36":{"s":"M_Cup_R128","n":36,"a":["w","M_Round1#78"],"b":["w","M_Round1#79"]},"M_Cup_R128#37":{"s":"M_Cup_R128","n":37,"a":["w","M_Round1#80"],"b":["w","M_Round1#81"]},"M_Cup_R128#38":{"s":"M_Cup_R128","n":38,"a":["w","M_Round1#82"],"b":["w","M_Round1#83"]},"M_Cup_R128#39":{"s":"M_Cup_R128","n":39,"a":["w","M_Round1#84"],"b":["w","M_Round1#85"]},"M_Cup_R128#40":{"s":"M_Cup_R128","n":40,"a":["w","M_Round1#86"],"b":["w","M_Round1#87"]},"M_Cup_R128#41":{"s":"M_Cup_R128","n":41,"a":["w","M_Round1#88"],"b":["w","M_Round1#89"]},"M_Cup_R128#42":{"s":"M_Cup_R128","n":42,"a":["w","M_Round1#90"],"b":["w","M_Round1#91"]},"M_Cup_R128#43":{"s":"M_Cup_R128","n":43,"a":["w","M_Round1#92"],"b":["w","M_Round1#93"]},"M_Cup_R128#44":{"s":"M_Cup_R128","n":44,"a":["w","M_Round1#94"],"b":["w","M_Round1#95"]},"M_Cup_R128#45":{"s":"M_Cup_R128","n":45,"a":["w","M_Round1#96"],"b":["w","M_Round1#97"]},"M_Cup_R128#46":{"s":"M_Cup_R128","n":46,"a":["w","M_Round1#98"],"b":["w","M_Round1#99"]},"M_Cup_R128#47":{"s":"M_Cup_R128","n":47,"a":["w","M_Round1#100"],"b":["w","M_Round1#101"]},"M_Cup_R128#48":{"s":"M_Cup_R128","n":48,"a":["w","M_Round1#102"],"b":["w","M_Round1#103"]},"M_Cup_R128#49":{"s":"M_Cup_R128","n":49,"a":["w","M_Round1#104"],"b":["w","M_Round1#105"]},"M_Cup_R128#50":{"s":"M_Cup_R128","n":50,"a":["w","M_Round1#106"],"b":["w","M_Round1#107"]},"M_Cup_R128#51":{"s":"M_Cup_R128","n":51,"a":["w","M_Round1#108"],"b":["w","M_Round1#109"]},"M_Cup_R128#52":{"s":"M_Cup_R128","n":52,"a":["w","M_Round1#110"],"b":["w","M_Round1#111"]},"M_Cup_R128#53":{"s":"M_Cup_R128","n":53,"a":["w","M_Round1#112"],"b":["w","M_Round1#113"]},"M_Cup_R128#54":{"s":"M_Cup_R128","n":54,"a":["w","M_Round1#114"],"b":["w","M_Round1#115"]},"M_Cup_R128#55":{"s":"M_Cup_R128","n":55,"a":["w","M_Round1#116"],"b":["w","M_Round1#117"]},"M_Cup_R128#56":{"s":"M_Cup_R128","n":56,"a":["w","M_Round1#118"],"b":["w","M_Round1#119"]},"M_Cup_R128#57":{"s":"M_Cup_R128","n":57,"a":["w","M_Round1#120"],"b":["w","M_Round1#121"]},"M_Cup_R128#58":{"s":"M_Cup_R128","n":58,"a":["w","M_Round1#122"],"b":["w","M_Round1#123"]},"M_Cup_R128#59":{"s":"M_Cup_R128","n":59,"a":["w","M_Round1#124"],"b":["w","M_Round1#125"]},"M_Cup_R128#60":{"s":"M_Cup_R128","n":60,"a":["w","M_Round1#126"],"b":["w","M_Round1#127"]},"M_Cup_R128#61":{"s":"M_Cup_R128","n":61,"a":["w","M_Round1#128"],"b":["w","M_Round1#129"]},"M_Cup_R128#62":{"s":"M_Cup_R128","n":62,"a":["w","M_Round1#130"],"b":["w","M_Round1#131"]},"M_Cup_R128#63":{"s":"M_Cup_R128","n":63,"a":["w","M_Round1#132"],"b":["w","M_Round1#133"]},"M_Cup_R128#64":{"s":"M_Cup_R128","n":64,"a":["w","M_Round1#134"],"b":["w","M_Round1#135"]},"M_Cup_R64#1":{"s":"M_Cup_R64","n":1,"a":["w","M_Cup_R128#1"],"b":["w","M_Cup_R128#2"]},"M_Cup_R64#2":{"s":"M_Cup_R64","n":2,"a":["w","M_Cup_R128#3"],"b":["w","M_Cup_R128#4"]},"M_Cup_R64#3":{"s":"M_Cup_R64","n":3,"a":["w","M_Cup_R128#5"],"b":["w","M_Cup_R128#6"]},"M_Cup_R64#4":{"s":"M_Cup_R64","n":4,"a":["w","M_Cup_R128#7"],"b":["w","M_Cup_R128#8"]},"M_Cup_R64#5":{"s":"M_Cup_R64","n":5,"a":["w","M_Cup_R128#9"],"b":["w","M_Cup_R128#10"]},"M_Cup_R64#6":{"s":"M_Cup_R64","n":6,"a":["w","M_Cup_R128#11"],"b":["w","M_Cup_R128#12"]},"M_Cup_R64#7":{"s":"M_Cup_R64","n":7,"a":["w","M_Cup_R128#13"],"b":["w","M_Cup_R128#14"]},"M_Cup_R64#8":{"s":"M_Cup_R64","n":8,"a":["w","M_Cup_R128#15"],"b":["w","M_Cup_R128#16"]},"M_Cup_R64#9":{"s":"M_Cup_R64","n":9,"a":["w","M_Cup_R128#17"],"b":["w","M_Cup_R128#18"]},"M_Cup_R64#10":{"s":"M_Cup_R64","n":10,"a":["w","M_Cup_R128#19"],"b":["w","M_Cup_R128#20"]},"M_Cup_R64#11":{"s":"M_Cup_R64","n":11,"a":["w","M_Cup_R128#21"],"b":["w","M_Cup_R128#22"]},"M_Cup_R64#12":{"s":"M_Cup_R64","n":12,"a":["w","M_Cup_R128#23"],"b":["w","M_Cup_R128#24"]},"M_Cup_R64#13":{"s":"M_Cup_R64","n":13,"a":["w","M_Cup_R128#25"],"b":["w","M_Cup_R128#26"]},"M_Cup_R64#14":{"s":"M_Cup_R64","n":14,"a":["w","M_Cup_R128#27"],"b":["w","M_Cup_R128#28"]},"M_Cup_R64#15":{"s":"M_Cup_R64","n":15,"a":["w","M_Cup_R128#29"],"b":["w","M_Cup_R128#30"]},"M_Cup_R64#16":{"s":"M_Cup_R64","n":16,"a":["w","M_Cup_R128#31"],"b":["w","M_Cup_R128#32"]},"M_Cup_R64#17":{"s":"M_Cup_R64","n":17,"a":["w","M_Cup_R128#33"],"b":["w","M_Cup_R128#34"]},"M_Cup_R64#18":{"s":"M_Cup_R64","n":18,"a":["w","M_Cup_R128#35"],"b":["w","M_Cup_R128#36"]},"M_Cup_R64#19":{"s":"M_Cup_R64","n":19,"a":["w","M_Cup_R128#37"],"b":["w","M_Cup_R128#38"]},"M_Cup_R64#20":{"s":"M_Cup_R64","n":20,"a":["w","M_Cup_R128#39"],"b":["w","M_Cup_R128#40"]},"M_Cup_R64#21":{"s":"M_Cup_R64","n":21,"a":["w","M_Cup_R128#41"],"b":["w","M_Cup_R128#42"]},"M_Cup_R64#22":{"s":"M_Cup_R64","n":22,"a":["w","M_Cup_R128#43"],"b":["w","M_Cup_R128#44"]},"M_Cup_R64#23":{"s":"M_Cup_R64","n":23,"a":["w","M_Cup_R128#45"],"b":["w","M_Cup_R128#46"]},"M_Cup_R64#24":{"s":"M_Cup_R64","n":24,"a":["w","M_Cup_R128#47"],"b":["w","M_Cup_R128#48"]},"M_Cup_R64#25":{"s":"M_Cup_R64","n":25,"a":["w","M_Cup_R128#49"],"b":["w","M_Cup_R128#50"]},"M_Cup_R64#26":{"s":"M_Cup_R64","n":26,"a":["w","M_Cup_R128#51"],"b":["w","M_Cup_R128#52"]},"M_Cup_R64#27":{"s":"M_Cup_R64","n":27,"a":["w","M_Cup_R128#53"],"b":["w","M_Cup_R128#54"]},"M_Cup_R64#28":{"s":"M_Cup_R64","n":28,"a":["w","M_Cup_R128#55"],"b":["w","M_Cup_R128#56"]},"M_Cup_R64#29":{"s":"M_Cup_R64","n":29,"a":["w","M_Cup_R128#57"],"b":["w","M_Cup_R128#58"]},"M_Cup_R64#30":{"s":"M_Cup_R64","n":30,"a":["w","M_Cup_R128#59"],"b":["w","M_Cup_R128#60"]},"M_Cup_R64#31":{"s":"M_Cup_R64","n":31,"a":["w","M_Cup_R128#61"],"b":["w","M_Cup_R128#62"]},"M_Cup_R64#32":{"s":"M_Cup_R64","n":32,"a":["w","M_Cup_R128#63"],"b":["w","M_Cup_R128#64"]},"M_Cup_R32#1":{"s":"M_Cup_R32","n":1,"a":["w","M_Cup_R64#1"],"b":["w","M_Cup_R64#2"]},"M_Cup_R32#2":{"s":"M_Cup_R32","n":2,"a":["w","M_Cup_R64#3"],"b":["w","M_Cup_R64#4"]},"M_Cup_R32#3":{"s":"M_Cup_R32","n":3,"a":["w","M_Cup_R64#5"],"b":["w","M_Cup_R64#6"]},"M_Cup_R32#4":{"s":"M_Cup_R32","n":4,"a":["w","M_Cup_R64#7"],"b":["w","M_Cup_R64#8"]},"M_Cup_R32#5":{"s":"M_Cup_R32","n":5,"a":["w","M_Cup_R64#9"],"b":["w","M_Cup_R64#10"]},"M_Cup_R32#6":{"s":"M_Cup_R32","n":6,"a":["w","M_Cup_R64#11"],"b":["w","M_Cup_R64#12"]},"M_Cup_R32#7":{"s":"M_Cup_R32","n":7,"a":["w","M_Cup_R64#13"],"b":["w","M_Cup_R64#14"]},"M_Cup_R32#8":{"s":"M_Cup_R32","n":8,"a":["w","M_Cup_R64#15"],"b":["w","M_Cup_R64#16"]},"M_Cup_R32#9":{"s":"M_Cup_R32","n":9,"a":["w","M_Cup_R64#17"],"b":["w","M_Cup_R64#18"]},"M_Cup_R32#10":{"s":"M_Cup_R32","n":10,"a":["w","M_Cup_R64#19"],"b":["w","M_Cup_R64#20"]},"M_Cup_R32#11":{"s":"M_Cup_R32","n":11,"a":["w","M_Cup_R64#21"],"b":["w","M_Cup_R64#22"]},"M_Cup_R32#12":{"s":"M_Cup_R32","n":12,"a":["w","M_Cup_R64#23"],"b":["w","M_Cup_R64#24"]},"M_Cup_R32#13":{"s":"M_Cup_R32","n":13,"a":["w","M_Cup_R64#25"],"b":["w","M_Cup_R64#26"]},"M_Cup_R32#14":{"s":"M_Cup_R32","n":14,"a":["w","M_Cup_R64#27"],"b":["w","M_Cup_R64#28"]},"M_Cup_R32#15":{"s":"M_Cup_R32","n":15,"a":["w","M_Cup_R64#29"],"b":["w","M_Cup_R64#30"]},"M_Cup_R32#16":{"s":"M_Cup_R32","n":16,"a":["w","M_Cup_R64#31"],"b":["w","M_Cup_R64#32"]},"M_Cup_R16#1":{"s":"M_Cup_R16","n":1,"a":["w","M_Cup_R32#1"],"b":["w","M_Cup_R32#2"]},"M_Cup_R16#2":{"s":"M_Cup_R16","n":2,"a":["w","M_Cup_R32#3"],"b":["w","M_Cup_R32#4"]},"M_Cup_R16#3":{"s":"M_Cup_R16","n":3,"a":["w","M_Cup_R32#5"],"b":["w","M_Cup_R32#6"]},"M_Cup_R16#4":{"s":"M_Cup_R16","n":4,"a":["w","M_Cup_R32#7"],"b":["w","M_Cup_R32#8"]},"M_Cup_R16#5":{"s":"M_Cup_R16","n":5,"a":["w","M_Cup_R32#9"],"b":["w","M_Cup_R32#10"]},"M_Cup_R16#6":{"s":"M_Cup_R16","n":6,"a":["w","M_Cup_R32#11"],"b":["w","M_Cup_R32#12"]},"M_Cup_R16#7":{"s":"M_Cup_R16","n":7,"a":["w","M_Cup_R32#13"],"b":["w","M_Cup_R32#14"]},"M_Cup_R16#8":{"s":"M_Cup_R16","n":8,"a":["w","M_Cup_R32#15"],"b":["w","M_Cup_R32#16"]},"M_Cup_QF#1":{"s":"M_Cup_QF","n":1,"a":["w","M_Cup_R16#1"],"b":["w","M_Cup_R16#2"]},"M_Cup_QF#2":{"s":"M_Cup_QF","n":2,"a":["w","M_Cup_R16#3"],"b":["w","M_Cup_R16#4"]},"M_Cup_QF#3":{"s":"M_Cup_QF","n":3,"a":["w","M_Cup_R16#5"],"b":["w","M_Cup_R16#6"]},"M_Cup_QF#4":{"s":"M_Cup_QF","n":4,"a":["w","M_Cup_R16#7"],"b":["w","M_Cup_R16#8"]},"M_Cup_SF#1":{"s":"M_Cup_SF","n":1,"a":["w","M_Cup_QF#1"],"b":["w","M_Cup_QF#2"]},"M_Cup_SF#2":{"s":"M_Cup_SF","n":2,"a":["w","M_Cup_QF#3"],"b":["w","M_Cup_QF#4"]},"M_Cup_Final#1":{"s":"M_Cup_Final","n":1,"a":["w","M_Cup_SF#1"],"b":["w","M_Cup_SF#2"]},"M_Plate_Prelim#1":{"s":"M_Plate_Prelim","n":1,"a":["l","M_Round1#1"],"b":["l","M_Round1#2"]},"M_Plate_Prelim#2":{"s":"M_Plate_Prelim","n":2,"a":["l","M_Round1#3"],"b":["l","M_Round1#4"]},"M_Plate_Prelim#3":{"s":"M_Plate_Prelim","n":3,"a":["l","M_Round1#5"],"b":["l","M_Round1#6"]},"M_Plate_Prelim#4":{"s":"M_Plate_Prelim","n":4,"a":["l","M_Round1#7"],"b":["l","M_Round1#8"]},"M_Plate_Prelim#5":{"s":"M_Plate_Prelim","n":5,"a":["l","M_Round1#9"],"b":["l","M_Round1#10"]},"M_Plate_Prelim#6":{"s":"M_Plate_Prelim","n":6,"a":["l","M_Round1#11"],"b":["l","M_Round1#12"]},"M_Plate_Prelim#7":{"s":"M_Plate_Prelim","n":7,"a":["l","M_Round1#13"],"b":["l","M_Round1#14"]},"M_Plate_R128#1":{"s":"M_Plate_R128","n":1,"a":["l","M_Round1#15"],"b":["w","M_Plate_Prelim#1"]},"M_Plate_R128#2":{"s":"M_Plate_R128","n":2,"a":["l","M_Round1#16"],"b":["w","M_Plate_Prelim#2"]},"M_Plate_R128#3":{"s":"M_Plate_R128","n":3,"a":["l","M_Round1#17"],"b":["w","M_Plate_Prelim#3"]},"M_Plate_R128#4":{"s":"M_Plate_R128","n":4,"a":["l","M_Round1#18"],"b":["w","M_Plate_Prelim#4"]},"M_Plate_R128#5":{"s":"M_Plate_R128","n":5,"a":["l","M_Round1#19"],"b":["w","M_Plate_Prelim#5"]},"M_Plate_R128#6":{"s":"M_Plate_R128","n":6,"a":["l","M_Round1#20"],"b":["w","M_Plate_Prelim#6"]},"M_Plate_R128#7":{"s":"M_Plate_R128","n":7,"a":["l","M_Round1#21"],"b":["w","M_Plate_Prelim#7"]},"M_Plate_R128#8":{"s":"M_Plate_R128","n":8,"a":["l","M_Round1#22"],"b":["l","M_Round1#23"]},"M_Plate_R128#9":{"s":"M_Plate_R128","n":9,"a":["l","M_Round1#24"],"b":["l","M_Round1#25"]},"M_Plate_R128#10":{"s":"M_Plate_R128","n":10,"a":["l","M_Round1#26"],"b":["l","M_Round1#27"]},"M_Plate_R128#11":{"s":"M_Plate_R128","n":11,"a":["l","M_Round1#28"],"b":["l","M_Round1#29"]},"M_Plate_R128#12":{"s":"M_Plate_R128","n":12,"a":["l","M_Round1#30"],"b":["l","M_Round1#31"]},"M_Plate_R128#13":{"s":"M_Plate_R128","n":13,"a":["l","M_Round1#32"],"b":["l","M_Round1#33"]},"M_Plate_R128#14":{"s":"M_Plate_R128","n":14,"a":["l","M_Round1#34"],"b":["l","M_Round1#35"]},"M_Plate_R128#15":{"s":"M_Plate_R128","n":15,"a":["l","M_Round1#36"],"b":["l","M_Round1#37"]},"M_Plate_R128#16":{"s":"M_Plate_R128","n":16,"a":["l","M_Round1#38"],"b":["l","M_Round1#39"]},"M_Plate_R128#17":{"s":"M_Plate_R128","n":17,"a":["l","M_Round1#40"],"b":["l","M_Round1#41"]},"M_Plate_R128#18":{"s":"M_Plate_R128","n":18,"a":["l","M_Round1#42"],"b":["l","M_Round1#43"]},"M_Plate_R128#19":{"s":"M_Plate_R128","n":19,"a":["l","M_Round1#44"],"b":["l","M_Round1#45"]},"M_Plate_R128#20":{"s":"M_Plate_R128","n":20,"a":["l","M_Round1#46"],"b":["l","M_Round1#47"]},"M_Plate_R128#21":{"s":"M_Plate_R128","n":21,"a":["l","M_Round1#48"],"b":["l","M_Round1#49"]},"M_Plate_R128#22":{"s":"M_Plate_R128","n":22,"a":["l","M_Round1#50"],"b":["l","M_Round1#51"]},"M_Plate_R128#23":{"s":"M_Plate_R128","n":23,"a":["l","M_Round1#52"],"b":["l","M_Round1#53"]},"M_Plate_R128#24":{"s":"M_Plate_R128","n":24,"a":["l","M_Round1#54"],"b":["l","M_Round1#55"]},"M_Plate_R128#25":{"s":"M_Plate_R128","n":25,"a":["l","M_Round1#56"],"b":["l","M_Round1#57"]},"M_Plate_R128#26":{"s":"M_Plate_R128","n":26,"a":["l","M_Round1#58"],"b":["l","M_Round1#59"]},"M_Plate_R128#27":{"s":"M_Plate_R128","n":27,"a":["l","M_Round1#60"],"b":["l","M_Round1#61"]},"M_Plate_R128#28":{"s":"M_Plate_R128","n":28,"a":["l","M_Round1#62"],"b":["l","M_Round1#63"]},"M_Plate_R128#29":{"s":"M_Plate_R128","n":29,"a":["l","M_Round1#64"],"b":["l","M_Round1#65"]},"M_Plate_R128#30":{"s":"M_Plate_R128","n":30,"a":["l","M_Round1#66"],"b":["l","M_Round1#67"]},"M_Plate_R128#31":{"s":"M_Plate_R128","n":31,"a":["l","M_Round1#68"],"b":["l","M_Round1#69"]},"M_Plate_R128#32":{"s":"M_Plate_R128","n":32,"a":["l","M_Round1#70"],"b":["l","M_Round1#71"]},"M_Plate_R128#33":{"s":"M_Plate_R128","n":33,"a":["l","M_Round1#72"],"b":["l","M_Round1#73"]},"M_Plate_R128#34":{"s":"M_Plate_R128","n":34,"a":["l","M_Round1#74"],"b":["l","M_Round1#75"]},"M_Plate_R128#35":{"s":"M_Plate_R128","n":35,"a":["l","M_Round1#76"],"b":["l","M_Round1#77"]},"M_Plate_R128#36":{"s":"M_Plate_R128","n":36,"a":["l","M_Round1#78"],"b":["l","M_Round1#79"]},"M_Plate_R128#37":{"s":"M_Plate_R128","n":37,"a":["l","M_Round1#80"],"b":["l","M_Round1#81"]},"M_Plate_R128#38":{"s":"M_Plate_R128","n":38,"a":["l","M_Round1#82"],"b":["l","M_Round1#83"]},"M_Plate_R128#39":{"s":"M_Plate_R128","n":39,"a":["l","M_Round1#84"],"b":["l","M_Round1#85"]},"M_Plate_R128#40":{"s":"M_Plate_R128","n":40,"a":["l","M_Round1#86"],"b":["l","M_Round1#87"]},"M_Plate_R128#41":{"s":"M_Plate_R128","n":41,"a":["l","M_Round1#88"],"b":["l","M_Round1#89"]},"M_Plate_R128#42":{"s":"M_Plate_R128","n":42,"a":["l","M_Round1#90"],"b":["l","M_Round1#91"]},"M_Plate_R128#43":{"s":"M_Plate_R128","n":43,"a":["l","M_Round1#92"],"b":["l","M_Round1#93"]},"M_Plate_R128#44":{"s":"M_Plate_R128","n":44,"a":["l","M_Round1#94"],"b":["l","M_Round1#95"]},"M_Plate_R128#45":{"s":"M_Plate_R128","n":45,"a":["l","M_Round1#96"],"b":["l","M_Round1#97"]},"M_Plate_R128#46":{"s":"M_Plate_R128","n":46,"a":["l","M_Round1#98"],"b":["l","M_Round1#99"]},"M_Plate_R128#47":{"s":"M_Plate_R128","n":47,"a":["l","M_Round1#100"],"b":["l","M_Round1#101"]},"M_Plate_R128#48":{"s":"M_Plate_R128","n":48,"a":["l","M_Round1#102"],"b":["l","M_Round1#103"]},"M_Plate_R128#49":{"s":"M_Plate_R128","n":49,"a":["l","M_Round1#104"],"b":["l","M_Round1#105"]},"M_Plate_R128#50":{"s":"M_Plate_R128","n":50,"a":["l","M_Round1#106"],"b":["l","M_Round1#107"]},"M_Plate_R128#51":{"s":"M_Plate_R128","n":51,"a":["l","M_Round1#108"],"b":["l","M_Round1#109"]},"M_Plate_R128#52":{"s":"M_Plate_R128","n":52,"a":["l","M_Round1#110"],"b":["l","M_Round1#111"]},"M_Plate_R128#53":{"s":"M_Plate_R128","n":53,"a":["l","M_Round1#112"],"b":["l","M_Round1#113"]},"M_Plate_R128#54":{"s":"M_Plate_R128","n":54,"a":["l","M_Round1#114"],"b":["l","M_Round1#115"]},"M_Plate_R128#55":{"s":"M_Plate_R128","n":55,"a":["l","M_Round1#116"],"b":["l","M_Round1#117"]},"M_Plate_R128#56":{"s":"M_Plate_R128","n":56,"a":["l","M_Round1#118"],"b":["l","M_Round1#119"]},"M_Plate_R128#57":{"s":"M_Plate_R128","n":57,"a":["l","M_Round1#120"],"b":["l","M_Round1#121"]},"M_Plate_R128#58":{"s":"M_Plate_R128","n":58,"a":["l","M_Round1#122"],"b":["l","M_Round1#123"]},"M_Plate_R128#59":{"s":"M_Plate_R128","n":59,"a":["l","M_Round1#124"],"b":["l","M_Round1#125"]},"M_Plate_R128#60":{"s":"M_Plate_R128","n":60,"a":["l","M_Round1#126"],"b":["l","M_Round1#127"]},"M_Plate_R128#61":{"s":"M_Plate_R128","n":61,"a":["l","M_Round1#128"],"b":["l","M_Round1#129"]},"M_Plate_R128#62":{"s":"M_Plate_R128","n":62,"a":["l","M_Round1#130"],"b":["l","M_Round1#131"]},"M_Plate_R128#63":{"s":"M_Plate_R128","n":63,"a":["l","M_Round1#132"],"b":["l","M_Round1#133"]},"M_Plate_R128#64":{"s":"M_Plate_R128","n":64,"a":["l","M_Round1#134"],"b":["l","M_Round1#135"]},"M_Plate_R64#1":{"s":"M_Plate_R64","n":1,"a":["w","M_Plate_R128#1"],"b":["w","M_Plate_R128#2"]},"M_Plate_R64#2":{"s":"M_Plate_R64","n":2,"a":["w","M_Plate_R128#3"],"b":["w","M_Plate_R128#4"]},"M_Plate_R64#3":{"s":"M_Plate_R64","n":3,"a":["w","M_Plate_R128#5"],"b":["w","M_Plate_R128#6"]},"M_Plate_R64#4":{"s":"M_Plate_R64","n":4,"a":["w","M_Plate_R128#7"],"b":["w","M_Plate_R128#8"]},"M_Plate_R64#5":{"s":"M_Plate_R64","n":5,"a":["w","M_Plate_R128#9"],"b":["w","M_Plate_R128#10"]},"M_Plate_R64#6":{"s":"M_Plate_R64","n":6,"a":["w","M_Plate_R128#11"],"b":["w","M_Plate_R128#12"]},"M_Plate_R64#7":{"s":"M_Plate_R64","n":7,"a":["w","M_Plate_R128#13"],"b":["w","M_Plate_R128#14"]},"M_Plate_R64#8":{"s":"M_Plate_R64","n":8,"a":["w","M_Plate_R128#15"],"b":["w","M_Plate_R128#16"]},"M_Plate_R64#9":{"s":"M_Plate_R64","n":9,"a":["w","M_Plate_R128#17"],"b":["w","M_Plate_R128#18"]},"M_Plate_R64#10":{"s":"M_Plate_R64","n":10,"a":["w","M_Plate_R128#19"],"b":["w","M_Plate_R128#20"]},"M_Plate_R64#11":{"s":"M_Plate_R64","n":11,"a":["w","M_Plate_R128#21"],"b":["w","M_Plate_R128#22"]},"M_Plate_R64#12":{"s":"M_Plate_R64","n":12,"a":["w","M_Plate_R128#23"],"b":["w","M_Plate_R128#24"]},"M_Plate_R64#13":{"s":"M_Plate_R64","n":13,"a":["w","M_Plate_R128#25"],"b":["w","M_Plate_R128#26"]},"M_Plate_R64#14":{"s":"M_Plate_R64","n":14,"a":["w","M_Plate_R128#27"],"b":["w","M_Plate_R128#28"]},"M_Plate_R64#15":{"s":"M_Plate_R64","n":15,"a":["w","M_Plate_R128#29"],"b":["w","M_Plate_R128#30"]},"M_Plate_R64#16":{"s":"M_Plate_R64","n":16,"a":["w","M_Plate_R128#31"],"b":["w","M_Plate_R128#32"]},"M_Plate_R64#17":{"s":"M_Plate_R64","n":17,"a":["w","M_Plate_R128#33"],"b":["w","M_Plate_R128#34"]},"M_Plate_R64#18":{"s":"M_Plate_R64","n":18,"a":["w","M_Plate_R128#35"],"b":["w","M_Plate_R128#36"]},"M_Plate_R64#19":{"s":"M_Plate_R64","n":19,"a":["w","M_Plate_R128#37"],"b":["w","M_Plate_R128#38"]},"M_Plate_R64#20":{"s":"M_Plate_R64","n":20,"a":["w","M_Plate_R128#39"],"b":["w","M_Plate_R128#40"]},"M_Plate_R64#21":{"s":"M_Plate_R64","n":21,"a":["w","M_Plate_R128#41"],"b":["w","M_Plate_R128#42"]},"M_Plate_R64#22":{"s":"M_Plate_R64","n":22,"a":["w","M_Plate_R128#43"],"b":["w","M_Plate_R128#44"]},"M_Plate_R64#23":{"s":"M_Plate_R64","n":23,"a":["w","M_Plate_R128#45"],"b":["w","M_Plate_R128#46"]},"M_Plate_R64#24":{"s":"M_Plate_R64","n":24,"a":["w","M_Plate_R128#47"],"b":["w","M_Plate_R128#48"]},"M_Plate_R64#25":{"s":"M_Plate_R64","n":25,"a":["w","M_Plate_R128#49"],"b":["w","M_Plate_R128#50"]},"M_Plate_R64#26":{"s":"M_Plate_R64","n":26,"a":["w","M_Plate_R128#51"],"b":["w","M_Plate_R128#52"]},"M_Plate_R64#27":{"s":"M_Plate_R64","n":27,"a":["w","M_Plate_R128#53"],"b":["w","M_Plate_R128#54"]},"M_Plate_R64#28":{"s":"M_Plate_R64","n":28,"a":["w","M_Plate_R128#55"],"b":["w","M_Plate_R128#56"]},"M_Plate_R64#29":{"s":"M_Plate_R64","n":29,"a":["w","M_Plate_R128#57"],"b":["w","M_Plate_R128#58"]},"M_Plate_R64#30":{"s":"M_Plate_R64","n":30,"a":["w","M_Plate_R128#59"],"b":["w","M_Plate_R128#60"]},"M_Plate_R64#31":{"s":"M_Plate_R64","n":31,"a":["w","M_Plate_R128#61"],"b":["w","M_Plate_R128#62"]},"M_Plate_R64#32":{"s":"M_Plate_R64","n":32,"a":["w","M_Plate_R128#63"],"b":["w","M_Plate_R128#64"]},"M_Plate_R32#1":{"s":"M_Plate_R32","n":1,"a":["w","M_Plate_R64#1"],"b":["w","M_Plate_R64#2"]},"M_Plate_R32#2":{"s":"M_Plate_R32","n":2,"a":["w","M_Plate_R64#3"],"b":["w","M_Plate_R64#4"]},"M_Plate_R32#3":{"s":"M_Plate_R32","n":3,"a":["w","M_Plate_R64#5"],"b":["w","M_Plate_R64#6"]},"M_Plate_R32#4":{"s":"M_Plate_R32","n":4,"a":["w","M_Plate_R64#7"],"b":["w","M_Plate_R64#8"]},"M_Plate_R32#5":{"s":"M_Plate_R32","n":5,"a":["w","M_Plate_R64#9"],"b":["w","M_Plate_R64#10"]},"M_Plate_R32#6":{"s":"M_Plate_R32","n":6,"a":["w","M_Plate_R64#11"],"b":["w","M_Plate_R64#12"]},"M_Plate_R32#7":{"s":"M_Plate_R32","n":7,"a":["w","M_Plate_R64#13"],"b":["w","M_Plate_R64#14"]},"M_Plate_R32#8":{"s":"M_Plate_R32","n":8,"a":["w","M_Plate_R64#15"],"b":["w","M_Plate_R64#16"]},"M_Plate_R32#9":{"s":"M_Plate_R32","n":9,"a":["w","M_Plate_R64#17"],"b":["w","M_Plate_R64#18"]},"M_Plate_R32#10":{"s":"M_Plate_R32","n":10,"a":["w","M_Plate_R64#19"],"b":["w","M_Plate_R64#20"]},"M_Plate_R32#11":{"s":"M_Plate_R32","n":11,"a":["w","M_Plate_R64#21"],"b":["w","M_Plate_R64#22"]},"M_Plate_R32#12":{"s":"M_Plate_R32","n":12,"a":["w","M_Plate_R64#23"],"b":["w","M_Plate_R64#24"]},"M_Plate_R32#13":{"s":"M_Plate_R32","n":13,"a":["w","M_Plate_R64#25"],"b":["w","M_Plate_R64#26"]},"M_Plate_R32#14":{"s":"M_Plate_R32","n":14,"a":["w","M_Plate_R64#27"],"b":["w","M_Plate_R64#28"]},"M_Plate_R32#15":{"s":"M_Plate_R32","n":15,"a":["w","M_Plate_R64#29"],"b":["w","M_Plate_R64#30"]},"M_Plate_R32#16":{"s":"M_Plate_R32","n":16,"a":["w","M_Plate_R64#31"],"b":["w","M_Plate_R64#32"]},"M_Plate_R16#1":{"s":"M_Plate_R16","n":1,"a":["w","M_Plate_R32#1"],"b":["w","M_Plate_R32#2"]},"M_Plate_R16#2":{"s":"M_Plate_R16","n":2,"a":["w","M_Plate_R32#3"],"b":["w","M_Plate_R32#4"]},"M_Plate_R16#3":{"s":"M_Plate_R16","n":3,"a":["w","M_Plate_R32#5"],"b":["w","M_Plate_R32#6"]},"M_Plate_R16#4":{"s":"M_Plate_R16","n":4,"a":["w","M_Plate_R32#7"],"b":["w","M_Plate_R32#8"]},"M_Plate_R16#5":{"s":"M_Plate_R16","n":5,"a":["w","M_Plate_R32#9"],"b":["w","M_Plate_R32#10"]},"M_Plate_R16#6":{"s":"M_Plate_R16","n":6,"a":["w","M_Plate_R32#11"],"b":["w","M_Plate_R32#12"]},"M_Plate_R16#7":{"s":"M_Plate_R16","n":7,"a":["w","M_Plate_R32#13"],"b":["w","M_Plate_R32#14"]},"M_Plate_R16#8":{"s":"M_Plate_R16","n":8,"a":["w","M_Plate_R32#15"],"b":["w","M_Plate_R32#16"]},"M_Plate_QF#1":{"s":"M_Plate_QF","n":1,"a":["w","M_Plate_R16#1"],"b":["w","M_Plate_R16#2"]},"M_Plate_QF#2":{"s":"M_Plate_QF","n":2,"a":["w","M_Plate_R16#3"],"b":["w","M_Plate_R16#4"]},"M_Plate_QF#3":{"s":"M_Plate_QF","n":3,"a":["w","M_Plate_R16#5"],"b":["w","M_Plate_R16#6"]},"M_Plate_QF#4":{"s":"M_Plate_QF","n":4,"a":["w","M_Plate_R16#7"],"b":["w","M_Plate_R16#8"]},"M_Plate_SF#1":{"s":"M_Plate_SF","n":1,"a":["w","M_Plate_QF#1"],"b":["w","M_Plate_QF#2"]},"M_Plate_SF#2":{"s":"M_Plate_SF","n":2,"a":["w","M_Plate_QF#3"],"b":["w","M_Plate_QF#4"]},"M_Plate_Final#1":{"s":"M_Plate_Final","n":1,"a":["w","M_Plate_SF#1"],"b":["w","M_Plate_SF#2"]},"F_Round1#1":{"s":"F_Round1","n":1,"a":["p","F5"],"b":["p","F21"]},"F_Round1#2":{"s":"F_Round1","n":2,"a":["p","F39"],"b":["p","F36"]},"F_Round1#3":{"s":"F_Round1","n":3,"a":["p","F61"],"b":["p","F45"]},"F_Round1#4":{"s":"F_Round1","n":4,"a":["p","F7"],"b":["p","F49"]},"F_Round1#5":{"s":"F_Round1","n":5,"a":["p","F1"],"b":["p","F28"]},"F_Round1#6":{"s":"F_Round1","n":6,"a":["p","F53"],"b":["p","F16"]},"F_Round1#7":{"s":"F_Round1","n":7,"a":["p","F51"],"b":["p","F57"]},"F_Round1#8":{"s":"F_Round1","n":8,"a":["p","F65"],"b":["p","F29"]},"F_Round1#9":{"s":"F_Round1","n":9,"a":["p","F30"],"b":["p","F42"]},"F_Round1#10":{"s":"F_Round1","n":10,"a":["p","F48"],"b":["p","F37"]},"F_Round1#11":{"s":"F_Round1","n":11,"a":["p","F6"],"b":["p","F55"]},"F_Round1#12":{"s":"F_Round1","n":12,"a":["p","F62"],"b":["p","F24"]},"F_Round1#13":{"s":"F_Round1","n":13,"a":["p","F4"],"b":["p","F27"]},"F_Round1#14":{"s":"F_Round1","n":14,"a":["p","F35"],"b":["p","F50"]},"F_Round1#15":{"s":"F_Round1","n":15,"a":["p","F43"],"b":["p","F52"]},"F_Round1#16":{"s":"F_Round1","n":16,"a":["p","F14"],"b":["p","F44"]},"F_Round1#17":{"s":"F_Round1","n":17,"a":["p","F25"],"b":["p","F38"]},"F_Round1#18":{"s":"F_Round1","n":18,"a":["p","F23"],"b":["p","F10"]},"F_Round1#19":{"s":"F_Round1","n":19,"a":["p","F63"],"b":["p","F40"]},"F_Round1#20":{"s":"F_Round1","n":20,"a":["p","F12"],"b":["p","F9"]},"F_Round1#21":{"s":"F_Round1","n":21,"a":["p","F2"],"b":["p","F19"]},"F_Round1#22":{"s":"F_Round1","n":22,"a":["p","F11"],"b":["p","F8"]},"F_Round1#23":{"s":"F_Round1","n":23,"a":["p","F22"],"b":["p","F32"]},"F_Round1#24":{"s":"F_Round1","n":24,"a":["p","F3"],"b":["p","F41"]},"F_Round1#25":{"s":"F_Round1","n":25,"a":["p","F18"],"b":["p","F15"]},"F_Round1#26":{"s":"F_Round1","n":26,"a":["p","F17"],"b":["p","F60"]},"F_Round1#27":{"s":"F_Round1","n":27,"a":["p","F26"],"b":["p","F56"]},"F_Round1#28":{"s":"F_Round1","n":28,"a":["p","F64"],"b":["p","F46"]},"F_Round1#29":{"s":"F_Round1","n":29,"a":["p","F20"],"b":["p","F54"]},"F_Round1#30":{"s":"F_Round1","n":30,"a":["p","F58"],"b":["p","F47"]},"F_Round1#31":{"s":"F_Round1","n":31,"a":["p","F34"],"b":["p","F33"]},"F_Round1#32":{"s":"F_Round1","n":32,"a":["p","F13"],"b":["p","F59"]},"F_Cup_Prelim#1":{"s":"F_Cup_Prelim","n":1,"a":["w","F_Round1#1"],"b":["w","F_Round1#2"]},"F_Cup_R32#1":{"s":"F_Cup_R32","n":1,"a":["w","F_Round1#3"],"b":["w","F_Cup_Prelim#1"]},"F_Cup_R32#2":{"s":"F_Cup_R32","n":2,"a":["w","F_Round1#4"],"b":["p","F31"]},"F_Cup_R32#3":{"s":"F_Cup_R32","n":3,"a":["w","F_Round1#5"],"b":["w","F_Round1#6"]},"F_Cup_R32#4":{"s":"F_Cup_R32","n":4,"a":["w","F_Round1#7"],"b":["w","F_Round1#8"]},"F_Cup_R32#5":{"s":"F_Cup_R32","n":5,"a":["w","F_Round1#9"],"b":["w","F_Round1#10"]},"F_Cup_R32#6":{"s":"F_Cup_R32","n":6,"a":["w","F_Round1#11"],"b":["w","F_Round1#12"]},"F_Cup_R32#7":{"s":"F_Cup_R32","n":7,"a":["w","F_Round1#13"],"b":["w","F_Round1#14"]},"F_Cup_R32#8":{"s":"F_Cup_R32","n":8,"a":["w","F_Round1#15"],"b":["w","F_Round1#16"]},"F_Cup_R32#9":{"s":"F_Cup_R32","n":9,"a":["w","F_Round1#17"],"b":["w","F_Round1#18"]},"F_Cup_R32#10":{"s":"F_Cup_R32","n":10,"a":["w","F_Round1#19"],"b":["w","F_Round1#20"]},"F_Cup_R32#11":{"s":"F_Cup_R32","n":11,"a":["w","F_Round1#21"],"b":["w","F_Round1#22"]},"F_Cup_R32#12":{"s":"F_Cup_R32","n":12,"a":["w","F_Round1#23"],"b":["w","F_Round1#24"]},"F_Cup_R32#13":{"s":"F_Cup_R32","n":13,"a":["w","F_Round1#25"],"b":["w","F_Round1#26"]},"F_Cup_R32#14":{"s":"F_Cup_R32","n":14,"a":["w","F_Round1#27"],"b":["w","F_Round1#28"]},"F_Cup_R32#15":{"s":"F_Cup_R32","n":15,"a":["w","F_Round1#29"],"b":["w","F_Round1#30"]},"F_Cup_R32#16":{"s":"F_Cup_R32","n":16,"a":["w","F_Round1#31"],"b":["w","F_Round1#32"]},"F_Cup_R16#1":{"s":"F_Cup_R16","n":1,"a":["w","F_Cup_R32#1"],"b":["w","F_Cup_R32#2"]},"F_Cup_R16#2":{"s":"F_Cup_R16","n":2,"a":["w","F_Cup_R32#3"],"b":["w","F_Cup_R32#4"]},"F_Cup_R16#3":{"s":"F_Cup_R16","n":3,"a":["w","F_Cup_R32#5"],"b":["w","F_Cup_R32#6"]},"F_Cup_R16#4":{"s":"F_Cup_R16","n":4,"a":["w","F_Cup_R32#7"],"b":["w","F_Cup_R32#8"]},"F_Cup_R16#5":{"s":"F_Cup_R16","n":5,"a":["w","F_Cup_R32#9"],"b":["w","F_Cup_R32#10"]},"F_Cup_R16#6":{"s":"F_Cup_R16","n":6,"a":["w","F_Cup_R32#11"],"b":["w","F_Cup_R32#12"]},"F_Cup_R16#7":{"s":"F_Cup_R16","n":7,"a":["w","F_Cup_R32#13"],"b":["w","F_Cup_R32#14"]},"F_Cup_R16#8":{"s":"F_Cup_R16","n":8,"a":["w","F_Cup_R32#15"],"b":["w","F_Cup_R32#16"]},"F_Cup_QF#1":{"s":"F_Cup_QF","n":1,"a":["w","F_Cup_R16#1"],"b":["w","F_Cup_R16#2"]},"F_Cup_QF#2":{"s":"F_Cup_QF","n":2,"a":["w","F_Cup_R16#3"],"b":["w","F_Cup_R16#4"]},"F_Cup_QF#3":{"s":"F_Cup_QF","n":3,"a":["w","F_Cup_R16#5"],"b":["w","F_Cup_R16#6"]},"F_Cup_QF#4":{"s":"F_Cup_QF","n":4,"a":["w","F_Cup_R16#7"],"b":["w","F_Cup_R16#8"]},"F_Cup_SF#1":{"s":"F_Cup_SF","n":1,"a":["w","F_Cup_QF#1"],"b":["w","F_Cup_QF#2"]},"F_Cup_SF#2":{"s":"F_Cup_SF","n":2,"a":["w","F_Cup_QF#3"],"b":["w","F_Cup_QF#4"]},"F_Cup_Final#1":{"s":"F_Cup_Final","n":1,"a":["w","F_Cup_SF#1"],"b":["w","F_Cup_SF#2"]},"F_Plate_R32#1":{"s":"F_Plate_R32","n":1,"a":["l","F_Round1#1"],"b":["l","F_Round1#2"]},"F_Plate_R32#2":{"s":"F_Plate_R32","n":2,"a":["l","F_Round1#3"],"b":["l","F_Round1#4"]},"F_Plate_R32#3":{"s":"F_Plate_R32","n":3,"a":["l","F_Round1#5"],"b":["l","F_Round1#6"]},"F_Plate_R32#4":{"s":"F_Plate_R32","n":4,"a":["l","F_Round1#7"],"b":["l","F_Round1#8"]},"F_Plate_R32#5":{"s":"F_Plate_R32","n":5,"a":["l","F_Round1#9"],"b":["l","F_Round1#10"]},"F_Plate_R32#6":{"s":"F_Plate_R32","n":6,"a":["l","F_Round1#11"],"b":["l","F_Round1#12"]},"F_Plate_R32#7":{"s":"F_Plate_R32","n":7,"a":["l","F_Round1#13"],"b":["l","F_Round1#14"]},"F_Plate_R32#8":{"s":"F_Plate_R32","n":8,"a":["l","F_Round1#15"],"b":["l","F_Round1#16"]},"F_Plate_R32#9":{"s":"F_Plate_R32","n":9,"a":["l","F_Round1#17"],"b":["l","F_Round1#18"]},"F_Plate_R32#10":{"s":"F_Plate_R32","n":10,"a":["l","F_Round1#19"],"b":["l","F_Round1#20"]},"F_Plate_R32#11":{"s":"F_Plate_R32","n":11,"a":["l","F_Round1#21"],"b":["l","F_Round1#22"]},"F_Plate_R32#12":{"s":"F_Plate_R32","n":12,"a":["l","F_Round1#23"],"b":["l","F_Round1#24"]},"F_Plate_R32#13":{"s":"F_Plate_R32","n":13,"a":["l","F_Round1#25"],"b":["l","F_Round1#26"]},"F_Plate_R32#14":{"s":"F_Plate_R32","n":14,"a":["l","F_Round1#27"],"b":["l","F_Round1#28"]},"F_Plate_R32#15":{"s":"F_Plate_R32","n":15,"a":["l","F_Round1#29"],"b":["l","F_Round1#30"]},"F_Plate_R32#16":{"s":"F_Plate_R32","n":16,"a":["l","F_Round1#31"],"b":["l","F_Round1#32"]},"F_Plate_R16#1":{"s":"F_Plate_R16","n":1,"a":["w","F_Plate_R32#1"],"b":["w","F_Plate_R32#2"]},"F_Plate_R16#2":{"s":"F_Plate_R16","n":2,"a":["w","F_Plate_R32#3"],"b":["w","F_Plate_R32#4"]},"F_Plate_R16#3":{"s":"F_Plate_R16","n":3,"a":["w","F_Plate_R32#5"],"b":["w","F_Plate_R32#6"]},"F_Plate_R16#4":{"s":"F_Plate_R16","n":4,"a":["w","F_Plate_R32#7"],"b":["w","F_Plate_R32#8"]},"F_Plate_R16#5":{"s":"F_Plate_R16","n":5,"a":["w","F_Plate_R32#9"],"b":["w","F_Plate_R32#10"]},"F_Plate_R16#6":{"s":"F_Plate_R16","n":6,"a":["w","F_Plate_R32#11"],"b":["w","F_Plate_R32#12"]},"F_Plate_R16#7":{"s":"F_Plate_R16","n":7,"a":["w","F_Plate_R32#13"],"b":["w","F_Plate_R32#14"]},"F_Plate_R16#8":{"s":"F_Plate_R16","n":8,"a":["w","F_Plate_R32#15"],"b":["w","F_Plate_R32#16"]},"F_Plate_QF#1":{"s":"F_Plate_QF","n":1,"a":["w","F_Plate_R16#1"],"b":["w","F_Plate_R16#2"]},"F_Plate_QF#2":{"s":"F_Plate_QF","n":2,"a":["w","F_Plate_R16#3"],"b":["w","F_Plate_R16#4"]},"F_Plate_QF#3":{"s":"F_Plate_QF","n":3,"a":["w","F_Plate_R16#5"],"b":["w","F_Plate_R16#6"]},"F_Plate_QF#4":{"s":"F_Plate_QF","n":4,"a":["w","F_Plate_R16#7"],"b":["w","F_Plate_R16#8"]},"F_Plate_SF#1":{"s":"F_Plate_SF","n":1,"a":["w","F_Plate_QF#1"],"b":["w","F_Plate_QF#2"]},"F_Plate_SF#2":{"s":"F_Plate_SF","n":2,"a":["w","F_Plate_QF#3"],"b":["w","F_Plate_QF#4"]},"F_Plate_Final#1":{"s":"F_Plate_Final","n":1,"a":["w","F_Plate_SF#1"],"b":["w","F_Plate_SF#2"]},"MD_Prelim#1":{"s":"MD_Prelim","n":1,"a":["p","MD92"],"b":["p","MD55"]},"MD_Prelim#2":{"s":"MD_Prelim","n":2,"a":["p","MD72"],"b":["p","MD62"]},"MD_Prelim#3":{"s":"MD_Prelim","n":3,"a":["p","MD16"],"b":["p","MD30"]},"MD_Prelim#4":{"s":"MD_Prelim","n":4,"a":["p","MD32"],"b":["p","MD37"]},"MD_Prelim#5":{"s":"MD_Prelim","n":5,"a":["p","MD8"],"b":["p","MD36"]},"MD_Prelim#6":{"s":"MD_Prelim","n":6,"a":["p","MD14"],"b":["p","MD22"]},"MD_Prelim#7":{"s":"MD_Prelim","n":7,"a":["p","MD23"],"b":["p","MD26"]},"MD_Prelim#8":{"s":"MD_Prelim","n":8,"a":["p","MD94"],"b":["p","MD5"]},"MD_Prelim#9":{"s":"MD_Prelim","n":9,"a":["p","MD80"],"b":["p","MD83"]},"MD_Prelim#10":{"s":"MD_Prelim","n":10,"a":["p","MD18"],"b":["p","MD39"]},"MD_Prelim#11":{"s":"MD_Prelim","n":11,"a":["p","MD69"],"b":["p","MD51"]},"MD_Prelim#12":{"s":"MD_Prelim","n":12,"a":["p","MD59"],"b":["p","MD42"]},"MD_Prelim#13":{"s":"MD_Prelim","n":13,"a":["p","MD27"],"b":["p","MD48"]},"MD_Prelim#14":{"s":"MD_Prelim","n":14,"a":["p","MD35"],"b":["p","MD78"]},"MD_Prelim#15":{"s":"MD_Prelim","n":15,"a":["p","MD96"],"b":["p","MD20"]},"MD_Prelim#16":{"s":"MD_Prelim","n":16,"a":["p","MD68"],"b":["p","MD97"]},"MD_Prelim#17":{"s":"MD_Prelim","n":17,"a":["p","MD58"],"b":["p","MD15"]},"MD_Prelim#18":{"s":"MD_Prelim","n":18,"a":["p","MD65"],"b":["p","MD95"]},"MD_Prelim#19":{"s":"MD_Prelim","n":19,"a":["p","MD49"],"b":["p","MD70"]},"MD_Prelim#20":{"s":"MD_Prelim","n":20,"a":["p","MD91"],"b":["p","MD3"]},"MD_Prelim#21":{"s":"MD_Prelim","n":21,"a":["p","MD56"],"b":["p","MD47"]},"MD_Prelim#22":{"s":"MD_Prelim","n":22,"a":["p","MD44"],"b":["p","MD74"]},"MD_Prelim#23":{"s":"MD_Prelim","n":23,"a":["p","MD17"],"b":["p","MD34"]},"MD_Prelim#24":{"s":"MD_Prelim","n":24,"a":["p","MD50"],"b":["p","MD28"]},"MD_Prelim#25":{"s":"MD_Prelim","n":25,"a":["p","MD71"],"b":["p","MD81"]},"MD_Prelim#26":{"s":"MD_Prelim","n":26,"a":["p","MD76"],"b":["p","MD63"]},"MD_Prelim#27":{"s":"MD_Prelim","n":27,"a":["p","MD93"],"b":["p","MD19"]},"MD_Prelim#28":{"s":"MD_Prelim","n":28,"a":["p","MD61"],"b":["p","MD57"]},"MD_Prelim#29":{"s":"MD_Prelim","n":29,"a":["p","MD75"],"b":["p","MD82"]},"MD_Prelim#30":{"s":"MD_Prelim","n":30,"a":["p","MD54"],"b":["p","MD88"]},"MD_Prelim#31":{"s":"MD_Prelim","n":31,"a":["p","MD21"],"b":["p","MD9"]},"MD_Prelim#32":{"s":"MD_Prelim","n":32,"a":["p","MD40"],"b":["p","MD1"]},"MD_Prelim#33":{"s":"MD_Prelim","n":33,"a":["p","MD86"],"b":["p","MD90"]},"MD_R64#1":{"s":"MD_R64","n":1,"a":["p","MD64"],"b":["w","MD_Prelim#1"]},"MD_R64#2":{"s":"MD_R64","n":2,"a":["p","MD25"],"b":["w","MD_Prelim#2"]},"MD_R64#3":{"s":"MD_R64","n":3,"a":["p","MD84"],"b":["w","MD_Prelim#3"]},"MD_R64#4":{"s":"MD_R64","n":4,"a":["p","MD4"],"b":["w","MD_Prelim#4"]},"MD_R64#5":{"s":"MD_R64","n":5,"a":["p","MD33"],"b":["w","MD_Prelim#5"]},"MD_R64#6":{"s":"MD_R64","n":6,"a":["p","MD7"],"b":["w","MD_Prelim#6"]},"MD_R64#7":{"s":"MD_R64","n":7,"a":["p","MD77"],"b":["w","MD_Prelim#7"]},"MD_R64#8":{"s":"MD_R64","n":8,"a":["p","MD2"],"b":["w","MD_Prelim#8"]},"MD_R64#9":{"s":"MD_R64","n":9,"a":["p","MD12"],"b":["w","MD_Prelim#9"]},"MD_R64#10":{"s":"MD_R64","n":10,"a":["p","MD41"],"b":["w","MD_Prelim#10"]},"MD_R64#11":{"s":"MD_R64","n":11,"a":["p","MD6"],"b":["w","MD_Prelim#11"]},"MD_R64#12":{"s":"MD_R64","n":12,"a":["p","MD87"],"b":["w","MD_Prelim#12"]},"MD_R64#13":{"s":"MD_R64","n":13,"a":["p","MD66"],"b":["w","MD_Prelim#13"]},"MD_R64#14":{"s":"MD_R64","n":14,"a":["p","MD89"],"b":["w","MD_Prelim#14"]},"MD_R64#15":{"s":"MD_R64","n":15,"a":["p","MD60"],"b":["w","MD_Prelim#15"]},"MD_R64#16":{"s":"MD_R64","n":16,"a":["p","MD73"],"b":["w","MD_Prelim#16"]},"MD_R64#17":{"s":"MD_R64","n":17,"a":["p","MD46"],"b":["w","MD_Prelim#17"]},"MD_R64#18":{"s":"MD_R64","n":18,"a":["p","MD31"],"b":["w","MD_Prelim#18"]},"MD_R64#19":{"s":"MD_R64","n":19,"a":["p","MD13"],"b":["w","MD_Prelim#19"]},"MD_R64#20":{"s":"MD_R64","n":20,"a":["p","MD85"],"b":["w","MD_Prelim#20"]},"MD_R64#21":{"s":"MD_R64","n":21,"a":["p","MD24"],"b":["w","MD_Prelim#21"]},"MD_R64#22":{"s":"MD_R64","n":22,"a":["p","MD38"],"b":["w","MD_Prelim#22"]},"MD_R64#23":{"s":"MD_R64","n":23,"a":["p","MD53"],"b":["w","MD_Prelim#23"]},"MD_R64#24":{"s":"MD_R64","n":24,"a":["p","MD43"],"b":["w","MD_Prelim#24"]},"MD_R64#25":{"s":"MD_R64","n":25,"a":["p","MD52"],"b":["w","MD_Prelim#25"]},"MD_R64#26":{"s":"MD_R64","n":26,"a":["p","MD79"],"b":["w","MD_Prelim#26"]},"MD_R64#27":{"s":"MD_R64","n":27,"a":["p","MD11"],"b":["w","MD_Prelim#27"]},"MD_R64#28":{"s":"MD_R64","n":28,"a":["p","MD29"],"b":["w","MD_Prelim#28"]},"MD_R64#29":{"s":"MD_R64","n":29,"a":["p","MD45"],"b":["w","MD_Prelim#29"]},"MD_R64#30":{"s":"MD_R64","n":30,"a":["p","MD10"],"b":["w","MD_Prelim#30"]},"MD_R64#31":{"s":"MD_R64","n":31,"a":["p","MD67"],"b":["w","MD_Prelim#31"]},"MD_R64#32":{"s":"MD_R64","n":32,"a":["w","MD_Prelim#32"],"b":["w","MD_Prelim#33"]},"MD_R32#1":{"s":"MD_R32","n":1,"a":["w","MD_R64#1"],"b":["w","MD_R64#2"]},"MD_R32#2":{"s":"MD_R32","n":2,"a":["w","MD_R64#3"],"b":["w","MD_R64#4"]},"MD_R32#3":{"s":"MD_R32","n":3,"a":["w","MD_R64#5"],"b":["w","MD_R64#6"]},"MD_R32#4":{"s":"MD_R32","n":4,"a":["w","MD_R64#7"],"b":["w","MD_R64#8"]},"MD_R32#5":{"s":"MD_R32","n":5,"a":["w","MD_R64#9"],"b":["w","MD_R64#10"]},"MD_R32#6":{"s":"MD_R32","n":6,"a":["w","MD_R64#11"],"b":["w","MD_R64#12"]},"MD_R32#7":{"s":"MD_R32","n":7,"a":["w","MD_R64#13"],"b":["w","MD_R64#14"]},"MD_R32#8":{"s":"MD_R32","n":8,"a":["w","MD_R64#15"],"b":["w","MD_R64#16"]},"MD_R32#9":{"s":"MD_R32","n":9,"a":["w","MD_R64#17"],"b":["w","MD_R64#18"]},"MD_R32#10":{"s":"MD_R32","n":10,"a":["w","MD_R64#19"],"b":["w","MD_R64#20"]},"MD_R32#11":{"s":"MD_R32","n":11,"a":["w","MD_R64#21"],"b":["w","MD_R64#22"]},"MD_R32#12":{"s":"MD_R32","n":12,"a":["w","MD_R64#23"],"b":["w","MD_R64#24"]},"MD_R32#13":{"s":"MD_R32","n":13,"a":["w","MD_R64#25"],"b":["w","MD_R64#26"]},"MD_R32#14":{"s":"MD_R32","n":14,"a":["w","MD_R64#27"],"b":["w","MD_R64#28"]},"MD_R32#15":{"s":"MD_R32","n":15,"a":["w","MD_R64#29"],"b":["w","MD_R64#30"]},"MD_R32#16":{"s":"MD_R32","n":16,"a":["w","MD_R64#31"],"b":["w","MD_R64#32"]},"MD_R16#1":{"s":"MD_R16","n":1,"a":["w","MD_R32#1"],"b":["w","MD_R32#2"]},"MD_R16#2":{"s":"MD_R16","n":2,"a":["w","MD_R32#3"],"b":["w","MD_R32#4"]},"MD_R16#3":{"s":"MD_R16","n":3,"a":["w","MD_R32#5"],"b":["w","MD_R32#6"]},"MD_R16#4":{"s":"MD_R16","n":4,"a":["w","MD_R32#7"],"b":["w","MD_R32#8"]},"MD_R16#5":{"s":"MD_R16","n":5,"a":["w","MD_R32#9"],"b":["w","MD_R32#10"]},"MD_R16#6":{"s":"MD_R16","n":6,"a":["w","MD_R32#11"],"b":["w","MD_R32#12"]},"MD_R16#7":{"s":"MD_R16","n":7,"a":["w","MD_R32#13"],"b":["w","MD_R32#14"]},"MD_R16#8":{"s":"MD_R16","n":8,"a":["w","MD_R32#15"],"b":["w","MD_R32#16"]},"MD_QF#1":{"s":"MD_QF","n":1,"a":["w","MD_R16#1"],"b":["w","MD_R16#2"]},"MD_QF#2":{"s":"MD_QF","n":2,"a":["w","MD_R16#3"],"b":["w","MD_R16#4"]},"MD_QF#3":{"s":"MD_QF","n":3,"a":["w","MD_R16#5"],"b":["w","MD_R16#6"]},"MD_QF#4":{"s":"MD_QF","n":4,"a":["w","MD_R16#7"],"b":["w","MD_R16#8"]},"MD_SF#1":{"s":"MD_SF","n":1,"a":["w","MD_QF#1"],"b":["w","MD_QF#2"]},"MD_SF#2":{"s":"MD_SF","n":2,"a":["w","MD_QF#3"],"b":["w","MD_QF#4"]},"MD_Final#1":{"s":"MD_Final","n":1,"a":["w","MD_SF#1"],"b":["w","MD_SF#2"]}}};

/* ================= tournament logic (pure, no React) ================= */
const EVN = { M: "Men's Singles", F: "Women's Singles", MD: "Mixed Doubles" };
const EVS = { M: "Men's", F: "Women's", MD: "Mixed Doubles" };
const EV_COLOR = { M: "#2563A8", F: "#B5367B", MD: "#0E7C86" };
const DAYS = {
  1: { short: "Sat 10 Oct", long: "Saturday, 10 October", y: 2026, m: 9, d: 10 },
  2: { short: "Sun 11 Oct", long: "Sunday, 11 October", y: 2026, m: 9, d: 11 },
};
const SUNDAY_ONLY = { "Round of 16": 1, "Quarter-final": 1, "Semi-final": 1, Final: 1 };
const FORMAT_LABEL = { d15: "1 set to 15", d21: "1 set to 21", b15: "Best of 3 sets to 15", b21: "Best of 3 sets to 21" };
const DEFAULT_CFG = { courts: 10, start: 510, end: 1200, lunch: 750, lunchLen: 30, rest: 15, d15: 15, d21: 20, b15: 45, b21: 60, mdSeparate: "mostly" };

const SHEET = {};
DATA.S.forEach((x) => { SHEET[x.s] = x; });
const ALL_IDS = Object.keys(DATA.M);
const SUCC_W = {}, SUCC_L = {}, FIRST = {};
ALL_IDS.forEach((id) => {
  const m = DATA.M[id];
  ["a", "b"].forEach((sl) => {
    const s = m[sl];
    if (s[0] === "w") SUCC_W[s[1]] = { id, slot: sl };
    else if (s[0] === "l") SUCC_L[s[1]] = { id, slot: sl };
    else FIRST[s[1]] = { id, slot: sl };
  });
});

const fmtOf = (id) => {
  const st = SHEET[DATA.M[id].s].st;
  if (st === "Round 1") return "d15";
  if (st === "Quarter-final" || st === "Semi-final") return "b15";
  if (st === "Final") return "b21";
  return "d21";
};
const sheetIds = (s) => Array.from({ length: SHEET[s].n }, (_, i) => s + "#" + (i + 1));

/* ---------------- scheduler ----------------
   Fills courts in 5-minute steps. A match starts only when both earlier matches have
   finished plus the rest gap, never overlaps lunch, never runs past closing on Saturday,
   and Round of 16 onwards is Sunday only. Mixed doubles gets its own blocks. */
function computeSchedule(cfgIn) {
  const cfg = Object.assign({}, DEFAULT_CFG, cfgIn || {});
  const at = {};
  const meta = {};
  ALL_IDS.forEach((id) => {
    const m = DATA.M[id], sh = SHEET[m.s];
    const f = fmtOf(id);
    meta[id] = {
      id, ev: sh.ev, cat: sh.ev === "MD" ? "MD" : "S", late: !!SUNDAY_ONLY[sh.st], fin: sh.st === "Final", dur: cfg[f],
      feeders: ["a", "b"].map((sl) => m[sl]).filter((s) => s[0] !== "p").map((s) => s[1]),
      ord: DATA.S.indexOf(sh), n: m.n,
    };
  });
  const cp = {};
  const cpOf = (id) => {
    if (cp[id] != null) return cp[id];
    const nx = [SUCC_W[id], SUCC_L[id]].filter(Boolean).map((x) => cpOf(x.id));
    cp[id] = meta[id].dur + (nx.length ? Math.max.apply(null, nx) : 0);
    return cp[id];
  };
  ALL_IDS.forEach(cpOf);
  const evRank = { M: 0, F: 1, MD: 2 };
  const prio = (a, b) => cp[b.id] - cp[a.id] || evRank[a.ev] - evRank[b.ev] || a.ord - b.ord || a.n - b.n;
  const lunchEnd = cfg.lunch + cfg.lunchLen;
  const okLunch = (t, dur) => !(t < lunchEnd && t + dur > cfg.lunch);
  const readyAt = (m, day, t) => m.feeders.every((f) => {
    const x = at[f];
    if (!x) return false;
    if (x.d < day) return true;
    return x.d === day && x.t + x.dur + cfg.rest <= t;
  });
  function phase(day, from, filt, limit, allowOver) {
    const pool = ALL_IDS.map((id) => meta[id]).filter((m) => !at[m.id] && filt(m) && (!m.late || day === 2)).sort(prio);
    if (!pool.length) return from;
    const free = new Array(cfg.courts).fill(from);
    let t = from, last = from, left = pool.length;
    const stop = allowOver ? from + 20 * 60 : limit;
    while (t < stop && left > 0) {
      for (let c = 0; c < cfg.courts; c++) {
        if (free[c] > t) continue;
        for (let i = 0; i < pool.length; i++) {
          const m = pool[i];
          if (at[m.id]) continue;
          if (!okLunch(t, m.dur)) continue;
          if (!allowOver && t + m.dur > limit) continue;
          if (!readyAt(m, day, t)) continue;
          at[m.id] = { d: day, t, c: c + 1, dur: m.dur };
          free[c] = t + m.dur; last = Math.max(last, t + m.dur); left--;
          break;
        }
      }
      t += 5;
    }
    return last;
  }
  const S_EARLY = (m) => m.cat === "S" && !m.fin;
  const MD_EARLY = (m) => m.cat === "MD" && !m.fin;
  const mode = cfg.mdSeparate === true ? "strict" : cfg.mdSeparate === false ? "off" : cfg.mdSeparate;
  const MD_SAT = (m) => m.cat === "MD" && !m.late;
  if (mode === "strict") {
    const e = phase(1, cfg.start, MD_SAT, cfg.end, false);          // Saturday morning: mixed doubles session
    phase(1, e, S_EARLY, cfg.end, false);                             // then singles until closing
    let e2 = phase(2, cfg.start, S_EARLY, cfg.lunch, false);          // Sunday: singles until lunch
    e2 = phase(2, e2, MD_EARLY, cfg.end, true);                       // mixed doubles R16, QF, SF
    e2 = phase(2, e2, S_EARLY, cfg.end, true);                        // rest of singles through semis
    e2 = phase(2, e2, (m) => m.cat === "S" && m.fin, cfg.end, true);  // singles finals together
    phase(2, e2, (m) => m.cat === "MD" && m.fin, cfg.end, true);      // mixed doubles final to close
  } else if (mode === "mostly") {
    const e = phase(1, cfg.start, MD_SAT, cfg.end, false);           // Saturday morning: mixed doubles session
    phase(1, e, S_EARLY, cfg.end, false);                              // then singles until closing
    let e2 = phase(2, cfg.start, (m) => m.cat === "MD" && SHEET[DATA.M[m.id].s].st === "Round of 16", cfg.end, false); // Sunday opener: MD R16 alone
    e2 = phase(2, e2, (m) => !m.fin, cfg.end, true);                  // everything else up to the semis
    phase(2, e2, (m) => m.fin, cfg.end, true);                         // finals session
  } else {
    phase(1, cfg.start, (m) => !m.fin, cfg.end, false);
    const e2 = phase(2, cfg.start, (m) => !m.fin, cfg.end, true);
    phase(2, e2, (m) => m.fin, cfg.end, true);
  }
  const ids = ALL_IDS.filter((id) => at[id]);
  const endOf = (d) => Math.max.apply(null, ids.filter((id) => at[id].d === d).map((id) => at[id].t + at[id].dur).concat([0]));
  const end2 = endOf(2);
  return {
    at, cfg,
    summary: {
      d1: ids.filter((id) => at[id].d === 1).length, d2: ids.filter((id) => at[id].d === 2).length,
      end1: endOf(1), end2, overrun: Math.max(0, end2 - cfg.end), unscheduled: ALL_IDS.filter((id) => !at[id]),
    },
  };
}
let SCHED = null, SCHED_KEY = null, IDS = ALL_IDS.slice();
function applySchedule(cfg) {
  const key = JSON.stringify(Object.assign({}, DEFAULT_CFG, cfg || {}));
  if (key === SCHED_KEY) return SCHED;
  SCHED = computeSchedule(cfg);
  SCHED_KEY = key;
  IDS = ALL_IDS.slice().sort((a, b) => {
    const x = SCHED.at[a] || { d: 9, t: 0, c: 0 }, y = SCHED.at[b] || { d: 9, t: 0, c: 0 };
    return x.d - y.d || x.t - y.t || x.c - y.c;
  });
  return SCHED;
}

/* ---------------- state + resolution ---------------- */
const emptyState = () => ({ v: 0, res: {}, live: {}, ovr: {}, names: {}, note: { text: "", ts: 0 }, log: [], cfg: null });
const normState = (s) => Object.assign(emptyState(), s || {});
const pname = (S, k) => (S.names && S.names[k]) || DATA.P[k] || k;
const evOfKey = (k) => (k.startsWith("MD") ? "MD" : k[0]);

function roundName(id) {
  const sh = SHEET[DATA.M[id].s];
  return sh.br === "Gold Cup" || sh.br === "Plate Cup" ? sh.br + " " + sh.st : sh.st;
}
function lab(id) {
  const m = DATA.M[id], sh = SHEET[m.s];
  return EVS[sh.ev] + " " + roundName(id) + " #" + m.n;
}
function when(S, id) {
  const base = (SCHED && SCHED.at[id]) || { d: 2, t: 0, c: 0, dur: 0 };
  const o = S.ovr && S.ovr[id];
  if (!o) return { d: base.d, t: base.t, c: base.c, dur: base.dur, moved: false };
  return { d: o.d != null ? o.d : base.d, t: o.t != null ? o.t : base.t, c: o.c != null ? o.c : base.c, dur: base.dur, moved: true };
}
function fmtTime(mins) {
  const h = Math.floor(mins / 60) % 24, mm = mins % 60;
  return ((h + 11) % 12) + 1 + ":" + String(mm).padStart(2, "0") + " " + (h < 12 ? "AM" : "PM");
}
const toHHMM = (mins) => String(Math.floor(mins / 60)).padStart(2, "0") + ":" + String(mins % 60).padStart(2, "0");
const fromHHMM = (s) => { const p = String(s).split(":").map(Number); return p[0] * 60 + (p[1] || 0); };
const startMs = (w) => new Date(DAYS[w.d].y, DAYS[w.d].m, DAYS[w.d].d, 0, w.t).getTime();

const statusOf = (S, id) => (S.res[id] ? "done" : S.live[id] ? "live" : "pending");

function sideKey(S, src) {
  if (src[0] === "p") return src[1];
  const r = S.res[src[1]];
  if (!r) return null;
  const m = DATA.M[src[1]];
  const pickA = src[0] === "w" ? r.w === "A" : r.w === "B";
  return sideKey(S, pickA ? m.a : m.b);
}
function info(S, src) {
  const key = sideKey(S, src);
  if (key) return { key, name: pname(S, key) };
  const id = src[1], m = DATA.M[id];
  const ca = sideKey(S, m.a), cb = sideKey(S, m.b);
  return { key: null, ph: (src[0] === "w" ? "Winner of " : "Loser of ") + lab(id), from: id, cand: [ca ? pname(S, ca) : null, cb ? pname(S, cb) : null] };
}
function view(S, id) {
  const m = DATA.M[id];
  const r = S.res[id];
  return {
    id, m, sh: SHEET[m.s], label: lab(id), round: roundName(id), w: when(S, id), status: statusOf(S, id), fmt: fmtOf(id),
    A: info(S, m.a), B: info(S, m.b), win: r ? r.w : null, score: r && r.sc ? r.sc : "", walkover: !!(r && r.wo),
  };
}
const ready = (v) => !!(v.A.key && v.B.key);

/* what people see as the status of a match */
function statusInfo(S, id, now) {
  const v = view(S, id);
  if (v.status === "done") return { k: "done", label: v.walkover ? "Completed by walkover" : "Completed" };
  if (v.status === "live") return { k: "live", label: "In progress" };
  const late = now && now > startMs(v.w) + 5 * 60000;
  if (!ready(v)) return { k: late ? "late" : "tbd", label: late ? "Delayed" : "Players to be decided" };
  return { k: late ? "late" : "sched", label: late ? "Running late" : "Scheduled" };
}

function proj(S, nx) {
  if (!nx) return null;
  const v = view(S, nx.id);
  const slot = nx.slot === "a" ? "A" : "B";
  return { v, slot, opp: slot === "A" ? v.B : v.A };
}
function pathFor(S, key) {
  const f = FIRST[key];
  if (!f) return null;
  const steps = [];
  let cur = f.id, slot = f.slot === "a" ? "A" : "B", guard = 0;
  while (cur && guard++ < 25) {
    const v = view(S, cur);
    const opp = slot === "A" ? v.B : v.A;
    const step = { v, slot, opp, outcome: v.status, ifWin: null, ifLose: null, end: null };
    steps.push(step);
    if (v.status === "done") {
      const won = v.win === slot;
      step.outcome = won ? "won" : "lost";
      const nx = won ? SUCC_W[cur] : SUCC_L[cur];
      if (!nx) { step.end = won ? (v.sh.st === "Final" ? "champion" : "through") : v.sh.st === "Final" ? "runnerup" : "out"; break; }
      cur = nx.id; slot = nx.slot === "a" ? "A" : "B";
      continue;
    }
    step.ifWin = proj(S, SUCC_W[cur]);
    step.ifLose = proj(S, SUCC_L[cur]);
    break;
  }
  return steps;
}
function descendants(id) {
  const out = [], seen = {}, stack = [id];
  while (stack.length) {
    const x = stack.pop();
    [SUCC_W[x], SUCC_L[x]].forEach((n) => { if (n && !seen[n.id]) { seen[n.id] = 1; out.push(n.id); stack.push(n.id); } });
  }
  return out;
}
const affectedBy = (S, id) => descendants(id).filter((d) => S.res[d] || S.live[d]);

/* ---------------- organizer mutations (mutate a cloned state; return error text or null) ---------------- */
function mSetResult(S, id, w, sc, wo) {
  const v = view(S, id);
  if (!ready(v)) return "Both players must be decided before entering a result.";
  const prev = S.res[id];
  if (prev && prev.w !== w) descendants(id).forEach((d) => { delete S.res[d]; delete S.live[d]; });
  S.res[id] = { w, ts: Date.now() };
  if (sc && String(sc).trim()) S.res[id].sc = String(sc).trim().slice(0, 40);
  if (wo) S.res[id].wo = 1;
  delete S.live[id];
  return null;
}
function mClear(S, id) { [id].concat(descendants(id)).forEach((d) => { delete S.res[d]; delete S.live[d]; }); return null; }
function mStart(S, id) {
  const v = view(S, id);
  if (!ready(v)) return "Both players must be decided before the match can start.";
  if (S.res[id]) return "This match already has a result.";
  S.live[id] = Date.now();
  return null;
}
function mUnstart(S, id) { delete S.live[id]; return null; }
function mMove(S, id, d, t, c) {
  const base = SCHED && SCHED.at[id];
  S.ovr[id] = { d, t, c };
  if (base && base.d === d && base.t === t && base.c === c) delete S.ovr[id];
  return null;
}

/* ---------------- derived views ---------------- */
function allWhen(S) { return IDS.map((id) => ({ id, w: when(S, id) })); }
const byTime = (a, b) => a.w.d - b.w.d || a.w.t - b.w.t || a.w.c - b.w.c;
function liveNow(S) { return allWhen(S).filter((r) => statusOf(S, r.id) === "live").sort((a, b) => a.w.c - b.w.c).map((r) => r.id); }
function progressOf(S, ids) { let d = 0; ids.forEach((id) => { if (S.res[id]) d++; }); return { done: d, total: ids.length }; }
function searchPlayers(S, q, ev) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return Object.keys(DATA.P)
    .filter((k) => (!ev || evOfKey(k) === ev) && pname(S, k).toLowerCase().includes(s))
    .sort((a, b) => pname(S, a).localeCompare(pname(S, b)))
    .slice(0, 30);
}
function matchHasKey(S, id, key) {
  if (!key) return false;
  const v = view(S, id);
  return v.A.key === key || v.B.key === key;
}


/* ------------------------------------------------------------------ */
/* design tokens                                                       */
/* ------------------------------------------------------------------ */
const INK = "#0F2230", PAPER = "#F1F4F1", LINE = "#D3DBD6", MUTED = "#566871";
const LIVE = "#E8441E", HILITE = "#FFF0B3", GOOD = "#17805A", LOSE = "#8A5A5A", AMBER = "#B26A00";
const DISPLAY = '"Avenir Next Condensed","Arial Narrow","Roboto Condensed","Segoe UI",system-ui,sans-serif';
const BODY = 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';
const STATUS_STYLE = {
  done: { bg: "#E4F3EA", fg: GOOD, bar: GOOD },
  live: { bg: "#FDE7E1", fg: LIVE, bar: LIVE },
  sched: { bg: "#E6EDF5", fg: "#21466B", bar: "#21466B" },
  late: { bg: "#FFF1D6", fg: AMBER, bar: AMBER },
  tbd: { bg: "#EEF1EF", fg: MUTED, bar: "#C3CCC7" },
};

/* ------------------------------------------------------------------ */
/* storage (shared by everyone who opens the published link)           */
/* ------------------------------------------------------------------ */
/* Shared data lives in the Supabase `kv` table (public read, organizer write).
   Personal data (my player, etc.) lives in this browser's localStorage. */
async function readShared(key) {
  if (!supa) return { ok: false, missing: false, val: null };
  try {
    const { data, error } = await supa.from("kv").select("value").eq("key", key).maybeSingle();
    if (error) return { ok: false, missing: false, val: null };
    if (!data) return { ok: true, missing: true, val: null };
    return { ok: true, val: data.value };
  } catch (e) {
    return { ok: false, missing: false, val: null };
  }
}
async function writeShared(key, val) {
  if (!supa) throw new Error("no storage");
  if (key === "state" && val && typeof val.v === "number" && val.v > 1) {
    // Compare-and-swap: only overwrite the version we read, so two organizers
    // saving at the same moment can never silently drop each other's result.
    const { data, error } = await supa.from("kv").update({ value: val })
      .eq("key", key).eq("value->>v", String(val.v - 1)).select("key");
    if (error) throw new Error("save failed");
    if (!data || !data.length) throw new Error("conflict");
    return;
  }
  const { error } = await supa.from("kv").upsert({ key, value: val });
  if (error) throw new Error("save failed");
}
const LS = "zbl2026:";
async function readMine(key) {
  try { const s = localStorage.getItem(LS + key); return s ? JSON.parse(s) : null; } catch (e) { return null; }
}
async function writeMine(key, val) { try { localStorage.setItem(LS + key, JSON.stringify(val)); } catch (e) { /* ignore */ } }
async function deleteMine(key) { try { localStorage.removeItem(LS + key); } catch (e) { /* ignore */ } }
const rid = () => Math.random().toString(36).slice(2, 10);
const timeAgo = (ts) => {
  const s = Math.max(0, Math.round((Date.now() - ts) / 1000));
  if (s < 60) return "just now";
  if (s < 3600) return Math.round(s / 60) + " min ago";
  return Math.round(s / 3600) + " h ago";
};
const durText = (min) => (min >= 60 ? Math.floor(min / 60) + " h" + (min % 60 ? " " + (min % 60) + " min" : "") : min + " min");

/* ------------------------------------------------------------------ */
/* small shared pieces                                                 */
/* ------------------------------------------------------------------ */
function LiveDot({ label = "In progress" }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: LIVE }}>
      <span className="pulse inline-block rounded-full" style={{ width: 8, height: 8, background: LIVE }} />{label}
    </span>
  );
}
function StatusPill({ si }) {
  const st = STATUS_STYLE[si.k];
  if (si.k === "live") return <span className="rounded-full px-2 py-0.5" style={{ background: st.bg }}><LiveDot /></span>;
  return (
    <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold whitespace-nowrap" style={{ background: st.bg, color: st.fg }}>
      {si.k === "done" && <Check size={12} />}{si.k === "late" && <Timer size={12} />}{si.label}
    </span>
  );
}
function EvChip({ ev }) {
  return <span className="inline-block rounded px-1.5 py-0.5 text-xs font-semibold text-white" style={{ background: EV_COLOR[ev] }}>{EVN[ev]}</span>;
}
function Btn({ children, onClick, kind = "plain", disabled, small, title }) {
  const styles = {
    plain: { background: "#fff", color: INK, border: "1px solid " + LINE },
    solid: { background: INK, color: "#fff", border: "1px solid " + INK },
    live: { background: LIVE, color: "#fff", border: "1px solid " + LIVE },
    good: { background: GOOD, color: "#fff", border: "1px solid " + GOOD },
    danger: { background: "#fff", color: "#B3261E", border: "1px solid #E4B4B0" },
  }[kind];
  return (
    <button type="button" title={title} onClick={onClick} disabled={disabled}
      className={"rounded-lg font-semibold inline-flex items-center justify-center gap-1.5 " + (small ? "px-2.5 py-1.5 text-xs" : "px-3.5 py-2.5 text-sm")}
      style={{ ...styles, opacity: disabled ? 0.45 : 1, cursor: disabled ? "not-allowed" : "pointer" }}>{children}</button>
  );
}
function Card({ children, style, className = "", id }) {
  return <div id={id} className={"rounded-xl " + className} style={{ background: "#fff", border: "1px solid " + LINE, ...style }}>{children}</div>;
}
function Empty({ children }) {
  return <div className="rounded-xl p-5 text-sm text-center" style={{ border: "1px dashed " + LINE, color: MUTED }}>{children}</div>;
}
function H2({ children }) { return <h2 style={{ fontFamily: DISPLAY, color: INK }} className="text-2xl font-bold">{children}</h2>; }
function WhenLine({ w, showDur }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs" style={{ color: MUTED }}>
      <span className="inline-flex items-center gap-1"><CalendarDays size={13} />{DAYS[w.d].short}</span>
      <span className="inline-flex items-center gap-1"><Clock size={13} />{fmtTime(w.t)}{showDur && w.dur ? ", " + w.dur + " min" : ""}</span>
      <span className="inline-flex items-center gap-1"><MapPin size={13} />Court {w.c}</span>
      {w.moved && <span className="font-semibold" style={{ color: LIVE }}>Rescheduled</span>}
    </span>
  );
}
function SideText({ s, strong, onPick, mine, muted }) {
  if (s.key) {
    return (
      <span className="min-w-0">
        <button type="button" onClick={() => onPick && onPick(s.key)} className="text-left"
          style={{ fontWeight: strong ? 700 : 500, color: muted ? MUTED : INK, background: mine ? HILITE : "transparent", borderRadius: 4, padding: mine ? "0 3px" : 0 }}>
          {s.name}
        </button>
        
      </span>
    );
  }
  return (
    <span style={{ color: MUTED }} className="min-w-0">
      <span className="italic">{s.ph}</span>
      <span className="block text-xs">{s.cand[0] || "TBD"} or {s.cand[1] || "TBD"}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* the match card used across the app                                  */
/* ------------------------------------------------------------------ */
function nextLinks(id) {
  const out = [];
  const w = SUCC_W[id], l = SUCC_L[id];
  if (w) out.push({ kind: "Winner", id: w.id });
  if (l) out.push({ kind: "Loser", id: l.id });
  return out;
}
function MatchCard({ id, S, now, meKey, onPick, onJump, focus, showEvent }) {
  const v = view(S, id);
  const si = statusInfo(S, id, now);
  const mine = meKey && (v.A.key === meKey || v.B.key === meKey);
  const st = STATUS_STYLE[si.k];
  const ring = focus ? "0 0 0 3px #F2C230" : mine ? "0 0 0 2px " + HILITE : "none";
  const winnerName = v.win ? (v.win === "A" ? v.A.name : v.B.name) : null;
  return (
    <Card id={"m-" + id} className="p-3.5" style={{ borderLeft: "4px solid " + st.bar, boxShadow: ring, borderColor: mine ? "#D4A800" : LINE, borderLeftColor: st.bar }}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="text-sm font-semibold" style={{ color: INK }}>
            {showEvent ? v.label : v.round + " #" + v.m.n}
          </div>
          <WhenLine w={v.w} />
        </div>
        <StatusPill si={si} />
      </div>
      <div className="mt-2.5 grid gap-1.5 text-sm">
        {["A", "B"].map((k) => (
          <div key={k} className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center rounded-full flex-shrink-0" style={{ width: 18, height: 18, marginTop: 1, background: v.win === k ? GOOD : "#E7ECE8", color: v.win === k ? "#fff" : MUTED, fontSize: 10, fontWeight: 700 }}>
              {v.win === k ? <Check size={12} /> : k}
            </span>
            <SideText s={v[k]} strong={v.win === k} muted={v.win && v.win !== k} onPick={onPick} mine={meKey && v[k].key === meKey} />
          </div>
        ))}
      </div>
      {v.status === "done" && (
        <div className="mt-2.5 rounded-lg px-2.5 py-1.5 text-sm flex flex-wrap items-center gap-x-2" style={{ background: "#F1F8F3", color: INK }}>
          <Trophy size={14} style={{ color: GOOD }} /><span className="font-semibold">{winnerName} won</span>
          {v.walkover ? <span style={{ color: MUTED }}>by walkover</span> : v.score ? <span style={{ color: MUTED }}>{v.score}</span> : null}
        </div>
      )}
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: MUTED }}>
        <span>{FORMAT_LABEL[v.fmt]}</span>
        {onJump && nextLinks(id).map((n) => (
          <button key={n.kind} type="button" onClick={() => onJump(n.id)} className="inline-flex items-center gap-0.5 font-semibold" style={{ color: "#21466B" }}>
            {n.kind} plays {roundName(n.id)} #{DATA.M[n.id].n}<ChevronRight size={13} />
          </button>
        ))}
        {onJump && !SUCC_W[id] && <span className="font-semibold inline-flex items-center gap-1" style={{ color: "#7A5B00" }}><Crown size={12} />Winner takes the {v.sh.br === "Knockout" ? "title" : v.sh.br}</span>}
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* "on court now" strip, shown at the top of Draws                     */
/* ------------------------------------------------------------------ */
function NowStrip({ S, onJump }) {
  const ids = liveNow(S);
  if (!ids.length) return null;
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5"><LiveDot label={ids.length + (ids.length === 1 ? " match on court now" : " matches on court now")} /></div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {ids.map((id) => {
          const v = view(S, id);
          return (
            <button key={id} type="button" onClick={() => onJump(id)} className="rounded-xl px-3 py-2 text-left flex-shrink-0" style={{ background: "#fff", border: "1px solid " + LINE, borderTop: "3px solid " + LIVE, minWidth: 200, maxWidth: 240 }}>
              <div className="text-xs font-bold" style={{ color: INK }}>Court {v.w.c}</div>
              <div className="text-sm font-semibold leading-snug mt-0.5" style={{ color: INK }}>{v.A.name}</div>
              <div className="text-sm font-semibold leading-snug" style={{ color: INK }}>{v.B.name}</div>
              <div className="text-xs mt-1" style={{ color: MUTED }}>{v.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* bracket tree for the last 16                                        */
/* ------------------------------------------------------------------ */
function BracketTree({ S, now, prefix, onJump, meKey }) {
  const cols = ["R16", "QF", "SF", "Final"].map((t) => prefix + "_" + t).filter((s) => SHEET[s]).map((s) => sheetIds(s));
  const BW = 196, BH = 64, GAP = 34, ROW = BH + 16;
  const H = (cols[0] ? cols[0].length : 1) * ROW;
  const cy = (k, i) => (H * (2 * i + 1)) / (2 * cols[k].length);
  const W = cols.length * BW + (cols.length - 1) * GAP;
  return (
    <div className="overflow-x-auto pb-2">
      <div className="relative" style={{ width: W, height: H }}>
        <svg width={W} height={H} className="absolute inset-0" aria-hidden="true">
          {cols.slice(0, -1).map((col, k) => col.map((id, i) => {
            const x1 = k * (BW + GAP) + BW, x2 = (k + 1) * (BW + GAP), xm = x1 + GAP / 2;
            const y1 = cy(k, i), y2 = cy(k + 1, Math.floor(i / 2));
            const done = !!S.res[id];
            return <path key={id} d={`M${x1},${y1} H${xm} V${y2} H${x2}`} fill="none" stroke={done ? GOOD : LINE} strokeWidth="2" />;
          }))}
        </svg>
        {cols.map((col, k) => col.map((id, i) => {
          const v = view(S, id);
          const si = statusInfo(S, id, now);
          const mine = meKey && (v.A.key === meKey || v.B.key === meKey);
          return (
            <button key={id} type="button" onClick={() => onJump(id)} aria-label={v.label}
              className="absolute rounded-lg text-left px-2 py-1"
              style={{ left: k * (BW + GAP), top: cy(k, i) - BH / 2, width: BW, height: BH, background: mine ? HILITE : "#fff", border: "1px solid " + (mine ? "#D4A800" : LINE), borderLeft: "4px solid " + STATUS_STYLE[si.k].bar }}>
              {["A", "B"].map((s) => (
                <div key={s} className="text-xs truncate" style={{ color: v[s].key ? (v.win && v.win !== s ? MUTED : INK) : MUTED, fontWeight: v.win === s ? 800 : 500, lineHeight: "19px" }}>
                  {v.win === s ? "\u2713 " : ""}{v[s].key ? v[s].name : "To be decided"}
                </div>
              ))}
              <div className="truncate" style={{ fontSize: 10.5, color: MUTED }}>{v.sh.st === "Final" ? "Final" : v.sh.st + " #" + v.m.n}, {DAYS[v.w.d].short.slice(0, 3)} {fmtTime(v.w.t)}</div>
            </button>
          );
        }))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* DRAWS: the home screen and the single place for fixtures/results    */
/* ------------------------------------------------------------------ */
const STATUS_FILTERS = [["all", "All"], ["live", "In progress"], ["up", "Up next"], ["done", "Completed"], ["tbd", "Players to be decided"]];
const statusMatch = (f, k) => f === "all" || (f === "up" ? k === "sched" || k === "late" : f === "tbd" ? k === "tbd" : f === k);
function compsOf(ev) { return Array.from(new Set(DATA.S.filter((x) => x.ev === ev).map((x) => x.br))); }
function roundsOf(ev, br) { return DATA.S.filter((x) => x.ev === ev && x.br === br); }
function currentRound(S, ev, br) {
  const rs = roundsOf(ev, br);
  const r = rs.find((x) => sheetIds(x.s).some((id) => !S.res[id]));
  return (r || rs[rs.length - 1]).s;
}
function DrawsTab({ S, now, meKey, onPick, nav, setNav }) {
  const { ev, br, s, mode, focus } = nav;
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");
  const sheet = SHEET[s];
  const ids = useMemo(() => sheetIds(s), [s]);
  const infos = useMemo(() => ids.map((id) => ({ id, si: statusInfo(S, id, now) })), [ids, S, now]);
  const shown = infos.filter((x) => statusMatch(filter, x.si.k)).map((x) => x.id);
  const counts = {};
  STATUS_FILTERS.forEach(([k]) => { counts[k] = infos.filter((x) => statusMatch(k, x.si.k)).length; });
  const pr = progressOf(S, ids);
  const days = Array.from(new Set(ids.map((id) => when(S, id).d))).sort();
  const times = ids.map((id) => when(S, id));
  const first = times.reduce((a, b) => (a.d * 1e4 + a.t <= b.d * 1e4 + b.t ? a : b));
  const last = times.reduce((a, b) => (a.d * 1e4 + a.t + a.dur >= b.d * 1e4 + b.t + b.dur ? a : b));
  const prefix = s.split("_").slice(0, -1).join("_");
  const hasTree = !!SHEET[prefix + "_R16"] && SHEET[prefix + "_Final"];
  const results = useMemo(() => searchPlayers(S, q, ev).slice(0, 8), [S, q, ev]);

  useEffect(() => {
    if (!focus) return;
    const t = setTimeout(() => { const el = document.getElementById("m-" + focus); if (el && el.scrollIntoView) el.scrollIntoView({ block: "center", behavior: "smooth" }); }, 60);
    return () => clearTimeout(t);
  }, [focus, s, mode]);

  const jump = (id) => { const sh = SHEET[DATA.M[id].s]; setFilter("all"); setNav({ ev: sh.ev, br: sh.br, s: sh.s, mode: "list", focus: id }); };
  const findPlayer = (k) => {
    const p = pathFor(S, k);
    const id = p && p.length ? p[p.length - 1].v.id : FIRST[k].id;
    setQ(""); jump(id);
  };
  const pill = (active, color) => ({ background: active ? color : "#fff", color: active ? "#fff" : INK, border: "1px solid " + (active ? color : LINE) });

  return (
    <div>
      {S.note && S.note.text && (
        <div className="rounded-xl p-3.5 flex gap-3 items-start mb-4" style={{ background: "#FFF6D6", border: "1px solid #E9D27A" }}>
          <Megaphone size={18} style={{ color: "#8A6D00", flexShrink: 0, marginTop: 2 }} />
          <div>
            <div className="text-sm font-semibold" style={{ color: INK, whiteSpace: "pre-wrap" }}>{S.note.text}</div>
            <div className="text-xs mt-0.5" style={{ color: MUTED }}>Posted {timeAgo(S.note.ts)}</div>
          </div>
        </div>
      )}
      <NowStrip S={S} onJump={jump} />

      {/* event switch */}
      <div className="grid grid-cols-3 gap-2">
        {Object.keys(EVN).map((k) => {
          const all = ALL_IDS.filter((id) => SHEET[DATA.M[id].s].ev === k);
          const p = progressOf(S, all);
          const on = ev === k;
          return (
            <button key={k} type="button" onClick={() => { const b = compsOf(k)[0]; setFilter("all"); setNav({ ev: k, br: b, s: currentRound(S, k, b), mode: "list", focus: null }); }}
              className="rounded-xl px-3 py-2.5 text-left" style={{ background: on ? EV_COLOR[k] : "#fff", color: on ? "#fff" : INK, border: "1px solid " + (on ? EV_COLOR[k] : LINE) }}>
              <div style={{ fontFamily: DISPLAY }} className="font-bold text-base md:text-lg leading-tight">{EVN[k]}</div>
              
            </button>
          );
        })}
      </div>

      {/* competition switch */}
      <div className="flex flex-wrap gap-2 mt-3">
        {compsOf(ev).map((b) => (
          <button key={b} type="button" onClick={() => { setFilter("all"); setNav({ ev, br: b, s: currentRound(S, ev, b), mode: "list", focus: null }); }}
            className="rounded-full px-3.5 py-1.5 text-sm font-semibold" style={pill(br === b, INK)}>{b === "Knockout" ? "Knockout draw" : b}</button>
        ))}
      </div>
      <p className="text-xs mt-2" style={{ color: MUTED }}>
        {br === "Round 1" ? "Everyone starts here. Winners move to the Gold Cup and losers to the Plate Cup." : br === "Gold Cup" ? "Round 1 winners play on here, knockout to the final." : br === "Plate Cup" ? "Round 1 losers get a second competition here, knockout to the final." : "Straight knockout from the first round."}
      </p>

      {/* round rail */}
      <div className="flex gap-2 overflow-x-auto mt-3 pb-1" role="tablist" aria-label="Rounds">
        {roundsOf(ev, br).map((r) => {
          const p = progressOf(S, sheetIds(r.s));
          const on = mode === "list" && r.s === s;
          return (
            <button key={r.s} type="button" role="tab" aria-selected={on} onClick={() => { setFilter("all"); setNav({ ...nav, s: r.s, mode: "list", focus: null }); }}
              className="rounded-lg px-3 py-2 text-left flex-shrink-0" style={{ background: on ? "#fff" : "transparent", border: "1px solid " + (on ? INK : LINE), boxShadow: on ? "inset 0 -3px 0 " + EV_COLOR[ev] : "none" }}>
              <div className="text-sm font-bold whitespace-nowrap" style={{ color: INK }}>{r.st}</div>
              <div className="text-xs whitespace-nowrap" style={{ color: p.done === p.total ? GOOD : MUTED }}>{p.done === p.total ? "All played" : p.done + " of " + p.total + " played"}</div>
            </button>
          );
        })}
        {hasTree && (
          <button type="button" onClick={() => setNav({ ...nav, mode: "tree", focus: null })} className="rounded-lg px-3 py-2 text-left flex-shrink-0 inline-flex items-center gap-2"
            style={{ background: mode === "tree" ? INK : "#fff", color: mode === "tree" ? "#fff" : INK, border: "1px solid " + INK }}>
            <GitFork size={16} /><span><span className="block text-sm font-bold whitespace-nowrap">Road to the final</span><span className="block text-xs" style={{ opacity: 0.8 }}>Last 16 as a bracket</span></span>
          </button>
        )}
      </div>

      {mode === "tree" ? (
        <div className="mt-4">
          <div style={{ fontFamily: DISPLAY, color: INK }} className="text-2xl font-bold mb-1">Road to the final</div>
          <p className="text-xs mb-3" style={{ color: MUTED }}>Tap any match to open it. Green lines show results that are in.</p>
          <BracketTree S={S} now={now} prefix={prefix} onJump={jump} meKey={meKey} />
        </div>
      ) : (
        <div className="mt-4">
          <Card className="p-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <div style={{ fontFamily: DISPLAY, color: INK }} className="text-3xl font-bold leading-none">{sheet.st}</div>
                <div className="text-sm mt-1.5" style={{ color: INK }}>{EVN[ev]}{br !== "Knockout" && br !== "Round 1" ? ", " + br : ""}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-1.5" style={{ color: MUTED }}>
                  <span className="inline-flex items-center gap-1"><Timer size={13} />{FORMAT_LABEL[fmtOf(ids[0])]}, {when(S, ids[0]).dur} min per match</span>
                  <span className="inline-flex items-center gap-1"><CalendarDays size={13} />{days.map((d) => DAYS[d].short).join(" and ")}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={13} />{fmtTime(first.t)} to {fmtTime(last.t + last.dur)}{first.d !== last.d ? " next day" : ""}</span>
                </div>
              </div>
              <div style={{ minWidth: 160 }}>
                <div className="text-xs mb-1 text-right" style={{ color: MUTED }}>{pr.done} of {pr.total} completed</div>
                <div className="rounded-full overflow-hidden" style={{ height: 6, background: "#E3E9E5" }}>
                  <div style={{ width: (pr.total ? (100 * pr.done) / pr.total : 0) + "%", height: "100%", background: EV_COLOR[ev] }} />
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-3 grid gap-2 md:grid-cols-2 items-start">
            <div className="relative">
              <Search size={16} className="absolute" style={{ left: 12, top: 12, color: MUTED }} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={"Find a player in " + EVN[ev]} aria-label="Find a player in this event"
                className="w-full rounded-lg py-2 text-sm" style={{ paddingLeft: 34, paddingRight: 10, border: "1px solid " + LINE, background: "#fff", color: INK }} />
              {q.trim() && (
                <div className="absolute left-0 right-0 mt-1 rounded-lg overflow-hidden" style={{ background: "#fff", border: "1px solid " + LINE, zIndex: 20, boxShadow: "0 8px 20px rgba(15,34,48,.12)" }}>
                  {results.length ? results.map((k) => (
                    <button key={k} type="button" onClick={() => findPlayer(k)} className="w-full text-left px-3 py-2 text-sm flex items-center justify-between" style={{ borderTop: "1px solid " + LINE, color: INK }}>
                      <span className="font-semibold">{pname(S, k)}</span><span className="text-xs" style={{ color: MUTED }}>Show current match</span>
                    </button>
                  )) : <div className="px-3 py-2 text-sm" style={{ color: MUTED }}>No player with that name in {EVN[ev]}.</div>}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {STATUS_FILTERS.map(([k, l]) => (
                <button key={k} type="button" onClick={() => setFilter(k)} disabled={k !== "all" && !counts[k]}
                  className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ ...pill(filter === k, INK), opacity: k !== "all" && !counts[k] ? 0.4 : 1 }}>
                  {l} {counts[k]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((id) => <MatchCard key={id} id={id} S={S} now={now} meKey={meKey} onPick={onPick} onJump={jump} focus={focus === id} />)}
          </div>
          {!shown.length && <Empty>No matches in this round match that filter.</Empty>}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MY MATCHES                                                          */
/* ------------------------------------------------------------------ */
function OppBlock({ s, onPick }) {
  if (s.key) return <button type="button" className="font-bold text-left" style={{ color: INK }} onClick={() => onPick(s.key)}>{s.name}</button>;
  return (
    <div style={{ color: MUTED }}>
      <div className="italic">{s.ph}</div>
      <div className="text-xs mt-0.5">It will be {s.cand[0] || "TBD"} or {s.cand[1] || "TBD"}</div>
    </div>
  );
}
function Branch({ title, p, onPick }) {
  if (!p) return null;
  return (
    <div className="rounded-lg p-2.5" style={{ background: "#F4F7F4", border: "1px solid " + LINE }}>
      <div className="text-xs font-semibold" style={{ color: MUTED }}>{title}</div>
      <div className="text-sm font-semibold mt-0.5" style={{ color: INK }}>{p.v.label}</div>
      <WhenLine w={p.v.w} />
      <div className="text-xs mt-1" style={{ color: MUTED }}>{FORMAT_LABEL[p.v.fmt]}</div>
      <div className="text-sm mt-1.5" style={{ color: INK }}><span className="text-xs" style={{ color: MUTED }}>Against </span><OppBlock s={p.opp} onPick={onPick} /></div>
    </div>
  );
}
function StepCard({ step, onPick, S, now }) {
  const { v, opp } = step;
  const si = statusInfo(S, v.id, now);
  const tone = step.outcome === "won" ? GOOD : step.outcome === "lost" ? LOSE : STATUS_STYLE[si.k].bar;
  return (
    <Card className="p-3.5" style={{ borderLeft: "4px solid " + tone }}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="font-bold" style={{ color: INK }}>{v.label}</div>
          <WhenLine w={v.w} showDur />
          <div className="text-xs mt-0.5" style={{ color: MUTED }}>{FORMAT_LABEL[v.fmt]}</div>
        </div>
        {step.outcome === "won" ? <span className="text-xs font-bold" style={{ color: GOOD }}>You won</span> : step.outcome === "lost" ? <span className="text-xs font-bold" style={{ color: LOSE }}>You lost</span> : <StatusPill si={si} />}
      </div>
      <div className="mt-2.5 text-sm" style={{ color: INK }}><span className="text-xs" style={{ color: MUTED }}>Against </span><OppBlock s={opp} onPick={onPick} /></div>
      {(step.outcome === "won" || step.outcome === "lost") && (v.score || v.walkover) && <div className="text-xs mt-1" style={{ color: MUTED }}>{v.walkover ? "Walkover" : "Score " + v.score}</div>}
      {(step.outcome === "pending" || step.outcome === "live") && (
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <Branch title="If you win, your next match is" p={step.ifWin} onPick={onPick} />
          <Branch title="If you lose, you move to" p={step.ifLose} onPick={onPick} />
        </div>
      )}
      {step.end === "champion" && <div className="mt-3 rounded-lg p-2.5 text-sm font-bold flex items-center gap-2" style={{ background: "#E4F3EA", color: GOOD }}><Trophy size={16} />Champion of the {v.sh.br === "Knockout" ? "Mixed Doubles" : v.sh.br}</div>}
      {step.end === "runnerup" && <div className="mt-3 rounded-lg p-2.5 text-sm font-semibold" style={{ background: "#EEF1F3", color: INK }}>Runner-up in the {v.sh.br === "Knockout" ? "Mixed Doubles" : v.sh.br}</div>}
      {step.end === "out" && <div className="mt-3 rounded-lg p-2.5 text-sm" style={{ background: "#F5EEEE", color: LOSE }}>That was your last match in this event. Thanks for playing.</div>}
    </Card>
  );
}
function PlayerPicker({ S, onPick, autoFocus }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => searchPlayers(S, q), [S, q]);
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5" style={{ color: INK }} htmlFor="pp">Find your name</label>
      <div className="relative">
        <Search size={16} className="absolute" style={{ left: 12, top: 13, color: MUTED }} />
        <input id="pp" autoFocus={autoFocus} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Start typing, for example Rahul"
          className="w-full rounded-lg py-2.5 text-base" style={{ paddingLeft: 36, paddingRight: 12, border: "1px solid " + LINE, background: "#fff", color: INK }} />
      </div>
      {q.trim() && (
        <div className="mt-2 grid gap-1.5">
          {list.length ? list.map((k) => (
            <button type="button" key={k} onClick={() => onPick(k)} className="rounded-lg px-3 py-2.5 flex items-center justify-between text-left gap-2" style={{ background: "#fff", border: "1px solid " + LINE }}>
              <span className="font-semibold" style={{ color: INK }}>{pname(S, k)}</span><EvChip ev={evOfKey(k)} />
            </button>
          )) : <Empty>No player found. Check the spelling, or try only your first or last name.</Empty>}
        </div>
      )}
    </div>
  );
}
function MyTab({ S, now, viewKey, setViewKey, meKey, saveMe, clearMe }) {
  const steps = useMemo(() => (viewKey ? pathFor(S, viewKey) : null), [S, viewKey]);
  const others = useMemo(() => {
    if (!viewKey) return [];
    const nm = pname(S, viewKey).toLowerCase();
    return Object.keys(DATA.P).filter((k) => k !== viewKey && evOfKey(k) === "MD" && pname(S, k).toLowerCase().includes(nm));
  }, [S, viewKey]);
  if (!viewKey) {
    return (
      <div>
        <H2>Where do I play?</H2>
        <p className="text-sm mb-4 mt-1" style={{ color: MUTED }}>Search your name to see your matches, court, start time and who you could face next. Mixed doubles pairs are listed as both names.</p>
        <PlayerPicker S={S} onPick={setViewKey} autoFocus />
      </div>
    );
  }
  const isMe = meKey === viewKey;
  const ev = evOfKey(viewKey);
  const byeNote = steps && steps.length && ev !== "MD" && steps[0].v.sh.br !== "Round 1";
  return (
    <div>
      <Card className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div style={{ fontFamily: DISPLAY, color: INK }} className="text-3xl font-bold leading-tight">{pname(S, viewKey)}</div>
            <div className="mt-1.5 flex items-center"><EvChip ev={ev} /></div>
          </div>
          <button type="button" onClick={() => (isMe ? clearMe() : saveMe(viewKey))} className="rounded-lg px-3 py-2 text-xs font-semibold inline-flex items-center gap-1.5"
            style={{ background: isMe ? HILITE : "#fff", border: "1px solid " + (isMe ? "#D4A800" : LINE), color: INK }}>
            <Star size={14} fill={isMe ? "#D4A800" : "none"} />{isMe ? "This is me" : "Mark as me"}
          </button>
        </div>
        <button type="button" className="mt-3 text-sm font-semibold" style={{ color: INK, textDecoration: "underline" }} onClick={() => setViewKey(null)}>Search for someone else</button>
      </Card>
      {byeNote && <div className="mt-3 rounded-xl p-3 text-sm flex gap-2 items-start" style={{ background: "#FFF6D6", border: "1px solid #E9D27A", color: INK }}><Info size={16} style={{ marginTop: 2, flexShrink: 0 }} />You have a bye in Round 1, so your first match is in the Gold Cup.</div>}
      <div className="mt-4 grid gap-3">{steps && steps.map((st, i) => <StepCard key={i} step={st} onPick={setViewKey} S={S} now={now} />)}</div>
      {others.length > 0 && (
        <div className="mt-4">
          <div className="text-sm font-semibold mb-1.5" style={{ color: INK }}>Also playing Mixed Doubles</div>
          {others.map((k) => <button key={k} type="button" onClick={() => setViewKey(k)} className="rounded-lg px-3 py-2 text-sm font-semibold mr-2 mb-2" style={{ background: "#fff", border: "1px solid " + LINE, color: INK }}>{pname(S, k)}</button>)}
        </div>
      )}
      <p className="text-xs mt-3" style={{ color: MUTED }}>This page updates by itself when results are entered.</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SCHEDULE                                                            */
/* ------------------------------------------------------------------ */
function Select({ value, onChange, children, label }) {
  return <select aria-label={label} value={value} onChange={(e) => onChange(e.target.value)} className="rounded-lg px-2.5 py-2 text-sm" style={{ border: "1px solid " + LINE, background: "#fff", color: INK }}>{children}</select>;
}
function FilteredMatches({ S, now, meKey, render, limit = 40, courts }) {
  const [day, setDay] = useState("all");
  const [ev, setEv] = useState("all");
  const [court, setCourt] = useState("all");
  const [st, setSt] = useState("all");
  const [q, setQ] = useState("");
  const [mineOnly, setMineOnly] = useState(false);
  const [shown, setShown] = useState(limit);
  const ids = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return allWhen(S).filter((r) => {
      if (day !== "all" && String(r.w.d) !== day) return false;
      if (court !== "all" && String(r.w.c) !== court) return false;
      if (ev !== "all" && SHEET[DATA.M[r.id].s].ev !== ev) return false;
      if (st !== "all" && !statusMatch(st, statusInfo(S, r.id, now).k)) return false;
      if (mineOnly && !matchHasKey(S, r.id, meKey)) return false;
      if (ql) { const v = view(S, r.id); if (!((v.A.name || "") + " " + (v.B.name || "") + " " + v.label).toLowerCase().includes(ql)) return false; }
      return true;
    }).sort(byTime).map((r) => r.id);
  }, [S, now, day, ev, court, st, q, mineOnly, meKey]);
  return (
    <div>
      <div className="grid gap-2 mb-3">
        <div className="relative">
          <Search size={16} className="absolute" style={{ left: 12, top: 12, color: MUTED }} />
          <input value={q} onChange={(e) => { setQ(e.target.value); setShown(limit); }} placeholder="Search a player or round" aria-label="Search matches"
            className="w-full rounded-lg py-2 text-sm" style={{ paddingLeft: 34, paddingRight: 10, border: "1px solid " + LINE, background: "#fff", color: INK }} />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select label="Day" value={day} onChange={setDay}><option value="all">Both days</option><option value="1">{DAYS[1].long}</option><option value="2">{DAYS[2].long}</option></Select>
          <Select label="Event" value={ev} onChange={setEv}><option value="all">All events</option>{Object.keys(EVN).map((k) => <option key={k} value={k}>{EVN[k]}</option>)}</Select>
          <Select label="Court" value={court} onChange={setCourt}><option value="all">All courts</option>{Array.from({ length: courts }, (_, i) => <option key={i} value={i + 1}>Court {i + 1}</option>)}</Select>
          <Select label="Status" value={st} onChange={setSt}>{STATUS_FILTERS.map(([k, l]) => <option key={k} value={k}>{k === "all" ? "Any status" : l}</option>)}</Select>
          {meKey && <label className="inline-flex items-center gap-1.5 text-sm px-1" style={{ color: INK }}><input type="checkbox" checked={mineOnly} onChange={(e) => setMineOnly(e.target.checked)} />Only mine</label>}
        </div>
      </div>
      <div className="text-xs mb-2" style={{ color: MUTED }}>{ids.length} matches</div>
      <div className="grid gap-2 md:grid-cols-2">{ids.slice(0, shown).map((id) => <div key={id}>{render(id)}</div>)}</div>
      {ids.length > shown && <div className="mt-3 text-center"><Btn onClick={() => setShown(shown + limit)}>Show more</Btn></div>}
      {!ids.length && <Empty>No matches fit these filters.</Empty>}
    </div>
  );
}
function ScheduleTab({ S, now, meKey, onPick, onJump, courts }) {
  return (
    <div>
      <H2>Schedule</H2>
      <p className="text-sm mb-3 mt-1" style={{ color: MUTED }}>Every match in playing order with its date, start time and court. Play runs 8:30 AM to 8:00 PM with lunch from 12:30 to 1:00 PM.</p>
      <FilteredMatches S={S} now={now} meKey={meKey} courts={courts} render={(id) => <MatchCard id={id} S={S} now={now} meKey={meKey} onPick={onPick} onJump={onJump} showEvent />} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ORGANIZER                                                           */
/* ------------------------------------------------------------------ */
function Field({ label, children, hint }) {
  return <label className="block text-sm font-semibold mb-3" style={{ color: INK }}>{label}<div className="mt-1">{children}</div>{hint && <div className="text-xs font-normal mt-0.5" style={{ color: MUTED }}>{hint}</div>}</label>;
}
const inputStyle = { border: "1px solid " + LINE, background: "#fff", color: INK };

function LoginPanel({ onLogin }) {
  const [id, setId] = useState(""); const [pin, setPin] = useState("");
  const [err, setErr] = useState(""); const [busy, setBusy] = useState(false);
  const submit = async () => { setErr(""); setBusy(true); const e = await onLogin(id, pin); setBusy(false); if (e) setErr(e); };
  return (
    <Card className="p-5 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-1"><Shield size={20} style={{ color: INK }} /><H2>Organizer sign in</H2></div>
      <p className="text-sm mb-4" style={{ color: MUTED }}>Only organizers can start matches, enter results and change the schedule. Accounts are managed in the Supabase dashboard (Authentication &gt; Users).</p>
      <Field label="Organizer email"><input type="email" value={id} onChange={(e) => setId(e.target.value)} autoComplete="username" className="w-full rounded-lg px-3 py-2.5 text-base" style={inputStyle} /></Field>
      <Field label="Password"><input type="password" value={pin} onChange={(e) => setPin(e.target.value)} autoComplete="current-password" className="w-full rounded-lg px-3 py-2.5 text-base" style={inputStyle} /></Field>
      {err && <div className="text-sm font-semibold mb-3" style={{ color: "#B3261E" }} role="alert">{err}</div>}
      <Btn kind="solid" onClick={submit} disabled={busy || !id.trim() || !pin}>{busy ? "Please wait" : "Sign in"}</Btn>
    </Card>
  );
}

function ResultForm({ v, initial, onSave, onCancel }) {
  const [w, setW] = useState(initial ? initial.w : null);
  const [sc, setSc] = useState(initial ? initial.sc || "" : "");
  const [wo, setWo] = useState(initial ? !!initial.wo : false);
  const ph = v.fmt === "d15" ? "e.g. 15-11" : v.fmt === "d21" ? "e.g. 21-17" : v.fmt === "b15" ? "e.g. 15-12, 11-15, 15-9" : "e.g. 21-18, 21-15";
  return (
    <div className="mt-3 rounded-lg p-3" style={{ background: "#F4F7F4", border: "1px solid " + LINE }}>
      <div className="text-xs font-semibold mb-1.5" style={{ color: MUTED }}>Who won?</div>
      <div className="grid gap-2 md:grid-cols-2">
        {["A", "B"].map((k) => (
          <button key={k} type="button" onClick={() => setW(k)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-left inline-flex items-center gap-2"
            style={{ background: w === k ? GOOD : "#fff", color: w === k ? "#fff" : INK, border: "1px solid " + (w === k ? GOOD : LINE) }}>
            <Trophy size={14} />{v[k].name}
          </button>
        ))}
      </div>
      <div className="mt-2.5 flex flex-wrap items-center gap-3">
        <input value={sc} onChange={(e) => setSc(e.target.value)} placeholder={"Score (optional), " + ph} aria-label="Score" disabled={wo} className="rounded-lg px-3 py-2 text-sm flex-1" style={{ ...inputStyle, minWidth: 180, opacity: wo ? 0.5 : 1 }} />
        <label className="inline-flex items-center gap-1.5 text-sm" style={{ color: INK }}><input type="checkbox" checked={wo} onChange={(e) => setWo(e.target.checked)} />Walkover or retired</label>
      </div>
      <div className="mt-2.5 flex gap-2">
        <Btn kind="good" small disabled={!w} onClick={() => onSave(w, wo ? "" : sc, wo)}><Check size={13} />Save result</Btn>
        <Btn small onClick={onCancel}>Cancel</Btn>
      </div>
    </div>
  );
}

function OrgMatch({ id, S, now, commit, confirm, courts }) {
  const v = view(S, id);
  const si = statusInfo(S, id, now);
  const [editing, setEditing] = useState(false);
  const [entering, setEntering] = useState(false);
  const [d, setD] = useState(v.w.d); const [t, setT] = useState(toHHMM(v.w.t)); const [c, setC] = useState(v.w.c);
  const ok = ready(v);
  const save = (w, sc, wo) => {
    const n = v.status === "done" && v.win !== w ? affectedBy(S, id).length : 0;
    const name = w === "A" ? v.A.name : v.B.name;
    const run = () => { commit((s) => mSetResult(s, id, w, sc, wo), v.label + ": " + name + " won" + (wo ? " by walkover" : sc ? " " + sc : "")); setEntering(false); };
    if (n) confirm({ title: "Change this result?", body: "The winner changes, so " + n + " later " + (n === 1 ? "match that depended on it is" : "matches that depended on it are") + " reset. Re-enter those results afterwards.", label: "Change result", onConfirm: run });
    else run();
  };
  return (
    <Card className="p-3.5" style={{ borderLeft: "4px solid " + STATUS_STYLE[si.k].bar }}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="font-bold text-sm" style={{ color: INK }}>{v.label}</div>
          <WhenLine w={v.w} showDur />
        </div>
        <div className="flex items-center gap-2">
          <StatusPill si={si} />
          <button type="button" aria-label="Change court or time" title="Change court or time" onClick={() => setEditing(!editing)} className="rounded-md p-1.5" style={{ border: "1px solid " + LINE, background: editing ? HILITE : "#fff" }}><Pencil size={13} /></button>
        </div>
      </div>
      <div className="mt-2 grid gap-1 text-sm">
        {["A", "B"].map((k) => (
          <div key={k} className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center rounded-full flex-shrink-0" style={{ width: 18, height: 18, background: v.win === k ? GOOD : "#E7ECE8", color: v.win === k ? "#fff" : MUTED, fontSize: 10, fontWeight: 700 }}>{v.win === k ? <Check size={12} /> : k}</span>
            <SideText s={v[k]} strong={v.win === k} />
          </div>
        ))}
      </div>
      {v.status === "done" && <div className="text-xs mt-1.5" style={{ color: MUTED }}>{v.walkover ? "Walkover" : v.score ? "Score " + v.score : "No score entered"}</div>}
      {editing && (
        <div className="mt-3 rounded-lg p-2.5 flex flex-wrap items-end gap-2" style={{ background: "#F4F7F4", border: "1px solid " + LINE }}>
          <label className="text-xs font-semibold" style={{ color: MUTED }}>Day<select value={d} onChange={(e) => setD(Number(e.target.value))} className="block rounded-md px-2 py-1.5 text-sm mt-0.5" style={inputStyle}><option value={1}>{DAYS[1].short}</option><option value={2}>{DAYS[2].short}</option></select></label>
          <label className="text-xs font-semibold" style={{ color: MUTED }}>Start time<input type="time" step={300} value={t} onChange={(e) => setT(e.target.value)} className="block rounded-md px-2 py-1.5 text-sm mt-0.5" style={inputStyle} /></label>
          <label className="text-xs font-semibold" style={{ color: MUTED }}>Court<select value={c} onChange={(e) => setC(Number(e.target.value))} className="block rounded-md px-2 py-1.5 text-sm mt-0.5" style={inputStyle}>{Array.from({ length: courts }, (_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}</select></label>
          <Btn small kind="solid" onClick={() => { commit((s) => mMove(s, id, d, fromHHMM(t), c), "Moved " + v.label + " to " + DAYS[d].short + " " + fmtTime(fromHHMM(t)) + ", Court " + c); setEditing(false); }}>Save change</Btn>
        </div>
      )}
      {entering && <ResultForm v={v} initial={S.res[id]} onSave={save} onCancel={() => setEntering(false)} />}
      {!entering && (
        <div className="mt-3 flex flex-wrap gap-2">
          {v.status === "pending" && <Btn kind="live" small disabled={!ok} onClick={() => commit((s) => mStart(s, id), "Started " + v.label)}><Play size={13} />Start match</Btn>}
          {v.status === "live" && <Btn small onClick={() => commit((s) => mUnstart(s, id), "Moved " + v.label + " back to the queue")}><Undo2 size={13} />Back to queue</Btn>}
          {v.status !== "done" && <Btn kind="good" small disabled={!ok} onClick={() => setEntering(true)}><Trophy size={13} />Enter result</Btn>}
          {v.status === "done" && <Btn small onClick={() => setEntering(true)}><Pencil size={13} />Edit result</Btn>}
          {v.status === "done" && (
            <Btn small kind="danger" onClick={() => {
              const n = affectedBy(S, id).length;
              confirm({ title: "Clear this result?", body: n ? "This also resets " + n + " later " + (n === 1 ? "match" : "matches") + " that depended on it." : "The match goes back to not played.", label: "Clear result", danger: true, onConfirm: () => commit((s) => mClear(s, id), "Cleared result of " + v.label) });
            }}><X size={13} />Clear result</Btn>
          )}
        </div>
      )}
      {!ok && v.status !== "done" && <div className="text-xs mt-2 italic" style={{ color: MUTED }}>Waiting for earlier matches before this one can start.</div>}
    </Card>
  );
}

function OrgMatches({ S, now, commit, confirm, courts }) {
  const [mode, setMode] = useState("now");
  const liveIds = useMemo(() => liveNow(S), [S]);
  const nextIds = useMemo(() => allWhen(S).filter((r) => statusOf(S, r.id) === "pending" && ready(view(S, r.id))).sort(byTime).slice(0, 12).map((r) => r.id), [S]);
  const pill = (a) => ({ background: a ? INK : "#fff", color: a ? "#fff" : INK, border: "1px solid " + (a ? INK : LINE) });
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        <button type="button" className="rounded-full px-3.5 py-1.5 text-sm font-semibold" style={pill(mode === "now")} onClick={() => setMode("now")}>On court and next ({liveIds.length} in progress)</button>
        <button type="button" className="rounded-full px-3.5 py-1.5 text-sm font-semibold" style={pill(mode === "all")} onClick={() => setMode("all")}>Find any match</button>
      </div>
      {mode === "now" ? (
        <div>
          <h3 style={{ fontFamily: DISPLAY, color: INK }} className="text-lg font-bold mb-2">In progress</h3>
          <div className="grid gap-3 md:grid-cols-2">{liveIds.length ? liveIds.map((id) => <OrgMatch key={id} id={id} S={S} now={now} commit={commit} confirm={confirm} courts={courts} />) : <Empty>No match is marked as started. Press Start match when players walk on court.</Empty>}</div>
          <h3 style={{ fontFamily: DISPLAY, color: INK }} className="text-lg font-bold mb-2 mt-6">Next in the schedule</h3>
          <div className="grid gap-3 md:grid-cols-2">{nextIds.map((id) => <OrgMatch key={id} id={id} S={S} now={now} commit={commit} confirm={confirm} courts={courts} />)}</div>
        </div>
      ) : (
        <FilteredMatches S={S} now={now} meKey={null} courts={courts} limit={20} render={(id) => <OrgMatch id={id} S={S} now={now} commit={commit} confirm={confirm} courts={courts} />} />
      )}
    </div>
  );
}

function OrgNames({ S, commit }) {
  const [q, setQ] = useState("");
  const [edit, setEdit] = useState({});
  const list = useMemo(() => { const s = q.trim().toLowerCase(); return Object.keys(DATA.P).filter((k) => !s || pname(S, k).toLowerCase().includes(s) || k.toLowerCase() === s).slice(0, 30); }, [S, q]);
  return (
    <div>
      <h3 style={{ fontFamily: DISPLAY, color: INK }} className="text-lg font-bold mb-1">Fix a name</h3>
      <p className="text-sm mb-2" style={{ color: MUTED }}>A corrected name shows everywhere straight away. Use this for spelling fixes or a replacement partner.</p>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a player or pair" aria-label="Search players" className="w-full rounded-lg px-3 py-2 text-sm mb-3" style={inputStyle} />
      <div className="grid gap-2">
        {list.map((k) => {
          const val = edit[k] != null ? edit[k] : pname(S, k);
          const changed = edit[k] != null && edit[k].trim() !== pname(S, k);
          return (
            <div key={k} className="flex items-center gap-2">
              <span className="text-xs w-12" style={{ color: MUTED }}>{evOfKey(k) === "MD" ? "Pair" : evOfKey(k) === "M" ? "Men" : "Women"}</span>
              <input value={val} onChange={(e) => setEdit({ ...edit, [k]: e.target.value })} aria-label={"Name for " + pname(S, k)} className="flex-1 rounded-lg px-3 py-2 text-sm" style={inputStyle} />
              <Btn small kind="solid" disabled={!changed} onClick={() => { commit((s) => { const nv = edit[k].trim(); if (!nv || nv === DATA.P[k]) delete s.names[k]; else s.names[k] = nv; return null; }, "Renamed " + pname(S, k) + " to " + edit[k].trim()); const e2 = { ...edit }; delete e2[k]; setEdit(e2); }}>Save</Btn>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function NumIn({ value, onChange, min, max, label }) {
  return <input type="number" min={min} max={max} value={value} aria-label={label} onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value) || min)))} className="rounded-lg px-3 py-2 text-sm w-24" style={inputStyle} />;
}
function ScheduleSettings({ S, commit, confirm }) {
  const cur = Object.assign({}, DEFAULT_CFG, S.cfg || {});
  const [cfg, setCfg] = useState(cur);
  const set = (k) => (v) => setCfg({ ...cfg, [k]: v });
  const preview = useMemo(() => computeSchedule(cfg).summary, [cfg]);
  const changed = JSON.stringify(cfg) !== JSON.stringify(cur);
  const moved = Object.keys(S.ovr || {}).length;
  return (
    <div>
      <h3 style={{ fontFamily: DISPLAY, color: INK }} className="text-lg font-bold mb-1">Schedule settings</h3>
      <p className="text-sm mb-3" style={{ color: MUTED }}>Change courts or match lengths and see when each day would end before you apply anything. Applying rebuilds the times and courts for every match.</p>
      <div className="grid gap-x-6 md:grid-cols-2">
        <Field label="Courts available"><NumIn value={cfg.courts} onChange={set("courts")} min={1} max={20} label="Courts" /></Field>
        <Field label="Mixed doubles timing" hint="Separate wherever possible keeps mixed doubles in its own sessions up to the Round of 16; only the quarter-finals, semis and final share time with singles.">
          <select value={cfg.mdSeparate} onChange={(e) => set("mdSeparate")(e.target.value)} className="rounded-lg px-2.5 py-2 text-sm" style={inputStyle}>
            <option value="mostly">Separate wherever possible</option><option value="strict">Always separate</option><option value="off">Mixed with singles</option>
          </select>
        </Field>
        <Field label="First match"><input type="time" value={toHHMM(cfg.start)} onChange={(e) => set("start")(fromHHMM(e.target.value))} className="rounded-lg px-3 py-2 text-sm" style={inputStyle} /></Field>
        <Field label="Closing time"><input type="time" value={toHHMM(cfg.end)} onChange={(e) => set("end")(fromHHMM(e.target.value))} className="rounded-lg px-3 py-2 text-sm" style={inputStyle} /></Field>
        <Field label="Lunch starts"><input type="time" value={toHHMM(cfg.lunch)} onChange={(e) => set("lunch")(fromHHMM(e.target.value))} className="rounded-lg px-3 py-2 text-sm" style={inputStyle} /></Field>
        <Field label="Lunch length (minutes)"><NumIn value={cfg.lunchLen} onChange={set("lunchLen")} min={0} max={120} label="Lunch length" /></Field>
        <Field label="1 set to 15 (minutes)"><NumIn value={cfg.d15} onChange={set("d15")} min={5} max={60} label="Minutes for 1 set to 15" /></Field>
        <Field label="1 set to 21 (minutes)"><NumIn value={cfg.d21} onChange={set("d21")} min={5} max={60} label="Minutes for 1 set to 21" /></Field>
        <Field label="Best of 3 to 15 (minutes)"><NumIn value={cfg.b15} onChange={set("b15")} min={10} max={120} label="Minutes for best of 3 to 15" /></Field>
        <Field label="Best of 3 to 21 (minutes)"><NumIn value={cfg.b21} onChange={set("b21")} min={10} max={150} label="Minutes for best of 3 to 21" /></Field>
        <Field label="Rest before a player's next match (minutes)"><NumIn value={cfg.rest} onChange={set("rest")} min={0} max={60} label="Rest minutes" /></Field>
      </div>
      <Card className="p-3.5 mt-1" style={{ background: preview.overrun ? "#FFF4F1" : "#F1F8F3", borderColor: preview.overrun ? "#F1B7A8" : "#B9DCC7" }}>
        <div className="text-sm font-bold flex items-center gap-2" style={{ color: preview.overrun ? "#B3261E" : GOOD }}>
          {preview.overrun ? <AlertTriangle size={16} /> : <Check size={16} />}
          {preview.overrun ? "Does not fit: Sunday would end at " + fmtTime(preview.end2) + ", " + durText(preview.overrun) + " after closing" : "Fits: Sunday ends at " + fmtTime(preview.end2)}
        </div>
        <div className="text-sm mt-1" style={{ color: INK }}>{DAYS[1].long}: {preview.d1} matches, last one ends {fmtTime(preview.end1)}. {DAYS[2].long}: {preview.d2} matches.</div>
        {moved > 0 && <div className="text-xs mt-1" style={{ color: MUTED }}>{moved} match{moved === 1 ? " was" : "es were"} moved by hand and will keep the time you set.</div>}
      </Card>
      <div className="mt-3 flex flex-wrap gap-2">
        <Btn kind="solid" disabled={!changed} onClick={() => confirm({ title: "Apply new schedule?", body: "Times and courts change for every match. Tell players to check the app again.", label: "Apply schedule", onConfirm: () => commit((s) => { s.cfg = cfg; return null; }, "Changed the schedule settings (" + cfg.courts + " courts)") })}><SlidersHorizontal size={14} />Apply schedule</Btn>
        <Btn disabled={!changed} onClick={() => setCfg(cur)}>Undo changes</Btn>
        <Btn onClick={() => setCfg(Object.assign({}, DEFAULT_CFG))}>Back to the recommended plan</Btn>
      </div>
    </div>
  );
}

function OrgSettings({ S, commit, confirm, org, signOut, toast }) {
  const [note, setNote] = useState(S.note ? S.note.text : "");
  const [word, setWord] = useState("");
  const H3 = ({ children, color }) => <h3 style={{ fontFamily: DISPLAY, color: color || INK }} className="text-lg font-bold mb-1 mt-8">{children}</h3>;
  return (
    <div>
      <h3 style={{ fontFamily: DISPLAY, color: INK }} className="text-lg font-bold mb-1">Announcement for everyone</h3>
      <p className="text-sm mb-2" style={{ color: MUTED }}>Shows at the top of the Draws page, for example a delay or a court change.</p>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className="w-full rounded-lg px-3 py-2 text-sm" style={inputStyle} aria-label="Announcement text" />
      <div className="mt-2 flex gap-2">
        <Btn kind="solid" onClick={() => commit((s) => { s.note = { text: note.trim(), ts: Date.now() }; return null; }, note.trim() ? "Posted an announcement" : "Removed the announcement")}><Megaphone size={14} />Post announcement</Btn>
        <Btn onClick={() => { setNote(""); commit((s) => { s.note = { text: "", ts: Date.now() }; return null; }, "Removed the announcement"); }}>Remove</Btn>
      </div>
      <div className="mt-8"><ScheduleSettings S={S} commit={commit} confirm={confirm} /></div>
      {org.admin && (
        <div>
          <H3>Add another organizer</H3>
          <p className="text-sm" style={{ color: MUTED }}>Create more organizer accounts in the Supabase dashboard: Authentication &gt; Users &gt; Add user (tick Auto Confirm). They sign in here with that email and password.</p>
        </div>
      )}
      <H3>Recent changes</H3>
      <Card style={{ maxHeight: 260, overflowY: "auto" }}>
        {(S.log || []).length ? S.log.slice(0, 40).map((l, i) => (
          <div key={i} className="px-3 py-2 text-sm" style={{ color: INK, borderTop: i ? "1px solid " + LINE : "none" }}>{l.msg}<span className="block text-xs" style={{ color: MUTED }}>{l.by}, {timeAgo(l.ts)}</span></div>
        )) : <div className="p-3 text-sm" style={{ color: MUTED }}>No changes yet.</div>}
      </Card>
      {org.admin && (
        <div>
          <H3 color="#B3261E">Start over</H3>
          <p className="text-sm mb-2" style={{ color: MUTED }}>Clears every result, in-progress marker and hand-moved match. Names, announcements and schedule settings stay. Use this after testing, before the real event.</p>
          <div className="flex flex-wrap gap-2 items-center">
            <input value={word} onChange={(e) => setWord(e.target.value)} placeholder="Type RESET to unlock" aria-label="Type RESET to unlock" className="rounded-lg px-3 py-2 text-sm" style={inputStyle} />
            <Btn kind="danger" disabled={word !== "RESET"} onClick={() => confirm({ title: "Clear all results?", body: "Every result and in-progress marker is removed for everyone.", label: "Clear everything", danger: true, onConfirm: () => { commit((s) => { s.res = {}; s.live = {}; s.ovr = {}; return null; }, "Cleared all results"); setWord(""); } })}>Clear all results</Btn>
          </div>
        </div>
      )}
      <div className="mt-8"><Btn onClick={signOut}><LogOut size={14} />Sign out {org.id}</Btn></div>
    </div>
  );
}

function OrgTab({ S, now, org, commit, confirm, onLogin, signOut, toast, busy, courts }) {
  const [sub, setSub] = useState("matches");
  if (!org) return <LoginPanel onLogin={onLogin} />;
  const pill = (a) => ({ background: a ? INK : "#fff", color: a ? "#fff" : INK, border: "1px solid " + (a ? INK : LINE) });
  const sum = SCHED.summary;
  return (
    <div>
      <div className="flex items-center justify-between mb-3"><H2>Organizer</H2><span className="text-xs" style={{ color: MUTED }}>{busy ? "Saving..." : "Signed in as " + org.id}</span></div>
      {sum.overrun > 0 && (
        <div className="rounded-xl p-3 mb-4 text-sm flex gap-2 items-start" style={{ background: "#FFF4F1", border: "1px solid #F1B7A8", color: INK }}>
          <AlertTriangle size={16} style={{ color: "#B3261E", marginTop: 2, flexShrink: 0 }} />
          <span>The current plan ends at {fmtTime(sum.end2)} on Sunday, {durText(sum.overrun)} after closing. Add courts or shorten match lengths in Settings.</span>
        </div>
      )}
      <div className="flex gap-2 mb-4">
        {[["matches", "Matches"], ["names", "Names"], ["settings", "Settings"]].map(([k, l]) => <button key={k} type="button" className="rounded-full px-3.5 py-1.5 text-sm font-semibold" style={pill(sub === k)} onClick={() => setSub(k)}>{l}</button>)}
      </div>
      {sub === "matches" && <OrgMatches S={S} now={now} commit={commit} confirm={confirm} courts={courts} />}
      {sub === "names" && <OrgNames S={S} commit={commit} />}
      {sub === "settings" && <OrgSettings S={S} commit={commit} confirm={confirm} org={org} signOut={signOut} toast={toast} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* APP                                                                 */
/* ------------------------------------------------------------------ */
export default function App({ _t } = {}) {
  const [S, setS] = useState(_t && _t.S ? _t.S : emptyState());
  const [ready0, setReady] = useState(!!_t);
  const [syncErr, setSyncErr] = useState(false);
  const [lastSync, setLastSync] = useState(null);
  const [tab, setTab] = useState((_t && _t.tab && _t.tab !== "schedule" && _t.tab) || "draws");
  const [meKey, setMeKey] = useState((_t && _t.me) || null);
  const [viewKey, setViewKey] = useState((_t && _t.view) || null);
  const [org, setOrg] = useState((_t && _t.org) || null);
  const [modal, setModal] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);
  const [busy, setBusy] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [nav, setNav] = useState(() => ({ ev: "M", br: "Round 1", s: "M_Round1", mode: "list", focus: null }));
  const orgRef = useRef(org);
  orgRef.current = org;

  applySchedule(S.cfg);
  const courts = SCHED.cfg.courts;

  const toast = useCallback((m) => { setToastMsg(m); setTimeout(() => setToastMsg((cur) => (cur === m ? null : cur)), 3500); }, []);
  const loadState = useCallback(async () => {
    const r = await readShared("state");
    if (r.ok) { setS(normState(r.val)); setSyncErr(false); setLastSync(new Date()); setReady(true); }
    else if (r.missing) { setS(emptyState()); setSyncErr(false); setLastSync(new Date()); setReady(true); }
    else setSyncErr(true);
  }, []);
  useEffect(() => {
    if (_t) return undefined;
    loadState();
    const iv = setInterval(() => { if (!document.hidden) loadState(); }, org ? 8000 : 15000);
    const vis = () => { if (!document.hidden) loadState(); };
    document.addEventListener("visibilitychange", vis);
    return () => { clearInterval(iv); document.removeEventListener("visibilitychange", vis); };
  }, [org, loadState]);
  useEffect(() => { const iv = setInterval(() => setNow(Date.now()), 30000); return () => clearInterval(iv); }, []);
  useEffect(() => {
    if (_t) return;
    (async () => {
      const me = await readMine("me");
      if (me && me.key && DATA.P[me.key]) { setMeKey(me.key); setViewKey(me.key); }
      if (supa) {
        const { data } = await supa.auth.getSession();
        const email = data && data.session && data.session.user && data.session.user.email;
        if (email) setOrg({ id: email.split("@")[0], key: email, admin: true });
      }
    })();
  }, []);

  const saveMe = (k) => { setMeKey(k); writeMine("me", { key: k }); };
  const clearMe = () => { setMeKey(null); deleteMine("me"); };
  const pickPlayer = (k) => { setViewKey(k); setTab("my"); if (window.scrollTo) window.scrollTo(0, 0); };
  const jumpTo = (id) => { const sh = SHEET[DATA.M[id].s]; setNav({ ev: sh.ev, br: sh.br, s: sh.s, mode: "list", focus: id }); setTab("draws"); };
  const confirm = (m) => setModal(m);

  const commit = useCallback(async (mutator, msg) => {
    const o = orgRef.current;
    if (!o) { toast("Sign in as an organizer first."); return false; }
    setBusy(true);
    try {
      const r = await readShared("state");
      let base;
      if (r.ok) base = normState(r.val); else if (r.missing) base = emptyState(); else throw new Error("unreachable");
      base = JSON.parse(JSON.stringify(base));
      applySchedule(base.cfg);
      const err = mutator(base);
      if (err) { toast(err); return false; }
      base.v = (base.v || 0) + 1;
      base.log = [{ ts: Date.now(), by: o.id, msg }].concat(base.log || []).slice(0, 80);
      await writeShared("state", base);
      setS(base);
      return true;
    } catch (e) {
      if (e && e.message === "conflict") { toast("Another organizer saved at the same moment. Refreshing - please redo your change."); loadState(); }
      else toast("Could not save. Check your connection and try again.");
      return false;
    } finally { setBusy(false); }
  }, [toast]);

  const onLogin = async (id, pin) => {
    if (!supa) return "Storage is not configured.";
    const { data, error } = await supa.auth.signInWithPassword({ email: id.trim(), password: pin });
    if (error || !data || !data.user) return "Wrong email or password.";
    const email = data.user.email || id.trim();
    setOrg({ id: email.split("@")[0], key: email, admin: true });
    return null;
  };
  const signOut = () => { setOrg(null); if (supa) supa.auth.signOut(); };

  const anyLive = Object.keys(S.live).some((id) => !S.res[id]);
  const tabs = [["draws", "Draws", Network], ["my", "My matches", User], ["org", "Organizer", org ? Shield : Lock]];

  return (
    <div style={{ background: PAPER, minHeight: "100vh", fontFamily: BODY, color: INK }}>
      <style>{`
        @keyframes pulseDot { 0% { box-shadow: 0 0 0 0 rgba(232,68,30,.55);} 70% { box-shadow: 0 0 0 7px rgba(232,68,30,0);} 100% { box-shadow: 0 0 0 0 rgba(232,68,30,0);} }
        .pulse { animation: pulseDot 1.6s infinite; }
        @media (prefers-reduced-motion: reduce) { .pulse { animation: none; } * { scroll-behavior: auto !important; } }
        button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible { outline: 3px solid #F2C230; outline-offset: 2px; }
        input, select, textarea { font-family: inherit; }
      `}</style>
      <header style={{ background: INK, color: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between gap-3">
          <div>
            <div style={{ fontFamily: DISPLAY }} className="text-2xl font-bold leading-none">ZBL 2026 Schedule</div>
            <div className="text-xs mt-1" style={{ opacity: 0.75 }}>{DAYS[1].long} and {DAYS[2].long}</div>
          </div>
          <div className="flex items-center gap-2.5">
            {anyLive && <span className="rounded-full px-2.5 py-1 text-xs font-bold flex items-center gap-1.5" style={{ background: "rgba(255,255,255,.12)" }}><span className="pulse inline-block rounded-full" style={{ width: 8, height: 8, background: LIVE }} />Matches on court</span>}
            <button type="button" onClick={loadState} aria-label="Refresh now" title={syncErr ? "Offline. Tap to retry" : "Refresh now"} className="rounded-full p-2" style={{ background: "rgba(255,255,255,.12)" }}><RefreshCw size={16} style={{ color: syncErr ? "#FFB4A8" : "#fff" }} /></button>
          </div>
        </div>
        {syncErr && <div className="text-xs text-center py-1" style={{ background: "#7A2A1D" }}>Can't reach the server. Showing the last update and retrying automatically.</div>}
      </header>
      <main className="max-w-6xl mx-auto px-4 pt-5" style={{ paddingBottom: 110 }}>
        {!ready0 ? <Empty>Loading the latest draw...</Empty> : (
          <>
            {tab === "draws" && <DrawsTab S={S} now={now} meKey={meKey} onPick={pickPlayer} nav={nav} setNav={setNav} />}
            {tab === "my" && <MyTab S={S} now={now} viewKey={viewKey} setViewKey={setViewKey} meKey={meKey} saveMe={saveMe} clearMe={clearMe} />}
            {tab === "org" && <OrgTab S={S} now={now} org={org} commit={commit} confirm={confirm} onLogin={onLogin} signOut={signOut} toast={toast} busy={busy} courts={courts} />}
          </>
        )}
        <div className="text-xs mt-8 text-center" style={{ color: MUTED }}>{lastSync ? "Last updated " + lastSync.toLocaleTimeString() + ". Refreshes by itself every " + (org ? "8" : "15") + " seconds." : ""}</div>
      </main>
      <nav aria-label="Main" className="fixed left-0 right-0 bottom-0" style={{ background: "#fff", borderTop: "1px solid " + LINE }}>
        <div className="max-w-6xl mx-auto grid grid-cols-4">
          {tabs.map(([k, l, Icon]) => {
            const on = tab === k;
            return (
              <button key={k} type="button" onClick={() => setTab(k)} aria-current={on ? "page" : undefined} className="flex flex-col items-center gap-0.5 py-2.5"
                style={{ color: on ? INK : MUTED, fontWeight: on ? 700 : 500, borderTop: "3px solid " + (on ? LIVE : "transparent") }}>
                <Icon size={20} /><span style={{ fontSize: 11.5 }}>{l}</span>
              </button>
            );
          })}
        </div>
      </nav>
      {toastMsg && <div role="status" className="fixed left-1/2 rounded-lg px-4 py-2.5 text-sm font-semibold" style={{ bottom: 84, transform: "translateX(-50%)", background: INK, color: "#fff", maxWidth: "90vw", zIndex: 60 }}>{toastMsg}</div>}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center p-4" style={{ background: "rgba(15,34,48,.55)", zIndex: 50 }} role="dialog" aria-modal="true" aria-label={modal.title}>
          <Card className="p-5 max-w-sm w-full">
            <h3 style={{ fontFamily: DISPLAY, color: INK }} className="text-xl font-bold">{modal.title}</h3>
            <p className="text-sm mt-1.5" style={{ color: MUTED }}>{modal.body}</p>
            <div className="mt-4 flex gap-2 justify-end">
              <Btn onClick={() => setModal(null)}>Keep as is</Btn>
              <Btn kind={modal.danger ? "live" : "solid"} onClick={() => { const f = modal.onConfirm; setModal(null); f(); }}>{modal.label}</Btn>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
