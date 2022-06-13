$("document").ready(function(){
    $('.btn').on('click', function() {
        let PersonName=$('#name').val();
        let Character=$('#character').val();
        let Adverb=$('#adverb').val();
        let Adjective=$('#adjective').val();
        let story=`One day, my friend ${PersonName} was visiting Almaty and ran into ${Character}. ${PersonName} ran ${Adverb} to meet ${
            Character}. But ${Character} turned out to be very ${Adjective} and ${PersonName} did not enjoy the meeting`;
            console.log(story);
            $("#result").append(story)
            // let StoryTell = $('story').children().empty().append('story');

        // let StoryTell = $('story').children().empty().append($('story')).val();
        // console.
        
    })
})
