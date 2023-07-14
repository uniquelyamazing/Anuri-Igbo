import React, { useState } from 'react';
import QuizSound from './QuizSound'
import GRANDMA from '../assets/sounds/GRANDMA.mp3'
import TWINS from '../assets/sounds/TWINS.mp3'
import SISTER from '../assets/sounds/SISTER.mp3'
import MOTHER from '../assets/sounds/MOTHER.mp3'
import HUSBAND from '../assets/sounds/HUSBAND.mp3'
import WIFE from '../assets/sounds/WIFE.mp3'
import GRANDPA from '../assets/sounds/GRANDPA.mp3'
import SIBLINGS from '../assets/sounds/SIBLINGS.mp3'
import FEMALECHILD from '../assets/sounds/FEMALECHILD.mp3'
import BROTHER from '../assets/sounds/BROTHER.mp3'
export default [
    {
        
        question: (<QuizSound soundFile={GRANDMA}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Mother",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Father",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Grand Mother",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Grand Father",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={TWINS}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Grnd Pa",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Female Child",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Siblings",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Twins",
                
            },
        ],
        correctAnswerIndex: 3,

    },
    {
        question: (<QuizSound soundFile={SISTER}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Brother",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Sister",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Siblings",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Aunty",
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={MOTHER}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Male Child",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Twin",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Mother",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Kinsmen",
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={HUSBAND}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Husband",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Wife",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Aunt",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Twin",
                
                
            },
        ],
        correctAnswerIndex: 0
    },
    {
        question: (<QuizSound soundFile={WIFE}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"KindMen",
                
            },
            {
                id:"1",
                options:"B",
                answer:"GrandMa",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Wife",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Sister",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={GRANDPA}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Male Child",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Twin",
                
            },
            {
                id:"2",
                options:"C",
                answer:"GrandPa",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Mother",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
    {
        question: (<QuizSound soundFile={BROTHER}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Father",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Grand Children",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Siblings",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Brother",
                
                
            },
        ],
        correctAnswerIndex: 3
    },
    {
        question: (<QuizSound soundFile={FEMALECHILD}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Male Child",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Female Child",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Father",
                
            },
            {
                id:"0",
                options:"D",
                answer:"Aunt",
                
                
            },
        ],
        correctAnswerIndex: 1
    },
    {
        question: (<QuizSound soundFile={SIBLINGS}/>),
        options:[
            {
                id:"0",
                options:"A",
                answer:"Twin",
                
            },
            {
                id:"1",
                options:"B",
                answer:"Husband",
                
            },
            {
                id:"2",
                options:"C",
                answer:"Siblings",
                
            },
            {
                id:"3",
                options:"D",
                answer:"Grand Children",
                
                
            },
        ],
        correctAnswerIndex: 2
    },
]




