# Twubric
Let’s build a Twubric!

1. Introduction

1.1 What is a Rubric?

In a learning setting, a scoring rubric, typically, has a predefined set of weighted attributes mapped to a custom scale that together aid instructors to assess the quality of student submissions in an effective way.

Sometimes, these rubrics are defined by organizations (such as schools and universities) or domains under organizations (such as departments Eg. Department of IT) to keep evaluation of students (and employees) consistent and transparent.

Eg. A simple rubric for grading an essay worth 10 points could be:

Example 1

Criteria
Weightage
Scale
Handwriting
1
Bad, Average, Good
Understanding
5
Limited, Some, In-depth, Extraordinary
Concision
4
Too short, Too long, Apt

As you can imagine, a more complex rubric can probably have criteria groups, a hierarchical scale and so on. But we’ll just be using a simple rubric like the one in the example above for our problem.

1.2 Problem Statement

If you have an account on Twitter, you’d probably know that apart from normal people, there are:

1. bots
2. accounts that have zero activity. These were probably created by people unknowingly only for them to never come back and use it again.

While it is flattering to have these tweeps follow you, you’d want to weed them out at some point, I think (I would). So:

We want to build a simple web app that allows a Twitter user to review his followers, view their twubric “scores” (see Example 2), filter & sort them and then decide to optionally remove certain followers.

Example 2 (Twubric)

Criteria
Weightage
Scale
Friends
2
High, Average, Low
Influence
4
High, Average, Low
Chirpy
4
High, Average, Low


1.3 API Response

A mock API response in JSON format is given here - https://jsonblob.com/57ea1b0be4b0dc55a4f979d5

You can save this data in a JSON file and load it using Angular.


1.4 UI mockup

Below is a skeletal UI for the Twubric page.

<SampleUI>

Sort By
Twubric Score
Friends
Influence
Chirpiness

Joined Twitter between
Start Date                                                              ↓   
End Date                                                                ↓



</SampleUI>

Some pointers about the UI.

The UI displays a list of the user’s Twitter followers in a grid. Each item in the grid can be displayed as shown in the mockup above.
Clicking on the date filter field should display a date popup from which the user may select a From date and a To Date. (Any date picker plugin of your choice). The aim is to allow the user to filter the list based on the dates when their followers joined Twitter.
The buttons under “Sort By” could be a toolbar or button group (See this for reference). Clicking once sorts the grid in ascending order by that criteria. Clicking again sorts the grid in descending order by that criteria. Clicking on one criteria, deactivates the others. The idea is to allow the user to view his list of followers in whichever order he chooses. You’re welcome to design an alternative UI as long as it achieves this aim.
Clicking on “Remove” must remove the user from the listing.
Feel free to use any CSS framework for basic styling (Foundation, Bootstrap, anything works!)

2. Requirements

Create a web app for the above problem using AngularJS
Create the above web app using the Component architecture
Use Isotope for the sorting, filtering & removing animations for the list of followers (Feel free to use any Angular Isotope directive plugin or build your own!)
Do not use jQuery to handle inputs
Write unit test cases using any framework for the above web app

2.1 Bonus Points

You get bonus points if you can do any (or all if you’re feeling adventurous!) of the following...

Use ng-cloak in your solution
Create a cool visualization instead of the boring grid layout to summarize the info
Write your own directive to get Isotope working with Angular
Adding keyboard shortcuts for sorting, selecting a user and removing


3. Deliverables

An Angular app that meets the requirements in the Requirements section above.
An optional README.txt file that describes your solution.


4. AngularJS and other References

Rubrics
Rubrics wiki, http://en.wikipedia.org/wiki/Rubric_(academic)
Rubric tools I, http://www.edtechteacher.org/index.php/teaching-technology/assessment-rubrics
Rubric tools II, http://www.screenr.com/8x3

AngularJS
AngularJS Documentation, https://docs.angularjs.org/api

Isotope
Isotope homepage, http://isotope.metafizzy.co/
Isotope with AngularJS example, http://mankindsoftware.github.io/angular-isotope/


5. Evaluation

Here’s how we’ll be evaluating your solution.

Creating basic list of users using Angular
20%
Integrating Isotope using Angular directive
20%
Implementing sort, filter & remove actions
40%
Code Quality + compliance to AngularJS standards
20%


6. Support

If you are not clear on something, feel free to send us an email at careers@theteamie.com


