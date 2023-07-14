import React, { useState } from 'react';
import QuizSound from './QuizSound'
import itisgood from '../assets/sounds/itisgood.mp3'
import itisbad from '../assets/sounds/itisbad.mp3'
import television from '../assets/sounds/television.mp3'
import goodnight from '../assets/sounds/goodnight.mp3'
import howisyourfamily from '../assets/sounds/howisyourfamily.mp3'
import howareyou from '../assets/sounds/howareyou.mp3'
import ourhouse from '../assets/sounds/ourhouse.mp3'
import thankyou from '../assets/sounds/thankyou.mp3'
import hy from '../assets/sounds/hy.mp3'
import welcome from '../assets/sounds/welcome.mp3'

   
export default [
    {
        
        question: (<QuizSound soundFile={howareyou}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Have Patience",
                
            },
            {
                id:"1",
                options:"B",
                answer:"How is Family",
                
            },
            {
                id:"2",
                options:"C",
                answer:"How Are You",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Good Night",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={goodnight}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Good Night",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Welcome",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Thank You",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Hi",
                
            },
        ],
        correctAnswerIndex: 0,

    },
    {
        question: (<QuizSound soundFile={hy}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Thank You",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Good Night",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Welcome",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Hi",
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question:(<QuizSound soundFile={welcome}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Cloth",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Welcome",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Bedsheet",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Family",
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={howisyourfamily}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Our House",
                
            },
            {
                id:"1",
                options:"B",
                answer:"How is your Family",
                
            },
            {
                id:"2",
                options:"C",
                answer:"How Are you",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Our Church",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={ourhouse}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Our House",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Have Patience",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Take it Easy",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Our Church",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question:(<QuizSound soundFile={television}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Shoe",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Soap",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Television",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Spoon",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question:(<QuizSound soundFile={thankyou}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"How Are You",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Thank You",
                
            },
            {
                id:"2",
                options:"C",
                answer:"How is Your Family",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Welcome",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={itisbad}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"It is Bad",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Pacific Ocean",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Our Church",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Sponge",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={itisgood}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"It is Bad",
                
            },
            {
                id:"1",
                options:"B",
                answer:"open The Door",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Take it Easy",
                
            },
            {
                id:"3",
                options:"D",
                answer:"It is Good",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
]




