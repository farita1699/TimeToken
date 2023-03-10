# TimeToken

## Inspiration

Productivity is hard to harness especially at hackathons with many distractions, but a trick we software developing students found to stay productive while studying was using the “Pomodoro Technique”. The laptop is our workstation and could be a source of distraction, so what better place to implement the Pomodoro Timer as a constant reminder? Since our primary audience is going to be aspiring young tech students, we chose to further incentivize them to focus until their “breaks” by rewarding them with a random custom-generated and minted NFT to their name every time they succeed. This unique inspiration provided an interesting way to solve a practical problem while learning about current blockchain technology and implementing it with modern web development tools.

## How it works

We first login with our username and password, this is checked with a database against the existing colletion of valid usernames and passwords. If valid, we are taken to the pomodoro timer, and your backend data will be cached on the frontend through Redux. You are able to start the timer which then counts down and once it gets to 0, a function is called on the backend where we create an image in python (every image created is unique from eachother due the many co-ordinates and geometrical shapes possible). We then mint an NFT using this image and we add it to the groeli blockchain. Each minted NFT is related to the users account (by a foreign key) on a database in order to view all a user's NFT on the 'My list of NFTs' page.

## What it does

An innovative modern “Pomodoro Timer” running on your browser enables users to sign in and link their MetaMask Crypto Account addresses. Such that they are incentivized to be successful with the running “Pomodoro Timer” because upon reaching “break times” undisrupted our website rewards the user with a random custom-generated and minted NFT to their name, every time they succeed. This “Ethereum Based NFT” can then be both viewed on “Open Sea” or on a dashboard of the website as they both store the user’s NFT collection.

## How we built it

TimeToken's back-end is built with Django and Sqlite and for our frontend, we created a beautiful and modern platform using React and Tailwind, as well as powerful web libraries like Axios and Redux, to give our users a dynamic webpage. A benefit of using React, is that it works smoothly with our Django back-end, making it easy for both our front-end and back-end teams to work together

## Challenges we ran into

We had set up the website originally as a MERN stack (MongoDB/Express.js/REACT/Node.js) however while trying to import dependencies for the Verbwire API, to mint our images into NFTs to the user’s wallets we ran into problems. After solving dependency issues a “git merge” produced many conflicts, and on the way to resolving conflicts, we discovered some difficult compatibility issues with the API SDK and JS option for our server. At this point we had to pivot our plan, so we decided to implement the Verbwire Python-provided API solution, and it worked out very well. We intended here to just pass the python script and its functions straight to our front-end but learned that direct front-end to Python back-end communication is very challenging. It involved Ajax/XML file formatting and solutions heavily lacking in documentation, so we were forced to keep searching for a solution. We realized that we needed an effective way to make back-end Python communicate with front-end JS with SQLite and discovered that the Django framework was the perfect suite. So we were forced to learn Serialization and the Django framework quickly in order to meet our needs.

## Accomplishments that we're proud of

We have accomplished many things during the development of TimeToken that we are very proud of. One of our proudest moments was when we pulled an all-nighter to code and get everything just right. This experience helped us gain a deeper understanding of technologies such as Axios, Django, and React, which helped us to build a more efficient and user-friendly platform. We were able to implement the third-party VerbWire API, which was a great accomplishment, and we were able to understand it and use it effectively. We also had the opportunity to talk with VerbWire professionals to resolve bugs that we encountered, which allowed us to improve the overall user experience. Another proud accomplishment was being able to mint NFTs and understanding how crypto and blockchains work, this was a great opportunity to learn more about the technology. Finally, we were able to integrate crypto APIs, which allowed us to provide our users with a complete and seamless experience.

## What we learned

When we first started working on the back-end, we decided to give MongoDB, Express, and NodeJS a try. At first, it all seemed to be going smoothly, but we soon hit a roadblock with some dependencies and configurations between a third-party API and NodeJS. We talked to our mentor and decided it would be best to switch gears and give the Django framework a try. We learned that it's always good to have some knowledge of different frameworks and languages, so you can pick the best one for the job. Even though we had a little setback with the back-end, and we were new to Django, we learned that it's important to keep pushing forward.

## What's next for TimeToken

TimeToken has come a long way and we are excited about the future of our application. To ensure that our application continues to be successful, we are focusing on several key areas. Firstly, we recognize that storing NFT images locally is not scalable, so we are working to improve scalability. Secondly, we are making security a top priority and working to improve the security of wallets and crypto-related information to protect our users' data. To enhance user experience, we are also planning to implement a media hosting website, possibly using AWS, to host NFT images. To help users track the value of their NFTs, we are working on implementing an API earnings report with different time spans. Lastly, we are working on adding more unique images to our NFT collection to keep our users engaged and excited.
