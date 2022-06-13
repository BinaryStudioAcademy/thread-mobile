# ThreadMobile

## Description
[**Thread**](https://github.com/BinaryStudioAcademy/thread-mobile) - this is mobile app with a ready-made architecture and structure, a connected basic technology stack and start-up functionality, designed for individual practice of students.

The main theme of the project is a social network similar to Twitter.

The main idea of the project is to onboard students with our vision of how a real project should look like from the inside, and give them the opportunity to individually explore how the architecture and structure of the project works, see its possible configurations, try to deeply understand someone else's code.

## Technologies

The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the `package.json` file.

### Common

1. ESLatest
2. [Git](https://git-scm.com/book/ru/v1/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git "Git")
3. [REST API](https://www.restapitutorial.com/lessons/restquicktips.html "REST API")
4. [npm](https://en.wikipedia.org/wiki/Npm_(software))
5. [ESLint](https://eslint.org/docs/user-guide/getting-started "ESLint")
6. [React Native](https://reactnative.dev/docs/0.64/getting-started "React Native")
7. [Redux](https://redux.js.org/introduction/getting-started "Redux")
8. [React Navigation](https://reactnavigation.org/docs/getting-started "React Navigation")
9. [dayjs](https://day.js.org/ "day.js")
10. [React Hook Form](https://react-hook-form.com/get-started "React Hook Form")
11. [joi](https://www.npmjs.com/package/joi "joi")

### Installation

1. Get the latest stable version [Node.js](https://nodejs.org/en/ "Node.js") (LTS). **Note:** npm will be installed automatically. Check the correctness of the installation: to do this, run in the command line (terminal):

    ```
    node -v  // for checking Node.js version
    npm -v // for checking npm version

2. Setup the environment by following [React Native documentation](https://reactnative.dev/docs/0.66/environment-setup)

3. Install Git.

4. Clone project`s [repo](https://github.com/BinaryStudioAcademy/thread-mobile):

    ```
    git clone git@github.com:BinaryStudioAcademy/thread-mobile.git
    ```

5. **Create a repo at [Bitbucket](https://bitbucket.org/) and carry out further development there.**

6.  In the root folder create a file **.env** and copy the contents of the file **.env.example** into it.

    **Note**: file **.env** contains real project keys and should not be saved to the repository.

    Replace in file **.env** key values to real.

7. In the root of the project install all the dependencies:
    ```
      npm run install
    ```

8. After installing the packages, in the root of the project, you need to run the command to [git-hooks](https://www.npmjs.com/package/simple-git-hooks):
    ```
      npx simple-git-hooks
    ```

    **Now, for each of your commits, the linter will be launched and check your code.**

9.  To start the project in the root folder you need to run the following command:

    ```
    npm start
    ```

10. Open a new terminal and from the root folder run one of the following commands:

    ```
    npm run-android
    ```

    ```
    npm run-ios
    ```

### Backend

The backend must be taken from this repository [ThreadJS](https://github.com/BinaryStudioAcademy/thread-js). Instructions for launching and configuring can be found in the readme of this repository.

## PS

Tasks can be completed for any of the Android or iOS platforms, when submitting a task, indicate which platform you used.

The entire list of tasks can be found on the board [**Trello**](https://trello.com/b/zWReSa2x "**Trello**") in the column **To Do**. You need to copy the board for yourself and work on it. This will help you track the entire process of your work, and we will determine what is already ready. The task will be considered completed if it is fully completed and the feature works. Let's look at its implementation and evaluate whether the logic was distributed correctly in the project. This will show how much you understand the architecture. We will also comment on the code..

The main result of the work can be determined by how deeply you were able to understand the project and understand it, and how far you have advanced in personal learning.

Links:

1. [Repo](https://github.com/BinaryStudioAcademy/thread-mobile).
2. [Trello](https://trello.com/b/zWReSa2x).

## FAQ:

1. What frameworks, libraries and their features can be used?

Complete freedom of action, feel free, use whatever you want.

2. Is it possible to change the database (add columns, tables)?

It is possible, and in some tasks it is even necessary. To do this, you need to create new migrations. Existing migrations cannot be changed!!! Please do not forget it.

3. Error: Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
You need to change the ```autocrlf``` setting to input or false in the Git settings.

```
git config --global core.autocrlf false
```

You may need to pull the project again.

4. When registering an application on the Gyazo website, you must provide ```Authorization callback URL```

Use https://www.google.com/.
