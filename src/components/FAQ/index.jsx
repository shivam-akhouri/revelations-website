import {useState} from 'react';
import "./index.css";

function FaqItem(props){
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <div class="tab w-full overflow-hidden border-t">
                <input class="absolute opacity-0" id={props.id} checked={isChecked}  type="checkbox" name="tabs2" onClick={()=>setIsChecked(!isChecked)}/>
                <label class="block p-5 leading-normal cursor-pointer text-xl" for={props.id}>{props.question}</label>
                <div class="tab-content overflow-hidden border-l-2 text-yellow-300 bg-gray-700 opacity-0.7 border-indigo-500 leading-normal">
                    <p class="p-5">{props.body}</p>
                </div>
            </div>
        </>
    )
}


export default function Faq() {
    return (
        <>
            <div className="p-10 flex flex-column" style={{backgroundColor: "#0E0221"}}>
                <div class="shadow-md w-full text-blue-500">
                    <FaqItem id={1} question="Question1" body="lorem ipsum dolor sit amet hololololo....." />
                    <FaqItem id={2} question="Question2" body="lorem ipsum dolor sit amet hololololo....."/>
                    <FaqItem id={3} question="Question3" body="lorem ipsum dolor sit amet hololololo....."/>
                    <FaqItem id={4} question="Question4" body="lorem ipsum dolor sit amet hololololo....."/>
                    <FaqItem id={5} question="Question5" body="lorem ipsum dolor sit amet hololololo....."/>
                    <FaqItem id={6} question="Question6" body="lorem ipsum dolor sit amet hololololo....."/>  
                </div>
                {/* <div class="shadow-md w-12">
                    <FaqItem id={4} question="Question4" body="lorem ipsum dolor sit amet hololololo....."/>
                    <FaqItem id={5} question="Question5" body="lorem ipsum dolor sit amet hololololo....."/>
                    <FaqItem id={6} question="Question6" body="lorem ipsum dolor sit amet hololololo....."/>           
                </div> */}
            </div>
        </>
    );
}