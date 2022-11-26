import { Accordion } from 'flowbite-react';
import React from 'react';

const Blogs = () => {
  return (
    <div className="h-[90vh]">
      <div className="container mx-auto">
        <Accordion className="mt-28">
          <Accordion.Panel>
            <Accordion.Title className="text-xl">
              What are the different ways to manage a state in a React
              application?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The defferent ways to manage a state in a react app are
                useState, useReducer, useMemo & useCallBack, useEffect, useRef,
                context and custom hooks, react query & react location, redux.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl">
              How does prototypical inheritance work?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                In programming, we often want to take something and extend it.
                For instance, we have a user object with its properties and
                methods, and want to make admin and guest as slightly modified
                variants of it. We’d like to reuse what we have in user, not
                copy/reimplement its methods, just build a new object on top of
                it. Prototypal inheritance is a language feature that helps in
                that.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl">
              What is a unit test? Why should we write unit tests?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl">
              React vs. Angular vs. Vue?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Angular, developed by Google, was first released in 2010, making
                it the oldest of the lot. It is a TypeScript-based JavaScript
                framework. A substantial shift occurred in 2016 on the release
                of Angular 2 (and the dropping of the “JS” from the original
                name – AngularJS). Angular 2+ is known as just Angular. Although
                AngularJS (version 1) still gets updates, we will focus the
                discussion on Angular.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Vue, also known as Vue.js, is the youngest member of the group.
                It was developed by ex-Google employee Evan You in 2014. Over
                the last several years, Vue has seen a substantial shift in
                popularity, even though it doesn’t have the backing of a large
                company. The most current version is always announced on the
                official Vue website on their releases page. Contributors for
                Vue are supported by Patreon. It should be noted that Vue also
                has its own GitHub repo, and functions using TypeScript.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                React, developed by Facebook, was initially released in 2013.
                Facebook uses React extensively in their products (Facebook,
                Instagram, and WhatsApp). Similar to Vue, the React developers
                also announce their newest version on the blog section of the
                React website.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
