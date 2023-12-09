Frontend Angular/React Exercise: Currency Exchanger!
Git
• Push your code to a Git repository using (Github/GitLab/Bitbucket/AzureDevOps Repos) only.
• Keep your development history intact and in multiple commits as you see fit.
• Structure
• Utilize modularity and clean patterns.
• Style
• Utilize your own CSS or Sass for styles as much as possible instead of relying totally on UI Frameworks (ex. Bootstrap, etc.).
• Application should be responsive (mobile/Desktop)
• Typescript
• Utilize Typescript features such as Interfaces/Types in you code when feasible.
• Rxjs
• Utilize operators when feasible.
Formatting/Linting
• Make sure that you code is formatted and free of linting issues.
• Unit Tests (Bonus)
• Include simple unit test when feasible
FF-1
As a user I want to be able to convert currencies, for that we need a “Home” 
page with following features:
ACCEPTANCE CRITERIA
 I should see a sticky header with a Logo (left) and Nav links (right) as “EUR-USD 
Details” and “EUR-GBP Details” to go to respective “Details” page (see FF-3)
 I should see a converter sticky panel (use 1 EUR to USD as defaults) (see FF-2)
 I should see 3x3 cards grid with converted value of the entered amount to the 9 
most popular currencies (Duplication of “From” and “To” currencies in cards grid are 
allowed)

FF-2
As a user I want to able to convert currencies for that we need a converter panel 
with following features:
ACCEPTANCE CRITERIA
 I should see a sticky panel with below elements:
 An amount input (numbers only), all other elements should be disabled 
until a valid value entered
 Dropdowns showing all the available currencies in a FROM and TO lists
 Button to swap the currencies in FROM and TO, Button to convert, and 
button to redirect to details page for the selected FROM and TO.
 Converted result displayed

FF-3
As a user, I want to see a “Details” page of the ‘From’ and ‘To’ currencies with 
the following features:
ACCEPTANCE CRITERIA
 I should see the full name of the “From” currency
 I should see a button to go back to Home page (see FF-1)
 I should see a sticky converter panel (see FF-2) with chosen currencies preselected, entered amount, details button hidden and ‘From’ dropdown disabled
 I should be able to change the “To” dropdown then click convert and it reflects on 
all details
 I should see a chart showing historical data for selected currencies (see FF-4)

FF-4
As a user, I want to see a simple chart of historical data for selected currencies:
ACCEPTANCE CRITERIA
 I should see the monthly historical rates for the selected currencies for past year.
 I should see months on horizontal axis and Rates on vertical axis
 Monthly rate is calculCurrency Exchangerated based on rate in last day of that mont
