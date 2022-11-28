import uniqid from 'uniqid';
import bill from '../assets/img/bill.webp';
import dipper from '../assets/img/dipper.webp';
import ford from '../assets/img/ford.png';
import gideon from '../assets/img/gideon.webp';
import mabel from '../assets/img/mabel.webp';
import robbie from '../assets/img/robbie.webp';
import soos from '../assets/img/soos.webp';
import stan from '../assets/img/stan.webp';
import waddles from '../assets/img/waddles.webp';
import wendy from '../assets/img/wendy.webp';

const characters = [
    {
        id: uniqid(),
        name: 'Bill',
        src: bill,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Dipper',
        src: dipper,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Ford',
        src: ford,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Gideon',
        src: gideon,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Mabel',
        src: mabel,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Robbie',
        src: robbie,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Soos',
        src: soos,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Stan',
        src: stan,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Waddles',
        src: waddles,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Wendy',
        src: wendy,
        clicked: false,
    },
];

export default characters;