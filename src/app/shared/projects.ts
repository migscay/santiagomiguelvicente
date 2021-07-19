import { Project } from './project';

export const PROJECTS: Project[] = [
    {
      name: 'MVP Talent',
      url: 'https://mvptalentm.azurewebsites.net/Home',
      image: '/assets/images/mvptalent.gif',
      description: 'Talent app connects job seekers and employers. It also provides the functions for both candidates and employers to manage the recruitment process.',
      languages: 'JavaScript: 78.7% C#: 4.2% CSS: 16.9% Other: 0.2%'
    },
    {
      name: 'MVP Store',
      url: 'https://mvpstore.azurewebsites.net/',
      image: '/assets/images/mvpstore.gif',
      description: 'ASP.NET Core MVC app with React, and database on Microsoft SQL Server.',
      languages: 'TypeScript: 57.4 % HTML: 42.6 %'
    },
    {
      name: 'Bitcoin Ticker',
      url: 'https://bitcoin-ticker.vercel.app/',
      image: '/assets/images/bitcoin.gif',
      description: 'Displays the current bitcoin prices from https://blockchain.info/ticker. (Refreshed every 30 seconds)',
      languages: 'TypeScript: 57.4 % HTML: 42.6 %'
    },
    {
        name: 'Piano Player',
        url: 'https://piano-player-git-main-migscay.vercel.app/',
        image: '/assets/images/Piano.gif',
        description: 'A project I did in the Codecademy JavaScript course. The only requirement was that the piano keys turn to blue on mousedown. I improved it by adding sound.',
        languages: 'HTML: 24.7 % JavaScript: 54.3 % CSS: 21 %'
      },
      {
        name: 'Task Planner',
        url: 'https://task-planner-git-main.migscay.vercel.app',
        image: '/assets/images/Task.gif',
        description: 'A group project in the Generation Australia Bootcamp.',
        languages: 'HTML: 41.4 % JavaScript: 57.2 % CSS: 1.4 %'
      },
      {
        name: 'Weather Map',
        url: 'https://weather-map-zeta.vercel.app/',
        image: '/assets/images/Weather.gif',
        description: 'Search for a place and get the current weather.',
        languages: 'HTML: 57.9 % JavaScript: 42.1 %'
      },
      {
        name: 'Todo List',
        url: 'https://my-things-todo-app.herokuapp.com/',
        image: '/assets/images/todolist.gif',
        description: 'A To do list done with Laravel,PHP, MySQL and VUE.js',
        languages: 'PHP: 88.6% Vue: 5.6% Blade: 4.9% Shell: 0.9%'
      },
      {
        name: 'Note Taking',
        url: '#',
        image: '/assets/images/noteTaking.gif',
        description: 'A note taking windows desktop app done with C#',
        languages: ''
      }
    ]
        