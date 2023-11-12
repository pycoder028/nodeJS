const EventEmitter = require('events');

class School extends EventEmitter{
    //method for start period
    startPeriod(){
        console.log('Class started!');

        //rise event when bell rigns
        //raise an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended'
            });
        }, 2000);
    }
}

module.exports = School;