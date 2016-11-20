## CLIENT9: Test Drive 101

### Objective

Implement a pure [splice ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)function using test-driven development.

### Resources

(Needed for Part II)

*   [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
*   [Jasmine](https://jasmine.github.io/) (docs)
*   [How Do I Jasmine](http://evanhahn.com/how-do-i-jasmine/) (tutorial)
*   [Unit Testing](https://slid.es/rainelourie/unit-testing/fullscreen) (Raine's Presentation)

### Requirements

#### Part I

1.  Download or [clone](http://stackoverflow.com/questions/1872113/how-do-i-clone-a-github-project-to-run-locally) the test-drive-101 files from the [exercise-starters ](https://github.com/RefactorU/exercise-starters/tree/master/client-js/test-drive-101) repo.
2.  Open test-runner.html in your browser. Open the dev tools console.
See the errors that say FAIL? Congratulations, you're already through the "red" phase of
test-drive development!
3.  Open spec.js in your editor. Implement the [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method so the accompanying tests all pass.

    **Tip:** Look over the included assertfunctions which serve as a barebones testing framework. Look over the unit
tests at the end (where assert is called) to see the kinds of things that
are being tested for. You will get to write your own unit tests soon!

#### Part I
<ol class="list-spaced"> <li>Read the [How Do I Jasmine](http://evanhahn.com/how-do-i-jasmine/) tutorial.</li><li>Clone or download the [jasmine boilerplate](https://github.com/RefactorU/student-sample-code/tree/master/jasmine) from the student-sample-code repo. Save this into the local repo you will
be submitting for this exercise.</li><li>Copy your splice function into a new javascript file and modify
SpecRunner.html to include it.</li><li>Open SpecRunner.html in your browser to see the initial (failing) test suite
being invoked.</li><li>Rewrite the unit tests from Part I using [Jasmine](https://jasmine.github.io/)-style unit tests. Write these in spec/my-spec.js which is already being
included by SpecRunner.html. Make sure that the tests all pass, and that
they cover all the cases originally covered in Part I.</li>

**Warning:** There are a lot of
files being download, saved, and included in this exercise. If something fails to
work or it seems like a file is not included correctly, use this opportunity
to practice your **debugging** skills and see if you can trace the
problem. What might be causing it? How can you test your assumptions? What
basic functionality can you make sure is working?
