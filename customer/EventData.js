eventsApp.factory('eventData', function() {
 return {
   event: {
      name: 'Angular Bootcamp',
      date: '10/29/2013',
      time: '10:30am',
      location: {
        address: '123 Main street',
        city: 'New York',
        state: 'NY'
      },
      
      image: 'http://vojtajina.github.io/html5la/2012-05-30-boston/images/AngularShieldLogo.png',
      
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: 1,
          level: 'Advanced',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
          upVoteCount: 0,
        },
        {
          name: 'Scopes for profit',
          creatorName: 'John Doe',
          duration: 3,
          level: 'Intermediate',
          abstract: 'Lorem ipsum dolor dipisicing elit, sed do eiusmod tempor incididunt ut.',
          upVoteCount: 0,
        },
        {
          name: 'Events and You',
          creatorName: 'Jane Janeyes',
          duration: 2,
          level: 'Advanced',
          abstract: 'Losec tetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
          upVoteCount: 0,
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Lomad Sneer',
          duration: 4,
          level: 'Beginner',
          abstract: 'adipisicing elit, sed do eiusmod tempor incididunt ut.',
          upVoteCount: 0,
      },
      ]
    }
 }; 
})