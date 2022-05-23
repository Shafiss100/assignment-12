import React from 'react';

const Blogs = () => {
    return (
      <div className="mx-5 my-5">
        <h1 className="text-3xl">
          1. How can we improve the perfomance of react application?
        </h1>
        <p>
          Keeping component state local where necessary.Analysing data points
          and fixing improvements was looking difficult because the flamegraph
          looked like an infinite staircase. Going through each pages flamegraph
          added more and more components to the list of improvements.
        </p>
        <br />
        <h1 className="text-3xl">
          2. What the diffrent way to manage state in react application?
        </h1>
        <p>
          there are diffrent way to manage state in react application. like
          local state, global state, server state, url state.
        </p>
        <br />
        <h1 className="text-3xl">3. How prototype inheritance works?</h1>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects.JavaScript is the most common of the
          prototype-capable languages, and its capabilities are relatively
          unique. When used appropriately, prototypical inheritance in
          JavaScript is a powerful tool that can save hours of coding.
        </p>
        <br />
        <h1 className="text-3xl">
          4. how to search anything from a array in javascript?
        </h1>
        <p>
          The best way to search anything from a array is (include) .
          array.include(search-value) it will help to find anything.
        </p>
        <br />
        <h1 className="text-3xl">
          5. What is the unit teast? Why should write unit test?
        </h1>
        <p>
          unit testing is a type of software testing where individual units or
          components of a software are tested.Unit Tests isolate a section of
          code and verify its correctness.Unit Testing is important because
          software developers sometimes try saving time doing minimal unit
          testing and this is myth because inappropriate unit testing leads to
          high cost Defect fixing during System Testing, Integration Testing and
          even Beta Testing after application is built.
        </p>
        <br />
        <h1 className="text-3xl">
          6. Why we dont update directly in react? why use useState?
        </h1>
        <p>
          If we directly update the state, it does not change this.state
          immediately. Instead, it creates a pending state transition, and
          accessing it after calling this method will only return the present
          value.If we update it directly, calling the setState() afterward may
          just replace the update we made.
        </p>
      </div>
    );
};

export default Blogs;