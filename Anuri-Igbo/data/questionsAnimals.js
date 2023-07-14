import React, { useState } from 'react';
import QuizSound from './QuizSound'
import LIZARD from '../assets/sounds/LIZARD.mp3'
import LION from '../assets/sounds/LION.mp3'
import TIGER from '../assets/sounds/TIGER.mp3'
import PIG from '../assets/sounds/PIG.mp3'
import FROG from '../assets/sounds/FROG.mp3'
import DONKEY from '../assets/sounds/DONKEY.mp3'
import SQUIRREL from '../assets/sounds/SQUIRREL.mp3'
import SCORPION from '../assets/sounds/SCORPION.mp3'
import ANTELOPE from '../assets/sounds/ANTELOPE.mp3'
import CAT from '../assets/sounds/CAT.mp3'

   
export default [
    {
        
        question: (<QuizSound soundFile={LIZARD}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Scorpion",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Donkey",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Lizard",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Horse",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={DONKEY}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Frog",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Tiger",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Scorpion",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Donkey",
                
            },
        ],
        correctAnswerIndex: 3

    },
    {
        question: (<QuizSound soundFile={SQUIRREL}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Cow",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Squirrel",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Elephant",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Donkey",
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={LION}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Lizard",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Cow",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Lion",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Elephant",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={PIG}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"pig",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Antelope",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Frog",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Tiger",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={FROG}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Scorpion",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Frog",
                
            },
            {
                id:"2",
                options:"C",
                answer:"cow<",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Gorilla",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={TIGER}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Leopard",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Snake",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Donkey",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Tiger",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: (<QuizSound soundFile={CAT}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Gorilla",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Elephant",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Cat",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Pig",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={ANTELOPE}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Antelope",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Cow",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Leopard<",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Horse",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={SCORPION}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Lion",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Snake",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Goat<",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Scorpion",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
]


