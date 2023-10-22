# Movie-Fuel
Movie Fuel project

# Initialize project
1. Clone: `git clone https://github.com/CronusV/Movie-Fuel.git`
2. Move to directory: `cd Movie-Fuel`
3. Get dev branch: `git checkout dev`

# Git Workflow
- main branch is **production ready code** and should be stable
- dev branch is **development code** where features branches should be merged to
1. From dev, create another branch with feature name `git checkout -b <feature-branch-name>`
2. Finish developing code on feature branch by adding and commiting changes
3. Push feature Branch `git push origin <feature-branch-name>`
4. On github go to *pull requests* tab and click on *new pull request* button
5. Select dev branch for base base branch (this is where we want to merge)
6. On compare select your feature-branch-name
7. Submit pull request
8. Team lead and members will approve/deny pull request


# Notes
[OneNote](https://1drv.ms/o/s!ApP_R6BWyXl_iRcVc1mQlGErCN8H?e=lo5D76)

# Pulling
When pulling it is important to install any new modules that might have been added. But this might mean you will mutate package-lock.json.
This can cause enormous merge conflicts. So instead of using `npm install` use `npm ci` which stands for clean install.
It ensures packages are installed from package-lock.json file. [link](https://support.deploybot.com/article/131-why-developers-should-use-npm-ci-instead-of-npm-install-and-its-benefits#:~:text=npm%20ci%20is%20a%20command,json%20file.)

 # User Profile Management

   **Edit Your Profile**

    To edit the information in your profile, click the "Edit" button in the "About Me" section.
    You can make changes to your "About Me" text, and then choose to either save the changes by clicking "Save" or cancel the edit by clicking "Cancel."

   **Manage Favorites**

    In the "Favorites" section, you can see a list of your favorite items.
    Each item in the list has a "Delete" button. Click this button to remove the item from your favorites.

   **Profile Picture**

    Your profile picture is displayed at the top of your profile. If you haven't uploaded a profile picture, a default image is shown.
   

   **View Your Email**

    Your registered email is displayed under the "Email" section.
    This email is used for account-related notifications and communication.
 # Searching for and Discovering movies

 **Search for movies**
  From the home page you can navigate to the search page by clicking on the "find movies" button or by clicking on the "search" button in the top navigation bar. Once on the search page (you will default to a search of 'barbie') you can enter the name of a movie you would like to search for in the search bar at the top of the screen, either 'enter' or clicking on the 'go' button will search for the text you entered
**Discover Movies**
  From the search page you will see buttons on each serch result that say "find similar movies" clicking on these will take you to the discover page and display movies with similar genres to the movie you clicked on. at the top there will be a dropdown button that allows you to change how the results are sorted, and you can also enter a new search to go back to the search page.
**Movie Pages**
  Clicking on the "go to review page" button for a movie in either search or discover will take you to a more detailed page about that movie. If you want to find even more about the movie, clicking on "go to IMDB page" will open the imdb page for that movie in a new tab.

