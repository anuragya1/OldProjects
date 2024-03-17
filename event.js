import{EventEmitter as event} from 'events'
const makeNoise=new event();

makeNoise.on('message',()=>{
    console.log('gulp gulp');
})



export default makeNoise;