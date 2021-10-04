import React from 'react';
import { Button} from 'react-bootstrap';
/* about component */
const About = () => {
    return (
        <div>
            <div className="p-5">
            <h1 className="text-start"> OUR MISSION</h1>
               <p className="text-start"> Language Center’s mission is twofold: to provide high quality, affordable English classes to international students in a supportive, friendly atmosphere where students come first, whether their goal is academic, professional or personal self improvement, and expose them to Arabic,Bengali &  English culture. At the same time, we are committed to providing immigrant New Yorkers with ESL classes that accommodate their needs and prepare them to be part of the society where they live, work and educate their children. The curriculum at  Language Center is designed to support this mission by providing students with the necessary language tools to help them achieve their goals.  Language Center is committed to excellence and service at the highest degree.</p>
            </div>
<div className="p-5">
<h1 className="text-start">PLAN OVERVIEW</h1>
 <p className="text-start">comprehensive review once every three years. This review covers the following elements of its program: Mission, Financial Resources, Student Services, Human Resources, Physical Facility, Administrative Procedures and Operational Policies, Marketing and Recruitment and   Program Review. Any student, faculty, or staff member wishing to give input to this plan is encouraged to contact the Executive Director.</p>

<div>
    <p className="text-start">LC has a Plan-In Writing which guides administrative and curricular items of the program. If you wish to see a copy of this plan, please email  languagecenter@gmail.com</p>
</div>


</div>
<div className=" p-5">
   <h1 className="text-start">WELCOMING INTERNATIONAL STUDENTS SINCE 1985</h1>
   <p className="text-start">
    Language Center strives for excellence in all aspects of our program. This will help make your time with us well spent. Not only will you make friends from all over the world, you will receive excellent instruction, participate in exciting activities and enjoy our wonderful city! Our courses are designed with you in mind.
   </p>
 </div>

 
<div className="p-5">
    
  <h1 className="text-start">CERTIFICATION</h1>
   <p className="text-start">
   Many universities require officially certified copies of your proofs of language proficiency  .
This usually applies to:
</p>
<ul>
    <li className="text-start">your language certificates and any other proofs of language proficiency, such as proofs of participation.</li>
    <li className="text-start"> proofs of language proficiency . </li>
</ul>

<p className="text-start"> 
Exception: We can verify certain proofs of language proficiency online. For these, a non-certified copy of the certificate is enough. Find out below which certificates can be verified online.

</p>
<Button className="btn btn-primary">More on certified copies</Button>

 

<p className="text-start">Complaints can be filed by a student, faculty member, staff member, as well as others outside of the program. </p> 

 

   

 
</div >
<div className="p-5">
<h1 className="text-start">CODE OF ETHICS</h1>

<h3 className="text-start">Language Center must adhere to the   mission at all times.</h3>

 <p className="text-start">Language Center must adhere to ethical standards in all its business practices- this means always offering a quality product, treating customers respectfully, paying refunds on time and or refunding monies when due. This means never “tricking” a customer or telling a customer they will receive a service when they will not. New York Language Center must always engage in legal practices as defined by local, state and federal law. New York Language Center must adhere to guidelines outlined by its regulatory bodies.  Language Center must treat all employees fairly and with respect. Staff must treat each other likewise. Language Center must not engage in conducting business practices that fall outside of its mission unless the mission changes.</p>
</div>

        </div>
    );
};
/* exporting about to app.js */
export default About;