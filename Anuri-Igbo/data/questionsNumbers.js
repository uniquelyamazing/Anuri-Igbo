import React, { useState } from 'react';
import QuizSound from './QuizSound'
import N4 from '../assets/sounds/4.mp3'
import N99 from '../assets/sounds/99.mp3'
import N15 from '../assets/sounds/15.mp3'
import N25 from '../assets/sounds/25.mp3'
import N32 from '../assets/sounds/32.mp3'
import N42 from '../assets/sounds/42.mp3'
import N58 from '../assets/sounds/58.mp3'
import N64 from '../assets/sounds/64.mp3'
import N86 from '../assets/sounds/86.mp3'
import N71 from '../assets/sounds/71.mp3'

   
export default [
    {
        
        question: (<QuizSound soundFile={N4}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"3",
                
            },
            {
                id:"1",
                options:"B",
                answer:"7",
                
            },
            {
                id:"2",
                options:"C",
                answer:"4",
                
            },
            {
                id:"0",
                options:"D",
                answer:"8",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={N15}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"15",
                
            },
            {
                id:"1",
                options:"B",
                answer:"12",
                
            },
            {
                id:"2",
                options:"C",
                answer:"19",
                
            },
            {
                id:"0",
                options:"D",
                answer:"11",
                
            },
        ],
        correctAnswerIndex: 0,

    },
    {
        question: (<QuizSound soundFile={N25}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"22",
                
            },
            {
                id:"1",
                options:"B",
                answer:"25",
                
            },
            {
                id:"2",
                options:"C",
                answer:"27",
                
            },
            {
                id:"0",
                options:"D",
                answer:"29",
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={N32}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"30",
                
            },
            {
                id:"1",
                options:"B",
                answer:"33",
                
            },
            {
                id:"2",
                options:"C",
                answer:"38",
                
            },
            {
                id:"3",
                options:"D",
                answer:"32",
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: (<QuizSound soundFile={N42}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"48",
                
            },
            {
                id:"1",
                options:"B",
                answer:"44",
                
            },
            {
                id:"2",
                options:"C",
                answer:"42",
                
            },
            {
                id:"0",
                options:"D",
                answer:"49",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={N58}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"51",
                
            },
            {
                id:"1",
                options:"B",
                answer:"56",
                
            },
            {
                id:"2",
                options:"C",
                answer:"58",
                
            },
            {
                id:"3",
                options:"D",
                answer:"52",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={N64}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"62",
                
            },
            {
                id:"1",
                options:"B",
                answer:"64",
                
            },
            {
                id:"2",
                options:"C",
                answer:"69",
                
            },
            {
                id:"3",
                options:"D",
                answer:"66",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={N71}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"71",
                
            },
            {
                id:"1",
                options:"B",
                answer:"78",
                
            },
            {
                id:"2",
                options:"C",
                answer:"74",
                
            },
            {
                id:"3",
                options:"D",
                answer:"72",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={N86}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"83",
                
            },
            {
                id:"1",
                options:"B",
                answer:"87",
                
            },
            {
                id:"2",
                options:"C",
                answer:"81",
                
            },
            {
                id:"3",
                options:"D",
                answer:"86",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: (<QuizSound soundFile={N99}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"92",
                
            },
            {
                id:"1",
                options:"B",
                answer:"95",
                
            },
            {
                id:"2",
                options:"C",
                answer:"93",
                
            },
            {
                id:"3",
                options:"D",
                answer:"99",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
]




