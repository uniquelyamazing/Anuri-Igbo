import React, { useState } from 'react';
import QuizSound from './QuizSound'
import A from '../assets/sounds/A.mp3'
import B from '../assets/sounds/B.mp3'
import D from '../assets/sounds/D.mp3'
import SH from '../assets/sounds/SH.mp3'
import Z from '../assets/sounds/Z.mp3'
import L from '../assets/sounds/L.mp3'
import KP from '../assets/sounds/KP.mp3'
import P from '../assets/sounds/A.mp3'
import E from '../assets/sounds/A.mp3'
import S from '../assets/sounds/S.mp3'

   
export default [
    {
        
        question: (<QuizSound soundFile={A}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"NY",
                
            },
            {
                id:"1",
                options:"B",
                answer:"KP",
               
            },
            {
                id:"2",
                options:"C",
                answer:"A",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Z",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={B}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"CH",
                
            },
            {
                id:"1",
                options:"B",
                answer:"B",
                
            },
            {
                id:"2",
                options:"D",
                answer:"Australia",
                
            },
            {
                id:"3",
                options:"NW",
                answer:"Antarctica",
                
            },
        ],
        correctAnswerIndex: 1,

    },
    {
        question: (<QuizSound soundFile={D}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"GH",
                
            },
            {
                id:"1",
                options:"B",
                answer:"CH",
                
            },
            {
                id:"2",
                options:"C",
                answer:"W",
                
            },
            {
                id:"3",
                options:"D",
                answer:"D",
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: (<QuizSound soundFile={KP}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"GB",
                
            },
            {
                id:"1",
                options:"B",
                answer:"A",
                
            },
            {
                id:"2",
                options:"C",
                answer:"KP",
                
            },
            {
                id:"3",
                options:"D",
                answer:"O",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={SH}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"SH",
                
            },
            {
                id:"1",
                options:"B",
                answer:"NW",
                
            },
            {
                id:"2",
                options:"C",
                answer:"GH",
                
            },
            {
                id:"3",
                options:"D",
                answer:"K",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={Z}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"M",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Z",
                
            },
            {
                id:"2",
                options:"C",
                answer:"U",
                
            },
            {
                id:"0",
                options:"D",
                answer:"I",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={S}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"P",
                
            },
            {
                id:"1",
                options:"B",
                answer:"U",
                
            },
            {
                id:"2",
                options:"C",
                answer:"T",
                
            },
            {
                id:"3",
                options:"D",
                answer:"S",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: (<QuizSound soundFile={P}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"P",
                
            },
            {
                id:"1",
                options:"B",
                answer:"R",
                
            },
            {
                id:"2",
                options:"C",
                answer:"SH<",
                
            },
            {
                id:"3",
                options:"D",
                answer:"F",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={L}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"E",
                
            },
            {
                id:"1",
                options:"B",
                answer:"J",
                
            },
            {
                id:"2",
                options:"C",
                answer:"L",
                
            },
            {
                id:"0",
                options:"D",
                answer:"M",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={E}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"GH",
                
            },
            {
                id:"1",
                options:"B",
                answer:"E",
                
            },
            {
                id:"2",
                options:"C",
                answer:"N<",
                
            },
            {
                id:"0",
                options:"D",
                answer:"NK",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
]




