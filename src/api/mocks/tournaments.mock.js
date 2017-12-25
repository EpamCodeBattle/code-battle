// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const delay = 1000;
const tournaments = [
  {
    id: 'simplify-the-solution',
    title: 'Simplify the solution',
    category: 'JavaScript',
    author: 'Rufat Khaslarov',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Started',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
      `A great way to improve your skills when learning to code 
      is by solving coding challenges. Solving different types of 
      challenges and puzzles can help you become a better problem solver, 
      learn the intricacies of a programming language, prepare for 
      job interviews, learn new algorithms, and more.`,
    tasks: [
      {
        id: 'strings',
        name: 'Strings',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 1,
        satisfaction: '95% of 235',
        solvedBy: '10 of 34',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'arrays',
        name: 'arrays',
        difficulty: 'Fighter',
        author: 'Mikkie Mouse',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Numbers-and-Strings',
        name: 'Numbers and Strings',
        difficulty: 'Fighter',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'From-Newbie-To-Over',
        name: 'From Newbie To Over',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      }
    ]
  },
  {
    id: 'string-etc',
    title: 'string etc',
    category: 'JavaScript',
    author: 'lihuanshuai',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Started',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
    `A great way to improve your skills when learning to code 
    is by solving coding challenges. Solving different types of 
    challenges and puzzles can help you become a better problem solver, 
    learn the intricacies of a programming language, prepare for 
    job interviews, learn new algorithms, and more.`,
    tasks: [
      {
        id: 'numbers',
        name: 'numbers',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 1,
        satisfaction: '95% of 235',
        solvedBy: '10 of 34',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Declare-Variables-Not-War',
        name: 'Declare Variables Not War',
        difficulty: 'Fighter',
        author: 'Mikkie Mouse',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Numbers-and-Strings',
        name: 'Numbers and Strings',
        difficulty: 'Fighter',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'From-Newbie-To-Over',
        name: 'From Newbie To Over',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Hello-world',
        name: 'Hello world',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 3,
        satisfaction: '28% of 133',
        solvedBy: '23 of 22',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      }
    ]
  },
  {
    id: 'yet-To-Solve',
    title: 'yet To Solve',
    category: 'JavaScript',
    author: 'saiful110816',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Preparing',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
    `A great way to improve your skills when learning to code 
    is by solving coding challenges. Solving different types of 
    challenges and puzzles can help you become a better problem solver, 
    learn the intricacies of a programming language, prepare for 
    job interviews, learn new algorithms, and more.`,
    tasks: [
      {
        id: 'Objects',
        name: 'Objects',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 1,
        satisfaction: '95% of 235',
        solvedBy: '10 of 34',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Declare-Variables-Not-War',
        name: 'Declare Variables Not War',
        difficulty: 'Fighter',
        author: 'Mikkie Mouse',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Greetings-The-New-Internet-Explorer',
        name: 'Greetings The New Internet Explorer',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 1,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'From-Newbie-To-Over',
        name: 'From Newbie To Over',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Hello-world-2',
        name: 'Hello world 2',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '28% of 133',
        solvedBy: '23 of 22',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      }
    ]
  },
  {
    id: 'simplify-the-solution4',
    title: 'Simplify the solution',
    category: 'JavaScript',
    author: 'Rufat Khaslarov',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Started',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
    `A great way to improve your skills when learning to code 
    is by solving coding challenges. Solving different types of 
    challenges and puzzles can help you become a better problem solver, 
    learn the intricacies of a programming language, prepare for 
    job interviews, learn new algorithms, and more.`,
    tasks: [
      {
        id: 'Objects',
        name: 'Objects',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 1,
        satisfaction: '95% of 235',
        solvedBy: '10 of 34',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Declare-Variables-Not-War',
        name: 'Declare Variables Not War',
        difficulty: 'Fighter',
        author: 'Mikkie Mouse',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Greetings-The-New-Internet-Explorer',
        name: 'Greetings The New Internet Explorer',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 1,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'From-Newbie-To-Over',
        name: 'From Newbie To Over',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Hello-world-2',
        name: 'Hello world 2',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '28% of 133',
        solvedBy: '23 of 22',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      }
    ]
  },
  {
    id: 'simplify-the-solution2',
    title: 'Simplify the solution2',
    category: 'JavaScript',
    author: 'Rufat Khaslarov',
    tags: ['Javascript', 'Math'],
    numberOfTasks: 6,
    status: 'Preparing',
    language: 'Javascript',
    difficulty: 'Mortal',
    department: 'Level Seven',
    remaining: '2h',
    solving: 28,
    timeLeft: 3,
    totalTime: 4,
    start: new Date(2017, 11, 12).toISOString(),
    end: new Date(2017, 11, 27).toISOString(),
    description:
    `A great way to improve your skills when learning to code 
    is by solving coding challenges. Solving different types of 
    challenges and puzzles can help you become a better problem solver, 
    learn the intricacies of a programming language, prepare for 
    job interviews, learn new algorithms, and more.`,
    tasks: [
      {
        id: 'HipHip-Array',
        name: '[Hip,Hip] Array',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 3,
        satisfaction: '95% of 225',
        solvedBy: '10 of 84',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Type-Script',
        name: 'Type Script',
        difficulty: 'Fighter',
        author: 'Mikkie Mouse',
        stars: 3,
        satisfaction: '55% of 135',
        solvedBy: '11 of 32',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'Dont-worry,-be-happy',
        name: 'Don\'t worry, be happy',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 1,
        satisfaction: '15% of 133',
        solvedBy: '21 of 32',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'From-Newbie-To-Over',
        name: 'From Newbie To Over',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '78% of 133',
        solvedBy: '21 of 22',
        status: 'Open',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      },
      {
        id: 'hello-world-2',
        name: 'Hello world 2',
        difficulty: 'Mortal',
        author: 'Mikkie Mouse',
        stars: 2,
        satisfaction: '28% of 133',
        solvedBy: '23 of 22',
        status: 'Resolved',
        description:
        `<p>You are going to be given an array of integers. Your job is to take 
        that array and find an index N where the sum of the integers to the 
        left of N is equal to the sum of the integers to the right of N. 
        If there is no index that would make this happen, return <code>-1</code>.</p>
        <p>Let's say you are given the array <code>{1,2,3,4,3,2,1}</code>: Your function 
        will return the index 3, because at the 3rd position of the array, 
        the sum of left side of the index <code>({1,2,3})</code> and the sum of the 
        right side of the index <code>({3,2,1})</code> both equal 6.</p>
        <p>Let's look at another one.</p>
        <p>You are given the array <code>{1,100,50,-51,1,1}</code>:</p>
        <p>Your function will return the index 1, because at the 1st position 
        of the array, the sum of left side of the index <code>({1})</code> and the sum 
        of the right side of the index <code>({50,-51,1,1})</code> both equal 1.</p>`,
        comments: [
          {
            name: 'Egor Tsukanov',
            avatar: 'photo1.png',
            date: new Date(2017, 11, 12).toISOString(),
            text: `I tried to use "Set" but it seems something causing an error when compling. 
            I can run my code when I copy and paste in to Eclipse though.`
          },
          {
            name: 'Evgeny Tartakovskiy',
            avatar: 'photo2.png',
            date: new Date(2017, 11, 22).toISOString(),
            text: `When I press on the run sample test it tells me the ma is not defined, 
            but when I press on attempt I don't get that error.`
          }
        ]
      }
    ]
  }
];

export default class Tours {
  static fetchAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({data: [...tournaments], count: 6});
      }, delay);
    });
  }
}
