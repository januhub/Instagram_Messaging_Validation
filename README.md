# Instagram_Messaging_Validation
## Click the below image to view the Testing Demo  
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/rzIGivyVrjs/0.jpg)](https://www.youtube.com/watch?v=rzIGivyVrjs&ab_channel=JananiElangovan)


## Test description
1. We are logging into User 1 account.
2. User 1 sends message to User 2.
3. We are logging into User 2 account.
4. Validate the message sent by User 1 to User 2.


## Prerequisite
1. Ensure `node` and `npm` is installed in the system

## Steps to run the test 

1. Clone the repo
2. Run `npm install` in root directory of the repo
3. Run `npx install playwright` if playwright is not there in system
4. Run `npx playwright test` in root directory of the repo
5. Headless can be set as `false` in `playwright.config.js`. Hence it will run with visualization
6. Run `npx playwright show-report`
