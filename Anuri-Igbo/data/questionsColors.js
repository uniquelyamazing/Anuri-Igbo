import React, { useState } from 'react';
import QuizSound from './QuizSound'
import BLACK from '../assets/sounds/BLACK.mp3'
import WHITE from '../assets/sounds/WHITE.mp3'
import YELLOW from '../assets/sounds/YELLOW.mp3'
import RED from '../assets/sounds/RED.mp3'
import BLUE from '../assets/sounds/BLUE.mp3'
import PURPLE from '../assets/sounds/PURPLE.mp3'
import GREEN from '../assets/sounds/GREEN.mp3'
import PINK from '../assets/sounds/PINK.mp3'
import GOLD from '../assets/sounds/GOLD.mp3'

   
export default [
    {
        
        question: (<QuizSound soundFile={YELLOW}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Green",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Yellow",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Blue",
                
            },
            {
                id:"3",
                options:"D",
                answer:"White",
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={PURPLE}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Purple",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Yellow",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Black",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Red",
                
            },
        ],
        correctAnswerIndex: 0,

    },
    {
        question: (<QuizSound soundFile={BLACK}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Black",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Red",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Green",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Pink",
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={BLUE}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Pink",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Blue",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Black",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Brown",
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={WHITE}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Brown",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Purple",
                
            },
            {
                id:"2",
                options:"C",
                answer:"White",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Black",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={GREEN}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"White",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Blue",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Green",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Yellow",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={PINK}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"YELLOW",
                
            },
            {
                id:"1",
                options:"B",
                answer:"PINK",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Purple",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Black",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={RED}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"White",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Brown",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Red",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Purple",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={BLACK}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Blue",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Green",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Black",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Pink",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question:(<QuizSound soundFile={GOLD}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Red",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Gold",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Pink<",
                
            },
            {
                id:"3",
                options:"D",
                answer:"White",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
]




