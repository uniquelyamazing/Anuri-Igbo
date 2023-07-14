import React, { useState } from 'react';
import QuizSound from './QuizSound'
import MANGO from '../assets/sounds/Mango.mp3'
import GUAVA from '../assets/sounds/Guava.mp3'
import PINEAPPLE from '../assets/sounds/Pineapple.mp3'
import WATERMELON from '../assets/sounds/WaterMelon.mp3'
import ORANGE from '../assets/sounds/Orange.mp3'
import GROUNDNUT from '../assets/sounds/Groundnut.mp3'
import PAWPAW from '../assets/sounds/PawPaw.mp3'
import COCONUT from '../assets/sounds/coconut.mp3'
import KOLANUT from '../assets/sounds/Kolanut.mp3'
import AVOCADO from '../assets/sounds/Avocado.mp3'

   
export default [
    {
        
        question: (<QuizSound soundFile={GUAVA}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Pineapple",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Tigernut",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Guava",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Orange",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={COCONUT}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Coconut",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Watermelon",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Tigernut",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Mango",
                
            },
        ],
        correctAnswerIndex: 0,

    },
    {
        question: (<QuizSound soundFile={WATERMELON}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Soursop",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Corn",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Jack Fruit",
                
            },
            {
                id:"3",
                options:"D",
                answer:"WaterMelon",
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: (<QuizSound soundFile={PINEAPPLE}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Lime",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Pineapple",
                
            },
            {
                id:"2",
                options:"C",
                answer:"BitterKola",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Orange",
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={GROUNDNUT}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Mango",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Garden Egg",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Groundnut",
                
            },
            {
                id:"0",
                options:"D",
                answer:"BreadFruit",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={AVOCADO}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Avocado",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Pawpaw",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Orange",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Guava",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={ORANGE}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Watermelon",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Lime",
                
            },
            {
                id:"2",
                options:"C",
                answer:"ORANGE",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Soursop",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={KOLANUT}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Pineapple",
                
            },
            {
                id:"1",
                options:"B",
                answer:"BreadFruit",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Coconut",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Kolanut",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: (<QuizSound soundFile={MANGO}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Pawpaw",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Mango",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Kolanut<",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Tigernut",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={PAWPAW}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Avocado",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Groundnut",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Mango",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Pawpaw",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
]




